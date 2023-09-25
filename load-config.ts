import * as yaml from 'js-yaml';
import * as fs from 'fs';

export function loadConfiguration(): Record<string,unknown>{
    try {
        let config: any;
        if(process.env.NODE_ENV === "development"){
            config = yaml.load(fs.readFileSync("./env.development.yaml","utf8"), undefined)
            console.log(config);
        }else{
            config = yaml.load(fs.readFileSync("./env.test.yaml","utf8"), undefined)
            console.log(config);
        }

        return config as unknown as Record<string,unknown>;
    } catch (e) {
        console.log(e);
    }
}