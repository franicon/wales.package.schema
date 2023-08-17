import { Document } from 'mongoose';
import { EnumVendorStatus } from '@paychantorg/enums';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'setup_vendors' })
export class SetupVendor {
  @Prop({ require: true })
  vid: string;

  @Prop({ required: true })
  status: EnumVendorStatus;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  full_name: string;

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type SetupVendorDocument = SetupVendor & Document;
export const SetupVendorSchema = SchemaFactory.createForClass(SetupVendor);
