function FormComponent({ children, handleSubmit }) {
    return (
        <form onSubmit={() => handleSubmit()}>
            { children }
        </form>
    )
}

export default FormComponent