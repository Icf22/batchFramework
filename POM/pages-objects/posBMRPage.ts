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
  readonly btnVistaPrevia: string;
  readonly btnGuardar: string;
  readonly btnPreliminar: string;
  readonly checkPesos: string;
  readonly checkDolares: string;
  readonly selectPlataforma: string;
  readonly txtAfiliacion: string;
  readonly selectVentana: string;
  readonly txtTarjeta: string;
  readonly selectTipoTransaccion: string;
  readonly selectInternacional: string;
  readonly selectEmisor: string;
  readonly selectEmisor2: string;
  readonly txtGrupoCadena: string;
  readonly checkSubtotales: string;
  readonly txtFechaProceso: string;
  readonly selectCodigoRechazo: string;
  readonly fechaInicio: string;
  readonly fechaFin: string;
  readonly checkSalidaExcel: string;
  //Tipo de Transaccion
  readonly tipoTransaccion: string;
  //Tipo de Reporte
  readonly radiobtnTipoReporte: string
  readonly radiobtnReporteOriginal: string;
  readonly radiobtnDesgloceComprasDevoluciones: string;

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
    this.selectInternacional = "//select[@name='vCBINTERNACIONAL']"
    this.selectEmisor = "//select[@name='vEMISOR']";
    this.selectEmisor2 = "//select[@name='vID_COMBO_BOX']";
    this.txtGrupoCadena = "//input[@name='vGPO_CADENA']"
    this.checkSubtotales = "//input[@name='vSUBTOTALES']"
    this.btnReporte = "//input[@value='Reporte']";
    this.btnExportar = "//input[@value='Exportar']";
    this.btnPreliminar = "//input[@value='Preliminar']"
    this.btnVistaPrevia = "//input[@value='Vista Previa']"
    this.tipoTransaccion = `//input[@value='${REPORTE_POSBMR.TIPO_TRANSACCION}' and @name='vTPO_TXN']`;
    this.radiobtnTipoReporte = `//input[@value='${REPORTE_POSBMR.TIPO_REPORTE}']`
    this.radiobtnDesgloceComprasDevoluciones = `//input[@name='vT_REPORTE' and @value='${REPORTE_POSBMR.TIPO_REPORTE}']`
    this.selectCodigoRechazo = "//select[@name='vTIPO_REPORTE']"
    this.fechaInicio = "//input[@name='vFECHAINICIAL']"
    this.fechaFin = "//input[@name='vFECHAFINAL']"
    this.checkSalidaExcel = "//input[@name='vVL_EXCEL']"


    //----------1 Total de Transacciones Aceptadas---------- 
    /*
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta
    this.selectTipoTransaccion
    this.checkSubtotales
    this.btnReporte
    this.btnExportar*/

    //----------2 Detalle de Transacciones Aceptadas---------- 

    /*
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta
    this.selectTipoTransaccion
    this.checkSubtotales
    this.btnReporte
    this.btnExportar*/

    //----------3 Total de Transacciones Rechazadas---------- 
    /*
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta
    this.checkSubtotales
    this.btnReporte
    this.btnExportar*/

    //----------4 Detalle de Transacciones Rechazadas---------- 
    /*
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta
    this.checkSubtotales
    this.btnReporte
    this.btnExportar*/

    //----------5 Rechazadas no procesadas---------- 
    /*
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.selectVentana
    this.checkSubtotales
    this.btnReporte
    this.btnExportar*/

    //----------6 Consolidado de Rechazos por Fecha---------- 
    /*
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.selectVentana
    this.btnReporte
    this.btnExportar*/

    //----------7 Totales Emisor---------- 
    /*
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta
    this.btnReporte
    this.btnExportar*/

    //----------8 Detalle Emisor---------- 
    /*
    this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta*/

    //----------9 Consolidado Emisor---------- 
    /*
    this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta*/

    //----------A Consolidado Plataforma---------- 
    /*
    this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta*/

    //----------B Retención Riesgo---------- 
    /*this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta
    this.selectInternacional*/


    //----------C Liberación Riesgo---------- 
    /*this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectEmisor
    this.txtAfiliacion*/

    //----------D Consolidado Riesgo Int.---------- 
    /*this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectEmisor*/

    //----------E Det. Riesgo Int.---------- 
    /*this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectEmisor*/

    //----------F Txn. Sistema de Captura---------- 
    /*this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares*/

    //----------G Rech. Lotes a Captura---------- 
    /*this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta
    this.checkSubtotales*/

    //----------H Tot. Txn. Promociones---------- 
    /*this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta
    this.checkSubtotales*/

    //----------I Det. Txn. Promociones---------- 
    /*this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta
    this.checkSubtotales*/

    //----------J Det. Txn. Rech. Promociones---------- 
    /*this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta
    this.selectTipoTransaccion
    this.txtGrupoCadena
    this.checkSubtotales*/

    //----------K Tot. Txn. Acep.Grupo Cadena---------- 
    /*this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta
    this.selectTipoTransaccion
    this.txtGrupoCadena
    this.checkSubtotales*/

    //----------L Tot. Txn. Rech.Grupo Cadena---------- 
    /*this.btnReporte
    this.btnExportar
    this.txtFechaProceso
    this.checkPesos
    this.checkDolares
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta
    this.txtGrupoCadena
    this.checkSubtotales*/

    //----------M Consolidado de Promociones---------- 
    /*this.btnVistaPrevia
    this.btnGuardar
    this.txtFechaProceso
    this.selectPlataforma*/


    //---------- N Sumario de Promociones Banamex---------- 
    /*this.btnPreliminar
    this.btnExportar
    this.txtFechaProceso
    this.selectPlataforma
    this.radiobtnTodas 
    this.radiobtnCompras 
    this.radiobtnDevoluciones 
    this.radiobtnReporteOriginal 
    this.radiobtnDesgloceComprasDevoluciones */

    //----------P Reporte de Wal-Mart---------- 
    /*this.btnPreliminar
    this.btnExportar
    this.txtFechaProceso
    this.selectPlataforma
    this.txtAfiliacion
    this.selectVentana
    this.txtTarjeta*/

    //----------Q Transacciones Cash---------- 
    /*this.btnPreliminar
    this.btnExportar
    this.txtFechaProceso
    this.selectPlataforma
    this.txtAfiliacion
    this.checkSubtotales*/

    //----------R Reporte Pagos y Cash---------- 
    /*this.btnPreliminar
    this.btnExportar
    this.txtFechaProceso
    this.selectPlataforma
    this.txtAfiliacion
    this.txtTarjeta
    this.checkSubtotales*/

    //----------S Reporte Rechazos---------- 
    /*this.txtFechaProceso
    this.selectCodigoRechazo
    this.btnReporte*/

    //----------V Puntos BBVA---------- 
    /*this.fechaInicio
    this.fechaFin
    this.checkSalidaExcel
    this.btnReporte*/

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

  async revisarReporte(reporteARevisar: number) {
    const pageReporte = await this.inicializarPage(URLS.POSBMR);
    let btnTipoReporte = this.op1TotalTranAcep;
    let esIndividual = true;
    switch (reporteARevisar) {
      //Validar mas usados (1-4)
      case 0:
        esIndividual = false;
        //1
        await Promise.all([
          pageReporte.locator(this.op1TotalTranAcep).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 1)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.op1TotalTranAcep,
          false
        );

        //2
        await Promise.all([
          pageReporte.locator(this.op2DetaTranAcep).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 2)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.op2DetaTranAcep,
          false
        );

        //3
        await Promise.all([
          pageReporte.locator(this.op3TotalTranRech).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 3)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.op3TotalTranRech,
          false
        );

        //4
        await Promise.all([
          pageReporte.locator(this.op4DetallTranRech).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 4)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.op4DetallTranRech,
          false
        );
        //5
        await Promise.all([
          pageReporte.locator(this.op5RechNoProce).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 5)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.op5RechNoProce,
          false
        );
        //6
        await Promise.all([
          pageReporte.locator(this.op6ConsoRechXFech).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 6)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.op6ConsoRechXFech,
          false
        );

        //7
        await Promise.all([
          pageReporte.locator(this.op7TotalesEmisor).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 7)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.op7TotalesEmisor,
          false
        );
        //8
        await Promise.all([
          pageReporte.locator(this.op8DetalleEmisor).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 8)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.op8DetalleEmisor,
          false
        );
        //9
        await Promise.all([
          pageReporte.locator(this.op9ConsolidadoEmisor).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 9)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.op9ConsolidadoEmisor,
          false
        );
        //10
        await Promise.all([
          pageReporte.locator(this.opAConsolidadoPlataforma).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 10)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.opAConsolidadoPlataforma,
          false
        );
        //11
        await Promise.all([
          pageReporte.locator(this.opBRetencionRiesgo).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 11)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.opBRetencionRiesgo,
          false
        );
        //12
        await Promise.all([
          pageReporte.locator(this.opCConsolidadoRiesgoInt).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 12)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.opCConsolidadoRiesgoInt,
          false
        );
        //13
        await Promise.all([
          pageReporte.locator(this.opDConsolidadoRiestoInt).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 13)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.opDConsolidadoRiestoInt,
          false
        );
        //14
        await Promise.all([
          pageReporte.locator(this.opEDetRiesgoInt).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 14)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.opEDetRiesgoInt,
          false
        );
        //15
        //NO VALIDAR DESCARGA
        await Promise.all([
          pageReporte.locator(this.opFTxnSistemaCapturas).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 15)
        // await this.validarDescargaPOSBMR(
        //   pageReporte,
        //   this.btnReporte,
        //   this.opFTxnSistemaCapturas
        // );
        //16
        await Promise.all([
          pageReporte.locator(this.opGRechLotesCaptura).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 16)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.opGRechLotesCaptura,
          false
        );
        //17
        await Promise.all([
          pageReporte.locator(this.opHTotTxnPromociones).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 17)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.opHTotTxnPromociones,
          false
        );
        //18
        await Promise.all([
          pageReporte.locator(this.opIDetTxnPromociones).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 18)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.opIDetTxnPromociones,
          false
        );
        //19
        await Promise.all([
          pageReporte.locator(this.opJDetTxnRechPromociones).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 19)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.opJDetTxnRechPromociones,
          false
        );
        //20
        await Promise.all([
          pageReporte.locator(this.opKTotTxnAcepGrupoCadena).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 20)
        //NO VALIDA LA DESCARGA EL BTN NO DESCARGA PROBLEMA EN EL SISTEMA WEB
        // await this.validarDescargaPOSBMR(
        //   pageReporte,
        //   this.btnReporte,
        //   this.opKTotTxnAcepGrupoCadena
        // );
        //21
        await Promise.all([
          pageReporte.locator(this.opLTotTxnRechGrupoCadena).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 21)
        //NO VALIDA LA DESCARGA EL BTN NO DESCARGA PROBLEMA EN EL SISTEMA WEB
        // await this.validarDescargaPOSBMR(
        //   pageReporte,
        //   this.btnReporte,
        //   this.opLTotTxnRechGrupoCadena
        // );
        //22
        await Promise.all([
          pageReporte.locator(this.opMConsolidadoPromociones).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 22)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnVistaPrevia,
          this.opMConsolidadoPromociones,
          false
        );
        //23
        await Promise.all([
          pageReporte.locator(this.opNSumPromocionesBanamex).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 23)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnPreliminar,
          this.opNSumPromocionesBanamex,
          false
        );
        //24
        await Promise.all([
          pageReporte.locator(this.opPRreporteWalmart).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 24)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnPreliminar,
          this.opPRreporteWalmart,
          false
        );
        //25
        await Promise.all([
          pageReporte.locator(this.opQTransaccionesCash).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 25)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnPreliminar,
          this.opQTransaccionesCash,
          false
        );
        //26
        await Promise.all([
          pageReporte.locator(this.opRReportePagosCash).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 26)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnPreliminar,
          this.opRReportePagosCash,
          false
        );
        //27
        await Promise.all([
          pageReporte.locator(this.opSReporteRechazados).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 27)
        //NO VALIDAR RECHAZOS HASTA QUE TENGA REGISTROS
        // await this.validarDescargaPOSBMR(
        //   pageReporte,
        //   this.btnReporte,
        //   this.opSReporteRechazados
        // );
        //28
        await Promise.all([
          pageReporte.locator(this.opVPuntosBBVA).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, 28)
        await this.validarDescargaPOSBMR(
          pageReporte,
          this.btnReporte,
          this.opVPuntosBBVA,
          REPORTE_POSBMR.SALIDA_EXCEL
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
    if (esIndividual) {
      await pageReporte.locator(btnTipoReporte).click();
      await this.ingresarDatosReporte(pageReporte, reporteARevisar)
      await this.validarDescargaPOSBMR(this.pageReporte, this.btnReporte, btnTipoReporte, false);
    }
  }

  async ingresarDatosReporte(
    pageR: Page,
    numeroReporte: number) {
    const fechaProceso = REPORTE_POSBMR.FECHA
    const moneda = REPORTE_POSBMR.MONEDA
    const plataforma = REPORTE_POSBMR.PLATAFORMA
    const plataforma2 = REPORTE_POSBMR.PLATAFORMA2
    const plataforma3 = REPORTE_POSBMR.PLATAFORMA3
    const plataforma4 = REPORTE_POSBMR.PLATAFORMA4
    const plataforma5 = REPORTE_POSBMR.PLATAFORMA5
    const plataforma6 = REPORTE_POSBMR.PLATAFORMA6
    const afiliacion = REPORTE_POSBMR.AFILIACION
    const ventana = REPORTE_POSBMR.VENTANA
    const tarjeta = REPORTE_POSBMR.TARJETA
    const cadena = REPORTE_POSBMR.GRUPO_CADENA
    const tipoTransaccion = REPORTE_POSBMR.TRANSACCION
    const subTotales = REPORTE_POSBMR.SUBTOTALES
    const internacional = REPORTE_POSBMR.INTERNACIONAL
    const selectEmisor = REPORTE_POSBMR.EMISOR
    const selectEmisor2 = REPORTE_POSBMR.EMISOR2
    await pageR.waitForTimeout(1000)
    switch (numeroReporte) {
      case 1://TRANSACCIONES ACEPTADAS
      case 2://DETALLE DE TRANSACCIONES ACEPTADAS
      case 3://TRANSACCIONES RECHAZADAS
      case 4://DETALLE DE TRANSACCIONES RECHAZADAS
        if (moneda === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (moneda === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, plataforma ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
        await pageR.locator(this.txtAfiliacion).fill(afiliacion ?? "")
        await pageR.selectOption(this.selectVentana, ventana ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(tarjeta ?? "")
        if (numeroReporte === 1 || numeroReporte === 2) {
          await pageR.selectOption(this.selectTipoTransaccion, tipoTransaccion ?? DATOS_POR_DEFECTO_POSBMR.TRANSACCION)
        }
        if (subTotales) {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'N' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        } else {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'S' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        }
        break;
      case 5: //RECHAZADAS NO PROCESADAS
        if (moneda === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (moneda === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, plataforma ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
        await pageR.selectOption(this.selectVentana, ventana ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        break;
      case 6: //CONSOLIDADO DE RECHAZADOS
        if (moneda === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (moneda === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, plataforma ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
        await pageR.selectOption(this.selectVentana, ventana ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        break;
      case 7: //TOTALES EMISOR
      case 8: //DETALLE EMISOR
      case 9: //CONSOLIDADO EMISOR
      case 10://CONSOLIDADO PLATAFORMA
        if (moneda === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (moneda === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, plataforma ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
        await pageR.locator(this.txtAfiliacion).fill(afiliacion ?? "")
        await pageR.selectOption(this.selectVentana, ventana ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(tarjeta ?? "")
        break;
      case 11://RETENCIONES POR RIESGO
        if (moneda === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (moneda === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, plataforma ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
        await pageR.locator(this.txtAfiliacion).fill(afiliacion ?? "")
        await pageR.selectOption(this.selectVentana, ventana ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(tarjeta ?? "")
        await pageR.locator(this.selectInternacional).click()
        await pageR.selectOption(this.selectInternacional, internacional ?? "0 Domestico")
        break;
      case 12://LIBERACION RIESGO
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectEmisor).click()
        await pageR.selectOption(this.selectEmisor, selectEmisor ?? DATOS_POR_DEFECTO_POSBMR.EMISOR)
        await pageR.locator(this.txtAfiliacion).fill(afiliacion ?? "")
        break;
      case 13://CONSOLIDADO RIESGO INTERNACIONAL
      case 14://DETALLE RIESGO INTERNACIONAL
        if (moneda === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (moneda === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectEmisor2).click()
        await pageR.selectOption(this.selectEmisor2, selectEmisor2 ?? DATOS_POR_DEFECTO_POSBMR.EMISOR2)
        break;
      case 15://SISTEMA DE CAPTURA BOTON DESACTIVADO NO DEJA DESCARGAR
        if (moneda === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (moneda === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        break;
      case 16://RECH LOTES A CAPTURA
        if (moneda === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (moneda === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, plataforma2 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA2)
        await pageR.locator(this.txtAfiliacion).fill(afiliacion ?? "")
        await pageR.selectOption(this.selectVentana, ventana ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(tarjeta ?? "")
        if (subTotales) {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'N' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        } else {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'S' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        }
        break;
      case 17://TOTAL TRANSACCIONES PROMOCIONES
      case 18://DETALLE TRANSACCIONES PROMOCIONES
      case 19://DETALLE TRANSACCIONES RECHAZADAS PROMOCIONES
        if (moneda === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (moneda === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, plataforma2 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA2)
        await pageR.locator(this.txtAfiliacion).fill(afiliacion ?? "")
        await pageR.selectOption(this.selectVentana, ventana ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(tarjeta ?? "")
        if (subTotales) {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'N' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        } else {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'S' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        }
        break;
      case 20: //K Tot. Txn. Acep.Grupo Cadena
        if (moneda === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (moneda === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, plataforma ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
        await pageR.locator(this.txtAfiliacion).fill(afiliacion ?? "")
        await pageR.selectOption(this.selectVentana, ventana ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(tarjeta ?? "")
        await pageR.selectOption(this.selectTipoTransaccion, ventana ?? DATOS_POR_DEFECTO_POSBMR.TRANSACCION)
        await pageR.locator(this.txtGrupoCadena).fill(cadena ?? "")
        if (subTotales) {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'N' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        } else {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'S' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        }
        break;
      case 21: //L Tot. Txn. Rech.Grupo Cadena
        if (moneda === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (moneda === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, plataforma ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
        await pageR.locator(this.txtAfiliacion).fill(afiliacion ?? "")
        await pageR.selectOption(this.selectVentana, ventana ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(tarjeta ?? "")
        await pageR.locator(this.txtGrupoCadena).fill(cadena ?? "")
        if (subTotales) {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'N' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        } else {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'S' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        }
        break;
      case 22: //M Consolidado de Promociones
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectEmisor).click()
        await pageR.selectOption(this.selectEmisor, plataforma3 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA3)
        //await pageR.locator(this.btnVistaPrevia).click()
        break;
      case 23: //N Sumario de Promociones Banamex
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        //Reporte Original | Desgloce Compras / Devoluciones
        await pageR.locator(this.radiobtnDesgloceComprasDevoluciones).click()
        if (REPORTE_POSBMR.TIPO_REPORTE = 'D') {
          //Todas | Compras | Devoluciones
          await pageR.locator(this.tipoTransaccion).click()
        }
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, plataforma4 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA4)
        break;
      case 24: //P Reporte de Wal-Mart
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, plataforma5 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA5)
        await pageR.locator(this.txtAfiliacion).fill(afiliacion ?? "")
        await pageR.locator(this.selectVentana).click()
        await pageR.selectOption(this.selectVentana, ventana ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(REPORTE_POSBMR.TARJETA)
        break;
      case 25: // Q Transacciones Cash
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, plataforma6 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA6)
        await pageR.locator(this.txtAfiliacion).fill(afiliacion ?? "")
        if (subTotales) {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'N' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        } else {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'S' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        }
        break;
      case 26: //R Reporte Pagos y Cash
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, plataforma6 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA6)
        await pageR.locator(this.txtAfiliacion).fill(afiliacion ?? "")
        await pageR.locator(this.txtTarjeta).fill(tarjeta ?? "")
        if (subTotales) {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'N' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        } else {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'S' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        }
        break;
      case 27: //S Reporte Rechazos
        await pageR.locator(this.fechaInicio).fill("")
        await pageR.locator(this.fechaInicio).fill(fechaProceso)
        await pageR.locator(this.selectCodigoRechazo).click()
        await pageR.selectOption(this.selectCodigoRechazo, REPORTE_POSBMR.CODIGO_RECHAZO ?? "")
        break;
      case 28: //S Reporte Rechazos
        await pageR.locator(this.fechaInicio).fill("")
        await pageR.locator(this.fechaInicio).fill(REPORTE_POSBMR.FECHA_INICIO)
        await pageR.locator(this.fechaInicio).fill("")
        await pageR.locator(this.fechaInicio).fill(REPORTE_POSBMR.FECHA_FIN)
        await pageR.locator(this.checkSalidaExcel).click()
        break;
    }
  }
}
