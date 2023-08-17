import { Document } from 'mongoose';
import { EnumKycStatus } from '@paychantorg/enums';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'user_kycs' })
export class UserKyc {
  @Prop({ require: true })
  uid: string;

  @Prop({ require: true })
  pid: string;

  @Prop({ require: true })
  refid: string;

  @Prop({ required: true })
  fname: string;

  @Prop({ require: true })
  lname: string;

  @Prop({ require: true })
  dob: string;

  @Prop({ require: true })
  country: string;

  @Prop({ require: true })
  document: string;

  @Prop({ require: true })
  selfie_url: string;

  @Prop({ require: true })
  document_url: string;

  @Prop({ require: true })
  status: EnumKycStatus;

  @Prop({ required: false, default: Date.now })
  created_at: Date;

  @Prop({ required: false, default: Date.now })
  updated_at: Date;
}

export type UserKycDocument = UserKyc & Document;
export const UserKycSchema = SchemaFactory.createForClass(UserKyc);
