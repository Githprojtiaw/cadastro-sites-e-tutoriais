// p cadastro tutorial
var db_tutorial_inicial = {
    "data": [
        {
          "id": 1,
          "nome": "Facebook",
          "titulo": "Como postar textos",
          "conteudo": "Lorem ipsum dolor sit amet.  Qui sint perspiciatis ut exercitationem rerum et omnis magni et fugit deserunt?"
        },
        {
          "id": 2,
          "nome": "Instagram",
          "titulo": "Como publicar fotos",
          "conteudo": "Lorem ipsum dolor sit amet? Qui labore exercitationem vel harum quia et architecto animi rem reprehenderit excepturi est laborum iste ab odit dignissimos."
        },
        {
          "id": 3,
          "nome": "YouTube",
          "titulo": "Como curtir vídeos",
          "conteudo": "Lorem ipsum dolor sit amet! Qui sint perspiciatis ut exercitationem rerum et omnis magni et fugit deserunt, Qui labore exercitationem vel harum quia et architecto animi rem reprehenderit excepturi est laborum iste ab odit dignissimos."
        },
        {
          "id": 4,
          "nome": "Instagram",
          "titulo": "Como postar stories",
          "conteudo": "Lorem ipsum dolor sit amet! Qui labore exercitationem vel harum quia et architecto animi rem reprehenderit excepturi est laborum iste ab odit dignissimos."
        },
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_tutorial'));
if (!db) {
    db = db_tutorial_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertTutorial(tutorial) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoTutorial = {
        "id": novoId,
        "nome": tutorial.nome,
        "titulo": tutorial.titulo,
        "conteudo": tutorial.conteudo
    };

    // Insere o novo objeto no array
    db.data.push(novoTutorial);
    displayMessage("Tutorial inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_tutorial', JSON.stringify(db));
}

function updateTutorial(id, tutorial) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let cadastro_tutoriais = db.data.map(obj => obj.id).cadastro_tutoriaisOf(id);

    // Altera os dados do objeto no array
    db.data[cadastro_tutoriais].nome = tutorial.nome,
    db.data[cadastro_tutoriais].titulo = tutorial.titulo,
    db.data[cadastro_tutoriais].conteudo = tutorial.conteudo

    displayMessage("Tutorial alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_tutorial', JSON.stringify(db));
}

function deleteTutorial(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Tutorial removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_tutorial', JSON.stringify(db));
} 
