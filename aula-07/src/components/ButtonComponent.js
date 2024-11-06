function ButtonComponent({ label, type, handleClick }) {
    return (
        <button type={type} onClick={handleClick}>{ label }</button>
    )
}

export default ButtonComponent