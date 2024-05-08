export const EXTENSION = {
     EXTENSION:  '../../POM/tests/SimpleModifyHeaders-master',
     USERDATA: '../../POM/tests/datos_usuario_dir'
}

export const URLS = {
    INICIOSESION: 'https://172.29.40.129:444/test_tivoli/servlet/wpinicio',
    REPORTEPRPCONCILIA: 'https://172.29.40.129:444/PRPConcilia/servlet/wpinicio',
    POSBMR: 'https://172.29.40.129:444/POSBMR/servlet/wpinicio'
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
     PRPCONCILIA: 34
}

export const ARCHIVOS = {
    CABECERA: 'archivoConfig/SimpleModifyHeader (24).conf'
}
