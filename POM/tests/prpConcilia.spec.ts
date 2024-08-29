import { test, expect, chromium, type BrowserContext, FileChooser  } from '@playwright/test';
import { BasePage } from '../pages-objects/basePage';
import { NUMBERAPP } from '../data/constates';
import { PrpConcilia } from '../pages-objects/prpConciliaPage';


//Comando para ejecutar el test: 
//npm run test:Liquidacion
test('Liquidacion', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext());
  const browserContext = await basePage.inicializarExtension();
  const prpConcilia = new PrpConcilia(browserContext);
  
    await basePage.iniciarSesion(browserContext);
    await basePage.abrirExtension (browserContext,NUMBERAPP.PRPCONCILIA);
    //await prpConcilia.revisarReportePRPConciliaLiquidacion(0);
    await prpConcilia.revisarReportePRPConciliaLiquidacion(0);
    await basePage.limpiarCookies (browserContext, browser);
});

