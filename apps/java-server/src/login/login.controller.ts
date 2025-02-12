import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LoginService } from "./login.service";
import { UserDetails } from "./UserDetails";

@swagger.ApiTags("logins")
@common.Controller("logins")
export class LoginController {
  constructor(protected readonly service: LoginService) {}

  @common.Post("/authenticate")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Authenticate(
    @common.Body()
    body: UserDetails
  ): Promise<string> {
        return this.service.Authenticate(body);
      }
}
