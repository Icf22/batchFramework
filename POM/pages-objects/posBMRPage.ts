import { BrowserContext, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { URLS } from "../data/constates";
import { DATOS_POR_DEFECTO_POSBMR } from "../data/posBMR/constantesPosBMRDefecto";
import { REPORTE_4DETALLE_TRANC_RECHAZADAS, 
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
  REPORTE_POSBMR } from "../data/posBMR/constantesPosBMR";

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
      22:this.btnVistaPrevia,    
      23:this.btnPreliminar,   
      24:this.btnPreliminar,    
      25:this.btnPreliminar,    
      26:this.btnPreliminar,    
      27:this.btnReporte,   
      28:this.btnReporte     
    };
  
    // SI EL REPORTE A REVISAR ES 0 (TODOS) ENTRA EN ESTE CASO
    if (reporteARevisar === 0) 
    {
      for (let i = 1; i < Object.keys(opcionesAEjecutar).length; i++) {
        const opcion = opcionesAEjecutar[i];
        const boton = botonesAEjecutar[i];
  
        // CUANDO I SEA IGUAL A UNO DE ESOS NUMEROS ENTRA AL IF Y CON EL CONTINUE TERMINA ESA ITERACION Y CONTINUA CON LA PROXIMA
        if ([15, 20, 21, 22, 23, 27].includes(i)) {
          continue;
        }
  
        await Promise.all([
          pageReporte.locator(opcion).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, i);
        await this.validarDescargaPOSBMR(pageReporte, boton, opcion, false);
      }
    } 
    else 
    {
      btnTipoReporte = opcionesAEjecutar[reporteARevisar]
      await pageReporte.locator(btnTipoReporte).click();
      await this.ingresarDatosReporte(pageReporte, reporteARevisar);
      const boton = botonesAEjecutar[reporteARevisar];
      await this.validarDescargaPOSBMR(pageReporte, boton, btnTipoReporte, false);
    }
  }

  async ingresarDatosReporte(
    pageR: Page,
    numeroReporte: number) {
    await pageR.waitForTimeout(1000)
    switch (numeroReporte) {
      case 1://TRANSACCIONES ACEPTADAS
      case 2://DETALLE DE TRANSACCIONES ACEPTADAS
      case 3://TRANSACCIONES RECHAZADAS
      case 4://DETALLE DE TRANSACCIONES RECHAZADAS
        if (REPORTE_4DETALLE_TRANC_RECHAZADAS.MONEDA === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (REPORTE_4DETALLE_TRANC_RECHAZADAS.MONEDA === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_4DETALLE_TRANC_RECHAZADAS.FECHA)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, REPORTE_4DETALLE_TRANC_RECHAZADAS.PLATAFORMA ?? REPORTE_4DETALLE_TRANC_RECHAZADAS.PLATAFORMA)
        await pageR.locator(this.txtAfiliacion).fill(REPORTE_4DETALLE_TRANC_RECHAZADAS.AFILIACION ?? "")
        await pageR.selectOption(this.selectVentana, REPORTE_4DETALLE_TRANC_RECHAZADAS.VENTANA ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(REPORTE_4DETALLE_TRANC_RECHAZADAS.TARJETA ?? "")
        if (numeroReporte === 1 || numeroReporte === 2) {
          await pageR.selectOption(this.selectTipoTransaccion, REPORTE_4DETALLE_TRANC_RECHAZADAS.TRANSACCION ?? DATOS_POR_DEFECTO_POSBMR.TRANSACCION)
        }
        if (REPORTE_4DETALLE_TRANC_RECHAZADAS.SUBTOTALES) {
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
        if (REPORTE_5RECHAZAS_NO_PROCESADAS.MONEDA === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (REPORTE_5RECHAZAS_NO_PROCESADAS.MONEDA === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_5RECHAZAS_NO_PROCESADAS.FECHA)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, REPORTE_5RECHAZAS_NO_PROCESADAS.PLATAFORMA ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
        await pageR.selectOption(this.selectVentana, REPORTE_5RECHAZAS_NO_PROCESADAS.VENTANA ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        break;
      case 6: //CONSOLIDADO DE RECHAZADOS
        if (REPORTE_6CONSOLIDADOS_RECHAZADOS_X_FECHA.MONEDA === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (REPORTE_6CONSOLIDADOS_RECHAZADOS_X_FECHA.MONEDA === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_6CONSOLIDADOS_RECHAZADOS_X_FECHA.FECHA)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, REPORTE_6CONSOLIDADOS_RECHAZADOS_X_FECHA.PLATAFORMA ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
        await pageR.selectOption(this.selectVentana, REPORTE_6CONSOLIDADOS_RECHAZADOS_X_FECHA.VENTANA ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        break;
      case 7: //TOTALES EMISOR
      case 8: //DETALLE EMISOR
      case 9: //CONSOLIDADO EMISOR
      case 10://CONSOLIDADO PLATAFORMA
        if (REPORTE_ACONSOLIDADO_PLATAFORMA.MONEDA === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (REPORTE_ACONSOLIDADO_PLATAFORMA.MONEDA === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_ACONSOLIDADO_PLATAFORMA.FECHA)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, REPORTE_ACONSOLIDADO_PLATAFORMA.PLATAFORMA ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
        await pageR.locator(this.txtAfiliacion).fill(REPORTE_ACONSOLIDADO_PLATAFORMA.AFILIACION ?? "")
        await pageR.selectOption(this.selectVentana, REPORTE_ACONSOLIDADO_PLATAFORMA.VENTANA ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(REPORTE_ACONSOLIDADO_PLATAFORMA.TARJETA ?? "")
        break;
      case 11://RETENCIONES POR RIESGO
        if (REPORTE_BRETENCION_RIESGO.MONEDA === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (REPORTE_BRETENCION_RIESGO.MONEDA === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_BRETENCION_RIESGO.FECHA)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, REPORTE_BRETENCION_RIESGO.PLATAFORMA ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
        await pageR.locator(this.txtAfiliacion).fill(REPORTE_BRETENCION_RIESGO.AFILIACION ?? "")
        await pageR.selectOption(this.selectVentana, REPORTE_BRETENCION_RIESGO.VENTANA ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(REPORTE_BRETENCION_RIESGO.VENTANA ?? "")
        await pageR.locator(this.selectInternacional).click()
        await pageR.selectOption(this.selectInternacional, REPORTE_BRETENCION_RIESGO.INTERNACIONAL ?? "0 Domestico")
        break;
      case 12://LIBERACION RIESGO
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_CLIBERACION_RIESGO.FECHA)
        await pageR.locator(this.selectEmisor).click()
        await pageR.selectOption(this.selectEmisor, REPORTE_CLIBERACION_RIESGO.EMISOR ?? DATOS_POR_DEFECTO_POSBMR.EMISOR)
        await pageR.locator(this.txtAfiliacion).fill(REPORTE_CLIBERACION_RIESGO.AFILIACION ?? "")
        break;
      case 13://CONSOLIDADO RIESGO INTERNACIONAL
      case 14://DETALLE RIESGO INTERNACIONAL
        if (REPORTE_EDET_RIESGO_INT.MONEDA === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (REPORTE_EDET_RIESGO_INT.MONEDA === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_EDET_RIESGO_INT.FECHA)
        await pageR.locator(this.selectEmisor2).click()
        await pageR.selectOption(this.selectEmisor2, REPORTE_EDET_RIESGO_INT.EMISOR2 ?? DATOS_POR_DEFECTO_POSBMR.EMISOR2)
        break;
      case 15://SISTEMA DE CAPTURA BOTON DESACTIVADO NO DEJA DESCARGAR
       /* if (moneda === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (moneda === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(fechaProceso)
        */
        break;
      case 16://RECH LOTES A CAPTURA
        if (REPORTE_GRECH_LOTES_CAPTURA.MONEDA === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (REPORTE_GRECH_LOTES_CAPTURA.MONEDA === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_GRECH_LOTES_CAPTURA.FECHA)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, REPORTE_GRECH_LOTES_CAPTURA.PLATAFORMA2 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA2)
        await pageR.locator(this.txtAfiliacion).fill(REPORTE_GRECH_LOTES_CAPTURA.AFILIACION ?? "")
        await pageR.selectOption(this.selectVentana, REPORTE_GRECH_LOTES_CAPTURA.VENTANA ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(REPORTE_GRECH_LOTES_CAPTURA.TARJETA ?? "")
        if (REPORTE_GRECH_LOTES_CAPTURA.SUBTOTALES) {
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
        if (REPORTE_JDET_TXN_RECH_PROMOCIONES.MONEDA === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (REPORTE_JDET_TXN_RECH_PROMOCIONES.MONEDA === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_JDET_TXN_RECH_PROMOCIONES.FECHA)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, REPORTE_JDET_TXN_RECH_PROMOCIONES.PLATAFORMA2 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA2)
        await pageR.locator(this.txtAfiliacion).fill(REPORTE_JDET_TXN_RECH_PROMOCIONES.AFILIACION ?? "")
        await pageR.selectOption(this.selectVentana, REPORTE_JDET_TXN_RECH_PROMOCIONES.VENTANA ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(REPORTE_JDET_TXN_RECH_PROMOCIONES.TARJETA ?? "")
        if (REPORTE_JDET_TXN_RECH_PROMOCIONES.SUBTOTALES) {
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
       /* if (REPORTE_KTOT_TXN_ACEP_GRUPO_CADENA.MONEDA === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (REPORTE_KTOT_TXN_ACEP_GRUPO_CADENA.MONEDA === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_KTOT_TXN_ACEP_GRUPO_CADENA.FECHA)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, REPORTE_KTOT_TXN_ACEP_GRUPO_CADENA.PLATAFORMA ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
        await pageR.locator(this.txtAfiliacion).fill(REPORTE_KTOT_TXN_ACEP_GRUPO_CADENA.AFILIACION ?? "")
        await pageR.selectOption(this.selectVentana, REPORTE_KTOT_TXN_ACEP_GRUPO_CADENA.VENTANA ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(REPORTE_KTOT_TXN_ACEP_GRUPO_CADENA.TARJETA ?? "")
        await pageR.selectOption(this.selectTipoTransaccion, REPORTE_KTOT_TXN_ACEP_GRUPO_CADENA.VENTANA ?? DATOS_POR_DEFECTO_POSBMR.TRANSACCION)
        await pageR.locator(this.txtGrupoCadena).fill(REPORTE_KTOT_TXN_ACEP_GRUPO_CADENA.GRUPO_CADENA ?? "")
        if (REPORTE_KTOT_TXN_ACEP_GRUPO_CADENA.SUBTOTALES) {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'N' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        } else {
          await pageR.locator(this.checkSubtotales).getAttribute('value') === 'S' ?
            await pageR.locator(this.checkSubtotales).click() :
            await pageR.locator(this.checkSubtotales).getAttribute('value');
        }*/
        break;
      case 21: //L Tot. Txn. Rech.Grupo Cadena
        if (REPORTE_LTOT_TXN_RECH_GRUPO_CADENA.MONEDA === 'P') {
          await pageR.waitForSelector(this.checkPesos);
          await pageR.locator(this.checkPesos).click()
        } else if (REPORTE_LTOT_TXN_RECH_GRUPO_CADENA.MONEDA === 'D') {
          await pageR.waitForSelector(this.checkDolares);
          await pageR.locator(this.checkDolares).click()
        }
        await pageR.waitForSelector(this.txtFechaProceso);
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_LTOT_TXN_RECH_GRUPO_CADENA.FECHA)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, REPORTE_LTOT_TXN_RECH_GRUPO_CADENA.PLATAFORMA ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA)
        await pageR.locator(this.txtAfiliacion).fill(REPORTE_LTOT_TXN_RECH_GRUPO_CADENA.AFILIACION ?? "")
        await pageR.selectOption(this.selectVentana, REPORTE_LTOT_TXN_RECH_GRUPO_CADENA.VENTANA ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(REPORTE_LTOT_TXN_RECH_GRUPO_CADENA.TARJETA ?? "")
        await pageR.locator(this.txtGrupoCadena).fill(REPORTE_LTOT_TXN_RECH_GRUPO_CADENA.GRUPO_CADENA ?? "")
        if (REPORTE_LTOT_TXN_RECH_GRUPO_CADENA.SUBTOTALES) {
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
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_MCONSOLIDADO_PROMOCIONES.FECHA)
        await pageR.locator(this.selectEmisor).click()
        await pageR.selectOption(this.selectEmisor, REPORTE_MCONSOLIDADO_PROMOCIONES.PLATAFORMA3 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA3)
        //await pageR.locator(this.btnVistaPrevia).click()
        break;
      case 23: //N Sumario de Promociones Banamex
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_NSUMARIO_PROMOCIONES_BANAMEX.FECHA)
        //Reporte Original | Desgloce Compras / Devoluciones
        await pageR.locator(this.radiobtnDesgloceComprasDevoluciones).click()
        if (REPORTE_NSUMARIO_PROMOCIONES_BANAMEX.TIPO_REPORTE = 'D') {
          //Todas | Compras | Devoluciones
          await pageR.locator(this.tipoTransaccion).click()
        }
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, REPORTE_NSUMARIO_PROMOCIONES_BANAMEX.PLATAFORMA4 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA4)
        break;
      case 24: //P Reporte de Wal-Mart
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, REPORTE_PREPORTE_WALMART.PLATAFORMA5 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA5)
        await pageR.locator(this.txtAfiliacion).fill(REPORTE_PREPORTE_WALMART.AFILIACION ?? "")
        await pageR.locator(this.selectVentana).click()
        await pageR.selectOption(this.selectVentana, REPORTE_PREPORTE_WALMART.VENTANA ?? DATOS_POR_DEFECTO_POSBMR.VENTANA)
        await pageR.locator(this.txtTarjeta).fill(REPORTE_PREPORTE_WALMART.TARJETA)
        break;
      case 25: // Q Transacciones Cash
        await pageR.locator(this.txtFechaProceso).fill("")
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_QTRANSACCIONES.FECHA)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, REPORTE_QTRANSACCIONES.PLATAFORMA6 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA6)
        await pageR.locator(this.txtAfiliacion).fill(REPORTE_QTRANSACCIONES.AFILIACION ?? "")
        if (REPORTE_QTRANSACCIONES.SUBTOTALES) {
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
        await pageR.locator(this.txtFechaProceso).fill(REPORTE_RREPORTE_PAGOS_CASH.FECHA)
        await pageR.locator(this.selectPlataforma).click()
        await pageR.selectOption(this.selectPlataforma, REPORTE_RREPORTE_PAGOS_CASH.PLATAFORMA6 ?? DATOS_POR_DEFECTO_POSBMR.PLATAFORMA6)
        await pageR.locator(this.txtAfiliacion).fill(REPORTE_RREPORTE_PAGOS_CASH.AFILIACION ?? "")
        await pageR.locator(this.txtTarjeta).fill(REPORTE_RREPORTE_PAGOS_CASH.TARJETA ?? "")
        if (REPORTE_RREPORTE_PAGOS_CASH.SUBTOTALES) {
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
        /*await pageR.locator(this.fechaInicio).fill("")
        await pageR.locator(this.fechaInicio).fill(REPORTE_SREPORTE_RECHAZOS.FECHA_INICIO)
        await pageR.locator(this.selectCodigoRechazo).click()
        await pageR.selectOption(this.selectCodigoRechazo, REPORTE_SREPORTE_RECHAZOS.CODIGO_RECHAZO ?? "")
        */
        break;
      case 28: //S V Puntos BBVA
        await pageR.locator(this.fechaInicio).fill("")
        await pageR.locator(this.fechaInicio).fill(REPORTE_VAPUNTOS_BBVA.FECHA_INICIO)
        await pageR.locator(this.fechaInicio).fill("")
        await pageR.locator(this.fechaInicio).fill(REPORTE_VAPUNTOS_BBVA.FECHA_FIN)
        if(REPORTE_VAPUNTOS_BBVA.SALIDA_EXCEL){
          await pageR.locator(this.checkSalidaExcel).click()
        }else{
          break;
        }
        break;
    }
  }

  
  
}
