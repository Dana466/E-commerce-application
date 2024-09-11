import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  uid: string;
  favoriteProducts: string[];
}

const userSchema = new Schema<IUser>({
  uid: { type: String, required: true, unique: true },
  favoriteProducts:[ { type: Schema.Types.ObjectId, ref:"products", default: [] }]
});

const User = model<IUser>('User', userSchema);

export default User;
