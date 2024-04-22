/**
 *  @description Controlador inicial
 *
 *  @author Yilder Nicolas Perdomo
 *  @date 21/04/2024
 *
 */

import { Request, Response } from "express";
import { ProducController } from './Infraestructure/Controller/product.controller'

export class AppController {
  private readonly producController: ProducController;

  constructor(producController: ProducController) {
    this.producController = producController;
  }

  async obtenerProductos(req: Request, res: Response) {
    try{
    const productos = await this.producController.obtenerTodos(req);
    res.json(productos);
    } catch (error){
      console.log(error);
      res.status(500).send('Internal server error')
    }

  }
}
