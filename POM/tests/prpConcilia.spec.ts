import { test, expect, chromium, type BrowserContext, FileChooser  } from '@playwright/test';
import { BasePage } from '../pages-objects/basePage';
import { NUMBERAPP } from '../data/constates';
import { PrpConcilia } from '../pages-objects/prpConciliaPage';


test('Todos', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext());
  const browserContext = await basePage.inicializarExtension();
  const prpConcilia = new PrpConcilia(browserContext);
  
    await basePage.iniciarSesion(browserContext);
    await basePage.abrirExtension (browserContext,NUMBERAPP.PRPCONCILIA);
    //await prpConcilia.revisarReportePRPConciliaLiquidacion(0);
    await prpConcilia.revisarReportePRPConciliaLiquidacion(0);
    await basePage.limpiarCookies (browserContext, browser);
});

//Comando para ejecutar el test: 
//npm run test:Liquidacion
test('Liquidacion', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext());
  const browserContext = await basePage.inicializarExtension();
  const prpConcilia = new PrpConcilia(browserContext);
  
    await basePage.iniciarSesion(browserContext);
    await basePage.abrirExtension (browserContext,NUMBERAPP.PRPCONCILIA);
    //await prpConcilia.revisarReportePRPConciliaLiquidacion(0);
    await prpConcilia.revisarReportePRPConciliaLiquidacion(1);
    await basePage.limpiarCookies (browserContext, browser);
});

test('Inicial', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext());
  const browserContext = await basePage.inicializarExtension();
  const prpConcilia = new PrpConcilia(browserContext);
  
    await basePage.iniciarSesion(browserContext);
    await basePage.abrirExtension (browserContext,NUMBERAPP.PRPCONCILIA);
    //await prpConcilia.revisarReportePRPConciliaLiquidacion(0);
    await prpConcilia.revisarReportePRPConciliaLiquidacion(2);
    await basePage.limpiarCookies (browserContext, browser);
});

test('Final', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext());
  const browserContext = await basePage.inicializarExtension();
  const prpConcilia = new PrpConcilia(browserContext);
  
    await basePage.iniciarSesion(browserContext);
    await basePage.abrirExtension (browserContext,NUMBERAPP.PRPCONCILIA);
    //await prpConcilia.revisarReportePRPConciliaLiquidacion(0);
    await prpConcilia.revisarReportePRPConciliaLiquidacion(3);
    await basePage.limpiarCookies (browserContext, browser);
});

test('Totales', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext());
  const browserContext = await basePage.inicializarExtension();
  const prpConcilia = new PrpConcilia(browserContext);
  
    await basePage.iniciarSesion(browserContext);
    await basePage.abrirExtension (browserContext,NUMBERAPP.PRPCONCILIA);
    //await prpConcilia.revisarReportePRPConciliaLiquidacion(0);
    await prpConcilia.revisarReportePRPConciliaLiquidacion(4);
    await basePage.limpiarCookies (browserContext, browser);
});

test('Reportes', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext());
  const browserContext = await basePage.inicializarExtension();
  const prpConcilia = new PrpConcilia(browserContext);
  
    await basePage.iniciarSesion(browserContext);
    await basePage.abrirExtension (browserContext,NUMBERAPP.PRPCONCILIA);
    //await prpConcilia.revisarReportePRPConciliaLiquidacion(0);
    await prpConcilia.revisarReportePRPConciliaLiquidacion(5);
    await basePage.limpiarCookies (browserContext, browser);
});

test('Archivos', async ({ browser }) => {
  const basePage = new BasePage(await browser.newContext());
  const browserContext = await basePage.inicializarExtension();
  const prpConcilia = new PrpConcilia(browserContext);
  
    await basePage.iniciarSesion(browserContext);
    await basePage.abrirExtension (browserContext,NUMBERAPP.PRPCONCILIA);
    //await prpConcilia.revisarReportePRPConciliaLiquidacion(0);
    await prpConcilia.revisarReportePRPConciliaLiquidacion(6);
    await basePage.limpiarCookies (browserContext, browser);
});
