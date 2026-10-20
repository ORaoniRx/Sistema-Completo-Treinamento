async function processa_cadastro_usuario() {
    const form_cadastro_usuario = document.getElementById('form_cadastro_usuario');
    const dados_form = new FormData (form_cadastro_usuario);
    const corpo_payload = Object.fromEntries (dados_form.entries());
    console.log(corpo_payload);

    rota_api_register(corpo_payload)
};

async function processa_login() {
    const form_login = document.getElementById('form_login');
    const dados_form = new FormData (form_login);
    const corpo_payload = Object.fromEntries (dados_form.entries());
    console.log(corpo_payload);

    rota_api_login(corpo_payload)
};

async function listar_itens() {
    try {
        const resposta = await fetch('http://localhost:3001/items/');

        const dadosJson = await resposta.json();

        const htmlDiv = `
        <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Listagem de Dados</title>
    <style>
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-top: 20px; 
            font-family: Arial, sans-serif;
        }
        th, td { 
            border: 1px solid #ddd; 
            padding: 12px; 
            text-align: left; 
        }
        th { 
            background-color: #f2f2f2; 
            font-weight: bold;
        }
        tr:nth-child(even) { 
            background-color: #f9f9f9; 
        }
    </style>
</head>
<body>

    <h2>Tabela de Usuários</h2>
    
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
            </tr>
        </thead>
        <tbody>
            <!-- Exemplo de como as linhas ficarão visualmente -->
            <tr>
                <td>1</td>
                <td>João Silva</td>
                <td>joao@email.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Maria Souza</td>
                <td>maria@email.com</td>
            </tr>
        </tbody>
    </table>

</body>
</html>

        `
    } catch {
        
    }


}

