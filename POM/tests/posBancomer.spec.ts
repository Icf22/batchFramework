import { test, expect, chromium, type BrowserContext, FileChooser  } from '@playwright/test';
import { BasePage } from '../pages-objects/basePage';
import { PosBMRPage } from '../pages-objects/posBMRPage';
import { NUMBERAPP } from '../data/constates';

//Comando para ejecutar el test:
//npm run test:TodasTranscPosBanc
test('ALL', async ({ browser }) => {
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
test('1TTA', async ({ browser }) => {
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
test('2DTA', async ({ browser }) => {
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
test('3TTR', async ({ browser }) => {
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
test('4DTR', async ({ browser }) => {
      const basePage = new BasePage(await browser.newContext())
      const browserContext = await basePage.inicializarExtension()
      const posBMRPage = new PosBMRPage(browserContext);
      
        await basePage.iniciarSesion(browserContext)
        await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
        await posBMRPage.revisarReporte(4)
        await basePage.limpiarCookies (browserContext, browser)
});  

//Comando para ejecutar el test:
//npm run posBmr:5
test('5RNP', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(5)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:6
test('6CRF', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(6)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:7
test('7TEM', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(7)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:8
test('8DEM', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(8)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:9
test('9CEM', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(9)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:10
test('ACPL', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(10)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:11
test('BRRI', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(11)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:12
test('CLRI', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(12)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:13
test('DCRI', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(13)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:14
test('EDRI', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(14)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:15
test('FTSC', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(15)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:16
test('GRLC', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(16)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:17
test('HTTP', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(17)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:18
test('IDTP', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(18)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:19
test('JDRP', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(19)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:20
test('KAGC', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(20)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:21
test('LRGC', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(21)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:22
test('MCPR', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(22)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:23
test('NSPB', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(23)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:24
test('PRWM', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(24)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:25
test('QTCA', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(25)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:26
test('RRPC', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(26)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:27
test('SRRE', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(27)
    await basePage.limpiarCookies (browserContext, browser)
  });

  //Comando para ejecutar el test:
//npm run posBmr:28
test('VPBB', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext())
  const browserContext = await basePage.inicializarExtension()
  const posBMRPage = new PosBMRPage(browserContext);
  
    await basePage.iniciarSesion(browserContext)
    await basePage.abrirExtension (browserContext,NUMBERAPP.POSBANCOMER)
    await posBMRPage.revisarReporte(28)
    await basePage.limpiarCookies (browserContext, browser)
  });

  