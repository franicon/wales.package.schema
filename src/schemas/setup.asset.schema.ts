import { Document } from 'mongoose';
import { EnumBitChain } from '@paychantorg/enums';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'setup_assets' })
export class SetupAsset {
  @Prop({ require: false, default: 10 })
  index: number;

  @Prop({ require: false, default: true })
  active: boolean;

  @Prop({ require: true })
  chain: EnumBitChain;

  @Prop({ required: true })
  asset: string;

  @Prop({ required: true })
  asset_id: string;

  @Prop({ require: true })
  sell_min: number;

  @Prop({ require: true })
  sell_max: number;

  @Prop({ require: true })
  buy_min: number;

  @Prop({ require: true })
  buy_max: number;

  @Prop({ required: true })
  actions: string[]

  @Prop({ require: true, type: Object })
  network: {
    fee: number;
    coverBy: string;
  };

  @Prop({ required: true })
  icon_url: string;

  @Prop({ require: true })
  fullname: string;

  @Prop({ require: true })
  waiting_time: number;
}

export type SetupAssetDocument = SetupAsset & Document;
export const SetupAssetSchema = SchemaFactory.createForClass(SetupAsset);
