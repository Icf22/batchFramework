import { test, expect, chromium, type BrowserContext, FileChooser  } from '@playwright/test';
import { BasePage } from '../pages-objects/basePage';
import { NUMBERAPP } from '../data/constates';
import {InfrestructuraPage} from '../pages-objects/infrestructuraPage'

//Comando para ejecutar el test: 
//npm run test:ReportesIntercambio
test('Infra', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const infrestructuraPage = new InfrestructuraPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.INFRESTRUCTURA)
    await infrestructuraPage.revisarReporte(0)
    //await dSSReportPage.revisarReporteDSSReportDesplegar("10/05/2024", "10/05/2024",'1 Lectura del archivo','2 Crédito','2 Bancomer-Banamex')
    await basePage.limpiarCookies (browserContext, browser)
});

