export function TwitterFollowCard ({ username, name, isFollowing }) {
    //se crea una constante pq react no deja pasar algo directamente que no sea string
    //por lo tanto no seria reutilizable si no se pasa username
    //para interpolacion (insercion de valores) de variables se usa `` (backticks)
    //se evalua ENTRE LLAVES {}
    const imageSrc = `https://unavatar.io/twitter/${username}`
    return (
    //para que no choque con JS
    //donde class esta reservada, se utiliza className
    //lomejor es utilizar Suit, prefijo con -
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt="Foto de perfil" src={imageSrc} />
      <div className='tw-followCard-info'>
        {name}
        <span>@{username}</span>
      </div>
      </header>

      <aside>
        <button>
          Seguir
        </button>
      </aside>
    </article>)
}