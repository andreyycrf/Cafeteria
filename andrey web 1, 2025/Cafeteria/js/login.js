
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso!!');
        location.href = "cafeteria.html";
    }else{
        alert('Usuário ou senha incorretos!!')
        
    }
}