import { BrowserContext, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { NOMBRE_REPORTES, URLS } from "../data/constates";

export class DSSReportPage extends BasePage {
  pageReporte?: Page;
  //Fechas
  readonly fechaInicial: string;
  readonly fechaFinal: string;
  //Criterios
  readonly selectTipo:string;
  readonly selectCategoria:string;
  readonly selectSubCategoria:string;
  readonly checkboxExcel:string;
  readonly btnDesplegar : string;
  //Reportes aplicaciones Batch
  readonly radiobtnPolizaBancomer:string;
  readonly radiobtnPolizaBancomerZip:string;
  readonly radiobtnSwitchPOSBatch:string;
  readonly radiobtnPagosInterbancarios:string;
  readonly fechaPago: string;
  readonly btnGenerar : string;
  //Transacciones No Identificadas
  readonly btnProsa: string;
  readonly btnMcCamara: string;
  
  constructor(browserContext) {
    super(browserContext);
    this.fechaInicial = "//input[@name='vFECHAINICIAL']"
    this.fechaFinal = "//input[@name='vFECHAFINAL']"
    this.selectTipo = "//select[@name='vVTIPO']"
    this.selectCategoria = "//select[@name='vVCATEGORIA']"
    this.selectSubCategoria = "//select[@name='vVSUBCATEGORIA']"
    this.btnDesplegar = "//input[@name='BUTTON1']"
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

  async revisarReporteDSSReportDesplegar(fechaIni: string, fechaFin:string, tipo:string, categoria:string, subCategoria:string){
    const pageReporte = await this.inicializarPage(URLS.DSSREPORT);
    await pageReporte.waitForLoadState('networkidle')
    await pageReporte.locator(this.fechaInicial).fill("")
    await pageReporte.locator(this.fechaInicial).fill(fechaIni)
    await pageReporte.locator(this.fechaFinal).fill("")
    await pageReporte.locator(this.fechaFinal).fill(fechaFin)
    await pageReporte.locator(this.selectTipo).click()
    await pageReporte.waitForTimeout(1500)
    await pageReporte.selectOption(this.selectTipo, { value: tipo })
    await pageReporte.locator(this.selectCategoria).click()
    await pageReporte.selectOption(this.selectCategoria, { value: categoria });
    await pageReporte.waitForTimeout(1500)
    await pageReporte.locator(this.selectSubCategoria).click()
    await pageReporte.selectOption(this.selectSubCategoria, { value: subCategoria });
    await this.validarDescarga(pageReporte,this.btnDesplegar,NOMBRE_REPORTES.DSS_REPORT)
    await pageReporte.waitForTimeout(5000)
  }

  
}
