/// <reference path="ts/globalize.d.ts" />
/// <reference path="ts/jquery.d.ts" />
/// <reference path="ts/knockout.d.ts" />
/// <reference path="ts/dx.all.d.ts" />
/// <reference path="index.d.ts" />

interface External { Notify(arg: string): any; }

module challenge {
    $(function() {
        // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
        // DevExpress.devices.current({ platform: "generic" });

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            navigator["splashscreen"].hide();
            if (window["devextremeaddon"] != null) {
                window["devextremeaddon"].setup();
            }
            document.addEventListener("backbutton", onBackButton, false);
        }

        function onBackButton() {
            DevExpress.processHardwareBackButton();
        }

        function onNavigatingBack(e) {
            if (e.isHardwareButton && !challenge.app.canBack()) {
                e.cancel = true;
                exitApp();
            }
        }

        function exitApp() {
            switch (DevExpress.devices.real().platform) {
                case "tizen":
                    window["tizen"].application.getCurrentApplication().exit();
                    break;
                case "android":
                    navigator["app"].exitApp();
                    break;
                case "win8":
                    window.external.Notify("DevExpress.ExitApp");
                    break;
            }
        }

        app = new DevExpress.framework.html.HtmlApplication({
            namespace: challenge,
            navigation: config.navigation,
            layoutSet: DevExpress.framework.html.layoutSets[config.layoutSet],
            commandMapping: config.commandMapping
        });
        app.router.register(":view/:id", { view: "home", id: undefined });
        challenge.app.on("navigatingBack", onNavigatingBack);
        app.navigate();
    });
}