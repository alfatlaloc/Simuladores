/**
 * Una empresa puede producir más de un producto
 * Un producto tiene las características de:
 *  Precio de venta, ¿costos fijos?, costos variables
 *
 * Calculo del ingreso neto
 * Se compone de Unidades (del producto)
 * Ingreso Neto (unidades*precio de venta)
 * Costos variables Totales (costos variables*unidades)
 * Margen de contribución = Ingreso Neto - Costos variables Totales
 * Ingreso Neto = Margen de contribución - Costos Fijos
 */

/** Variable o Fijo */
export class Costo {
  nombre: string = "";
  valor: number = 0;

  constructor(nombre?: string, valor?: number) {
    if (nombre) this.nombre = nombre;
    if (valor) this.valor = valor;
  }
}

/** Interfaz ---> Clase */
export class Producto {
  nombre: string = "";
  costosVariablesUnitario: Costo[];
  precio: number = 0;

  constructor(
    nombre?: string,
    precio?: number,
    costosVariablesUnitario?: Costo[]
  ) {
    this.costosVariablesUnitario = [];
    if (nombre) this.nombre = nombre;
    if (precio) this.precio = precio;
    if (costosVariablesUnitario)
      this.costosVariablesUnitario = costosVariablesUnitario;
  }

  static jsonToProducto(producto: Producto): Producto {
    let aux = new Producto(producto.nombre, producto.precio);
    aux.costosVariablesUnitario = producto.costosVariablesUnitario;
    return aux;
  }

  /** AGrega un objeto de tipo costo a los CVU */
  agregarCosto(newCosto: Costo) {
    const costoYaExiste = this.costosVariablesUnitario.find(
      (costo) => costo.nombre === newCosto.nombre
    );
    if (!costoYaExiste) this.costosVariablesUnitario.push(newCosto);
  }

  eliminarCosto(nombreCostoEliminar: string) {
    this.costosVariablesUnitario = this.costosVariablesUnitario.filter(
      (costo) => costo.nombre !== nombreCostoEliminar
    );
  }

  costosTotales(): number {
    return this.costosVariablesUnitario.reduce((acc, next) => {
      return acc + Number(next.valor);
    }, 0.0);
  }
}

class Empresa {
  public nombre: string;
  public productos: Producto[];
  public costosFijos: Costo[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.productos = [];
    this.costosFijos = [];
  }

  static jsonToEmpresa(empresa: Empresa): Empresa {
    let aux = new Empresa(empresa.nombre);
    aux.costosFijos = empresa.costosFijos;
    aux.productos = empresa.productos;
    return aux;
  }

  setCostosFijos(costos: Costo[]) {
    this.costosFijos = costos;
  }

  agregarCostoFijo(costoFijo: Costo) {
    const costoFijoYaExiste = this.costosFijos.find(
      (costo) => costo.nombre === costoFijo.nombre
    );
    if (!costoFijoYaExiste) this.costosFijos.push(costoFijo);
  }

  eliminarCostoFijo(costoFijoNombre: string) {
    this.costosFijos = this.costosFijos.filter(
      (costo) => costo.nombre !== costoFijoNombre
    );
  }

  agregarProducto(newProducto: Producto) {
    if (newProducto.nombre === "") return;
    const productoYaExiste = this.productos.find(
      (producto) => producto.nombre === newProducto.nombre
    );
    if (!productoYaExiste) this.productos.push(newProducto);
  }

  actualizarCostosVariablesProducto(productoModificado: Producto) {
    let auxArr = this.productos.map((producto) => {
      if (producto.nombre === productoModificado.nombre)
        return productoModificado;
      return producto;
    });

    this.productos = auxArr;
  }

  eliminarProducto(productoNombre: string) {
    this.productos = this.productos.filter(
      (producto) => producto.nombre !== productoNombre
    );
  }

  costoFijoTotal(): number {
    return this.costosFijos.reduce((acummulator, costoFijo) => {
      return acummulator + Number(costoFijo.valor);
    }, 0.0);
  }

  obtenerProducto(nombreProducto: string) {
    return this.productos.find(
      (producto) => producto.nombre === nombreProducto
    ) as Producto;
  }
}

export default Empresa;
