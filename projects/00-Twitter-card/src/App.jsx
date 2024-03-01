import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users=[
    {
        userName:"midudev",
        name:"Miguel Ángel Durán",
        isFollowing:false
    },
    {
        userName:"IbaiLlanos",
        name:"Ibai Llanos",
        isFollowing:true
    },
    {
        userName:"morgan_freeman",
        name:"Morgan Freeman",
        isFollowing:false
    },
]

//El simbolo <> indica que se renderizará mas de un componente
export function App(){
    return(
        <section className='App'>
            {
                users.map(user =>{
                    const {userName,name,isFollowing} = user
                    return(
                        <TwitterFollowCard 
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}