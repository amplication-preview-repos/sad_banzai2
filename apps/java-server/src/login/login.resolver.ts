import * as graphql from "@nestjs/graphql";
import { UserDetails } from "./UserDetails";
import { LoginService } from "./login.service";

export class LoginResolver {
  constructor(protected readonly service: LoginService) {}

  @graphql.Query(() => String)
  async Authenticate(
    @graphql.Args()
    args: UserDetails
  ): Promise<string> {
    return this.service.Authenticate(args);
  }
}
