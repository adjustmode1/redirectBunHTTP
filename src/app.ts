import 'reflect-metadata'
import {loadConfiguration} from "../load-config.ts";
class App {
    private static server: App;
    private port: number = 3000;
    constructor(port: number, option?:any) {
        this.port = port;
    }

    static getHTTPServer(port = 3000, option?:any): App {
        if(!App.server){
            App.server = new App(port, option);
        }

        return App.server;
    }
    start(): any {
       return Bun.serve({
           port: this.port,
           fetch(request: Request): Response | Promise<Response> {
               return new Response("bun!");
           }
       })
    }
}

loadConfiguration();

const server = App.getHTTPServer(3000);

server.start();
