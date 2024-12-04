import './style.css'

function Pokemon({ img, name }) {
    return (
        <section className="pokemon">
            <img src={img} alt={`Image of ${name}`} />
            <div>
                <h3>{name}</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Eum maiores illo, quod 
                    quam, inventore, placeat impedit ducimus 
                    esse praesentium mollitia exercitationem 
                    aliquid aut magnam voluptates optio 
                    voluptatibus expedita consequatur 
                    consequuntur?
                </p>
            </div>
        </section>
    )
}

export default Pokemon