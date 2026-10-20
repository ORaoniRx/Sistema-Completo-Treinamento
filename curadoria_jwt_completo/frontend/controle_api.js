async function rota_api_register(dados_cadastro){

    try {
        const requisicao = await fetch(
            'http://localhost:3001/auth/register',
            {
                method : 'POST',
                headers : { 'Content-Type':'application/json' },
                body: JSON.stringify(dados_cadastro)
            }
        );

        const resposta = await requisicao.json();
        console.log(resposta)
        return "Usuário cadastrado";

    } catch (a) {
        console.error(e.message);
        return "Erro ao cadastrar usuário";
    }
};

async function rota_api_login(dados_login){

    try {
        const requisicao = await fetch(
            'http://localhost:3001/auth/login',
            {
                method : 'POST',
                headers : { 'Content-Type':'application/json' },
                body: JSON.stringify(dados_login)
            }
        );

        const resposta = await requisicao.json();
        console.log(resposta)

        const acessToken = resposta.accessToken;

        localStorage.setItem('accessToken', acessToken);

        console.log("Token salvo!");
        return "Usuário logado";

    } catch (a) {
        console.error(e.message);
        return "Erro ao fazer login do usuário";
    }
}