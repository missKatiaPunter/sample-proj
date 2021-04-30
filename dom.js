const form = document.getElementById('form');
const name = document.getElementById('name');
const bt = document.getElementById('btn');

//Outlines the input box red and shows an error message if it does not pass checks
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-field error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Outlines the input box green if it passes checks
const showSuccess = input => {
    const formControl = input.parentElement;
    formControl.className = 'form-field success';
}

const checkRequired = arrayOfNodes => {
    arrayOfNodes.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, "Required");
            return false;
        } else {
            showSuccess(input);
            return true;
        }
    });
}

const checkInput = e => {
    e.preventDefault();
    console.log(e.target[0].value);
    if(isValidName(e.target[0].value)){
        showSuccess(input);
        return true;
    }else{
        showError(e.target[0], "Not a name");
        return false;
    }
    
}
const checkValid = e => {
    e.preventDefault();
    checkRequired([name])
    isValidName()
    bt.disabled = false;
}

form.addEventListener('input', checkValid);
form.addEventListener('submit', checkInput);