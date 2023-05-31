function TodoCounter({total, completed}) {
  return(
    <h1>
      Haz completado {completed} de {total} TODOS
    </h1>
  );
}

export { TodoCounter };
//no hacemos el export con default para evitar typos
//se agregan props que funcionan como parametros
