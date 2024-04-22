import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import { AppController } from "./app.controller";
import { ProducController } from "./Infraestructure/Controller/product.controller";
import { ProductoService } from "./Application/Service/product.service";
import { PORT, PREFIX } from "./config";
import { connectToMongodb } from "./Infraestructure/EntityManager/database";

const productoService = new ProductoService();
const productoController = new ProducController(productoService);
const appController = new AppController(productoController);

async function main() {
  const app: Application = express();
  app.get(PREFIX + "/productos", appController.controllerProductos);
  await connectToMongodb();
  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
}

main()