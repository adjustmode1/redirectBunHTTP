import {loadConfiguration} from "../../../load-config.ts";

export class ConfigService {
    private static instance: ConfigService;
    private config: Record<string,unknown>;

    private constructor() {
        this.config = new loadConfiguration();
    }

    static getConfig(): ConfigService{
        if(!ConfigService.instance){
            ConfigService.instance = new ConfigService();
        }

        return ConfigService.instance;
    }

    private getData(key: string): unknown{
        const splitKey = key.split('.');

        if(splitKey.length === 1){
            return this.config[splitKey[0]];
        }

        let tempData = this.config as unknown;
        for(let indexKey = 0; indexKey< splitKey.length; indexKey++){
            const keyData = splitKey[indexKey];

            tempData = tempData[keyData];

            if(tempData === undefined){
                return tempData;
            }
        }

        return tempData;
    }

    get<T>(key: string): T {
        return this.getData(key) as T;
    }

    getOrThrow<T>(key: string): T {
        const data = this.getData(key);
        if(data === undefined){
            throw Error(`Key (${key}) not found`);
        }else{
            return data as T;
        }
    }
}