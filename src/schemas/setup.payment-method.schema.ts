import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'setup_payment_methods' })
export class SetupPaymentMethods {
  @Prop({ require: true })
  name: string;

  @Prop({ require: true })
  icon_url: string;

  @Prop({ require: true })
  countries: string[];

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type SetupPaymentMethodsDocument = SetupPaymentMethods & Document;
export const SetupPaymentMethodsSchema = SchemaFactory.createForClass(SetupPaymentMethods);
