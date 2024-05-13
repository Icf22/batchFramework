import { BrowserContext, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { URLS  } from '../data/constates';

export class PosBMRPage extends BasePage {
  pageReporte?: Page;
  //Menu lateral izquierdo
  readonly op1TotalTranAcep: string;
  readonly op2DetaTranAcep: string;
  readonly op3TotalTranRech: string;
  readonly op4DetallTranRech: string;
  readonly op5RechNoProce: string;
  readonly op6ConsoRechXFech: string;
  readonly op7TotalesEmisor: string;
  readonly op8DetalleEmisor: string;
  readonly op9ConsolidadoEmisor: string;
  readonly opAConsolidadoPlataforma: string;
  readonly opBRetencionRiesgo: string;
  readonly opCConsolidadoRiesgoInt: string;
  readonly opDConsolidadoRiestoInt: string;
  readonly opEDetRiesgoInt: string;
  readonly opFTxnSistemaCapturas: string;
  readonly opGRechLotesCaptura: string;
  readonly opHTotTxnPromociones: string;
  readonly opIDetTxnPromociones: string;
  readonly opKTotTxnAcepGrupoCadena: string;
  readonly opLTotTxnRechGrupoCadena: string;
  readonly opMConsolidadoPromociones: string;
  readonly opNSumPromocionesBanamex: string;
  readonly opPRreporteWalmart: string;
  readonly opQTransaccionesCash: string;
  readonly opRReportePagosCash: string;
  readonly opSReporteRechazados: string;
  readonly opVPuntosBBVA: string;
  //Reportes
  readonly btnReporte: string;
  readonly btnExportar: string;
  //Formulario
  readonly checkPesos: string;
  readonly checkDolares: string;
  readonly selectPlataforma: string;
  readonly txtAfiliacion: string;
  readonly checkVentana: string;
  readonly txtTarjeta: string;
  readonly selectTipoTransaccion: string;
  readonly checkSubtotales: string;
  readonly txtFechaProceso: string;

  constructor(browserContext) {
    super(browserContext);
    this.op1TotalTranAcep = "//a[text()='1 Total de Transacciones Aceptadas']";
    this.op2DetaTranAcep = "//a[text()='2 Detalle de Transacciones Aceptadas']";
    this.op3TotalTranRech = "//a[text()='3 Total de Transacciones Rechazadas']";
    this.op4DetallTranRech = "//a[text()='4 Detalle de Transacciones Rechazadas']";
    this.btnReporte = "//input[@value='Reporte']";
    this.pageReporte = undefined;
  }

  async inicializarPage(url: string) {
    this.pageReporte = await this.browserContext.newPage();
    await this.pageReporte.goto(url);
    await this.pageReporte.waitForTimeout(3000);
    await this.pageReporte.goto(url);
    return this.pageReporte;
  }

  async revisarReporte(reporteARevisar: number) {
    const pageReporte = await this.inicializarPage(URLS.POSBMR);

    switch (reporteARevisar) {
      case 0:
        await pageReporte.locator(this.op1TotalTranAcep).click();
        await this.validarDescarga(pageReporte, this.btnReporte,this.op1TotalTranAcep);
        
        await pageReporte.locator(this.op2DetaTranAcep).click();
        await this.validarDescarga(pageReporte, this.btnReporte,this.op2DetaTranAcep);

        await pageReporte.locator(this.op3TotalTranRech).click();
        await this.validarDescarga(pageReporte, this.btnReporte, this.op3TotalTranRech);
  
        await pageReporte.locator(this.op4DetallTranRech).click();
        await this.validarDescarga(pageReporte, this.btnReporte, this.op4DetallTranRech);
        break;
      case 1:
        await pageReporte.locator(this.op1TotalTranAcep).click();
        await this.validarDescarga(this.pageReporte, this.btnReporte,this.op1TotalTranAcep);
        break;
      case 2:
        await pageReporte.locator(this.op2DetaTranAcep).click();
        await this.validarDescarga(this.pageReporte, this.btnReporte,this.op2DetaTranAcep);
        break;
      case 3:
        await pageReporte.locator(this.op3TotalTranRech).click();
        await this.validarDescarga(this.pageReporte, this.btnReporte, this.op3TotalTranRech);
        break;
      case 4:
        await pageReporte.locator(this.op4DetallTranRech).click();
        await this.validarDescarga(this.pageReporte, this.btnReporte, this.op4DetallTranRech);
        break;
    }
  }
}