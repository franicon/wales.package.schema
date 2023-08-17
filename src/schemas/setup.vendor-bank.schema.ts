import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'setup_vendor_banks' })
export class SetupVendorBank {
  @Prop({ require: true })
  vid: string;

  @Prop({ required: true })
  refid: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  minimum: number;

  @Prop({ required: true })
  maximum: number;

  @Prop({ required: true })
  bank_name: string;

  @Prop({ required: true })
  bank_acc_name: string;

  @Prop({ required: true })
  bank_acc_number: string;

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type SetupVendorBankDocument = SetupVendorBank & Document;
export const SetupVendorBankSchema = SchemaFactory.createForClass(SetupVendorBank);
