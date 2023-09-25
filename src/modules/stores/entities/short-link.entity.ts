import {
    EntitySchema,
} from '@mikro-orm/core';


import {BaseEntity, BaseEntitySchema} from './base.entity';

export class ShortLinkEntity {
    URL: string;
    shortId: string;
    hashURL: string;
    clicks: string;
}

export const ShortLinkEntitySchema = new EntitySchema<ShortLinkEntity>(
    {
        name:'short-link',
        collection: 'short-link',
        class: ShortLinkEntity,
        extends: BaseEntitySchema.name as string,
        properties: {
            URL: {type: 'string' },
            shortId: { type: 'string' },
            hashUrl: { type: 'string' },
            clicks: { type: 'number' },
        }
    }
)
