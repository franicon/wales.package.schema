import { Document } from 'mongoose';
import { EnumSettlementStatus } from '@paychantorg/enums';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'user_banks' })
export class UserBank {
  @Prop({ require: true })
  uid: string;

  @Prop({ require: true })
  refid: string;

  @Prop({ require: false, default: EnumSettlementStatus.Inactive })
  status: EnumSettlementStatus;

  @Prop({ require: true })
  country: string;

  @Prop({ require: true })
  bank_name: string;

  @Prop({ require: true })
  bank_acc_name: string;

  @Prop({ require: true })
  bank_acc_number: string;

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type UserBankDocument = UserBank & Document;
export const UserBankSchema = SchemaFactory.createForClass(UserBank);
