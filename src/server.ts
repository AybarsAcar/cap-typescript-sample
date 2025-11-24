import "reflect-metadata";
import express from "express";
import cds from "@sap/cds";
import { createCombinedHandler } from "cds-routing-handlers";

export class Server {
  public static async run() {
    const app = express();

    const hdl = createCombinedHandler({
      handler: [
        __dirname + "/entities/**/*.js",
        __dirname + "/functions/**/*.js",
      ],
    });

    await cds.connect("db");
    await cds
      .serve("all")
      .at("odata")
      .in(app)
      .with((srv) => hdl(srv));

    app.get("/", function (req, res) {
      res.redirect("/odata/");
    });

    // Run the server.
    const port = process.env.PORT || 3001;
    app.listen(port, async () => {
      console.info(`Server is listing at http://localhost:${port}`);
    });
  }
}
