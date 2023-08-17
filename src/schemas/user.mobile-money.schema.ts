import { Document } from 'mongoose';
import { EnumSettlementStatus } from '@paychantorg/enums';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'user_mobile_money' })
export class UserMobileMoney {
  @Prop({ require: true })
  uid: string;

  @Prop({ require: true })
  refid: string;

  @Prop({ require: false, default: EnumSettlementStatus.Inactive })
  status: EnumSettlementStatus;

  @Prop({ require: true })
  country: string;

  @Prop({ require: true })
  network: string;

  @Prop({ require: true })
  full_name: string;

  @Prop({ require: true })
  phone_number: string;

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type UserMobileMoneyDocument = UserMobileMoney & Document;
export const UserMobileMoneySchema = SchemaFactory.createForClass(UserMobileMoney);
