function Pagination({movePageProp}) {
    return (
        <section>
            <button onClick={() => movePageProp('prev')}>Anterior</button>
            <button onClick={() => movePageProp('next')}>Próxima</button>
        </section>
    )
}

export default Pagination
