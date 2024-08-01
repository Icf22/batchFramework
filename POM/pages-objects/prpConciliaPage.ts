import { BrowserContext, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { NOMBRE_REPORTES, URLS } from "../data/constates";
import { PRPCONCILIA } from '../data/prpConcilia/prpConciliaConstantes';

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

  async revisarReportePRPConciliaLiquidacion(reporteARevisar: number) {
    const pageReporte = await this.inicializarPage(URLS.REPORTEPRPCONCILIA);
    await pageReporte.waitForLoadState('networkidle')
    await pageReporte.locator(this.fechaInicial).fill("")
    await pageReporte.locator(this.fechaInicial).fill(PRPCONCILIA.FECHA_INICIO)
    await pageReporte.locator(this.fechaFinal).fill("")
    await pageReporte.locator(this.fechaFinal).fill(PRPCONCILIA.FECHA_FIN)
    const adqCheck = await pageReporte.locator(`//input[@name="CTLCHK_00${PRPCONCILIA.ADQUIRIENTE}"]`)
    const emiCheck = await pageReporte.locator(`//input[@name="CTLCHK1_00${PRPCONCILIA.EMISOR}"]`)
    await adqCheck.scrollIntoViewIfNeeded()
    await adqCheck.click()
    await emiCheck.scrollIntoViewIfNeeded()
    await emiCheck.click()
    await this.validarDescargaPRPCONCILIA(pageReporte,this.btnLiquidacion,this.btnLiquidacion, false)
  }
}
