import { ListGroup } from "react-bootstrap";

const Metodologia = () => {
  return (
    <section className="textosEncuadre">
      <h3 className="mb-2">Metodologia</h3>
      <p>
        Con el uso de esta herramienta digital para el cálculo del punto de
        equilibrio lograrás favorecer tu aprendizaje autónomo, lo que
        posibilitará que las estrategias dentro del aula se modifiquen y se
        centren en actividades de aprendizaje que te permitan desarrollar otras
        competencias como por ejemplo: la de análisis, la argumentativa,
        propositiva, solución de problemas, trabajo colaborativo y la toma de
        decisiones, entre otras.
      </p>
      <p>
        Con este tema, tendrás oportunidad de analizar el punto de equilibrio de
        uno o más productos con base en los costos totales y el precio de venta;
        información clave en la toma de decisiones económicas de la empresa. 
      </p>
      <p>
        Esta herramienta digital se construyó como apoyo educativo a las clases
        presenciales; es dinámica, ya que te permite calcular el punto de
        equilibrio de manera automatizada y visualizar información importante
        del tema; adicionalmente, también podrás obtener un reporte de dicha
        información que te servirá de apoyo para la toma de decisiones.
      </p>
      <p>
        En el menú podrás seleccionar alguno de los siguientes botones de
        navegación: contenidos, simulador del punto de equilibrio para uno o
        para varios productos, actividades de aprendizaje, glosario y
        referencias.   
      </p>
      <p>
        A continuación se describen brevemente las secciones antes
        mencionadas:  
      </p>
      <ListGroup as="ol" >
        <ListGroup.Item as="li">
          <strong>Contenidos.</strong>
          <br/>
          En este apartado encontrarás los
          fundamentos teóricos del tema.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <strong>Simulador.</strong>
          <br/>
          En esta sección podrás ingresar el nombre
          de la empresa y del producto o productos; los costos variables
          unitarios, los costos fijos y el volumen de producción y ventas. Dando
          clic en un botón podrás obtener el cálculo del punto de equilibrio en
          forma algebraica y gráfica, así como un reporte en PDF con el resumen
          del escenario simulado para su respectivo análisis.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <strong>Actividades de aprendizaje.</strong>
          <br/>
          Las actividades de
          aprendizaje tienen valor para la evaluación; se realizarán en el
          aula (en el horario de clase); se desarrollarán en
          forma individual o en equipo y se subirán en la plataforma indicada
          por el profesor(a).
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <strong>Glosario.</strong>
          <br/>
          En esta parte del menú, encontrarás el
          significado de algunos términos que hemos considerado importantes para
          el aprendizaje del tema.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <strong>Referencias. </strong>
          <br/>
          En esta opción del menú encontrarás las
          fuentes de consulta que se utilizaron como base para el desarrollo de
          este tema.
        </ListGroup.Item>
      </ListGroup>
      <br/>

      <p>Cabe destacar que esta herramienta digital fue elaborada por
      curaduría de contenidos con información adaptada y recuperada de manera
      intacta de obras de distintos autores, por consiguiente, son citados en el
      apartado fuentes de consulta y con su respectiva referencia a lo largo de
      los textos, respetando así, su autoría para el desarrollo de este
      recurso.</p> 
    </section>
  );
};

export default Metodologia;