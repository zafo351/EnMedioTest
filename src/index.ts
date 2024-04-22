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

  app.get(PREFIX + "/produc/findAll", appController.controllerProductos);
  app.get(PREFIX + "/produc/find:id", appController.controllerProductos);
  app.post(PREFIX + "/produc/create", appController.controllerProductos);
  app.put(PREFIX + "/produc/update", appController.controllerProductos)

  await connectToMongodb();
  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
}

main()