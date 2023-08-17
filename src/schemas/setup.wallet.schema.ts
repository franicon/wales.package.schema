import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { EnumEnv, EnumBitChain, EnumEvmChain } from '@paychantorg/enums';

@Schema({ collection: 'setup_wallets' })
export class SetupWallet {
  @Prop({ require: true })
  env: EnumEnv;

  @Prop({ require: true })
  chain: EnumBitChain | EnumEvmChain;

  @Prop({ required: true })
  counter: number;

  @Prop({ require: true })
  address: string;

  @Prop({ require: false, default: '---' })
  private: string;

  @Prop({ required: false, default: '---' })
  derive_path: string;

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type SetupWalletDocument = SetupWallet & Document;
export const SetupWalletSchema = SchemaFactory.createForClass(SetupWallet);
