import { PrpConcilia } from "../pages-objects/prpConciliaPage";

export const EXTENSION = {
     EXTENSION:  '../../POM/tests/SimpleModifyHeaders-master',
     USERDATA: '../../POM/tests/datos_usuario_dir'
}

export const URLS = {
    INICIOSESION: 'https://172.29.40.129:444/test_tivoli/servlet/wpinicio',
    REPORTEPRPCONCILIA: 'https://172.29.40.129:444/PRPConcilia/servlet/wpinicio',
    POSBMR: 'https://172.29.40.129:443/POSBMR/servlet/wpinicio',
    DSSREPORT: 'https://172.29.40.129:44/DSSReport/servlet/wpinicio',
    INFRESTRUCTURA: 'https://172.29.40.129:443/Infraestructura/servlet/wpinicio'
}


export const FUNCION = {
    //Obtener Id de la extensión
    ObtenerIdExtencion: async (browserContext) => {
        const pageExten = await browserContext.newPage();
        await pageExten.goto("chrome://extensions/");
        await pageExten.waitForTimeout(2000);
        const button = await pageExten.$('cr-button[id="detailsButton"]');
        await button?.click();
        const currentURL = pageExten.url();
        const extensionID = currentURL.split('=')[1];
        await pageExten.waitForTimeout(2000);
        await pageExten.close();
        return extensionID;
    },
    //Abrir la extensión una vez que se obtuvo el ID
    AbreExtension: (pageExtension,extensionID: string) => 
        pageExtension.goto(`chrome-extension://${extensionID}/popup/config.html`)
}


export const NUMBERAPP = {
     POSBANCOMER:30, 
     PRPCONCILIA:34, 
     DSSREPORT:14
}


export const ARCHIVOS = {
    CABECERA: 'archivoConfig/SimpleModifyHeader (24).conf'
}


export const NOMBRE_REPORTES = {
    PRP_CONCILIA: 'liquidación',
    DSS_REPORT: 'Reporte_De_Intercambio'
}

export const XPATH = {
    framID : "//iframe[contains(@id, 'gxp0_ifrm')]",
}
