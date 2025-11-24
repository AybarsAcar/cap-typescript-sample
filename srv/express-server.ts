import express from "express";
import { createCombinedHandler } from "cds-routing-handlers";
import { HelloHandler } from "./handlers/hello.handler";
import cds from "@sap/cds";

export class ExpressServer {
  public static run() {
    console.log("INITIALISING SERVER");

    const server = express();

    const handler = createCombinedHandler({
      handler: [HelloHandler],
    });

    cds.serve("./gen/").at("odata").in(server).with(handler);
  }
}
