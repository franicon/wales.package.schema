import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'setup_countries' })
export class SetupCountries {
  @Prop({ require: true })
  symbol: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  flag_icon_url: string;

  @Prop({ required: true })
  fiat_icon_url: string;

  @Prop({ required: true })
  bank_icon_url: string;

  @Prop({ required: true })
  wallet_icon_url: string;

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type SetupCountriesDocument = SetupCountries & Document;
export const SetupCountriesSchema = SchemaFactory.createForClass(SetupCountries);
