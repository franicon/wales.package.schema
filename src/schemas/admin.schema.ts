import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'admins' })
export class Admin {
    @Prop({ require: true })
    aid: string;

    @Prop({ require: true })
    email: string;

    @Prop({ require: true })
    username: string;

    @Prop({ require: true })
    password: string;

    @Prop({ require: false, default: Date.now })
    create_at: Date;

    @Prop({ require: false, default: Date.now })
    update_at: Date;
}

export type AdminDocument = Admin & Document;
export const AdminSchema = SchemaFactory.createForClass(Admin);
