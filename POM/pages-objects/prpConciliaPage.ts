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
  readonly btnReportes:string
  readonly btnArchivos:string;
  readonly checkboxConsolidadas:string;
  readonly checkboxCredito:string;
  readonly checkboxDebito:string;
  readonly checkboxPantalaArchivo:string;
  readonly checkboxArchivoInercambio:string;
  //Separacion debito/credito
  readonly radiobtnPorTasaCuota:string;
  readonly radiobtnPorNatDelBin:string;
  //Archivo Consolidados EGLOBAL
  readonly radiobtnCaratulaBatch:string;
  readonly btnGeneral:string;
  //Reportes
  readonly btnEGRP011: string;
  readonly btnEGRP012: string;
  readonly btnEGRP015: string;
  readonly btnEGRP016: string;
  readonly radiobtnEntrante:string;
  readonly radiobtnSaliente:string;
  readonly radiobtnAmbos:string;
  readonly checkboxExcel:string;
  //Conciliacion
  readonly radiobtnPagos:string;
  readonly radiobtnVentas:string;
  readonly checkboxPendientes:string;
  readonly checkboxFaltantes:string;
  readonly checkboxBusqPorCuenta:string;
  readonly checkboxConciliadas:string;
  readonly checkboxSobrantes:string;
  readonly txtFiltro:string;
  //Pagos/Ventas
  readonly btnCifras:string;
  readonly btnDetalle:string;
  readonly selectTienda:string;

  
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
    const accesoNoPermitido="//span[text()='Acceso no permitido.']"
    if(await this.pageReporte.isVisible(accesoNoPermitido)){
      await this.pageReporte.goto(url);
      return this.pageReporte;
    }else{
      return this.pageReporte;
    }
  }

  async revisarReportePRPConciliaLiquidacion(reporteARevisar: number){
    const pageReporte = await this.inicializarPage(URLS.REPORTEPRPCONCILIA);
    let btnTipoReporte = this.btnLiquidacion;
    let esExcel = false;
    let esZip = false;
    const opcionesAEjecutar = {
      1 : this.btnLiquidacion,
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
    if(reporteARevisar === 0){
      for(let i = 1; i <= Object.keys(opcionesAEjecutar).length; i++){
        const opcion = opcionesAEjecutar[i];
        const boton = botonesAEjecutar[i];
        reporteData = dataReporte[i];
        if (reportesAIgnorar.includes(i)) {
          continue;
        }
        if(reportesExcel.includes(i)){
          esExcel = true
        }
        if(reportesZip.includes(i)){
          esZip = true
        }
        await Promise.all([
          pageReporte.waitForLoadState('networkidle')
        ]);
        
        await this.ingresarDatosReporte(pageReporte, i, reporteData);
        await this.validarDescargaPRPCONCILIA(pageReporte, boton,boton,esExcel,esZip);
      }
    }
    else{
      await this.ingresarDatosReporte(pageReporte, reporteARevisar, reporteData);
      const boton = botonesAEjecutar[reporteARevisar];
      if(reportesExcel.includes(reporteARevisar)){
        esExcel = true
      }
      if(reportesZip.includes(reporteARevisar)){
        esZip = true
      }
      await this.validarDescargaPRPCONCILIA(pageReporte,boton,boton,esExcel,esZip)
    }
  }

  async ingresarDatosReporte(pageR: Page, numeroReporte: number, reporteData: any){
    await pageR.waitForTimeout(980);
    const fechaInicial = reporteData.FECHA_INICIO ?? DEFECTO_PRPCONCILIA.FECHA_INICIO;
    const fechaFinal = reporteData.FECHA_FIN ?? DEFECTO_PRPCONCILIA.FECHA_FIN;
    switch(numeroReporte){
      case 1:
        await this.llenarFechas(pageR, fechaInicial, fechaFinal);
        await this.seleccionarAdquirenteEmisor(pageR, reporteData.ADQUIRIENTE, reporteData.EMISOR);
      break;
    }
  }

  async llenarFechas(page : Page, fechaInicio: string, fechaFin: string){
    await page.waitForSelector(this.fechaInicial);
    await page.waitForSelector(this.fechaFinal);
    await page.locator(this.fechaInicial).fill('');
    await page.locator(this.fechaInicial).fill(fechaInicio);
    await page.locator(this.fechaFinal).fill('');
    await page.locator(this.fechaFinal).fill(fechaFin);
  }

  async seleccionarAdquirenteEmisor(page: Page, adquirente: string, emisor: string){
    const adqCheck = await page.locator(`//input[@name="CTLCHK_00${adquirente}"]`)
    const emiCheck = await page.locator(`//input[@name="CTLCHK1_00${emisor}"]`)
    await adqCheck.scrollIntoViewIfNeeded()
    await adqCheck.click()
    await emiCheck.scrollIntoViewIfNeeded()
    await emiCheck.click()
  }

  async seleccionarCheckBox(page: Page, dato: boolean, localizador: string){
    await page.locator(localizador).setChecked(dato);
  }

  async seleccionarRadioButton(page: Page, escenario: string, opcion) {
    const selectoresEscenario1 = {
      '0': this.radiobtnPorTasaCuota,
      '1': this.radiobtnPorNatDelBin,
    };
    const selectoresEscenario2 = {
      '0': this.radiobtnEntrante,
      '1': this.radiobtnSaliente,
      '2': this.radiobtnAmbos,
    };
    let selectores;
  
    // Selecciona el mapa de selectores basado en el escenario
    switch (escenario) {
      case 'escenario1':
        selectores = selectoresEscenario1;
        break;
      case 'escenario2':
        selectores = selectoresEscenario2;
        break;
      default:
        throw new Error(`Escenario "${escenario}" no reconocido.`);
    }
  
    // Obtén el selector basado en la opción
    const selector = selectores[opcion];
  
    if (!selector) {
      throw new Error(`Selector para la opción "${opcion}" en el escenario "${escenario}" no encontrado.`);
    }
  
    // Interactúa con la página
    await page.waitForSelector(selector);
    await page.locator(selector).click();
  }
  
}

