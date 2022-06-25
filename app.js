var db_site_inicial = {
    "data": [
        {
          "id": 1,
          "nome": "Facebook",
          "categoria": "Rede Social",
          "website": "facebook.com"
        },
        {
          "id": 2,
          "nome": "Instagram",
          "categoria": "Rede Social",
          "website": "instagram.com"
        },
       {
          "id": 3,
          "nome": "YouTube",
          "categoria": "Entretenimento",
          "website": "youtube.com"
        },
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_site'));
if (!db) {
    db = db_site_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertSite(site) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoSite = {
        "id": novoId,
        "nome": site.nome,
        "categoria": site.categoria,
        "website": site.website
    };

    // Insere o novo objeto no array
    db.data.push(novoSite);
    displayMessage("Site inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_site', JSON.stringify(db));
}

function updateSite(id, site) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = site.nome,
    db.data[index].categoria = site.categoria,
    db.data[index].website = site.website

    displayMessage("Site alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_site', JSON.stringify(db));
}

function deleteSite(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Site removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_site', JSON.stringify(db));
}
