async function processa_cadastro_usuario() {
    const form_cadastro_usuario = document.getElementById('form_cadastro_usuario');
    const dados_form = new FormData (form_cadastro_usuario);
    const corpo_payload = Object.fromEntries (dados_form.entries());
    console.log(corpo_payload);

    rota_api_register(corpo_payload)
}