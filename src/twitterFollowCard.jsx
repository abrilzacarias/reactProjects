//se importa la utilidad para que el componente sepa si hacer una cosa u otra
//se le llama HOOKS, permiten a;adir cierta funcionalidad a los componentes
import { useState } from "react";

export function TwitterFollowCard({
  formatUser,
  username = "unknown",
  name = "unknown",
  initialIsFollowing
}) {
  //ESTADOS: es lo que hace que el boton cambie de Seguir a Siguiendo
  //Utiliza el renderizado CONDICIONAL
  //se usa useState, se establece el valor inicial del Estado
  //devuelve un array de 2 posiciones, 1ra se tiene el valor y en la 2da es la funcion
  //que permite actualizar el estado a la nueva version

  //se utiliza DESTRUCTURACION para decir que en una sola linea
  //la constante devuelve un array, donde 1ra posicion '' y 2da ''
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  //forma larga:
  //const state = useState(false)
  //const isFollowing = state[0]
  //const setIsFollowing = state[1]
  const text = isFollowing ? "Siguiendo" : "Seguir"; //operador ternario
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following" //si esta siguiendo, se usa el css este y la clase isFollowing
    : "tw-followCard-button"; //si no, solo el boton normal

  //para cuando se de click, si es true se convierta en false y viceversa
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  //se crea una constante pq react no deja pasar algo directamente que no sea string
  //por lo tanto no seria reutilizable si no se pasa username
  //para interpolacion (insercion de valores) de variables se usa `` (backticks)
  //se evalua ENTRE LLAVES {}
  const imageSrc = `https://unavatar.io/twitter/${username}`;
  return (
    //para que no choque con JS
    //donde class esta reservada, se utiliza className
    //lomejor es utilizar Suit, prefijo con -
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Foto de perfil"
          src={imageSrc}
        />
        <div className="tw-followCard-info">
          {name}
          <span>{formatUser(username)}</span>
        </div>
      </header>

      {/*Se pasa el buttonClassName como parametro, asi es dinamico*/}
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
//la diferencia entre componente y elemento es q el compont es una factoria de elementos
//es una funcion que al ejecutarla te devuelve un elemento
//y el elemento es lo que renderiza react
//las props (parametros) son inmutables
/*DOM virtual: cuando se apreta el boton de Seguir, no se vuelve a renderizar
todo el articulo, solo se actualiza aquello que cambia, o sea el estado y 
el boton, la foto y nombre por ej, quedan igual y no se renderiza de vuelta.*/
/*1 forma es ese cambio de estado interno (useState), otra forma es cuando 
un componente padre se vuelve a renderizar y propaga sus cambios a los 
children */
