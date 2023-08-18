import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'setup_card_name' })
export class SetupCardName {
  @Prop({ require: true })
  card: string;

  @Prop({ require: true })
  card_url: string;

  @Prop({ required: false, default: Date.now })
  created_at: Date;

  @Prop({ required: false, default: Date.now })
  updated_at: Date;
}

export type SetupCardNameDocument = SetupCardName & Document;
export const SetupCardNameSchema = SchemaFactory.createForClass(SetupCardName);
