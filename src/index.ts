import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import IpList from "./utils/IpList";

dotenv.config();

const PORT = process.env.PORT || 8100;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const myList = new IpList();

console.log(myList.getBlockedIps());

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello from the TypeScript world!</h1>");
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
