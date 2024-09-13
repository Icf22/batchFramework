import { BrowserContext, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { NOMBRE_REPORTES, URLS } from "../data/constates";
import { PRPCONCILIA } from '../data/prpConcilia/prpConciliaConstantes';
import { DEFECTO_PRPCONCILIA } from "../data/prpConcilia/prpConciliaConstantesDefectos";

export class PrpConcilia extends BasePage {
  pageReporte?: Page;
  //Fechas
  readonly fechaInicial: string;
  readonly fechaFinal: string;
  //Caratulas
  readonly btnInicial: string;
  readonly btnFinal: string;
  readonly btnLiquidacion: string;
  readonly btnTotales: string;
  readonly btnReportes: string
  readonly btnArchivos: string;
  readonly checkboxConsolidadas: string;
  readonly checkboxCredito: string;
  readonly checkboxDebito: string;
  readonly checkboxPantalaArchivo: string;
  readonly checkboxArchivoInercambio: string;
  //Separacion debito/credito
  readonly radiobtnPorTasaCuota: string;
  readonly radiobtnPorNatDelBin: string;
  //Archivo Consolidados EGLOBAL
  readonly radiobtnCaratulaBatch: string;
  readonly btnGeneral: string;
  //Reportes
  readonly btnEGRP011: string;
  readonly btnEGRP012: string;
  readonly btnEGRP015: string;
  readonly btnEGRP016: string;
  readonly radiobtnEntrante: string;
  readonly radiobtnSaliente: string;
  readonly radiobtnAmbos: string;
  readonly checkboxExcel: string;
  //Conciliacion
  readonly radiobtnPagos: string;
  readonly radiobtnVentas: string;
  readonly checkboxPendientes: string;
  readonly checkboxFaltantes: string;
  readonly checkboxBusqPorCuenta: string;
  readonly checkboxConciliadas: string;
  readonly checkboxSobrantes: string;
  readonly txtFiltro: string;
  //Pagos/Ventas
  readonly btnCifras: string;
  readonly btnDetalle: string;
  readonly selectTienda: string;
  // MENUS
  readonly reportesEspeciales: string;
  readonly difTasas: string;
  readonly BancoAzteca: string;
  // SUBMENUS
  readonly banorte: string;
  readonly bancomer: string;
  readonly reporteoPOS: string;
  readonly reporteoATMs: string;
  readonly catalogos: string;
  readonly ebindPOS: string;
  readonly ebindATMs: string;
  readonly logEbind: string;
  // BANORTE
  readonly fechaIniBanorte: string;
  readonly fechaFInBanorte: string;
  readonly btnGenerarBanorte: string;
  readonly btnRegresarBanorte: string;
  // BANCOMER
  readonly fechaBancomer: string;
  readonly btnTasaMenor: string;
  readonly btnTasaMayor: string;
  readonly btnCuotaMenor: string;
  readonly btnCuotaMayor: string;
  readonly btnErrorTasa: string;
  readonly btnErrorCuota: string;
  readonly btnRegresarBancomer: string;
  // REPORTEO POS
  // Boton Miscelaneos
  readonly btnMiscelaneos: string;
  readonly fechaIniMiscelaneos: string;
  readonly fechaFinMiscelaneos: string;
  readonly selectReporteMiscelaneos: string;
  readonly selectTipoMiscelaneos: string;
  readonly checkExcelMiscelaneos: string;
  readonly btnDesplegarMiscelaneos: string;
  // Boton Caratulas Intercambio
  readonly fechaIniCaratula: string;
  readonly fechaFinCaratula: string;
  readonly selectReporteCaratula: string;
  readonly btnGenerarCaratula: string;
  // Boton Prevalidador
  readonly fechaIniValidador: string;
  readonly fechaFinValidador: string;
  readonly selectReporteValidador: string;
  readonly checkExcelValidador: string;
  readonly btnDesplegarValidador: string;
  // Boton Infraestructura
  readonly fechaIniInfra: string;
  readonly fechaFinInfra: string;
  readonly btnDesplegarInfra: string;
  // Boton Poliza POS
  readonly fechaIniPoliza: string;
  readonly fechaFinPoliza: string;
  readonly checkDetallePoliza: string;
  readonly btnDesplegarPoliza: string;
  readonly btnRegresarPOS: string;
  // REPORTEO ATMS
  readonly fechaIniATMS: string;
  readonly fechaFInATMS: string;
  readonly selectReporteATMS: string;
  readonly selectTipoATMS: string;
  readonly btnGenerarATMS: string;
  readonly btnRegresarATMS: string;
  // CATALOGOS
  readonly selectTipoCatalogo: string;
  readonly btnExcelCostos: string;
  // EBIND POS
  readonly fechaIniPOS: string;
  readonly fechaFinPOS: string;
  readonly btnSelectAllPOS: string;
  readonly btnEnviarEbindPOS: string;
  readonly btnRegresarEbindPOS: string;
  // EBIND ATMS
  readonly fechaIniATM: string;
  readonly fechaFinATM: string;
  readonly btnSelectAllATM: string;
  readonly btnEnviarEbindATM: string;
  readonly btnRegresarEbindATM: string;
  // LOG EBIND
  readonly fechaLogEbind: string;
  readonly btnBuscarLosEbind: string;

  constructor(browserContext) {
    super(browserContext);
    //FECHAS
    this.fechaInicial = "//input[@id='vFECHAINI']";
    this.fechaFinal = "//input[@id='vFECHAFIN']";
    //CARATULAS
    this.btnInicial = "//input[@name='BTNINICIAL']";
    this.btnFinal = "//input[@name='BTNFINAL']";
    this.btnLiquidacion = "//input[@name='BTNLIQUIDACION']";
    this.btnTotales = "//input[@name='BTNTOTALES']";
    this.btnReportes = "//input[@name='BTNREPORTES']";
    this.btnArchivos = "//input[@name='BTNARCHIVOS']";
    this.checkboxConsolidadas = "//input[@name='vCHKCONSOLIDADAS']";
    this.checkboxCredito = "//input[@name='vCHKCREDITO']";
    this.checkboxDebito = "//input[@name='vCHKDEBITO']";
    this.checkboxPantalaArchivo = "//input[@name='vSCRFILE']";
    this.checkboxArchivoInercambio = "//input[@name='vARCHTOTINTER']";
    //SEPARACION DEBITO /CREDITO
    this.radiobtnPorTasaCuota = `//input[@name='vRBDEBCRE' and @value='${0}']`;
    this.radiobtnPorNatDelBin = `//input[@name='vRBDEBCRE' and @value='${1}']`;
    //ARCHIVO CONSOLIDADO EGLOBAL
    this.radiobtnCaratulaBatch = `//input[@name='vRBATCH' and @value='${3}']`;
    this.btnGeneral = "//input[@name='BUTTON5']";
    //REPORTES
    this.btnEGRP011 = "//input[@name='BUTTON1']";
    this.btnEGRP012 = "//input[@name='BUTTON2']";
    this.btnEGRP015 = "//input[@name='BUTTON3']";
    this.btnEGRP016 = "//input[@name='BUTTON4']";
    this.radiobtnEntrante = `//input[@name='vRBREPORTES' and @value='${0}']`;
    this.radiobtnSaliente = `//input[@name='vRBREPORTES' and @value='${1}']`;
    this.radiobtnAmbos = `//input[@name='vRBREPORTES' and @value='${2}']`;
    this.checkboxExcel = "//input[@name='vCKEXCEL12']";
    //CONCILIACION
    this.radiobtnPagos = `//input[@name='vRBCONCILTIPREP' and @value='${1}']`;
    this.radiobtnVentas = `//input[@name='vRBCONCILTIPREP' and @value='${2}']`;
    this.checkboxPendientes = "//input[@name='vCHKPENDIENTES']";
    this.checkboxFaltantes = "//input[@name='vCHKFALTANTES']";
    this.checkboxBusqPorCuenta = "//input[@name='vCHKBUSQCTA']";
    this.checkboxConciliadas = "//input[@name='vCHKCONCILIADAS']";
    this.checkboxSobrantes = "//input[@name='vCHKSOBRANTES']";
    this.txtFiltro = "//input[@id='vFILTROCTA']";
    //PAGOS/VENTAS
    this.btnCifras = "//input[@name='BTNCIFRAS']";
    this.btnDetalle = "//input[@name='BTNDETALLE']";
    this.selectTienda = "//select[@name='vCBCONCILGPOS']";
    //EXTRAS
    this.pageReporte = undefined;
  }

  async inicializarPage(url: string) {
    this.pageReporte = await this.browserContext.newPage();
    await this.pageReporte.goto(url);
    await this.pageReporte.waitForTimeout(3000);
    const accesoNoPermitido = "//span[text()='Acceso no permitido.']"
    if (await this.pageReporte.isVisible(accesoNoPermitido)) {
      await this.pageReporte.goto(url);
      return this.pageReporte;
    } else {
      return this.pageReporte;
    }
  }

  async revisarReportePRPConciliaLiquidacion(reporteARevisar: number, liquidacion = true) {
    const pageReporte = await this.inicializarPage(URLS.REPORTEPRPCONCILIA);
    let btnTipoReporte = this.btnLiquidacion;
    let esExcel = false;
    let esZip = false;
    const opcionesAEjecutar = {
      1: this.btnLiquidacion,
    };
    const botonesAEjecutar = {
      1: this.btnLiquidacion,
    };
    const dataReporte = {
      1: PRPCONCILIA,
    };
    const reportesAIgnorar = [] as number[];
    const reportesExcel = [] as number[];
    const reportesZip = [] as number[];
    let reporteData = dataReporte[reporteARevisar];
    if (reporteARevisar === 0) {
      for (let i = 1; i <= Object.keys(opcionesAEjecutar).length; i++) {
        const opcion = opcionesAEjecutar[i];
        const boton = botonesAEjecutar[i];
        reporteData = dataReporte[i];
        if (reportesAIgnorar.includes(i)) {
          continue;
        }
        if (reportesExcel.includes(i)) {
          esExcel = true
        }
        if (reportesZip.includes(i)) {
          esZip = true
        }
        await Promise.all([
          pageReporte.waitForLoadState('networkidle')
        ]);

        await this.ingresarDatosReporte(pageReporte, i, reporteData);
        if (liquidacion != true) {
          await this.validarDescargaPRPCONCILIA(pageReporte, boton, boton, esExcel, esZip);
        }
      }
    }
    else {
      await this.ingresarDatosReporte(pageReporte, reporteARevisar, reporteData);
      const boton = botonesAEjecutar[reporteARevisar];
      if (reportesExcel.includes(reporteARevisar)) {
        esExcel = true
      }
      if (reportesZip.includes(reporteARevisar)) {
        esZip = true
      }
      await this.validarDescargaPRPCONCILIA(pageReporte, boton, boton, esExcel, esZip)
    }
  }

  async ingresarDatosReporte(pageR: Page, numeroReporte: number, reporteData: any) {
    await pageR.waitForTimeout(980);
    const fechaInicial = reporteData.FECHA_INICIO ?? DEFECTO_PRPCONCILIA.FECHA_INICIO;
    const fechaFinal = reporteData.FECHA_FIN ?? DEFECTO_PRPCONCILIA.FECHA_FIN;
    switch (numeroReporte) {
      case 1:
        await this.llenarFechas(pageR, fechaInicial, fechaFinal);
        //await this.seleccionarAdquirenteEmisor(pageR, reporteData.ADQUIRIENTE, reporteData.EMISOR);
        await this.seleccionarTodasLasCombinaciones(pageR);
        break;
    }
  }

  async llenarFechas(page: Page, fechaInicio: string, fechaFin: string) {
    await page.waitForSelector(this.fechaInicial);
    await page.waitForSelector(this.fechaFinal);
    await page.locator(this.fechaInicial).fill('');
    await page.locator(this.fechaInicial).fill(fechaInicio);
    await page.locator(this.fechaFinal).fill('');
    await page.locator(this.fechaFinal).fill(fechaFin);
  }

  async seleccionarAdquirenteEmisor(page: Page, adquirente: string, emisor: string) {
    const adqCheck = await page.locator(`//input[@name="CTLCHK_00${adquirente}"]`)
    const emiCheck = await page.locator(`//input[@name="CTLCHK1_00${emisor}"]`)
    await adqCheck.scrollIntoViewIfNeeded()
    await adqCheck.click()
    await emiCheck.scrollIntoViewIfNeeded()
    await emiCheck.click()
  }

  async seleccionarCheckBox(page: Page, dato: boolean, localizador: string) {
    await page.locator(localizador).setChecked(dato);
  }
  // SE MANDA A LLAMAR ASI await this.seleccionarRadioButton(page, 'Reportes', '0');
  async seleccionarRadioButton(page: Page, escenario: string, opcion) {
    const SeparacionCredito = {
      '0': this.radiobtnPorTasaCuota,
      '1': this.radiobtnPorNatDelBin,
    };
    const Reportes = {
      '0': this.radiobtnEntrante,
      '1': this.radiobtnSaliente,
      '2': this.radiobtnAmbos,
    };
    let selectores;

    switch (escenario) {
      case 'Separacion débito/credito':
        selectores = SeparacionCredito;
        break;
      case 'Reportes':
        selectores = Reportes;
        break;
      default:
        throw new Error(`"${escenario}" no reconocido.`);
    }
    const selector = selectores[opcion];
    if (!selector) {
      throw new Error(`Selector para la opción "${opcion}" en el escenario "${escenario}" no encontrado.`);
    }

    await page.waitForSelector(selector);
    await page.locator(selector).click();
  }

  async elegirSelect(page: Page, opcion) {

  }
  async llenarInputText(page: Page, dato: string) {

  }
  async seleccionarTodasLasCombinaciones(page: Page) {

    const adquirentes = await page.locator('//input[contains(@name, "CTLCHK_00")]').elementHandles();
    const emisores = await page.locator('//input[contains(@name, "CTLCHK1_00")]').elementHandles();
    const archivosDescargados: string[] = [];

    let total = adquirentes.length - 1;
    for(var i = 0; i <= total ; i++ )
    {
      const adquirentesAct = await page.locator('//input[contains(@name, "CTLCHK_00")]').elementHandles();
      const adqRow = await adquirentesAct[i].evaluate((el: HTMLElement) => el.closest('tr')?.id);
      const adqText = await page.locator(`#span_CTLID_ADQ_${adqRow?.split('_')[1]}`).textContent();

      await adquirentesAct[i].evaluate((el: HTMLElement) => el.scrollIntoView());
      await adquirentesAct[i].click({ force: true });

      const emisoresActualizados = await page.locator('//input[contains(@name, "CTLCHK1_00")]').elementHandles();
      for (const emi of emisoresActualizados) {
        const emiRow = await emi.evaluate((el: HTMLElement) => el.closest('tr')?.id);
        const emiText = await page.locator(`#span_CTLID_EMI_${emiRow?.split('_')[1]}`).textContent();

        await emi.evaluate((el: HTMLElement) => el.scrollIntoView());
        await emi.click({ force: true });

        const combinacion = `Combinación ${adqText?.trim()} - ${emiText?.trim()}`;
        await this.validarDescargaPRPCONCILIA(page, this.btnLiquidacion, combinacion, false, false, archivosDescargados);

        await emi.click(); 
      }
      let tot = i;
      const adquirentesActual = await page.locator('//input[contains(@name, "CTLCHK_00")]').elementHandles();
      await adquirentesActual[i].click({ force: true }); 
    }
  }
}

