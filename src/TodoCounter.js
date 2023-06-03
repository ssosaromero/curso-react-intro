import './TodoCounter.css';


function TodoCounter({total, completed}) {
  return(
    <h1 className="TodoCounter">
      Haz completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
//no hacemos el export con default para evitar typos
//se agregan props que funcionan como parametros
//en jsx tenemos que agregar las propiedades(en este caso style) en forma de objeto(que se puede definir afuera o en la misma propiedad, con doble llave)
//el estilo tambien puede hacerse con un archivo css normal
