import { test, expect, chromium, type BrowserContext, FileChooser  } from '@playwright/test';
import { BasePage } from '../pages-objects/basePage';
import { NUMBERAPP } from '../data/constates';
import {DSSReportPage} from '../pages-objects/dSSReportPage';

//Comando para ejecutar el test: 
//npm run test:ReportesIntercambio
test('Reporte de intercambio', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const dSSReportPage = new DSSReportPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.DSSREPORT)
    await dSSReportPage.revisarReporteDSSReportDesplegar("10/05/2024", "10/05/2024",'1','2','2')
    await basePage.limpiarCookies (browserContext, browser)
});

