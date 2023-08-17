import { Document } from 'mongoose';
import { EnumEmailCodeType } from '@paychantorg/enums';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'user_email_codes' })
export class UserEmailCode {
  @Prop({ require: true })
  code: number;

  @Prop({ require: false, default: EnumEmailCodeType.Auth })
  type: EnumEmailCodeType;

  @Prop({ required: true })
  refid: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type UserEmailCodeDocument = UserEmailCode & Document;
export const UserEmailCodeSchema = SchemaFactory.createForClass(UserEmailCode);
