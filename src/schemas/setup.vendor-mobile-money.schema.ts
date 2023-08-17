import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'setup_vendor_mobile_money' })
export class SetupVendorMobileMoney {
  @Prop({ require: true })
  vid: string;

  @Prop({ required: true })
  refid: string;

  @Prop({ required: true })
  country: string;

  @Prop({ require: true })
  network: string;

  @Prop({ required: true })
  minimum: number;

  @Prop({ required: true })
  maximum: number;

  @Prop({ require: false, default: 0 })
  phone_number: number;

  @Prop({ require: true })
  account_name: string;

  @Prop({ require: false, default: 0 })
  account_number: number;

  @Prop({ require: false, default: 0 })
  business_number: number;

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type SetupVendorMobileMoneyDocument = SetupVendorMobileMoney & Document;
export const SetupVendorMobileMoneySchema = SchemaFactory.createForClass(SetupVendorMobileMoney);
