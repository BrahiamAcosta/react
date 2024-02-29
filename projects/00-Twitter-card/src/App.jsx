import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

//El simbolo <> indica que se renderizará mas de un componente
export function App(){
    return(
        <section className='App'>
            <TwitterFollowCard
            userName={"midudev"}
            isFollowing={true}>
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard
            userName={"IbaiLlanos"}
            isFollowing={false}>
                Ibai Llanos
            </TwitterFollowCard>

            <TwitterFollowCard
            userName={"morgan_freeman"}
            isFollowing={false}>
                Morgan Freman
            </TwitterFollowCard>
        </section>
    )
}