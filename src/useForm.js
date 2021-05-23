import React, {useState} from 'react'

const useForm = () => {
    const [values, setValues] = useState ({
        name: '',
        number: '',
        expiration: '',
        cvc: '',
        focus: ''
    })

    const [errors, setErrors] = useState()

    const handleFocus = e => {

    }

    const handleChange = e => {

    }

    const handleSubmit = e => {

    }

    return {handleChange, handleFocus, handleSubmit, values, errors}
}

export default useForm
