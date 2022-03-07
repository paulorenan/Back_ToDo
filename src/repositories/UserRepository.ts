import { EntityRepository, Repository } from "typeorm";
import User from "../models/UserModel";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  public async getUserByEmail(email: string): Promise<User | undefined> {
    return this.findOne({
      where: {
        email,
      },
      select: ["id", "name", "email", "createdAt", "updatedAt"],
    });
  }
  public async getUserById(id: string): Promise<User | undefined> {
    return this.findOne({
      where: {
        id,
      },
      select: ["id", "name", "email", "createdAt", "updatedAt"],
    });
  }
  public async getUserByEmailAndPassword(
    email: string,
    password: string
  ): Promise<User | undefined> {
    // return the user but not the password
    return this.findOne({
      where: {
        email,
        password,
      },
      select: ["id", "name", "email", "createdAt", "updatedAt"],
    });
  }
}
