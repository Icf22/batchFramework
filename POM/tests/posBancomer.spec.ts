import { test, expect, chromium, type BrowserContext, FileChooser  } from '@playwright/test';
import { BasePage } from '../pages-objects/basePage';
import { PosBMRPage } from '../pages-objects/posBMRPage';
import { NUMBERAPP } from '../data/constates';

//Comando para ejecutar el test:
//npm run test:TodasTranscPosBanc
test('TodasLasTransaccionesPosBanc', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(0)
    await basePage.limpiarCookies (browserContext, browser)
});

//Comando para ejecutar el test:
//npm run test:TransAceptadas
test('1TotalTransaccionesAceptadas', async ({ browser }) => {
const basePage = new BasePage(await browser.newContext())
const browserContext = await basePage.inicializarExtension()
const posBMRPage = new PosBMRPage(browserContext);

  await basePage.iniciarSesion(browserContext)
  await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
  await posBMRPage.revisarReporte(1)
  await basePage.limpiarCookies (browserContext, browser)
});

//Comando para ejecutar el test:
//npm run test:DetallTransAceptadas
test('2DetaTranAcep', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(2)
    await basePage.limpiarCookies (browserContext, browser)
});

//Comando para ejecutar el test:
//npm run test:TotalTransRechazadas
test('3TotalTranRech', async ({ browser }) => {
    const basePage = new BasePage(await browser.newContext())
    const browserContext = await basePage.inicializarExtension()
    const posBMRPage = new PosBMRPage(browserContext);
    
      await basePage.iniciarSesion(browserContext)
      await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
      await posBMRPage.revisarReporte(3)
      await basePage.limpiarCookies (browserContext, browser)
});

//Comando para ejecutar el test:
//npm run test:DetallTransRechazadas
test('4DetallTranRech', async ({ browser }) => {
      const basePage = new BasePage(await browser.newContext())
      const browserContext = await basePage.inicializarExtension()
      const posBMRPage = new PosBMRPage(browserContext);
      
        await basePage.iniciarSesion(browserContext)
        await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
        await posBMRPage.revisarReporte(4)
        await basePage.limpiarCookies (browserContext, browser)
});  

