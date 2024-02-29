export function TwitterFollowCard({children, userName, isFollowing}){
    console.log(isFollowing)
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
                <button className='tw-follow-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}