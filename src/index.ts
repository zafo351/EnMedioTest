import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import { AppController } from "./app.controller";
import { ProducController } from "./Infraestructure/Controller/product.controller";

dotenv.config();

const appController = new AppController();
const app: Application = express();
const port = process.env.PORT || 3000;


app.get('/productos', appController.obtenerProductos);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
