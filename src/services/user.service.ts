import { ObjectId } from "mongoose";
import userModel, { IUser } from "../models/user.model";

class UserService {

    async create(definition: { username: string, password: string }): Promise<IUser> {
        return await userModel.create(definition);
    }

    async find(filter: { id?: string | ObjectId, username?: string }): Promise<IUser | null> {
        let user = null;
        if (filter.id) {
            user = await userModel.findById(filter.id);
        } else if (filter.username) {
            user = await userModel.findOne({ username: filter.username });
        }
        return user;
    }

    async signup(definition: { username: string, password: string }): Promise<{ status: boolean, msg: string, user: IUser | null }> {
        let status = false, msg = "";
        let user = await this.find({ username: definition.username });
        if (!user) {
            user = await this.create(definition);
            status = true;
            msg = "عملیات با موفقیت انجام شد";
        } else {
            msg = "نام کاربری مورد نظر در دسترس نمی باشد";
        }
        return { status, msg, user };
    }

    async signin(definition: { username: string, password: string }): Promise<{ status: boolean, msg: string, user: IUser | null }> {
        let status = false, msg = "";
        let user = await this.find({ username: definition.username });
        if (user) {
            if (user.password == definition.password) {
                status = true;
                msg = "عملیات با موفقیت انجام شد";
            } else {
                msg = "رمز عبور مورد نظر صحیح نمی باشد";
            }
        } else {
            msg = "حساب کاربری مورد نظر یافت نشد"
        }
        return { status, msg, user };
    }
}

export default new UserService();