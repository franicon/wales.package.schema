import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { EnumEnv, EnumActionType, EnumSettlementType, EnumTransactionStatus } from '@paychantorg/enums';

@Schema({ collection: 'user_transactions' })
export class UserTransaction {
  @Prop({ require: true })
  env: EnumEnv;

  @Prop({ require: true })
  uid: string;

  @Prop({ require: true })
  pid: string;

  @Prop({ require: true })
  fiat: string;

  @Prop({ require: true })
  token: string;

  @Prop({ require: true })
  refid: string;

  @Prop({ require: false, default: EnumTransactionStatus.Created })
  status: EnumTransactionStatus;

  @Prop({ require: true })
  action: EnumActionType;

  @Prop({ required: false, default: '' })
  cover_by: string;

  @Prop({ required: true })
  fiat_amt: string;

  @Prop({ required: true })
  token_amt: string;

  @Prop({ required: true })
  token_chain: string;

  @Prop({ required: true })
  network_fee: string;

  @Prop({ required: true })
  platform_fee: string;

  @Prop({ required: true })
  total_fees: string;

  @Prop({ required: false, default: '---' })
  proof_url: string;

  @Prop({ required: false, default: '---' })
  user_address: string;

  @Prop({ required: false, default: '---' })
  escrow_address: string;

  @Prop({ required: true })
  payment_method: string;

  @Prop({ required: false, default: '' })
  settlement_type: EnumSettlementType;

  @Prop({ required: false, default: '' })
  settlement_refid: string;

  @Prop({ required: true })
  token_amt_to_usd: string;

  @Prop({ required: true })
  one_token_to_fiat: string;

  @Prop({ required: false, default: '' })
  webhook_status_url: string;

  @Prop({ required: true })
  total_pay_or_receive: string;

  @Prop({ required: false, default: '' })
  vendor_payment_type_refid: string;

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type UserTransactionDocument = UserTransaction & Document;
export const UserTransactionSchema = SchemaFactory.createForClass(UserTransaction);
