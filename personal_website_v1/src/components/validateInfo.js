export default function validateInfo(values) {
    let errors = {}
    
    //Name
    if(!values.name.trim()) {
        errors.name = "Name Required"
    }

    //Email
    if(!values.user_email){
        errors.user_email = "Email Required"
    } else if (!/\S+@\S+\.\S+/.test(values.user_email)) {
        errors.user_email = "Email address is invalid"
    }

    //Message
    if(!values.message.trim()) {
        errors.message = "Message Required"
    }

    return errors;
}