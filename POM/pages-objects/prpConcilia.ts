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
  //Separacion debito/credito
  readonly radiobtnPorTasaCuota:string;re
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
    this.fechaInicial = "//input[@id='vFECHAINI']"
    this.fechaFinal = "//input[@id='vFECHAFIN']"
    this.btnLiquidacion = "//input[@name='BTNLIQUIDACION']"
    this.pageReporte = undefined;
  }

  async inicializarPage(url: string) {
    this.pageReporte = await this.browserContext.newPage();
    await this.pageReporte.goto(url);
    await this.pageReporte.waitForTimeout(3000);
    await this.pageReporte.goto(url);
    return this.pageReporte;
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
