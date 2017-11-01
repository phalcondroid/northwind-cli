///<reference path="../Definitions/Northwind.d.ts"/>

namespace NameProject.Config
{
    export class AppConfig
    {
        private url = "";
        private baseUrl = "";

        /**
         * Get and configure project dependences
         */
        public getConfig() : Northwind.Environment.Config
        {
            let config = new Northwind.Environment.Config();
            config.setConfig(
                this.getLocalConfig(),
                Northwind.Environment.Scope.LOCAL
            );
            return config;
        }

        public setBaseUrl(url)
        {
            this.baseUrl = url;
        }

        public getBaseUrl()
        {
            return this.baseUrl;
        }

        /**
         * Configuration project to LOCAL environment
         */
        public getLocalConfig() : Object
        {
            return {
                "urls" : {
                    "baseUrl" : this.getBaseUrl() + "baseUrlProject/",
                    "base"    : this.getBaseUrl()
                },
                "controllers" : [
                    Controllers.IndexController
                ],
                "services" : Services
            };
        }
    }
}
