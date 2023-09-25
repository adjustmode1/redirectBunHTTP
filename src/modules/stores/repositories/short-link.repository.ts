import {orm} from "../mongodb-connector.ts";
import {ShortLinkEntity, ShortLinkEntitySchema} from "../entities";
import {EntityManager} from "@mikro-orm/core";

export class ShortLinkRepository {
    private readonly shortLinkRepository;
    private readonly em: EntityManager;
    constructor() {
        this.shortLinkRepository = orm;
        this.em = this.shortLinkRepository.em.fork();
    }

    async getUrl(shortId: string): Promise<ShortLinkEntity | Error>{
        try {
            const result = await this.em.getRepository(ShortLinkEntitySchema.name).findOne({
                shortId
            })

            if(result instanceof Error){
                return result;
            }

            if(result === null){
                return Error('ShortLink not found')
            }

            return result;
        } catch (e) {
            return Error((e as Error).message);
        }
    }

}