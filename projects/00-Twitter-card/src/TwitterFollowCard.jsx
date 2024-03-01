import { useState } from "react";


export function TwitterFollowCard({children, userName, initialIsFollowing}){

    //useState retorna un array de 2 posiciones: [0] estado actual, [1] interrumpor para cambiar el estado
    const [isFollowing , setIsFollowing] = useState(initialIsFollowing);//Parametro useState: valor por defecto


    const text = isFollowing? 'Siguiendo' : 'Seguir';
    const buttonClass = isFollowing? 'tw-follow-button is-following':'tw-follow-button';
    return(
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img className='tw-follow-card-img' 
                src={`https://unavatar.io/twitter/${userName}`}
                 alt="Avatar Gummibeer" />
                <div className='tw-follow-card-info'>
                    <strong>{children}</strong>
                    <span className='tw-follow-card-userName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClass} onClick={()=>{setIsFollowing(!isFollowing)}}>
                    <span className="tw-display-text"> {text}</span>
                    <span className="tw-display-stop-follow"> Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}