export const validateUserLoginForm = (values) => {
    const errors = {};
    
    if(!values.username) {
        errors.username = "Required";
    }
    if(!values.password) {
        errors.password = "Required";
    }

    if(values.username.length < 6) {
        errors.username = "Username should be more than 6 characters";
    } else if (values.username.length > 15) {
        errors.username = "Username should be less than 15 characters";
    }

    if (values.password.length < 8) {
        errors.password = "Password should be greater than 8 characters";
    }
    
    return errors;
}