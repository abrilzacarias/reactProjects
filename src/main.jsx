//se importa React desde react, el modulo
import React from 'react'
import ReactDOM from 'react-dom/client'
//componente app
import { App } from './App.jsx'
//se importan los estilos
import './index.css'

//document.getElementById('root') es el elemento del HTML donde se crea/renderiza la aplicacion
//se crea el elemento con una constante
const root = ReactDOM.createRoot(document.getElementById("root"));

/*root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)*/
//ya que en react solo se puede devolver un elemento
//se utiliza React.Fragment, el cual permite agrupar varios elementos
/*root.render(
<React.Fragment>
    <button>Button</button>
    <button>Button</button>
    <button>Button</button>
</React.Fragment>)*/
//para hacer que el boton se repita, y cada boton se pueda cambiar y que se puedan reutilizar.
//se crea un componente
//Un componente es una funcion que crea un elemento
//en lugar de hacer una funcion que se llame createButton, se llamaria solo Button
//debe ser declarativo, no imperativo (createButton es imperativo)

//se crea el componente el cual recibe un texto como parametro
/*const Button = ({ text }) => {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
        />
      </svg>
      {text}
    </button>
  );
};*/

//createButton({text : 'Button 1'}) INCORRECTO
//al parametro, se lo pasa como atributo
//<Button text={'Button1'} /> CORRECTO
//los componentes deben ser pascal case: PascalCase (primera letra mayusc)
//IMPORTANTE! Debe ser si o si de esta manera, porque es la unica manera que React diferencia
//si se trata de un elemento HTML o si es realmente un componente
/*root.render(
  <React.Fragment>
    <Button text={"Button1"} />
    <Button text={"Button2"} />
    <Button text={"Button3"} />
  </React.Fragment>
);*/

root.render(
  <App />
);
