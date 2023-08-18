import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class CardProps {
  @Prop({ require: true })
  rate: number;

  @Prop({ require: true })
  range: string;

  @Prop({ require: true })
  currency: string;

  @Prop({ required: false, default: Date.now })
  created_at: Date;

  @Prop({ required: false, default: Date.now })
  updated_at: Date;
}

@Schema({ collection: 'setup_card_type' })
export class SetupCardType {
  @Prop({ require: true, type: String })
  card: string;

  @Prop({ require: true, type: [Object] })
  physical: CardProps[];

  @Prop({ require: true, type: [Object] })
  ecode: CardProps[];
}

export type SetupCardTypeDocument = SetupCardType & Document;
export const SetupCardTypeSchema = SchemaFactory.createForClass(SetupCardType);
