import '../assets/input.css'

function InputComponent({ label, type, placeholder, required }) {

    
    const Exemplo = () => (
        <input className={label && 'input'} type={type} placeholder={placeholder} required={required}/>
    )

    return (
        <label>
            {label}:
            <Exemplo />
        </label>
    )
}

export default InputComponent