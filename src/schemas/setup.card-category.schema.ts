import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class CardProps {
  @Prop({ require: true })
  rate: number;

  @Prop({ require: true })
  range: string;

  @Prop({ require: false })
  type: string;

  @Prop({ require: true })
  currency: string;
}

@Schema({ collection: 'setup_card_category' })
export class SetupCardCategory {
  @Prop({ require: true, type: String })
  card: string;

  @Prop({ require: true, type: [Object] })
  category: CardProps[];

  @Prop({ required: false, default: Date.now })
  created_at: Date;

  @Prop({ required: false, default: Date.now })
  updated_at: Date;
}

export type SetupCardCategoryDocument = SetupCardCategory & Document;
export const SetupCardCategorySchema = SchemaFactory.createForClass(SetupCardCategory);
