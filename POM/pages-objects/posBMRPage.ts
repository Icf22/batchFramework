import { BrowserContext, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { URLS, XPATH } from "../data/constates";
import { DEFECTO_POSBMR } from "../data/posBMR/constantesPosBMRDefecto";
import {
  REPORTE_4DETALLE_TRANC_RECHAZADAS, 
  REPORTE_5RECHAZAS_NO_PROCESADAS,
  REPORTE_6CONSOLIDADOS_RECHAZADOS_X_FECHA,
  REPORTE_ACONSOLIDADO_PLATAFORMA,
  REPORTE_BRETENCION_RIESGO,
  REPORTE_CLIBERACION_RIESGO,
  REPORTE_EDET_RIESGO_INT,
  REPORTE_GRECH_LOTES_CAPTURA,
  REPORTE_JDET_TXN_RECH_PROMOCIONES,
  REPORTE_KTOT_TXN_ACEP_GRUPO_CADENA,
  REPORTE_LTOT_TXN_RECH_GRUPO_CADENA,
  REPORTE_MCONSOLIDADO_PROMOCIONES,
  REPORTE_NSUMARIO_PROMOCIONES_BANAMEX,
  REPORTE_PREPORTE_WALMART,
  REPORTE_QTRANSACCIONES,
  REPORTE_RREPORTE_PAGOS_CASH,
  REPORTE_SREPORTE_RECHAZOS,
  REPORTE_VAPUNTOS_BBVA,
  REPORTE_POSBMR, 
  REPORTE_1TOTAL_TRANC_ACEPTADAS,
  REPORTE_2DETALLE_TRANC_ACEPTADAS,
  REPORTE_3TOTAL_TRANC_RECHAZADAS,
  REPORTE_7TOTALES_EMISOR,
  REPORTE_8DETALLE_EMISOR,
  REPORTE_9CONSOLIDADO_EMISOR,
  REPORTE_DCONSOLIDADO_RIESGO_INT,
  REPORTE_FTXN_SIS_CAP,
  REPORTE_HTOT_TXN_PROMOCIONES,
  REPORTE_I_DET_TXN_PROMOCIONES
} from "../data/posBMR/constantesPosBMR";

export class PosBMRPage extends BasePage {
  pageReporte?: Page;
  //#region MENU LATERAL IZQUIERDO
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
  //#endregion
  //#region SELECTORES
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
  readonly btnDespliegaModal: string;
  //Tipo de Transaccion
  readonly tipoTransaccion: string;
  //Tipo de Reporte
  readonly radiobtnTipoReporte: string
  readonly radiobtnReporteOriginal: string;
  readonly radiobtnDesgloceComprasDevoluciones: string;
  //Select del Modal
  readonly selectSeccionModal: string;
  readonly btnAceptarModal: string;
  //#endregion
  constructor(browserContext) {
    super(browserContext);
    //#region  MENUS BARRA LATERAL
    this.op1TotalTranAcep = "//a[text()='1 Total de Transacciones Aceptadas']";
    this.op2DetaTranAcep = "//a[text()='2 Detalle de Transacciones Aceptadas']";
    this.op3TotalTranRech = "//a[text()='3 Total de Transacciones Rechazadas']";
    this.op4DetallTranRech = "//a[text()='4 Detalle de Transacciones Rechazadas']";
    this.op5RechNoProce = "//a[text()='5 Rechazadas no procesadas']";
    this.op6ConsoRechXFech = "//a[text()='6 Consolidado de Rechazos por Fecha']";
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
    this.opJDetTxnRechPromociones = "//a[text()='J Det. Txn. Rech. Promociones']";
    this.opKTotTxnAcepGrupoCadena = "//a[text()='K Tot. Txn. Acep.Grupo Cadena']";
    this.opLTotTxnRechGrupoCadena = "//a[text()='L Tot. Txn. Rech.Grupo Cadena']";
    this.opMConsolidadoPromociones = "//a[text()='M Consolidado de Promociones']";
    this.opNSumPromocionesBanamex = "//a[text()='N Sumario de Promociones Banamex']";
    this.opPRreporteWalmart = "//a[text()='P Reporte de Wal-Mart']";
    this.opQTransaccionesCash = "//a[text()='Q Transacciones Cash']";
    this.opRReportePagosCash = "//a[text()='R Reporte Pagos y Cash']";
    this.opSReporteRechazados = "//a[text()='S Reporte Rechazos']";
    this.opVPuntosBBVA = "//a[text()='V Puntos BBVA']";
    //#endregion
    //#region SELECTORES
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
    this.selectSeccionModal = "//select[@name='vREPORTE']"
    this.btnAceptarModal = "//input[@name='BUTTON1']"
    this.btnDespliegaModal = "input[name='BUTTON2']"
    this.btnGuardar = "//input[@name='BUTTON3']"
    //#endregion
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
    let esExcel = false;
    //DEFINIMOS EL OBJETO PARA LOS DIFERENTES APARTADOS DE CADA REPORTE
    const opcionesAEjecutar = {
      1:this.op1TotalTranAcep,
      2:this.op2DetaTranAcep,
      3:this.op3TotalTranRech,
      4:this.op4DetallTranRech,
      5:this.op5RechNoProce,
      6:this.op6ConsoRechXFech,
      7:this.op7TotalesEmisor,
      8:this.op8DetalleEmisor,
      9:this.op9ConsolidadoEmisor,
      10:this.opAConsolidadoPlataforma,
      11:this.opBRetencionRiesgo,
      12:this.opCConsolidadoRiesgoInt,
      13:this.opDConsolidadoRiestoInt,
      14:this.opEDetRiesgoInt,
      15:this.opFTxnSistemaCapturas,
      16:this.opGRechLotesCaptura,
      17:this.opHTotTxnPromociones,
      18:this.opIDetTxnPromociones,
      19:this.opJDetTxnRechPromociones,
      20:this.opKTotTxnAcepGrupoCadena,
      21:this.opLTotTxnRechGrupoCadena,
      22:this.opMConsolidadoPromociones,
      23:this.opNSumPromocionesBanamex,
      24:this.opPRreporteWalmart,
      25:this.opQTransaccionesCash,
      26:this.opRReportePagosCash,
      27:this.opSReporteRechazados,
      28:this.opVPuntosBBVA,
    };
  
    // DEFINIMOS EL OBJETO PARA LOS BOTONES DE DESCARGA QUE CORRESPONDEN A CADA REPORTE
    const botonesAEjecutar = {
      1:this.btnReporte,   
      2:this.btnReporte,   
      3:this.btnReporte,   
      4:this.btnReporte,  
      5:this.btnReporte,  
      6:this.btnReporte,    
      7:this.btnReporte,   
      8:this.btnReporte,       
      9:this.btnReporte,    
      10:this.btnReporte,    
      11:this.btnReporte,  
      12:this.btnReporte,   
      13:this.btnReporte,   
      14:this.btnReporte, 
      15:this.btnReporte,  
      16:this.btnReporte,   
      17:this.btnReporte,   
      18:this.btnReporte,    
      19:this.btnReporte,    
      20:this.btnReporte,    
      21:this.btnReporte,    
      22:this.btnGuardar,    
      23:this.btnPreliminar,   
      24:this.btnPreliminar,    
      25:this.btnPreliminar,    
      26:this.btnPreliminar,    
      27:this.btnReporte,   
      28:this.btnReporte     
    };
    
    const dataReporte = {
      1: REPORTE_1TOTAL_TRANC_ACEPTADAS,
      2: REPORTE_2DETALLE_TRANC_ACEPTADAS,
      3: REPORTE_3TOTAL_TRANC_RECHAZADAS,
      4: REPORTE_4DETALLE_TRANC_RECHAZADAS,
      5: REPORTE_5RECHAZAS_NO_PROCESADAS,
      6: REPORTE_6CONSOLIDADOS_RECHAZADOS_X_FECHA,
      7: REPORTE_7TOTALES_EMISOR,
      8: REPORTE_8DETALLE_EMISOR,
      9: REPORTE_9CONSOLIDADO_EMISOR,
      10: REPORTE_ACONSOLIDADO_PLATAFORMA,
      11: REPORTE_BRETENCION_RIESGO,
      12: REPORTE_CLIBERACION_RIESGO,
      13: REPORTE_DCONSOLIDADO_RIESGO_INT,
      14: REPORTE_EDET_RIESGO_INT,
      15: REPORTE_FTXN_SIS_CAP,
      16: REPORTE_GRECH_LOTES_CAPTURA,
      17: REPORTE_HTOT_TXN_PROMOCIONES,
      18: REPORTE_I_DET_TXN_PROMOCIONES,
      19: REPORTE_JDET_TXN_RECH_PROMOCIONES,
      20: REPORTE_KTOT_TXN_ACEP_GRUPO_CADENA,
      21: REPORTE_LTOT_TXN_RECH_GRUPO_CADENA,
      22: REPORTE_MCONSOLIDADO_PROMOCIONES,
      23: REPORTE_NSUMARIO_PROMOCIONES_BANAMEX,
      24: REPORTE_PREPORTE_WALMART,
      25: REPORTE_QTRANSACCIONES,
      26: REPORTE_RREPORTE_PAGOS_CASH,
      27: REPORTE_SREPORTE_RECHAZOS,
      28: REPORTE_VAPUNTOS_BBVA
    }
    let reporteData = dataReporte[reporteARevisar];
    // SI EL REPORTE A REVISAR ES 0 (TODOS) ENTRA EN ESTE CASO
    if (reporteARevisar === 0) 
    {
      for (let i = 1; i <= Object.keys(opcionesAEjecutar).length; i++) {
        const opcion = opcionesAEjecutar[i];
        const boton = botonesAEjecutar[i];
        reporteData = dataReporte[i]
  
        // CUANDO I SEA IGUAL A UNO DE ESOS NUMEROS ENTRA AL IF Y CON EL CONTINUE TERMINA ESA ITERACION Y CONTINUA CON LA PROXIMA
        if ([23, 27].includes(i)) {
          continue;
        }
        if([28].includes(i)){
          esExcel = REPORTE_VAPUNTOS_BBVA.SALIDA_EXCEL;
        }
        if([22].includes(i)){
          esExcel = true;
        }
        await Promise.all([
          pageReporte.locator(opcion).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await pageReporte.locator(opcion).click(),
        await this.ingresarDatosReporte(pageReporte, i, reporteData);
        await this.validarDescargaPOSBMR(pageReporte, boton, opcion, esExcel);
      }
    } 
    else 
    { 
      btnTipoReporte = opcionesAEjecutar[reporteARevisar]
      await pageReporte.locator(btnTipoReporte).click();
      await this.ingresarDatosReporte(pageReporte, reporteARevisar, reporteData);
      const boton = botonesAEjecutar[reporteARevisar];
      await this.validarDescargaPOSBMR(pageReporte, boton, btnTipoReporte, esExcel);
    }
  }
  async ingresarDatosReporte(pageR: Page,numeroReporte: number,reporteData: any) {
    await pageR.waitForTimeout(980);
    const moneda = reporteData.MONEDA ?? DEFECTO_POSBMR.MONEDA;
    const fecha = reporteData.FECHA ?? DEFECTO_POSBMR.FECHA;
    const ventana = reporteData.VENTANA ?? DEFECTO_POSBMR.VENTANA;
    const afiliacion = reporteData.AFILIACION ?? DEFECTO_POSBMR.AFILIACION;
    const tarjeta = reporteData.TARJETA ?? DEFECTO_POSBMR.TARJETA;
    const transaccion = reporteData.TRANSACCION ?? DEFECTO_POSBMR.TRANSACCION;
    const emisor = reporteData.EMISOR ?? DEFECTO_POSBMR.EMISOR;
    const emisor2 = reporteData.EMISOR2 ?? DEFECTO_POSBMR.EMISOR2;
    const internacional = reporteData.INTERNACIONAL ?? DEFECTO_POSBMR.INTERNACIONAL;
    const grupoCadena = reporteData.GRUPO_CADENA ?? DEFECTO_POSBMR.GRUPO_CADENA;
    const tipoReporte = reporteData.TIPO_REPORTE ?? DEFECTO_POSBMR.TIPO_REPORTE;
    const codigoRechazo = reporteData.CODIGO_RECHAZO ?? DEFECTO_POSBMR.CODIGO_RECHAZO;
    const subtotales = reporteData.SUBTOTALES ?? DEFECTO_POSBMR.SUBTOTALES;
  
    switch (numeroReporte) {
      case 1: // TRANSACCIONES ACEPTADAS
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma);
      break;
      case 2: // DETALLE DE TRANSACCIONES ACEPTADAS
      case 3: // TRANSACCIONES RECHAZADAS
      case 4: // DETALLE DE TRANSACCIONES RECHAZADAS
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        if (numeroReporte === 3 || numeroReporte === 2) {
          await this.seleccionarTipoTransaccion(pageR, transaccion);
        }
        await this.manipularSubtotales(pageR, subtotales);
        break;
      case 5: // RECHAZADAS NO PROCESADAS
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.seleccionarVentana(pageR, ventana);
        break;
      case 6: // CONSOLIDADO DE RECHAZADOS
      await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.seleccionarVentana(pageR, ventana);
        break;
      case 7: // TOTALES EMISOR
      case 8: // DETALLE EMISOR
      case 9: // CONSOLIDADO EMISOR
      case 10: // CONSOLIDADO PLATAFORMA
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        break;
      case 11: // RETENCIONES POR RIESGO
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        await this.seleccionarInternacional(pageR, internacional);
        break;
      case 12: // LIBERACION RIESGO
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarEmisor(pageR, emisor);
        await this.llenarAfiliacion(pageR, afiliacion);
        break;
      case 13: // CONSOLIDADO RIESGO INTERNACIONAL
      case 14: // DETALLE RIESGO INTERNACIONAL
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarEmisor2(pageR, emisor2);
        break;
      case 15: // SISTEMA DE CAPTURA
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        break;
      case 16: // RECH LOTES A CAPTURA
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA2 ?? DEFECTO_POSBMR.PLATAFORMA2);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        await this.manipularSubtotales(pageR, reporteData.SUBTOTALES);
        break;
      case 17: // TOTAL TRANSACCIONES PROMOCIONES
      case 18: // DETALLE TRANSACCIONES PROMOCIONES
      case 19: // DETALLE TRANSACCIONES RECHAZADAS PROMOCIONES
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA2 ?? DEFECTO_POSBMR.PLATAFORMA2);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        await this.manipularSubtotales(pageR, reporteData.SUBTOTALES);
        break;
      case 20: // K Tot. Txn. Acep.Grupo Cadena
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        await this.seleccionarTipoTransaccion(pageR, transaccion)
        await pageR.locator(this.txtGrupoCadena).fill(grupoCadena);
        await this.manipularSubtotales(pageR, reporteData.SUBTOTALES);
        //await this.manipularModal(pageR, reporteData.OPCIONMODAL);
        break;
      case 21: // L Tot. Txn. Rech.Grupo Cadena
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        await pageR.locator(this.txtGrupoCadena).fill(grupoCadena);
        await this.manipularSubtotales(pageR, reporteData.SUBTOTALES);
        //await this.manipularModal(pageR, reporteData.OPCIONMODAL);
        break;
      case 22: // M Consolidado de Promociones
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarEmisor(pageR, reporteData.PLATAFORMA3 ?? DEFECTO_POSBMR.PLATAFORMA3);
        //await pageR.locator(this.btnVistaPrevia).click();
        break;
      case 23: // N Sumario de Promociones Banamex TIENE BUGS EN TIPO DE TRANSACCION FRONTEND
        await this.llenarFechaProceso(pageR, fecha);
        //Reporte Original | Desgloce Compras / Devoluciones
        await pageR.locator(this.radiobtnDesgloceComprasDevoluciones).click();
        if (tipoReporte === 'D') {
          //Todas | Compras | Devoluciones
          await pageR.locator(this.tipoTransaccion).click();
        }
        await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA4 ?? DEFECTO_POSBMR.PLATAFORMA4);
        break;
      case 24: // P Reporte de Wal-Mart
        await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA5 ?? DEFECTO_POSBMR.PLATAFORMA5);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        break;
      case 25: // Q Transacciones Cash
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA6 ?? DEFECTO_POSBMR.PLATAFORMA6);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.manipularSubtotales(pageR, reporteData.SUBTOTALES);
        break;
      case 26: // R Reporte Pagos y Cash
        await this.llenarFechaProceso(pageR, fecha);
        await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA6 ?? DEFECTO_POSBMR.PLATAFORMA6);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.llenarTarjeta(pageR, tarjeta);
        await this.manipularSubtotales(pageR, subtotales);
        break;
      case 27: // S Reporte Rechazos SIGUE ARROJANDO ETIQUETA DE NO DATOS
        // ESTE CODIGO ESTA COMENTADO EN EL ARCHIVO DE CODIGO DECREPADO.
        break;
      case 28: // S V Puntos BBVA
        await pageR.locator(this.fechaInicio).fill(reporteData.FECHA_INICIO);
        await pageR.locator(this.fechaInicio).fill(reporteData.FECHA_FIN);
        if (reporteData.SALIDA_EXCEL) {
          await pageR.locator(this.checkSalidaExcel).click();
        } else {
          break;
        }
        break;
    }
  }
  async seleccionarMoneda(page: Page, moneda: string) {
    if (moneda === 'P') {
      await page.waitForSelector(this.checkPesos);
      await page.locator(this.checkPesos).click();
    } else if (moneda === 'D') {
      await page.waitForSelector(this.checkDolares);
      await page.locator(this.checkDolares).click();
    }
  }
  async llenarFechaProceso(page: Page, fecha: string) {
    await page.waitForSelector(this.txtFechaProceso);
    await page.locator(this.txtFechaProceso).fill('');
    await page.locator(this.txtFechaProceso).fill(fecha);
  }
  async seleccionarPlataforma(page: Page, plataforma: string) {
    await page.locator(this.selectPlataforma).click();
    await page.selectOption(this.selectPlataforma, plataforma);
  }
  async llenarAfiliacion(page: Page, afiliacion: string) {
    await page.locator(this.txtAfiliacion).fill(afiliacion);
  }
  async seleccionarVentana(page: Page, ventana: string) {
    await page.locator(this.selectVentana).click();
    await page.selectOption(this.selectVentana, ventana);
  }
  async llenarTarjeta(page: Page, tarjeta: string) {
    await page.locator(this.txtTarjeta).fill(tarjeta);
  }
  async seleccionarTipoTransaccion(page: Page, transaccion: string) {
    await page.locator(this.selectTipoTransaccion).click();
    await page.selectOption(this.selectTipoTransaccion, transaccion);
  }
  async manipularSubtotales(page: Page, subtotales: boolean) {
    await page.locator(this.checkSubtotales).setChecked(subtotales);
  }
  async seleccionarEmisor(page: Page, emisor: string) {
    await page.locator(this.selectEmisor).click();
    await page.selectOption(this.selectEmisor, emisor);
  }
  async seleccionarEmisor2(page: Page, emisor2: string) {
    await page.locator(this.selectEmisor2).click();
    await page.selectOption(this.selectEmisor2, emisor2);
  }
  async seleccionarInternacional(page: Page, internacional: string) {
    await page.locator(this.selectInternacional).click();
    await page.selectOption(this.selectInternacional, internacional);
  }
  async manipularModal(page: Page, seccion: string) {
    await page.waitForSelector(this.btnDespliegaModal);

    // Hacer clic en el botón utilizando evaluate para ejecutar el código JavaScript asociado
    await page.evaluate((btnSelector) => {
      const btn = document.querySelector(btnSelector) as HTMLElement;
      btn.click();
    }, this.btnDespliegaModal);

    // Acceder al iframe por su selector
   const frame = await page.waitForSelector(XPATH.framID);
   const frameContent = await frame.contentFrame();
  if (!frame) {
      throw new Error(`No se encontró el iframe con el selector '${XPATH.framID}'.`);
  }

  // Interactuar con el select dentro del iframe
  const selectSelector = "//select[name='vREPORTE']"; // Ajustar según el selector del select en el iframe
  const btnSelectOptions = await frameContent?.$(selectSelector);
  await btnSelectOptions?.click();
  await btnSelectOptions?.selectOption(seccion);
  }
  async ObtenerOptionsPlataforma(pageR, locator) {
    const loc = locator + "/option";

    const options = await pageR.evaluate((xpath) => {
      const result: { value: string | null, text: string | null }[] = [];
      const iterator = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
      let node = iterator.iterateNext() as HTMLElement | null;
      while (node) {
        result.push({
          value: node.getAttribute('value'),
          text: node.textContent?.trim() || ''
        });
        node = iterator.iterateNext() as HTMLElement | null;
      }
      return result;
    }, loc);

    for (const option of options) {
      await pageR.selectOption(locator, option.value);
      await pageR.waitForTimeout(9000);
    }

  }
  
}


