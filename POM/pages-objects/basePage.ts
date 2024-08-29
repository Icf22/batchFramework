import {
  expect,
  chromium,
  type BrowserContext,
  FileChooser,
  Page,
  Locator,
} from "@playwright/test";
import path from "path";
import { format } from 'date-fns-tz';
import fs from "fs/promises";
import { EXTENSION, URLS, FUNCION, ARCHIVOS, CONSOLA, VARIABLES } from "../data/constates";
import { POSBMR } from "../data/posBMR/constantesPosBMR";
import { Console } from "console";

export class BasePage {
  browserContext: BrowserContext;

  constructor(browserContext) {
    this.browserContext = browserContext;
  }

  //!----------------------Primera pagina------------------------------------------------
  async iniciarSesion(browserContext) {
    const pageInicioSesion = await browserContext.newPage();
    await pageInicioSesion.goto(URLS.INICIOSESION);
    await pageInicioSesion.locator("//input[@name='BUTTON1']").click();
    await pageInicioSesion.waitForTimeout(2000);
  }
  //!----------------------Segunda pagina------------------------------------------------
  async abrirExtension(browserContext, numberApp: number) {
    const extensionID = await FUNCION.ObtenerIdExtencion(browserContext);
    const pageExtension = await browserContext.newPage();
    await FUNCION.AbreExtension(pageExtension, extensionID);

    pageExtension.on("dialog", async (dialog) => {
      //Aquí muestra cualquier alerta de tipo confirm
      expect(dialog.type()).toContain("confirm");
      //Aquí la acepta cuando aparezca
      await dialog.accept();
    });

    await this.cargarArchivo(pageExtension, ARCHIVOS.CABECERA);

    await this.activarHeader(pageExtension, numberApp);
  }

  //?Metodos que se utilizan mas de una vez

  async inicializarExtension() {
    const pathToExtension = path.join(__dirname, EXTENSION.EXTENSION);
    // Ruta a un directorio temporal para datos de usuario (para no interferir con tu perfil de Chrome personal)
    this.browserContext = await chromium.launchPersistentContext("", {
      headless: false,
      ignoreHTTPSErrors: true,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });
    return this.browserContext;
  }

  async limpiarCookies(browserContext, browser) {
    await browserContext.clearCookies();
    await browserContext.clearPermissions();
    await browser.close();
  }

  async activarHeader(pageExtension: Page, numberApp: number) {
    const status = await pageExtension.locator(
      `[id='activate_button${numberApp}']`
    );
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

  async cargarArchivo(pageExtension: Page, archivoACargar: string) {
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

  async validarDescarga(
    pageExtension: Page | undefined,
    btnDownload: string,
    nameReport: string
  ) {
    if (pageExtension) {
      // Crea una promesa que espera el evento download
      const downloadPromise = pageExtension.waitForEvent("download");
      // Clic sobre el botón que desencadenará el evento download
      await pageExtension.waitForTimeout(2000);
      const loc = await pageExtension.locator(btnDownload);
      this.elementoVisible(loc);
      await pageExtension.locator(btnDownload).click();
      const download = await downloadPromise;

      // Espera a que el proceso de descarga se complete y guarda el archivo descargado en algún lugar.
      await download.saveAs("./test-results/" + nameReport + ".pdf");

      // Validación de la existencia del archivo descargado
      const path = require("path");
      const filePath = path.resolve(
        process.cwd(),
        "./test-results/",
        `${nameReport}.pdf`
      );
      const archivoExiste = await fs
        .access(filePath)
        .then(() => true)
        .catch(() => false);

      //Assertion para validar que se realizo la descarga de manera correcta
      await expect.soft(archivoExiste).toBeTruthy();
      console.log("El archivo PDF se descargó correctamente en:", filePath);
    } else {
      console.error(
        "pageExtension is undefined. Unable to perform download validation."
      );
    }
  }

  async validarDescargaInfra(
    pageExtension: Page | undefined,
    btnDownload: string,
    nameReport: string,
    esExcel: boolean
  ) {
    let filePath;
    if (pageExtension) {
      // Crea una promesa que espera el evento download
      const downloadPromise = pageExtension.waitForEvent("download");
      // Clic sobre el botón que desencadenará el evento download
      await pageExtension.waitForTimeout(2000);
      const loc = await pageExtension.locator(btnDownload);
      this.elementoVisible(loc);
      await pageExtension.locator(btnDownload).click();
      const download = await downloadPromise;

      // Espera a que el proceso de descarga se complete y guarda el archivo descargado en algún lugar.
      const reportName = await this.obtenerTexto(pageExtension, nameReport);

      const path = require("path");
      if (esExcel) {
        await download.saveAs(
          "./test-results/reportes-infra/" + reportName + ".xlsx"
        );
        filePath = path.resolve(
          process.cwd(),
          "./test-results/reportes-infra/",
          `${reportName}.xlsx`
        );
      } else {
        await download.saveAs(
          "./test-results/reportes-infra/" + reportName + ".pdf"
        );
        filePath = path.resolve(
          process.cwd(),
          "./test-results/reportes-infra/",
          `${reportName}.pdf`
        );
      }

      // Validación de la existencia del archivo descargado
      const archivoExiste = await fs
        .access(filePath)
        .then(() => true)
        .catch(() => false);

      //Assertion para validar que se realizo la descarga de manera correcta

      await expect.soft(archivoExiste).toBeTruthy();
      archivoExiste
        ? console.log("El archivo PDF se descargó correctamente en:", filePath)
        : console.error("El archivo PDF no se descargo en: " + filePath);
    } else {
      console.error(
        "pageExtension is undefined. Unable to perform download validation."
      );
    }
  }

  async validarDescargaPRPCONCILIA(
    pageExtension: Page | undefined,
    btnDownload: string,
    nameReport: string,
    esExcel: boolean,
    esZip: boolean
  ) {
    let filePath;
    if (pageExtension) {
      // Crea una promesa que espera el evento download
      const downloadPromise = pageExtension.waitForEvent("download");
      // Clic sobre el botón que desencadenará el evento download
      await pageExtension.waitForTimeout(2000);
      const loc = await pageExtension.locator(btnDownload);
      this.elementoVisible(loc);
      await pageExtension.locator(btnDownload).click();
      const download = await downloadPromise;

      // Espera a que el proceso de descarga se complete y guarda el archivo descargado en algún lugar.
      const reportName = await this.obtenerTexto(pageExtension, nameReport);

      const path = require("path");
      if (esExcel) {
        await download.saveAs(
          "./test-results/reportes-prpConcilia/" + reportName + ".xlsx"
        );
        filePath = path.resolve(
          process.cwd(),
          "./test-results/reportes-prpConcilia/",
          `${reportName}.xlsx`
        );
      }
      else if (esZip) {
        await download.saveAs(
          "./test-results/reportes-prpConcilia/" + reportName + ".zip"
        );
        filePath = path.resolve(
          process.cwd(),
          "./test-results/reportes-prpConcilia/",
          `${reportName}.zip`
        );
      }
      else {
        await download.saveAs(
          "./test-results/reportes-prpConcilia/" + reportName + ".pdf"
        );
        filePath = path.resolve(
          process.cwd(),
          "./test-results/reportes-prpConcilia/",
          `${reportName}.pdf`
        );
      }

      // Validación de la existencia del archivo descargado
      const archivoExiste = await fs
        .access(filePath)
        .then(() => true)
        .catch(() => false);

      //Assertion para validar que se realizo la descarga de manera correcta

      await expect.soft(archivoExiste).toBeTruthy();
      archivoExiste
        ? console.log("El archivo PDF se descargó correctamente en:", filePath)
        : console.error("El archivo PDF no se descargo en: " + filePath);
    } else {
      console.error(
        "pageExtension is undefined. Unable to perform download validation."
      );
    }
  }

  async obtenerTexto(pageExtension: Page, locator: string) {
    const element = await pageExtension.$(locator);

    if (element) {
      let texto = await element.innerText();
      texto = await texto == null || texto == "" ? (await pageExtension.$eval(locator, element => (element as HTMLInputElement).value)).toString() : texto
      return texto;
    } else {
      CONSOLA.NoHayElemento();
    }
  }

  async elementoVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async validarDescargaPOSBMR(
    pageExtension: Page | undefined,
    btnDownload: string,
    nameReport: string,
    esExcel: boolean,
    nameSelected: string,
    archivosDescargados: string[] = []
  ) {

    nameSelected = " - " + (nameSelected == "" ? "Reporte 1" : nameSelected);

    if (!pageExtension) {
      console.error("undefinido");
      return;
    }

    // Obtener el nombre del reporte para usarlo como nombre de la carpeta
    let reportName = await this.obtenerTexto(pageExtension, nameReport);

    if (!reportName) {
      CONSOLA.ErrorObtenerNombreReport();
      return;
    }
    var fecha = await this.obtenerHoraActualEnMexico();
    // Definir la ruta base para la carpeta y archivo
    const baseDir = path.resolve("./Reportes/POSBMR", reportName + " " + fecha);

    // Crear la carpeta con el nombre del reporte si no existe
    try {
      await fs.mkdir(baseDir, { recursive: true });
    } catch (error) {
      console.error("Error al crear la carpeta:", error);
      return;
    }

    // Crea una promesa que espera el evento download
    const downloadPromise = pageExtension.waitForEvent("download");

    // Establece un límite de tiempo para esperar el evento de descarga (por ejemplo, 30 segundos)
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("El evento de descarga no se activó en el tiempo esperado.")), 15000)
    );

    // Clic sobre el botón que desencadenará el evento download
    await pageExtension.waitForTimeout(2000);
    const loc = await pageExtension.locator(btnDownload);
    await this.elementoVisible(loc);
    await pageExtension.locator(btnDownload).click();

    // Utiliza Promise.race para manejar el tiempo máximo de espera
    const downloadEvent = await Promise.race([downloadPromise, timeoutPromise])
      .catch(error => {
        return null;
      });
    
    //Esta expect sirve para evaluar que se activo el evento descarga 
    //!await expect.soft(downloadEvent).not.toBeNull();

    if (!downloadEvent) {
      CONSOLA.NoExisteDescarga();
      return "";
    }

    const download = await downloadPromise;

    const fileExtension = esExcel ? ".xlsx" : ".pdf";

    // Ruta completa para guardar el archivo dentro de la carpeta recién creada
    const filePath = path.resolve(baseDir, `${reportName}${nameSelected}${fileExtension}`);

    // Guardar el archivo descargado en la carpeta creada
    try {
      await download.saveAs(filePath);
      archivosDescargados.push(`${reportName}${nameSelected}${fileExtension}`)
    } catch (error) {
      CONSOLA.ErrorAlGuardar(error);
      return;
    }

    // Validación de la existencia del archivo descargado
    let archivoExiste;
    try {
      await fs.access(filePath);
      archivoExiste = true;
    } catch {
      archivoExiste = false;
    }

    // Assertion para validar que se realizó la descarga de manera correcta
    await expect.soft(archivoExiste).toBeTruthy();
    archivoExiste
      ? CONSOLA.AvisoDescargaCorrecta(reportName + nameSelected + fileExtension)
      : CONSOLA.AvisoDescargaIncorrecta(filePath);

    CONSOLA.DivisionInfo();
    return baseDir;
  }

  async obtenerHoraActualEnMexico() {
    const timezone = VARIABLES.TIMEZONE;
    const now = new Date();
    const horaActualEnMexico = format(now, 'dd-MM-yyyy', { timeZone: timezone });
    return horaActualEnMexico;
  }
}
