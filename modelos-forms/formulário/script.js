const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmpassword = document.getElementById('confirm-password')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value; 
    const confirmpasswordValue = confirmpassword.value;
    
    if(usernameValue === ''){
        setErrorFor(username, 'O Nome de usuário é Obrigatório!')
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'O Email é Obrigatório!')
    }else{
        setSuccessFor(email)
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Senha Obrigatória!')
    }else if(passwordValue.length < 7){
        setErrorFor(password, 'A senha deve conter no mínimo 8 caractéres.')
    }else{
        setSuccessFor(password)
    }

    if(confirmpasswordValue === ''){
        setErrorFor(confirmpassword, 'Confirmação de Senha Obrigatório!')
    }else if(confirmpasswordValue != passwordValue){
        setErrorFor(confirmpassword, 'As senhas não conferem.')
    }else{
        setSuccessFor(confirmpassword)
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //Adicionar Messagem de error
    small.innerText = message;

    //Adicionar class-error
    formControl.className = 'form-control error'
}

function setSuccessFor(input, message){
    const formControl = input.parentElement;

    //Adicionar class-succes
    formControl.className = 'form-control success'; 
}
