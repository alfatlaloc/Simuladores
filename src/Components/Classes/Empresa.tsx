/**
 * Una empresa puede producir más de un producto
 * Un producto tiene las características de:
 *  Precio de venta, ¿costos fijos?, costos variables
 * 
 * Concepto que no conocemos:
 * Se compone de Unidades (del producto)
 * Ingreso Neto (unidades*precio de venta)
 * Costos variables Totales (costos variables*unidades)
 * Margen de contribución = Ingreso Neto - Costos variables Totales
 * Ingreso Neto = Margen de contribución - Costos Fijos
 */
 interface Producto {
  nombre: string,
  precioDeVenta: number,
  costoVariables: number
}

class Empresa {
  nombre: string;
  productos: Producto[];
  precioDeVenta: number;
  costosVariables: number;
  costosFijos: number;

  constructor(
    precioDeVenta: number,
    costosFijos: number,
    costosVariables: number,
    nombre: string
  ) {
    this.nombre = nombre;
    this.productos = [];
    this.precioDeVenta = precioDeVenta;
    this.costosVariables = costosVariables;
    this.costosFijos = costosFijos;

  }
}

export default Empresa;