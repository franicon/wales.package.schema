import { Document } from 'mongoose';
import { EnumImgUpload } from '@paychantorg/enums';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'user_images' })
export class UserImage {
  @Prop({ require: true })
  uid: string;

  @Prop({ required: true })
  refid: string;

  @Prop({ required: true })
  type: EnumImgUpload;

  @Prop({ required: true })
  image_url: string;

  @Prop({ required: true })
  image_pid: string;

  @Prop({ required: false, default: Date.now })
  created_at: Date;
}

export type UserImageDocument = UserImage & Document;
export const UserImageSchema = SchemaFactory.createForClass(UserImage);
