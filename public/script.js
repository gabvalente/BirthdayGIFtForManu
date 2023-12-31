const poemButton = document.getElementById('generate-poem-button');
const poemOutput = document.getElementById('poem-output');

async function generatePoemForManu() {
    const promptMessage = `Escreva um poema lírico com rimas em português do Brasil para Manuela, uma criança que completou 7 anos em 8 de Agosto de 2023. 
    Ela é filha de Rodrigo e Amanda, tem um irmão mais novo chamado Rafael e nasceu em 08 de Agosto de 2016 às 13h08min. 
    Manuela é inteligente, adora os filmes Frozen e Encanto da Disney, ama a natureza, os animais e brincar com seus amigos. 
    O poema deve ser amigável, ter no máximo 300 caracteres e destacar suas qualidades de criança.
    Evite palavras difíceis e mantenha o tom do poema alegre e divertido.
    Não use palavras que possam ser ofensivas ou que possam ser interpretadas como ofensivas.
    Seja criativo e coerente.
    Eis aqui algumas palavras que rimam com Manuela, que podem ser usadas no poema: 
    Cinderela
    Singela
    Aquarela
    Canela
    Janela
    Donzela
    Caravela
    `;

    try {
        poemOutput.textContent = await fetchOpenAI(promptMessage);
    } catch (error) {
        console.error("Error generating poem:", error);
        poemOutput.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

async function fetchOpenAI(message) {
    const response = await fetch('/api/ask-openai', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.message;
}

poemButton.addEventListener('click', function() {
    generatePoemForManu()
        .then(() => {
        })
        .catch(error => {
            console.error("Error generating poem:", error);
        });
});
