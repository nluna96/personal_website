import {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';

const useForm = (validate) => {
    const [values, setValues] = useState ({
        name: '',
        user_email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});


    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleSubmit = e => {


        if (Object.keys(validate(values)).length == 0){

            console.log(values)
            emailjs.send('service_f6m8b5b', 'template_cbi1mm7', values, 'user_EVRTefLUNOWTEEy4t8sBW').then(res=>{
            console.log(res);
            }).catch(err=> console.log(err));

            alert("Message Sent!")
        } else {
            e.preventDefault();

            setErrors(validate(values));
        }

    };
    

    return {handleChange, values, handleSubmit, errors };


};

export default useForm