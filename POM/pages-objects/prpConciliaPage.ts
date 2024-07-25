import { BrowserContext, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { NOMBRE_REPORTES, URLS } from "../data/constates";

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
    this.checkboxConsolidadas = "";
    this.checkboxCredito = "";
    this.checkboxDebito = "";
    this.checkboxPantalaArchivo = "";
    this.checkboxArchivoInercambio = "";
    //SEPARACION DEBITO /CREDITO
    this.radiobtnPorTasaCuota = "";
    this.radiobtnPorNatDelBin = "";
    //ARCHIVO CONSOLIDADO EGLOBAL
    this.radiobtnCaratulaBatch = "";
    this.btnGeneral = "//input[@name='BUTTON5']";
    //REPORTES
    this.btnEGRP011 = "//input[@name='BUTTON1']";
    this.btnEGRP012 = "//input[@name='BUTTON2']";
    this.btnEGRP015 = "//input[@name='BUTTON3']";
    this.btnEGRP016 = "//input[@name='BUTTON4']";
    this.radiobtnEntrante = "";
    this.radiobtnSaliente = "";
    this.radiobtnAmbos = "";
    this.checkboxExcel = "";
    //CONCILIACION
    this.radiobtnPagos = "";
    this.radiobtnVentas = "";
    this.checkboxPendientes = "";
    this.checkboxFaltantes = "";
    this.checkboxBusqPorCuenta = "";
    this.checkboxConciliadas = "";
    this.checkboxSobrantes = "";
    this.txtFiltro = "";
    //PAGOS/VENTAS
    this.btnCifras = "//input[@name='BTNCIFRAS']";
    this.btnDetalle = "//input[@name='BTNDETALLE']";
    this.selectTienda = "";
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

  async revisarReportePRPConciliaLiquidacion(fechaIni: string, fechaFin:string, adquriente:string, emisor:string) {
    const pageReporte = await this.inicializarPage(URLS.REPORTEPRPCONCILIA);
    await pageReporte.waitForLoadState('networkidle')
    await pageReporte.locator(this.fechaInicial).fill("")
    await pageReporte.locator(this.fechaInicial).fill(fechaIni)
    await pageReporte.locator(this.fechaFinal).fill("")
    await pageReporte.locator(this.fechaFinal).fill(fechaFin)
    const adqCheck = await pageReporte.locator(`//input[@name="CTLCHK_00${adquriente}"]`)
    const emiCheck = await pageReporte.locator(`//input[@name="CTLCHK1_00${emisor}"]`)
    await adqCheck.scrollIntoViewIfNeeded()
    await adqCheck.click()
    await emiCheck.scrollIntoViewIfNeeded()
    await emiCheck.click()
    await this.validarDescarga(pageReporte,this.btnLiquidacion,NOMBRE_REPORTES.PRP_CONCILIA)
  }

  
}
