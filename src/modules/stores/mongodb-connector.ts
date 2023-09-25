import { MikroORM} from "@mikro-orm/core";
import {MongoDriver} from "@mikro-orm/mongodb";
import {MONGO_CONFIG} from "../../constraint.ts";
import {BaseEntitySchema, ShortLinkEntitySchema} from "./entities";
import {MongoHighlighter} from "@mikro-orm/mongo-highlighter";

export const orm = await MikroORM.init<MongoDriver>({
    driver: MongoDriver,
    type: MONGO_CONFIG.options.type,
    clientUrl: MONGO_CONFIG.options.clientUrl as string,
    entities: [ ShortLinkEntitySchema, BaseEntitySchema ],
    dbName: MONGO_CONFIG.options.dbName as string,
    highlighter: new MongoHighlighter(),
    debug: MONGO_CONFIG.env.debug as boolean,
});