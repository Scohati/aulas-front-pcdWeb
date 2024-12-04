import './style.css'

function Container({ children }) {
    return (
        <section className="poke-container">
            { children }
        </section>
    )
}

export default Container