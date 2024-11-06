import {
    ButtonComponent,
    FormComponent,
    InputComponent
} from '../components' 

function View() {
    const submit = () => {
        console.log('submit')
    }

    return (
        <FormComponent handleSubmit={submit}>
            <InputComponent label={'Primeiro'} type={'text'} placeholder={'Este é o primeiro'} required={true}/>
            <InputComponent label={'Segundo'} type={'email'} placeholder={'Este é o segundo'}/>
            <InputComponent label={'Terceiro'} type={'password'} placeholder={'Este é o terceiro'} required={true}/>
            <ButtonComponent type={'submit'} label={'Enviar'}/>
        </FormComponent>
    )
}

export default View