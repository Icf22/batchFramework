import { BrowserContext, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { URLS } from "../data/constates";
import { DATOS_POR_DEFECTO_POSBMR } from "../data/constantesPosBMRDefecto";
import { REPORTE_POSBMR } from "../data/constantesPosBMR";

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
  readonly selectVentana: string;
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
    this.txtFechaProceso = "//input[@name='vFECHA_PROCESO']"
    this.checkPesos = "//input[@value='P']"
    this.checkDolares = "//input[@value='D']"
    this.selectPlataforma = "//select[@name='vPLATAFORMA']"
    this.txtAfiliacion = "//input[@name='vAFILIACION']"
    this.selectVentana = "//select[@name='vVENTANA']"
    this.txtTarjeta = "//input[@name='vTARJETA']"
    this.selectTipoTransaccion = "//select[@name='vT_TRANSACCION']"
    this.checkSubtotales = "//input[@name='vSUBTOTALES']"
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
    let btnTipoReporte = this.op1TotalTranAcep;
    let esIndividual = true;
    switch (reporteARevisar) {
      //Validar mas usados (1-4)
      case 0:
        esIndividual = false;
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
        btnTipoReporte = this.op1TotalTranAcep;
        break;
      //2 Detalle de Transacciones Aceptadas  
      case 2:
        btnTipoReporte = this.op2DetaTranAcep;
        break;
      //3 Total de Transacciones Rechazadas
      case 3:
        btnTipoReporte = this.op3TotalTranRech;
        break;
      //4 Detalle de Transacciones Rechazadas
      case 4:
        btnTipoReporte = this.op4DetallTranRech;
        break;
      //5 Rechazadas no procesadas
      case 5:
        btnTipoReporte = this.op5RechNoProce;
        break;
      //6 Consolidado de Rechazos por Fecha
      case 6:
        btnTipoReporte = this.op6ConsoRechXFech;
        break;
      //7 Totales Emisor
      case 7:
        btnTipoReporte = this.op7TotalesEmisor;
        break;
      //8 Detalle Emisor
      case 8:
        btnTipoReporte = this.op8DetalleEmisor;
        break;
      //9 Consolidado Emisor
      case 9:
        btnTipoReporte = this.op9ConsolidadoEmisor;
        break;
      //A Consolidado Plataforma
      case 10:
        btnTipoReporte = this.opAConsolidadoPlataforma;
        break;
      //B Retención Riesgo
      case 11:
        btnTipoReporte = this.opBRetencionRiesgo;
        break;
      //C Liberación Riesgo
      case 12:
        btnTipoReporte = this.opCConsolidadoRiesgoInt;
        break;
      //D Consolidado Riesgo Int.
      case 13:
        btnTipoReporte = this.opDConsolidadoRiestoInt;
        break;
      //E Det. Riesgo Int.
      case 14:
        btnTipoReporte = this.opEDetRiesgoInt;
        break;
      //F Txn. Sistema de Captura
      case 15:
        btnTipoReporte = this.opFTxnSistemaCapturas;
        break;
      //G Rech. Lotes a Captura
      case 16:
        btnTipoReporte = this.opGRechLotesCaptura;
        break;
      //H Tot. Txn. Promociones
      case 17:
        btnTipoReporte = this.opHTotTxnPromociones;
        break;
      //I Det. Txn. Promociones
      case 18:
        btnTipoReporte = this.opIDetTxnPromociones;
        break;
      //J Det. Txn. Rech. Promociones
      case 19:
        btnTipoReporte = this.opJDetTxnRechPromociones;
        break;
      //K Tot. Txn. Acep.Grupo Cadena
      case 20:
        btnTipoReporte = this.opKTotTxnAcepGrupoCadena;
        break;
      //L Tot. Txn. Rech.Grupo Cadena
      case 21:
        btnTipoReporte = this.opLTotTxnRechGrupoCadena;
        break;
      //M Consolidado de Promociones
      case 22:
        btnTipoReporte = this.opMConsolidadoPromociones;
        break;
      //N Sumario de Promociones Banamex
      case 23:
        btnTipoReporte = this.opNSumPromocionesBanamex;
        break;
      //P Reporte de Wal-Mart
      case 24:
        btnTipoReporte = this.opPRreporteWalmart;
        break;
      //Q Transacciones Cash
      case 25:
        btnTipoReporte = this.opQTransaccionesCash;
        break;
      //R Reporte Pagos y Cash
      case 26:
        btnTipoReporte = this.opRReportePagosCash;
        break;
      //S Reporte Rechazos
      case 27:
        btnTipoReporte = this.opSReporteRechazados;
        break;
      //V Puntos BBVA
      case 28:
        btnTipoReporte = this.opVPuntosBBVA;
        break;
    }
    if(esIndividual){
      await pageReporte.locator(btnTipoReporte).click();
      await this.ingresarDatosReporte(pageReporte,reporteARevisar)
      await this.validarDescargaPOSBMR(this.pageReporte,this.btnReporte,btnTipoReporte);
    }
  }

  async ingresarDatosReporte(
    pageR:Page,
    numeroReporte:number){
     const fechaProceso = REPORTE_POSBMR.FECHA
      const moneda = REPORTE_POSBMR.MONEDA 
      const plataforma = REPORTE_POSBMR.PLATAFORMA 
      const afiliacion = REPORTE_POSBMR.AFILIACION
      const ventana = REPORTE_POSBMR.VENTANA
      const tarjeta = REPORTE_POSBMR.TARJETA
      const tipoTransaccion = REPORTE_POSBMR.TRANSACCION
      const subTotales = REPORTE_POSBMR.SUBTOTALES
       
    if(moneda === 'P'){
      await pageR.locator(this.checkPesos).click()
    }else if(moneda === 'D'){
      await pageR.locator(this.checkDolares).click()
    }
    await pageR.locator(this.txtFechaProceso).fill("")
    await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
    await pageR.locator(this.selectPlataforma).click()
    await pageR.selectOption(this.selectPlataforma, plataforma ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
    await pageR.locator(this.txtAfiliacion).fill(afiliacion)
    await pageR.selectOption(this.selectVentana, ventana ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
    await pageR.locator(this.txtTarjeta).fill(tarjeta)
    if(numeroReporte === 1 || numeroReporte === 2){
      await pageR.selectOption(this.selectTipoTransaccion,tipoTransaccion ?? DATOS_POR_DEFECTO_POSBMR.TRANSACCION)
    }
    if(subTotales){
      await pageR.locator(this.checkSubtotales).getAttribute('value')==='N'?
      await pageR.locator(this.checkSubtotales).click():
      await pageR.locator(this.checkSubtotales).getAttribute('value');
    }else{
      await pageR.locator(this.checkSubtotales).getAttribute('value')==='S'?
      await pageR.locator(this.checkSubtotales).click():
      await pageR.locator(this.checkSubtotales).getAttribute('value');
    }
 }
}
