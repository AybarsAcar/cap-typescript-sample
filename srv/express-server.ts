import express from "express";
import { createCombinedHandler } from "cds-routing-handlers";
import { HelloHandler } from "./handlers/hello.handler";
import cds from "@sap/cds";
import { BookHandler } from "./handlers/entities/BookHandler";

export class ExpressServer {
  public static run() {
    console.log("INITIALISING SERVER");

    const app = express();

    const handler = createCombinedHandler({
      handler: [HelloHandler, BookHandler]
    });

    cds.serve("./gen/").at("odata").in(app).with(handler);
  }
}
