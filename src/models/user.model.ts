import { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
    username: string;
    password: string;
    email: string;
}

export const UserSchema = new Schema<IUser>({
    username: {
        type: "String",
        required: true,
        unique: true,
    },
    password: {
        type: "String",
        required: true,
    },
    email: {
        type: "String",
        unique: true,
        default: "",
    }
});

export default model<IUser>("User", UserSchema);