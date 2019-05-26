const validate = (data, type) => {
    switch (type) {
        case 'email':
            // eslint-disable-next-line
            var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            var test = exp.test(data)

            if(!test){
                return {
                    valid: false,
                    message: "Invalid Email, please enter a valid one."
                }
            }
            return {
                valid: true,
                message: "Valid Email"        
            }
        
        case 'passwordmatch':
            if(data[0] !== data[1]){
                return {
                    valid: false,
                    message: "Password doesn't match."
                }
            }

            return {
                valid: true,
                message: "Valid Passwords"        
            }

        case 'password':
            if(data.length >= 6){
                var digitTest = /\d/.test(data)

                if(!digitTest){
                    return {
                        valid: false,
                        message: 'Password needs to contain at least one number'
                    }
                }else{
                    var letterTest = /[a-zA-Z]/.test(data)

                    if(!letterTest){
                        return {
                            valid: false,
                            message: 'Password needs to contain at least one letter'
                        }
                    }
                }
            }else{
                return {
                    valid: false,
                    message: "Password needs to have more than 5 digits."
                }
            }

            return {
                valid: true,
                message: "Valid Password"        
            }
    
        default:
            break;
    }
}

export { validate }