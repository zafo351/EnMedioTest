import { ProductoService } from "../../Application/Service/product.service";

export class ProducController {
  private readonly producService: ProductoService;

  constructor(producService: ProductoService) {
    this.producService = producService;
  }

  async obtenerTodos(req: Request, res: Response): Promise<void> {
    try{
    const productos = await this.producService.obtenerTodosLosProductos();
    return productos;
    } catch (error) {
      console.error(error);
      
    } 
  }

  async obtenerProduc(req: Request, res: Response): Promise<void> {
    try{
    const productos = await this.producService.obtenerTodosLosProductos();
    return productos;
    } catch (error) {
      console.error(error);
      
    } 
  }
}
