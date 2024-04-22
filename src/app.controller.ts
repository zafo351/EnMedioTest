/**
 *  @description Controlador inicial
 *
 *  @author Yilder Nicolas Perdomo
 *  @date 21/04/2024
 *
 */

import { Request, Response } from "express";
import { ProducController } from './Infraestructure/Controller/product.controller'
import { RequestDto } from './Domain/Dto/request.dto'

export class AppController {
  private readonly producController: ProducController;

  constructor(producController: ProducController) {
    this.producController = producController;
  }

  async controllerProductos(requ: RequestDto , resp: Response) {
    try{
      const productos = await this.producController.obtenerTodos();
      resp.json(productos);
    } catch (error){
      console.log(error);
      resp.status(500).send('Internal server error')
    }

  }
}
