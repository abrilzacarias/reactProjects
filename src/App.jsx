import './App.css'
import './twitterFollowCard'
import { TwitterFollowCard } from './twitterFollowCard'
//se exporta la funcion para utilizarla en el main
export function App () {
  return (
    <>
    <TwitterFollowCard username={'aabril05'} name={'abril'} />
    <TwitterFollowCard username={'mariacos7a'} name={'mari'} />
    </>
  )
  }
//<react.Fragment> == <> </>