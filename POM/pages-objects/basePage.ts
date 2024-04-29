import {  expect, chromium, type BrowserContext, FileChooser  } from '@playwright/test';
import path from 'path';
import { EXTENSION, URLS, FUNCION } from '../data/constates';

export class BasePage {

  async inicializarExtension() {
    const pathToExtension = path.join(
      __dirname,
      EXTENSION.EXTENSION
    );
    // Ruta a un directorio temporal para datos de usuario (para no interferir con tu perfil de Chrome personal)
    const browserContext = await chromium.launchPersistentContext("", {
      headless: false,
      ignoreHTTPSErrors: true,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });
    return browserContext
  }

  async limpiarCookies(browserContext, browser){
    await browserContext.clearCookies();
    await browserContext.clearPermissions();
    await browser.close();
  }

  //!----------------------Primera pagina------------------------------------------------
  async iniciarSesion(browserContext){
    const pageInicioSesion = await browserContext.newPage();
    await pageInicioSesion.goto(URLS.INICIOSESION);
    await pageInicioSesion.locator("//input[@name='BUTTON1']").click();
    await pageInicioSesion.waitForTimeout(2000);
  }
  //!----------------------Segunda pagina------------------------------------------------
  async abrirExtension (browserContext) {
    const extensionID = await FUNCION.ObtenerIdExtencion(browserContext);
    const pageExtension = await browserContext.newPage();
    await FUNCION.AbreExtension(pageExtension, extensionID);
  
    pageExtension.on("dialog", async (dialog) => {
      //Aquí muestra cualquier alerta de tipo confirm
      expect(dialog.type()).toContain("confirm");
      //Aquí la acepta cuando aparezca
      await dialog.accept();
    });
  
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
    await fileChooser.setFiles("archivoConfig/SimpleModifyHeader (24).conf");
  
    //? Falta activar los headers //?
    const status = await pageExtension.locator("[id='activate_button34']");
    await status.scrollIntoViewIfNeeded();
    await pageExtension.locator("[id='activate_button34']").click();
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
 //!----------------------Tercera pagina------------------------------------------------
  async revisarReportes(browserContext){
    const pageReporte = await browserContext.newPage();
    await pageReporte.goto(URLS.REPORTEPRPCONCILIA);
  }




}