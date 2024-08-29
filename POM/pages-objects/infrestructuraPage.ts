import { BrowserContext, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { URLS } from "../data/constates";
import { DEFECTO_INFRESTRUCTURA } from "../data/infrestructura/constantesInfrestructuraDefecto";
import { 
  REPORTES_INTERCAMBIO,
  REPORTES_WORKPLAY,
  INTERCAMBIO_BANORTE,
  INTERCAMBIO_CITIBANK,
} from "../data//infrestructura/Home";
import{
  EVO_PAYMENTS,
  EMS_PAYMENTS,
  BANCOMER,
  ADQUIRIENTE_BANCOMER,
  ADQUIRIENTE_WALMART,
  WALMART_CADENA_EMISOR,
  CITIBANK,
  INBURSA,
  PAGATODO,
  BANORTE,
  EGLOBAL,
  VOLUMEN_TRANSACCIONAL,
  ATM_POS,
  ADQUIRIENTES_WALMART,
} from "../data/infrestructura/flujoTransaccional"
import{
  FACTURACION_BANCOMER,
  FACTURACION_CITIBANK,
  FACTURACION_INBURSA,
  FACTURACION_BANAMEX,
  FACTURACION_BANCOOPEL,
  FACTURACION_MC_DOMESTICO,
  FACTURACION_EVERTEC,
  FACTURACION_CI_BANCO,
  FACTURACION_AMERICAN_EXPRESS,
  FACTURACION_CI_BANCO_2,
  FACTURACION_PAGATODO,
} from "../data/infrestructura/facturacion"
import{
  REC_FALTANTES_PROSA_BX,
  REC_FALTANTES_PROSA_BMR,
  REC_FALTANTES_PROSA_BCPL,
  REC_FALTANTES_PROSA_MCDOM,
  REC_FALTANTES_PROSA_EVERTEC,
  REC_FALTANTES_PROSA_CI_BANCO,
  REC_FALTANTES_PROSA_PAGATODO  
} from "../data/infrestructura/rechazos"

export class InfrestructuraPage extends BasePage {
  pageReporte?: Page;
  //#region HOME
  readonly txtFechaInicio: string;
  readonly txtFechaFin: string; 
  //#region REPORTES_HOME
  readonly btnReportesIntercarmbio: string;
  readonly btnIntercambioWorplay: string;
  readonly btnIntercambioBanorte: string;
  readonly btnIntercambioCitibank: string;
  //#region FLUJO_TRANSACCIONAL
  readonly selectFlujoTransaccional: string;
  readonly opEvoPayments: string;
  readonly opEmsPayments: string;
  readonly opBancomer: string;
  readonly opAdqBancomer: string;
  readonly opAdqWalmart: string;
  readonly opWalmartCadenaEmisor: string;
  readonly opCityBanc: string;
  readonly opInbursa: string;
  readonly opPagaTodo: string;
  readonly opBanorte: string;
  readonly opEglobal: string;
  readonly opVolumenTransaccional: string;
  readonly opAtmPos: string;
  readonly opPDF: string;
  readonly opExcel: string;
  readonly opAdquirientesWalmart: string;
 //#region FACTURACION
  readonly selectFacturacion: string;
  readonly opFactBancomer: string;
  readonly opFactCitibank: string;
  readonly opFactInbursa: string;
  readonly opFactBanamex: string;
  readonly opFactBancoopel: string;
  readonly opFactMcDomestico: string;
  readonly opFactEvertec: string;
  readonly opFactCiBanco: string;
  readonly opFactAmericanExpress: string;
  readonly opFactCiBanco2: string;
  readonly opFactPagaTodo: string; 
  readonly txtTarifa: string;
  readonly btnConfirmar: string; 
  //#region RECHAZOS
  readonly selectRechazos: string;
  readonly opRecFaltantesProsaBx: string;
  readonly opRecFaltantesProsaBmr: string;
  readonly opRecFaltantesProsaBcpl: string;
  readonly opRecFaltantesProsaMcDom: string;
  readonly opRecFaltantesProsaEvertec: string;
  readonly opRecFaltantesProsaCiBanco: string;
  readonly opRecFaltantesProsaPagaTodo: string;
  //#endregion
  constructor(browserContext) {
    super(browserContext);
    this.pageReporte = undefined;
    //Home
    this.txtFechaInicio = "//input[@name='vFCHINI_MPAGE']"
    this.txtFechaFin = "//input[@name='vFCHFIN_MPAGE']"
    this.btnReportesIntercarmbio = "//input[@name='BUTTON1_MPAGE']"
    this.btnIntercambioWorplay = "//input[@name='BUTTONEVO2_MPAGE']" 
    this.btnIntercambioBanorte = "//input[@name='BUTTON2_MPAGE']"
    this.btnIntercambioCitibank = "//input[@name='BUTTON3_MPAGE']"
    //Flujo Transaccional
    this.selectFlujoTransaccional = "//a[text()='Flujo transaccional']"
    this.opEvoPayments = "//a[text()=' EVO Payments']"
    this.opEmsPayments = "//a[text()=' EMS Payments']"
    this.opBancomer = "//a[text()=' Bancomer']"
    this.opAdqBancomer = "//a[text()=' Adquirente Bancomer']"
    this.opAdqWalmart = "//a[text()=' Adquirente WalMart']"
    this.opWalmartCadenaEmisor = "//a[text()=' Wal Mart cadena / Emisor']"
    this.opCityBanc = "//a[text()=' Citibank']"
    this.opInbursa = "//a[text()=' Inbursa']"
    this.opPagaTodo = "//a[text()=' Pagatodo']"
    this.opBanorte = "//a[text()=' Banorte']"
    this.opEglobal = "//a[text()=' E-Global']"
    this.opVolumenTransaccional = "//a[text()=' Volúmen Transacional']"
    this.opAtmPos = "//a[text()=' ATM / POS']"
    this.opPDF = "//a[text()=' PDF']"
    this.opExcel = "//a[text()=' Excel']"
    this.opAdquirientesWalmart = "//a[text()=' Adquirientes Wal Mart']"
    //Facturacion
    this.selectFacturacion = "//a[text()='Facturación']"
    this.opFactBancomer = "//a[text()=' Facturación Bancomer']"
    this.opFactCitibank = "//a[text()=' Facturación Citibank']"
    this.opFactInbursa = "//a[text()=' Facturación Inbursa']"
    this.opFactBanamex = "//a[text()=' Facturación Banamex']"
    this.opFactBancoopel = "//a[text()=' Facturación Bancoppel']"
    this.opFactMcDomestico = "//a[text()=' Facturación MC Domestico']"
    this.opFactEvertec = "//a[text()=' Facturación Evertec']"
    this.opFactCiBanco = "(//a[text()=' Facturación CI Banco'])[1]"
    this.opFactAmericanExpress = "//a[text()=' Facturación American Express']"
    this.opFactCiBanco2 = "(//a[text()=' Facturación CI Banco'])[2]"
    this.opFactPagaTodo = "//a[text()=' Facturación PagaTodo']"
    this.txtTarifa = "//input[@id='vTARIFA']"
    this.btnConfirmar = "//input[@name='BUTTON1']"
    //Rechazos
    this.selectRechazos = "//a[text()='Rechazos']"
    this.opRecFaltantesProsaBx = "//a[text()=' Rec. Faltantes Prosa Bx']"
    this.opRecFaltantesProsaBmr = "//a[text()=' Rec. Faltantes Prosa Bmr']"
    this.opRecFaltantesProsaBcpl = "//a[text()=' Rec. Faltantes Prosa Bcpl']"
    this.opRecFaltantesProsaMcDom = "//a[text()=' Rec. Faltantes Prosa MC Dom']"
    this.opRecFaltantesProsaEvertec = "//a[text()=' Rec. Faltantes Prosa Evertec']"
    this.opRecFaltantesProsaCiBanco = "//a[text()=' Rec. Faltantes Prosa CI Banco']"
    this.opRecFaltantesProsaPagaTodo = "//a[text()=' Rec. Faltantes Prosa PagaTodo']"
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
    const pageReporte = await this.inicializarPage(URLS.INFRESTRUCTURA);
    let btnTipoReporte = this.btnReportesIntercarmbio;
    let esExcel = false;
    //DEFINIMOS EL OBJETO PARA LOS DIFERENTES APARTADOS DE CADA REPORTE
    const opcionesAEjecutar = {
      1:this.btnReportesIntercarmbio,
      2:this.btnIntercambioWorplay,
      3:this.btnIntercambioBanorte,
      4:this.btnIntercambioCitibank,
      5:this.opEvoPayments,
      6:this.opEmsPayments,
      7:this.opBancomer,
      8:this.opAdqBancomer,
      9:this.opAdqWalmart,
      10:this.opWalmartCadenaEmisor,
      11:this.opCityBanc,
      12:this.opInbursa,
      13:this.opPagaTodo,
      14:this.opBanorte,
      15:this.opEglobal,
      16:this.opVolumenTransaccional,
      17:this.opAtmPos,
      18:this.opAdquirientesWalmart,
      19:this.opFactBancomer,
      20:this.opFactCitibank,
      21:this.opFactInbursa,
      22:this.opFactBanamex,
      23:this.opFactBancoopel,
      24:this.opFactMcDomestico,
      25:this.opFactEvertec,
      26:this.opFactCiBanco,
      27:this.opFactAmericanExpress,
      28:this.opFactCiBanco2,
      29:this.opFactPagaTodo,
    };
  
    const dataReporte = {
      1: REPORTES_INTERCAMBIO,
      2: REPORTES_WORKPLAY,
      3: INTERCAMBIO_BANORTE,
      4: INTERCAMBIO_CITIBANK,
      5: EVO_PAYMENTS,
      6: EMS_PAYMENTS,
      7: BANCOMER,
      8: ADQUIRIENTE_BANCOMER,
      9: ADQUIRIENTE_WALMART,
      10: WALMART_CADENA_EMISOR,
      11: CITIBANK,
      12: INBURSA,
      13: PAGATODO,
      14: BANORTE,
      15: EGLOBAL,
      16: VOLUMEN_TRANSACCIONAL,
      17: ATM_POS,
      18: ADQUIRIENTES_WALMART,
      19: FACTURACION_BANCOMER,
      20: FACTURACION_CITIBANK,
      21: FACTURACION_INBURSA,
      22: FACTURACION_BANAMEX,
      23: FACTURACION_BANCOOPEL,
      24: FACTURACION_MC_DOMESTICO,
      25: FACTURACION_EVERTEC,
      26: FACTURACION_CI_BANCO,
      27: FACTURACION_AMERICAN_EXPRESS,
      28: FACTURACION_CI_BANCO_2,
      29: FACTURACION_PAGATODO,
      30: REC_FALTANTES_PROSA_BX,
      31: REC_FALTANTES_PROSA_BMR,
      32: REC_FALTANTES_PROSA_BCPL,
      33: REC_FALTANTES_PROSA_MCDOM,
      34: REC_FALTANTES_PROSA_EVERTEC,
      35: REC_FALTANTES_PROSA_CI_BANCO,
      36: REC_FALTANTES_PROSA_PAGATODO      
    }

    const botonesSubmenu = {
      1: this.opPDF,
      2: this.opExcel
    }

    //Revisar fechas para 2, 9 y 10 y buscar las que arrojen reporte
    const reportesAIgnorar = [6,7,16]
    const reportesExcel = [1,2,3,4]
    let reporteData = dataReporte[reporteARevisar];
    // SI EL REPORTE A REVISAR ES 0 (TODOS) ENTRA EN ESTE CASO
    if (reporteARevisar === 0) 
    {
      for (let i = 1; i <= 18 /*Object.keys(opcionesAEjecutar).length*/; i++) {
        const opcion = opcionesAEjecutar[i];
        let boton = opcion
        reporteData = dataReporte[i]
  
        // CUANDO I SEA IGUAL A UNO DE ESOS NUMEROS ENTRA AL IF Y CON EL CONTINUE TERMINA ESA ITERACION Y CONTINUA CON LA PROXIMA
        if (reportesAIgnorar.includes(i)) {
          continue;
        }
        if(reportesExcel.includes(i)){
          esExcel = true
        }
        if([17].includes(i)){
          esExcel = ATM_POS.ES_EXCEL;
          boton = esExcel? botonesSubmenu[2]:botonesSubmenu[1]
        }        
        await Promise.all([
          //pageReporte.locator(opcion).click(),
          pageReporte.waitForLoadState('networkidle')
        ]);
        await this.ingresarDatosReporte(pageReporte, i, reporteData);
        await this.validarDescargaInfra(pageReporte, boton, opcion, esExcel);
      }
    } 
    else 
    { 
      btnTipoReporte = opcionesAEjecutar[reporteARevisar]
      await pageReporte.locator(btnTipoReporte).click();
      await this.ingresarDatosReporte(pageReporte, reporteARevisar, reporteData);
      const boton = opcionesAEjecutar[reporteARevisar];
      await this.validarDescargaInfra(pageReporte, boton, btnTipoReporte, esExcel);
    }
  }
  async ingresarDatosReporte(pageR: Page,numeroReporte: number,reporteData: any) {
    await pageR.waitForTimeout(980);
    const fechaInicial = reporteData.FECHA_INICIO ?? DEFECTO_INFRESTRUCTURA.FECHA_INICIO;
    const fechaFinal = reporteData.FECHA_FIN ?? DEFECTO_INFRESTRUCTURA.FECHA_FIN;
    const tarifa = reporteData.TARIFA ?? DEFECTO_INFRESTRUCTURA.TARIFA;  
    switch (numeroReporte) {
      case 1: // REPORTES DE INTERCAMBIO (Excel)
      case 2: // INTERCAMBIO WORKPLAY (Excel)
      case 3: // INTERCAMBIO BANORTE (Excel)
      case 4: // INTERCAMBIO CITIBANK (Excel)
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        break;
      case 5: // EVO PAYMENTS (PDF)
      case 6: // EMS PAYMENTS (NO SE GENERO)
      case 7: // BANCOMER (SE OMITE)
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectFlujoTransaccional)
        break; 
      case 8: // ADQUIRIENTE BANCOMER (PDF)
        await pageR.waitForTimeout(5000)
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionB(pageR, this.selectFlujoTransaccional, this.opBancomer)
        break;
      case 9: // ADQUIRIENTE WALMART (PDF) (SE OMITE)
      case 10: // WALMART CADENA EMISOR (PDF) (SE OMITE)
      await pageR.waitForTimeout(2000)
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionB(pageR, this.selectFlujoTransaccional, this.opBancomer)
        break;
      case 11: // CITIBANK (PDF)
      case 12: // INBURSA (PDF)
      case 13: // PAGATODO (PDF)
      case 14: // BANORTE (PDF)
      case 15: // EGLOBAL (PDF)
      case 16: // VOLUMEN TRANSACCIONAL(SE OMITE)
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectFlujoTransaccional)
        break;
      case 17: // ATM/POS (PDF)(Excel)
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionC(pageR, this.selectFlujoTransaccional,this.opVolumenTransaccional,this.opAtmPos)
        break;
      case 18: // ADQUIRIENTES WALMART (PDF)
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionB(pageR, this.selectFlujoTransaccional,this.opVolumenTransaccional)
        break;
     
     
        case 19: // FACTURACION BANCOMER
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectFacturacion)
        await pageR.locator(this.opFactBancomer)
        await this.ingresarTarifa(pageR, tarifa)
        break;
      case 20: // FACTURACION CITIBANK
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectFacturacion)
        await pageR.locator(this.opFactBancomer)
        await this.ingresarTarifa(pageR, tarifa)
        break;
      case 21: // FACTURACION INBURSA
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectFacturacion)
        await pageR.locator(this.opFactInbursa)
        await this.ingresarTarifa(pageR, tarifa)
        break;
      case 22: // FACTURACION BANAMEX
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectFacturacion)
        await pageR.locator(this.opFactBanamex)
        await this.ingresarTarifa(pageR, tarifa)
        break;
      case 23: // FACTURACION BANCOOPEL
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectFacturacion)
        await pageR.locator(this.opFactBancoopel)
        await this.ingresarTarifa(pageR, tarifa)
        break;
      case 24: // FACTURACION MC DOMESTICO
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectFacturacion)
        await pageR.locator(this.opFactMcDomestico)
        await this.ingresarTarifa(pageR, tarifa)
        break;
      case 25: // FACTURACION EVERTEC
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectFacturacion)
        await pageR.locator(this.opFactEvertec)
        await this.ingresarTarifa(pageR, tarifa)
        break;
      case 26: // FACTURACION CI BANCO
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectFacturacion)
        await pageR.locator(this.opFactCiBanco)
        await this.ingresarTarifa(pageR, tarifa)
        break;
      case 27: // FACTURACION AMERICAN EXPRESS
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectFacturacion)
        await pageR.locator(this.opFactAmericanExpress)
        await this.ingresarTarifa(pageR, tarifa)
        break;
      case 28: // FACTURACION CI BANCO 2
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectFacturacion)
        await pageR.locator(this.opFactCiBanco2)
        await this.ingresarTarifa(pageR, tarifa)
        break;
      case 29: // FACTURACION PAGATODO
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectFacturacion)
        await pageR.locator(this.opFactPagaTodo)
        await this.ingresarTarifa(pageR, tarifa)
        break;
      case 30: // REC. FALTANTES PROSA BX
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectRechazos)
        await pageR.locator(this.opRecFaltantesProsaBx)
        await this.ingresarTarifa(pageR, tarifa)
        break;          
      case 31: // REC. FALTANTES PROSA BMR
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectRechazos)
        await pageR.locator(this.opRecFaltantesProsaBmr)
        await this.ingresarTarifa(pageR, tarifa)
        break;           
      case 32: // REC. FALTANTES PROSA BCPL
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectRechazos)
        await pageR.locator(this.opRecFaltantesProsaBcpl)
        await this.ingresarTarifa(pageR, tarifa)
        break;  
      case 33: // REC. FALTANTES PROSA MC DOM
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectRechazos)
        await pageR.locator(this.opRecFaltantesProsaMcDom)
        await this.ingresarTarifa(pageR, tarifa)
        break; 
      case 34: // REC. FALTANTES PROSA EVERTEC
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectRechazos)
        await pageR.locator(this.opRecFaltantesProsaEvertec)
        await this.ingresarTarifa(pageR, tarifa)
        break;            
      case 35: // REC. FALTANTES PROSA CI BANCO
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectRechazos)
        await pageR.locator(this.opRecFaltantesProsaCiBanco)
        await this.ingresarTarifa(pageR, tarifa)
        break;
      case 36: // REC. FALTANTES PROSA PAGATODO
        await this.llenarFechaProceso(pageR, fechaInicial, fechaFinal)
        await this.hoverOpcionA(pageR, this.selectRechazos)
        await pageR.locator(this.opRecFaltantesProsaPagaTodo)
        await this.ingresarTarifa(pageR, tarifa)
        break;     
    }
  }

  async llenarFechaProceso(page: Page, fechaInicio: string, fechaFin: string) {
    await page.waitForSelector(this.txtFechaInicio);
    await page.waitForSelector(this.txtFechaFin);
    await page.locator(this.txtFechaInicio).fill('');
    await page.locator(this.txtFechaInicio).fill(fechaInicio);
    await page.locator(this.txtFechaFin).fill('');
    await page.locator(this.txtFechaFin).fill(fechaFin);
  }

  async ingresarTarifa(page: Page, tarifa: string){
    await page.waitForSelector(this.txtTarifa);
    await page.locator(this.txtTarifa).fill(tarifa)
  }

  async hoverOpcionA(page: Page, select: string){
    await page.waitForSelector(select)
    await page.locator(select).hover()
  }

  async hoverOpcionB(page: Page, select: string, opcionA){
    await page.waitForSelector(select)
    await page.locator(select).hover()
    await page.locator(opcionA).hover()
  }

  async hoverOpcionC(page: Page, select: string, opcionA: string, opcionB: string){
    await page.waitForSelector(select)
    await page.locator(select).hover()
    await page.locator(opcionA).hover()
    await page.locator(opcionB).hover()
  }
  
}
