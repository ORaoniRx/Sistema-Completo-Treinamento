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
}