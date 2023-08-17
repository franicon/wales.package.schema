import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'setup_transaction_fees' })
export class SetupTransactionFee {
  @Prop({ required: true })
  currency: string;

  @Prop({ type: Object, required: true })
  payment_method: {};

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type SetupTransactionFeeDocument = SetupTransactionFee & Document;
export const SetupTransactionFeeSchema = SchemaFactory.createForClass(SetupTransactionFee);
