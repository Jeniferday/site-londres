document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const messageElement = document.getElementById('message');

    messageElement.textContent = "";
    messageElement.style.color = "red"; 

    console.log("Nome:", name); 
    console.log("Email:", email);

    
    if (!name) {
        messageElement.textContent = "Por favor, preencha o campo nome.";
        return; 
    }

    if (!email) {
        messageElement.textContent = "Por favor, preencha o campo e-mail.";
        return;
    }

    messageElement.textContent = "Formulário enviado com sucesso!";
    messageElement.style.color = "green";

   
    console.log("Formulário enviado com sucesso!");
});
