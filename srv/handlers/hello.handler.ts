import {
  Handler,
  OnRead,
  AfterRead,
  Entities,
  Req,
} from "cds-routing-handlers";
import HelloService from "#cds-models/HelloService";
import express from "express";

@Handler(HelloService.name)
export class HelloHandler {
  public async hello(req: express.Request) {
    return `Hello Test`;
  }
}
