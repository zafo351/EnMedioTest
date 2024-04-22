import { ProducService } from "../../Application/Service/product.service";

export class ProducController {
  private readonly producService: ProducService;

  constructor(producService: ProducService) {
    this.producService = producService;
  }

  async obtenerTodos(req: Request, res: Response): Promise<void> {
    try{
    const productos = await this.producService.obtenerTodos();
    return productos;
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    } 
  }
}
