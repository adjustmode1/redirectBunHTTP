import 'reflect-metadata'
import Elysia from 'elysia';
import { cors } from '@elysiajs/cors';
import {ShortLinkController} from "./modules/short-link/short-link.controller.ts";
import {PORT_SERVER} from "./constraint.ts";

class App {
    private readonly elysia: Elysia;
    private static server: App;
    private port: number = 3000;
    constructor(port: number, option?:any) {
        this.port = port;
        this.elysia = new Elysia();
    }

    static getHTTPServer(port = 3000, option?:any): App {
        if(!App.server){
            App.server = new App(port, option);
        }

        return App.server;
    }

    useRoute(route: any): unknown {
        return this.elysia.use(route)
    }

    useCors(cors: Function): unknown {
        return this.elysia.use(cors)
    }

    start(): unknown {
       return this.elysia.listen(this.port);
    }
}
const server = App.getHTTPServer(PORT_SERVER);

const shortLinkRoutes = new ShortLinkController();

//Server config
server.useCors(cors())
server.useRoute(shortLinkRoutes.routes());


// Start server
server.start();
