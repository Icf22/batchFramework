import { BrowserContext, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { URLS } from "../data/constates";

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
  readonly opJDetTxnRechPromociones: string;
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
    this.op4DetallTranRech =
      "//a[text()='4 Detalle de Transacciones Rechazadas']";
    this.op5RechNoProce = "//a[text()='5 Rechazadas no procesadas']";
    this.op6ConsoRechXFech =
      "//a[text()='6 Consolidado de Rechazos por Fecha']";
    this.op7TotalesEmisor = "//a[text()='7 Totales Emisor']";
    this.op8DetalleEmisor = "//a[text()='8 Detalle Emisor']";
    this.op9ConsolidadoEmisor = "//a[text()='9 Consolidado Emisor']";
    this.opAConsolidadoPlataforma = "//a[text()='A Consolidado Plataforma']";
    this.opBRetencionRiesgo = "//a[text()='B Retención Riesgo']";
    this.opCConsolidadoRiesgoInt = "//a[text()='C Liberación Riesgo']";
    this.opDConsolidadoRiestoInt = "//a[text()='D Consolidado Riesgo Int.']";
    this.opEDetRiesgoInt = "//a[text()='E Det. Riesgo Int.']";
    this.opFTxnSistemaCapturas = "//a[text()='F Txn. Sistema de Captura']";
    this.opGRechLotesCaptura = "//a[text()='G Rech. Lotes a Captura']";
    this.opHTotTxnPromociones = "//a[text()='H Tot. Txn. Promociones']";
    this.opIDetTxnPromociones = "//a[text()='I Det. Txn. Promociones']";
    this.opJDetTxnRechPromociones =
      "//a[text()='J Det. Txn. Rech. Promociones']";
    this.opKTotTxnAcepGrupoCadena =
      "//a[text()='K Tot. Txn. Acep.Grupo Cadena']";
    this.opLTotTxnRechGrupoCadena =
      "//a[text()='L Tot. Txn. Rech.Grupo Cadena']";
    this.opMConsolidadoPromociones =
      "//a[text()='M Consolidado de Promociones']";
    this.opNSumPromocionesBanamex =
      "//a[text()='N Sumario de Promociones Banamex']";
    this.opPRreporteWalmart = "//a[text()='P Reporte de Wal-Mart']";
    this.opQTransaccionesCash = "//a[text()='Q Transacciones Cash']";
    this.opRReportePagosCash = "//a[text()='R Reporte Pagos y Cash']";
    this.opSReporteRechazados = "//a[text()='S Reporte Rechazos']";
    this.opVPuntosBBVA = "//a[text()='V Puntos BBVA']";
    this.btnReporte = "//input[@value='Reporte']";
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

  async revisarReporte(reporteARevisar: number) {
    const pageReporte = await this.inicializarPage(URLS.POSBMR);

    switch (reporteARevisar) {
      //Validar mas usados (1-4)
      case 0:
        await pageReporte.locator(this.op1TotalTranAcep).click();
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.op1TotalTranAcep
        );

        await pageReporte.locator(this.op2DetaTranAcep).click();
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.op2DetaTranAcep
        );

        await pageReporte.locator(this.op3TotalTranRech).click();
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.op3TotalTranRech
        );

        await pageReporte.locator(this.op4DetallTranRech).click();
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.op4DetallTranRech
        );
        break;
      //1 Total de Transacciones Aceptadas
      case 1:
        await pageReporte.locator(this.op1TotalTranAcep).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.op1TotalTranAcep
        );
        break;
      //2 Detalle de Transacciones Aceptadas  
      case 2:
        await pageReporte.locator(this.op2DetaTranAcep).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.op2DetaTranAcep
        );
        break;
      //3 Total de Transacciones Rechazadas
      case 3:
        await pageReporte.locator(this.op3TotalTranRech).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.op3TotalTranRech
        );
        break;
      //4 Detalle de Transacciones Rechazadas
      case 4:
        await pageReporte.locator(this.op4DetallTranRech).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.op4DetallTranRech
        );
        break;
      //5 Rechazadas no procesadas
      case 5:
        await pageReporte.locator(this.op5RechNoProce).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.op5RechNoProce
        );
        break;
      //6 Consolidado de Rechazos por Fecha
      case 6:
        await pageReporte.locator(this.op6ConsoRechXFech).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.op6ConsoRechXFech
        );
        break;
      //7 Totales Emisor
      case 7:
        await pageReporte.locator(this.op7TotalesEmisor).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.op7TotalesEmisor
        );
        break;
      //8 Detalle Emisor
      case 8:
        await pageReporte.locator(this.op8DetalleEmisor).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.op8DetalleEmisor
        );
        break;
      //9 Consolidado Emisor
      case 9:
        await pageReporte.locator(this.op9ConsolidadoEmisor).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.op9ConsolidadoEmisor
        );
        break;
      //A Consolidado Plataforma
      case 10:
        await pageReporte.locator(this.opAConsolidadoPlataforma).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opAConsolidadoPlataforma
        );
        break;
      //B Retención Riesgo
      case 11:
        await pageReporte.locator(this.opBRetencionRiesgo).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opBRetencionRiesgo
        );
        break;
      //C Liberación Riesgo
      case 12:
        await pageReporte.locator(this.opCConsolidadoRiesgoInt).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opCConsolidadoRiesgoInt
        );
        break;
      //D Consolidado Riesgo Int.
      case 13:
        await pageReporte.locator(this.opDConsolidadoRiestoInt).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opDConsolidadoRiestoInt
        );
        break;
      //E Det. Riesgo Int.
      case 14:
        await pageReporte.locator(this.opEDetRiesgoInt).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opEDetRiesgoInt
        );
        break;
      //F Txn. Sistema de Captura
      case 15:
        await pageReporte.locator(this.opFTxnSistemaCapturas).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opFTxnSistemaCapturas
        );
        break;
      //G Rech. Lotes a Captura
      case 16:
        await pageReporte.locator(this.opGRechLotesCaptura).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opGRechLotesCaptura
        );
        break;
      //H Tot. Txn. Promociones
      case 17:
        await pageReporte.locator(this.opHTotTxnPromociones).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opHTotTxnPromociones
        );
        break;
      //I Det. Txn. Promociones
      case 18:
        await pageReporte.locator(this.opIDetTxnPromociones).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opIDetTxnPromociones
        );
        break;
      //J Det. Txn. Rech. Promociones
      case 19:
        await pageReporte.locator(this.opJDetTxnRechPromociones).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opJDetTxnRechPromociones
        );
        break;
      //K Tot. Txn. Acep.Grupo Cadena
      case 20:
        await pageReporte.locator(this.opKTotTxnAcepGrupoCadena).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opKTotTxnAcepGrupoCadena
        );
        break;
      //L Tot. Txn. Rech.Grupo Cadena
      case 21:
        await pageReporte.locator(this.opLTotTxnRechGrupoCadena).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opLTotTxnRechGrupoCadena
        );
        break;
      //M Consolidado de Promociones
      case 22:
        await pageReporte.locator(this.opMConsolidadoPromociones).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opMConsolidadoPromociones
        );
        break;
      //N Sumario de Promociones Banamex
      case 23:
        await pageReporte.locator(this.opNSumPromocionesBanamex).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opNSumPromocionesBanamex
        );
        break;
      //P Reporte de Wal-Mart
      case 24:
        await pageReporte.locator(this.opPRreporteWalmart).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opPRreporteWalmart
        );
        break;
      //Q Transacciones Cash
      case 25:
        await pageReporte.locator(this.opQTransaccionesCash).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opQTransaccionesCash
        );
        break;
      //R Reporte Pagos y Cash
      case 26:
        await pageReporte.locator(this.opRReportePagosCash).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opRReportePagosCash
        );
        break;
      //S Reporte Rechazos
      case 27:
        await pageReporte.locator(this.opSReporteRechazados).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opSReporteRechazados
        );
        break;
      //V Puntos BBVA
      case 28:
        await pageReporte.locator(this.opVPuntosBBVA).click();
        await this.validarDescargaPOSBMR(
          this.pageReporte,
          this.btnReporte,
          this.opVPuntosBBVA
        );
        break;
    }
  }

  
}
