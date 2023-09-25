import Elysia from "elysia";
import {ShortLinkRepository} from "../stores/repositories/short-link.repository.ts";
import {ShortLinkEntity} from "../stores/entities";

export class ShortLinkController {
    private readonly shortLinkRepository;
    constructor() {
        this.shortLinkRepository = new ShortLinkRepository();
    }

    async getUrl(id: string): Promise<ShortLinkEntity | Error>{
        return this.shortLinkRepository.getUrl(id);
    }

    routes(): unknown {
        return new Elysia({prefix: 'shortLink'})
            .get('/:id',async ({params,set})=>{
                    const shortLink = await this.getUrl(params.id);

                    if(shortLink instanceof Error){
                        return shortLink;
                    }

                    set.redirect = shortLink.URL;
            })
    }
}