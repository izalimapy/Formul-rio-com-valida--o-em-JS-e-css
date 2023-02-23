const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInpunt = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobselect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome!");
        return;
    }
    
    // Verifica se o email esta preenchido e se é válido 
    if (emailInpunt.value === "" || !isEmailValid(emailInpunt.value)) {
        alert("Por favor,preencha o seu email!");
        return;
    }

    // Verifica se a senha está preenchida
    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter 8 digitos.");
        return;    
    }

    // Verificar se a situação foi selecionada
    if(jobselect.value === "") {
        alert("Por favor, selecione a sua opção!");
        return; 
    }

    // Verifica se a mensagem está preenchida
    if (messageTextarea.value === "") {
        alert("Por favor, escreva uma mensagem!");
        return;
    }
    

    // Se todos os campos estiverem corretamente preenchidos, envie o formulario
    form.submit();
});

// Função que valida o e-mail
function isEmailValid(email) {
    // Criar uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}

// Funçaõ que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        // Senha válida
        return true
    }

    // Senha invalida
    return false
}