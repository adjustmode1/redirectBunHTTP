import {
    EntitySchema,
} from '@mikro-orm/core';


import { BaseEntity } from './base.entity';

export class BaseEntity {
    _id: string;
    createTime: string;
    updateTime: string;
}

export const BaseEntitySchema = new EntitySchema<BaseEntity>(
    {
        class: BaseEntity,
        properties: {
            _id: { primary: true, type: 'string' },
            createTime: { type: 'string' },
            updateTime: { type: 'string' },
        }
    }
)
