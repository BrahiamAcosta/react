import './App.css'

export function App(){
    return(
        <article className='tw-follow-card'>
            <header>
                <img src="https://unavatar.io/duckduckgo/gummibeer.dev" alt="Avatar Gummibeer" />
                <div>
                    <strong>GummiBeer</strong>
                    <span>@gummibeer.dev</span>
                </div>
            </header>

            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>

    )
}