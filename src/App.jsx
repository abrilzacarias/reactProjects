import "./App.css";
import "./twitterFollowCard";
import { TwitterFollowCard } from "./twitterFollowCard";
//se exporta la funcion para utilizarla en el main
export function App() {
  //se pueden pasar funciones como parametro
  //anade un @ al user que se pasa
  const addAt = (username) => `@${username}`;

  const users = [
    {
      formatUser: addAt,
      isFollowing: true,
      username: "aabril05",
      name: "abril",
    },
    {
      formatUser: addAt,
      isFollowing: false,
      username: "mariacos7a",
      name: "mari",
    },
  ];
  //map() es un método para iterar a través de los elementos dentro de una colección de arreglos en JavaScript
  return (
    //isFollowing no necesita q se le pase true si es true
    //se indica la key para identificar cada elemento del array
    <section className="App">
      {users.map(user => {
        const { formatUser, username, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={username}
            formatUser={formatUser}
            initialIsFollowing={isFollowing}
            username={username}
            name={name}
          >

          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
//<react.Fragment> == <> </>
//initialIsFollowing es buena practica cuando es prop q sirve para inicializar estado
//si se inicializa, solo se inicializa UNA VEZ *importante*
