import { Injectable } from "@nestjs/common";
import { UserDetails } from "./UserDetails";

@Injectable()
export class LoginService {
  constructor() {}
  async Authenticate(args: UserDetails): Promise<string> {
    throw new Error("Not implemented");
  }
}
