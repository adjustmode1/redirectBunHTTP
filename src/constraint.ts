import {ConfigService} from "./modules/utils/config-service.ts";

const config = ConfigService.getConfig();

export const PORT_SERVER = config.getOrThrow<number>('service.port');

export const MONGO_CONFIG = config.getOrThrow<Record<string,unknown>>('store.mongo')
