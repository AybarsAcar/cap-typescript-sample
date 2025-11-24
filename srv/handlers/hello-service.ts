import { ApplicationService, Request } from "@sap/cds";

class Say extends ApplicationService {
  hello(req: Request) {
    return `Hello ${req.data.to} from a TypeScript file!`;
  }
}

module.exports = Say;
