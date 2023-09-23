import * as yaml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';

export function loadConfiguration(){
    try {
        if(process.env.NODE_ENV === "development"){
            const doc = yaml.load(fs.readFileSync("./env.development.yaml","utf8"))
            console.log(doc);
        }else{
            const doc = yaml.load(fs.readFileSync("./env.test.yaml","utf8"))
            console.log(doc);
        }

    } catch (e) {
        console.log(e);
    }
}