import {  expect, chromium, type BrowserContext, FileChooser, Page, Locator  } from '@playwright/test';
import path from 'path';
import { EXTENSION, URLS, FUNCION, ARCHIVOS } from '../data/constates';

export class BasePage {
  browserContext: BrowserContext

  constructor(browserContext){
    this.browserContext  = browserContext
  }

  //!----------------------Primera pagina------------------------------------------------
  async iniciarSesion(browserContext){
    const pageInicioSesion = await browserContext.newPage();
    await pageInicioSesion.goto(URLS.INICIOSESION);
    await pageInicioSesion.locator("//input[@name='BUTTON1']").click();
    await pageInicioSesion.waitForTimeout(2000);
  }
  //!----------------------Segunda pagina------------------------------------------------
  async abrirExtension (browserContext, numberApp:number) {
    const extensionID = await FUNCION.ObtenerIdExtencion(browserContext);
    const pageExtension = await browserContext.newPage();
    await FUNCION.AbreExtension(pageExtension, extensionID);
  
    pageExtension.on("dialog", async (dialog) => {
      //Aquí muestra cualquier alerta de tipo confirm
      expect(dialog.type()).toContain("confirm");
      //Aquí la acepta cuando aparezca
      await dialog.accept();
    });

    this.cargarArchivo(pageExtension,ARCHIVOS.CABECERA)
    this.activarHeader(pageExtension,numberApp)
 
  }


//?Metodos que se utilizan mas de una vez

async inicializarExtension() {
  const pathToExtension = path.join(
    __dirname,
    EXTENSION.EXTENSION
  );
  // Ruta a un directorio temporal para datos de usuario (para no interferir con tu perfil de Chrome personal)
  this.browserContext = await chromium.launchPersistentContext("", {
    headless: false,
    ignoreHTTPSErrors: true,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });
  return this.browserContext
}

async limpiarCookies(browserContext, browser){
  await browserContext.clearCookies();
  await browserContext.clearPermissions();
  await browser.close();
}

  async activarHeader (pageExtension:Page, numberApp:number) {
    const status = await pageExtension.locator(`[id='activate_button${numberApp}']`);
    await status.scrollIntoViewIfNeeded();
    await status.click();
    await pageExtension.waitForTimeout(2000);
  
    await pageExtension.evaluate(() => window.scrollTo(0, 0));
    const btnStart = await pageExtension.locator("[src='img/start.png']");
    const btnStop = await pageExtension.locator("[src='img/stop.png']");
  
    if (await btnStop.isVisible()) {
      await btnStop.click({ delay: 1000 });
      await btnStart.click({ delay: 1000 });
    } else {
      await btnStart.click({ delay: 1000 });
    }
  }

  async cargarArchivo(pageExtension:Page,archivoACargar:string){
  
    //Al cumplirse los dos parametros de la promesa pasa a la siguiente linea de codigo
    const [fileChooser] = await Promise.all([
      //Al abrir el explorador de archivos se cumple la promesa
      pageExtension.waitForEvent("filechooser"),
      //Da clic en el boton para cargar el archivo
      await pageExtension
        .locator("//button[@id='import_button']")
        .click({ force: true }),
    ]);
    //Setea la ubicación del archivo que se quiere cargar
    await fileChooser.setFiles(archivoACargar);
    
  }

  async validarDescarga(pageExtension:Page|undefined, btnDownload:string, nameReport:string){
    if (pageExtension) {
      // Crea una promesa que espera el evento download
      const downloadPromise = pageExtension.waitForEvent("download");
      // Clic sobre el botón que desencadenará el evento download
      //await pageExtension.waitForTimeout(2000)
      await pageExtension.waitForLoadState('load');
      const loc = await pageExtension.locator(btnDownload)
      this.elementoVisible(loc)
      await pageExtension.locator(btnDownload).click();
      console.log("Se dio clic en descargar")
      const download = await downloadPromise;
      
      // Espera a que el proceso de descarga se complete y guarda el archivo descargado en algún lugar.
      const reportName = await this.obtenerTexto(pageExtension,nameReport)
      await download.saveAs(
        "./test-results/"+reportName+".pdf"
      );
    } else {
      console.error(
        "pageExtension is undefined. Unable to perform download validation."
      );
    }
  }

  async obtenerTexto(pageExtension:Page,locator:string){
    // Ubica el elemento usando un selector
    const element = await pageExtension.$(locator);

    if (element) {
      // Obtiene el texto del elemento
      const texto = await element.innerText();
      return texto
    } else {
      console.error('No se encontró el elemento con el selector especificado.');
    }
  }

  async elementoVisible (locator:Locator){
    await expect(locator).toBeVisible()
  }
}