import { test, expect, chromium, type BrowserContext, FileChooser  } from '@playwright/test';
import { BasePage } from '../pages-objects/basePage';

test('has title', async ({ browser }) => {
const basePage = new BasePage()
const browserContext = await basePage.inicializarExtension()

  await basePage.iniciarSesion(browserContext)
  await basePage.abrirExtension (browserContext)
  await basePage.revisarReportes(browserContext)
  await basePage.limpiarCookies (browserContext, browser)
});

