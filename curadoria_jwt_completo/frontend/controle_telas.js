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

async function carregar_itens_tela() {

    let itens = await rota_api_list_items();

    content.innerHTML = `
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Listagem de Dados do Servidor</title>
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
            background-color: #007BFF;
            color: white;
            font-weight: bold;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        .mensagem-erro {
            color: red;
            font-weight: bold;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>

    <h2>Tabela de Itens do Back-end</h2>

    <!-- Se houver algum erro de conexão ou token, exibe a mensagem aqui -->
    <% if (typeof erro !== 'undefined') { %>
        <p class="mensagem-erro"><%= erro %></p>
    <% } %>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome do Produto</th>
                <th>Preço</th>
            </tr>
        </thead>
        <tbody>
            <% if (items.length === 0) { %>
                <tr>
                    <td colspan="3" style="text-align: center;">Nenhum registro encontrado.</td>
                </tr>
            <% } else { %>
                <!-- O servidor roda este loop e cria as linhas da tabela dinamicamente -->
                <% items.forEach(function(item) { %>
                    <tr>
                        <!-- Altere 'item.id', 'item.nome' e 'item.preco' pelas chaves exatas do seu JSON -->
                        <td><%= item.id %></td>
                        <td><%= item.nome %></td>
                        <td>R$ <%= item.preco %></td>
                    </tr>
                <% }); %>
            <% } %>
        </tbody>
    </table>

</body>
</html>
    `


}

