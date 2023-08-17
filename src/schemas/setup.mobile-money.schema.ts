import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'setup_mobile_money' })
export class SetupMobileMoney {
  @Prop({ require: true })
  name: string;

  @Prop({ require: true })
  countries: string[];

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type SetupMobileMoneyDocument = SetupMobileMoney & Document;
export const SetupMobileMoneySchema = SchemaFactory.createForClass(SetupMobileMoney);
