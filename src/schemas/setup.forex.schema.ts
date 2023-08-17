import { Document } from 'mongoose';
import { EnumSupportedCurrency } from '@paychantorg/enums';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'setup_forex' })
export class SetupForex {
  @Prop({ require: true })
  usd: number;

  @Prop({ require: true })
  local: EnumSupportedCurrency;

  @Prop({ type: Object, required: true })
  value: { buy: number, sell: number };

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type SetupForexDocument = SetupForex & Document;
export const SetupForexSchema = SchemaFactory.createForClass(SetupForex);
