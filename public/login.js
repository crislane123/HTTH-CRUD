function fazerLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    fetch('http://localhost:3000/cadastro/')
    .then(response => response.json())
    .then(data => {
        //Busca cujo o nome e idade coicidem com os valores digitados
        //Esse p seria o parametro do find (Procurar). Função CallBack
        const pessoa = data.find(p => p.email === email && p.senha == senha);

        if(pessoa) {
            window.location.href = "bemVindo.html";
        }else{
            alert('email e senha não encontrados no banco de dados')
        }
    })
}