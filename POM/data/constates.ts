import { PrpConcilia } from "../pages-objects/prpConciliaPage";

export const EXTENSION = {
     EXTENSION:  '../../POM/tests/SimpleModifyHeaders-master',
     USERDATA: '../../POM/tests/datos_usuario_dir'
}

export const URLS = {
    INICIOSESION: 'https://172.29.40.129:444/test_tivoli/servlet/wpinicio',
    REPORTEPRPCONCILIA: 'https://172.29.40.129:443/PRPConcilia/servlet/wpinicio',
    POSBMR: 'https://172.29.40.129:443/POSBMR/servlet/wpinicio',
    DSSREPORT: 'https://172.29.40.129:443/DSSReport/servlet/wpinicio',
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
     DSSREPORT:14,
     INFRESTRUCTURA:23,
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

export const CONSOLA = {
    EspacioConNombre: (reporteDescargado: string) =>
        console.log(`******************* "${reporteDescargado}" *********************************************************`),
    EspacioNombreTotal: (reporteDescargado: string, totalDescargados: number) =>
        console.log(`📋 -- El total de archivos descargados para "${reporteDescargado}" son: ${totalDescargados}`),
    CierreDeBloque: () =>
        console.log("**************************************************************************************************************"),
    TotalPlataformas: (reporteDescargado: string, totalPlataformas: number) =>
        console.log(`📋 -- El total de plataformas existentes para "${reporteDescargado}" son: ${totalPlataformas}`),
    DivisionInfo: () =>
        console.log("-------------------------------------------------------------------------------------"),
    AvisoSinPlataformas: (reporteDescargado: string, totalDescargados = 0) => 
        totalDescargados == 0 ? console.log(`📋 -- El reporte "${reporteDescargado}" no cuenta con plataformas existentes`) : console.log(`📋 -- El reporte "${reporteDescargado}" no cuenta con plataformas existentes, se descargó el reporte con los valores por defecto y la fecha establecida por el usuario`),
    AvisoDescargaCorrecta: (reporteDescargado: string ) =>
        console.log(`✅ -- Se DESCARGO CORRECTAMENTE el archivo: ${reporteDescargado}`),
    AvisoDescargaIncorrecta: (ruta) =>
        console.log(`❌ -- El archivo NO SE DESCARGÓ en: ${ruta}`),
    NoExisteDescarga: () =>
        console.log("❌ -- No se descargó reporte. NO EXISTE"),
    ErrorAlGuardar: (error) =>
        console.log("❌ Error al guardar el archivo: ", error),
    ErrorObtenerNombreReport: () =>
        console.error("❌ No fue posible obtener el nombre del reporte"),
}
