import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'setup_banks' })
export class SetupBank {
  @Prop({ require: true })
  country: string;

  @Prop({ required: true })
  currency: string;

  @Prop({ require: true })
  bank_name: string;

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type SetupBankDocument = SetupBank & Document;
export const SetupBankSchema = SchemaFactory.createForClass(SetupBank);
