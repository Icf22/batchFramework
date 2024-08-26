import { BrowserContext, Locator, Page } from "@playwright/test";
import path from "path";
import fs from 'fs/promises';
import { BasePage } from "./basePage";
import { CONSOLA, URLS, XPATH } from "../data/constates";
import { DEFECTO_POSBMR } from "../data/posBMR/constantesPosBMRDefecto";
import {
  POSBMR
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
    this.tipoTransaccion = `//input[@value='${DEFECTO_POSBMR.TIPO_TRANSACCION}' and @name='vTPO_TXN']`;
    this.radiobtnTipoReporte = `//input[@value='${DEFECTO_POSBMR.TIPO_REPORTE}']`
    this.radiobtnDesgloceComprasDevoluciones = `//input[@name='vT_REPORTE' and @value='${DEFECTO_POSBMR.TIPO_REPORTE}']`
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
      1: POSBMR,
    }

    const reportesSinPlataforma = [12,13,14,15,22,27,28];
    const reportesFallan = [23,27];
    const reportesExcel = [22];
    const salidaExcel = [28];
    let reporteData = dataReporte[1];
    let baseDir = "";
    // SI EL REPORTE A REVISAR ES 0 (TODOS) ENTRA EN ESTE CASO
    if (reporteARevisar === 0) 
    {
      for (let i = 1; i <= Object.keys(opcionesAEjecutar).length; i++) {
        const opcion = opcionesAEjecutar[i];
        const boton = botonesAEjecutar[i];
  
        // CUANDO I SEA IGUAL A UNO DE ESOS NUMEROS ENTRA AL IF Y CON EL CONTINUE TERMINA ESA ITERACION Y CONTINUA CON LA PROXIMA
        if (reportesFallan.includes(i)) {
          continue;
        }
        if(salidaExcel.includes(i)){
          esExcel = DEFECTO_POSBMR.SALIDA_EXCEL;
        }
        if(reportesExcel.includes(i)){
          esExcel = true;
        }
        await Promise.all([
          pageReporte.locator(opcion).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await pageReporte.locator(opcion).click(),
        await this.ingresarDatosReporte(pageReporte, i, reporteData, boton, opcion, esExcel);
        if(reportesSinPlataforma.includes(i)){
          baseDir = "";
          const reporteDescargado = await this.obtenerTexto(pageReporte, opcion);
          CONSOLA.EspacioConNombre(reporteDescargado ?? "");
          //await this.validarDescargaPOSBMR(pageReporte, boton, opcion, esExcel);
          baseDir = await this.validarDescargaPOSBMR2(pageReporte, boton, opcion, esExcel, "") ?? baseDir;
          const totalDescargados = await this.contarArchivosDescargados(baseDir);
          CONSOLA.AvisoSinPlataformas(reporteDescargado ?? "", totalDescargados);
          CONSOLA.DivisionInfo();
          CONSOLA.EspacioNombreTotal(reporteDescargado ?? "", totalDescargados);
          CONSOLA.CierreDeBloque();
        }
      }
    } 
    else 
    { 
      btnTipoReporte = opcionesAEjecutar[reporteARevisar]
      await pageReporte.locator(btnTipoReporte).click();
      const boton = botonesAEjecutar[reporteARevisar];
      await this.ingresarDatosReporte(pageReporte, reporteARevisar, reporteData, boton, btnTipoReporte, esExcel);
      if(reportesSinPlataforma.includes(reporteARevisar)){
        
          baseDir = "";
          const reporteDescargado = await this.obtenerTexto(pageReporte, btnTipoReporte);
          CONSOLA.EspacioConNombre(reporteDescargado ?? "");
          baseDir = await this.validarDescargaPOSBMR2(pageReporte, boton, btnTipoReporte, esExcel, "") ?? baseDir;
          const totalDescargados = await this.contarArchivosDescargados(baseDir);
          CONSOLA.AvisoSinPlataformas(reporteDescargado ?? "");
          CONSOLA.DivisionInfo();
          CONSOLA.EspacioNombreTotal(reporteDescargado ?? "", totalDescargados);
          CONSOLA.CierreDeBloque();
      }
    }
  }
  async ingresarDatosReporte(pageR: Page,numeroReporte: number,reporteData: any, boton, btnTipoReporte, esExcel) {
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
      case 2: // DETALLE DE TRANSACCIONES ACEPTADAS
      case 3: // TRANSACCIONES RECHAZADAS
      case 4: // DETALLE DE TRANSACCIONES RECHAZADAS
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        //await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        if (numeroReporte === 1 || numeroReporte === 2) {
          await this.seleccionarTipoTransaccion(pageR, transaccion);
        }
        await this.manipularSubtotales(pageR, subtotales);
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma, boton, btnTipoReporte, esExcel);
        break;
      case 5: // RECHAZADAS NO PROCESADAS
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        //await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.seleccionarVentana(pageR, ventana);
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma, boton, btnTipoReporte, esExcel);
        break;
      case 6: // CONSOLIDADO DE RECHAZADOS
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        //await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.seleccionarVentana(pageR, ventana);
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma, boton, btnTipoReporte, esExcel);
        break;
      case 7: // TOTALES EMISOR
      case 8: // DETALLE EMISOR
      case 9: // CONSOLIDADO EMISOR
      case 10: // CONSOLIDADO PLATAFORMA
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        //await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma, boton, btnTipoReporte, esExcel);
        break;
      case 11: // RETENCIONES POR RIESGO
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        //await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        await this.seleccionarInternacional(pageR, internacional);
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma, boton, btnTipoReporte, esExcel);
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
        //await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA2 ?? DEFECTO_POSBMR.PLATAFORMA2);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        await this.manipularSubtotales(pageR, reporteData.SUBTOTALES);
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma, boton, btnTipoReporte, esExcel);
        break;
      case 17: // TOTAL TRANSACCIONES PROMOCIONES
      case 18: // DETALLE TRANSACCIONES PROMOCIONES
      case 19: // DETALLE TRANSACCIONES RECHAZADAS PROMOCIONES
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        //await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA2 ?? DEFECTO_POSBMR.PLATAFORMA2);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        await this.manipularSubtotales(pageR, reporteData.SUBTOTALES);
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma, boton, btnTipoReporte, esExcel);
        break;
      case 20: // K Tot. Txn. Acep.Grupo Cadena
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        //await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        await this.seleccionarTipoTransaccion(pageR, transaccion)
        await pageR.locator(this.txtGrupoCadena).fill(grupoCadena);
        await this.manipularSubtotales(pageR, reporteData.SUBTOTALES);
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma, boton, btnTipoReporte, esExcel);
        //await this.manipularModal(pageR, reporteData.OPCIONMODAL);
        break;
      case 21: // L Tot. Txn. Rech.Grupo Cadena
        await this.seleccionarMoneda(pageR, moneda);
        await this.llenarFechaProceso(pageR, fecha);
        //await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA ?? DEFECTO_POSBMR.PLATAFORMA);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        await pageR.locator(this.txtGrupoCadena).fill(grupoCadena);
        await this.manipularSubtotales(pageR, reporteData.SUBTOTALES);
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma, boton, btnTipoReporte, esExcel);
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
        //await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA4 ?? DEFECTO_POSBMR.PLATAFORMA4);
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma, boton, btnTipoReporte, esExcel);
        break;
      case 24: // P Reporte de Wal-Mart
        //await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA5 ?? DEFECTO_POSBMR.PLATAFORMA5);
        await this.llenarFechaProceso(pageR, fecha);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.seleccionarVentana(pageR, ventana);
        await this.llenarTarjeta(pageR, tarjeta);
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma, boton, btnTipoReporte, esExcel);
        break;
      case 25: // Q Transacciones Cash
        await this.llenarFechaProceso(pageR, fecha);
        //await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA6 ?? DEFECTO_POSBMR.PLATAFORMA6);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.manipularSubtotales(pageR, reporteData.SUBTOTALES);
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma, boton, btnTipoReporte, esExcel);
        break;
      case 26: // R Reporte Pagos y Cash
        await this.llenarFechaProceso(pageR, fecha);
        //await this.seleccionarPlataforma(pageR, reporteData.PLATAFORMA6 ?? DEFECTO_POSBMR.PLATAFORMA6);
        await this.llenarAfiliacion(pageR, afiliacion);
        await this.llenarTarjeta(pageR, tarjeta);
        await this.manipularSubtotales(pageR, subtotales);
        await this.ObtenerOptionsPlataforma(pageR, this.selectPlataforma, boton, btnTipoReporte, esExcel);
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
  async ObtenerOptionsPlataforma(pageR, locator, boton, btnTipoReporte, esExcel) {
    const loc = locator + "/option";

    //EVALUAS TODA LA PAGINA CON EL EVALUATE
    const options = await pageR.evaluate((xpath) => {
      //CREAMOS LA VARIABLE DONDE SE ALMACENARAN LOS DATOS DEL OPTION (ES UN OBJETO)
      const result: { value: string | null, text: string | null }[] = [];
      //EVALUA EL SELECT PARA TRAER POSTERIOTMENTE LAS OPCIONES Y LOS DATOS NECESARIOS
      const iterator = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
      //VA ITERANDO Y ME TRAE LA PRIMER LINEA DESPUES LA SEGUNDA Y ASI SUCESIVAMENTE
      let node = iterator.iterateNext() as HTMLElement | null;
      // ITERA HASTA QUE NO ENCUENTRA VARIABLE OPTION
      while (node) {
        //INSERTA EL DATO EN LA VARIABLE DE OBJETOS QUE CREAMOS ANTES
        result.push({
          value: node.getAttribute('value'),
          text: node.textContent?.trim() || ''
        });
        // ITERA SOBRE LA SIGUIENTE LINEA DEL OPTION, SI NO ENCUENTRA TERMINA
        node = iterator.iterateNext() as HTMLElement | null;
      }
      //ME REGRESA LOS DATOS ES DECIR EL OBJETO QUE CONTENDRA EL VALUE Y EL TEXT
      return result;
    }, loc);

    let baseDir = "";
    const reporteDescargado = await this.obtenerTexto(pageR, btnTipoReporte);
    CONSOLA.EspacioConNombre(reporteDescargado ?? "");
    for (const option of options) {
      const text = option.text.toLowerCase();
      if (text !== 'todas' && text !== 'seleccione una plataforma' /*text === "7eleven" || text === "walmart" || text === "captura abono" || text === "oxxo"*/){
        await pageR.selectOption(locator, option.value);
        baseDir = await this.validarDescargaPOSBMR2(pageR, boton, btnTipoReporte, esExcel, option.text) ?? baseDir;
      }
    }
    const totalDescargados = await this.contarArchivosDescargados(baseDir);
    CONSOLA.TotalPlataformas(reporteDescargado ?? "", options.length);
    CONSOLA.DivisionInfo();
    CONSOLA.EspacioNombreTotal(reporteDescargado ?? "", totalDescargados);
    CONSOLA.CierreDeBloque();
  }
  async contarArchivosDescargados(carpeta: string): Promise<number> {
    try {
      const archivos = await fs.readdir(carpeta); // Lee el contenido de la carpeta
      return archivos.length; // Devuelve el número de archivos
    } catch (error) {
      return 0;
    }
  }
  
}


