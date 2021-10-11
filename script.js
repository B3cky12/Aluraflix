// Estamos testando as listas por agora
var filmes = ["Orgulho e Preconceito", "Luca", "Klaus", "Perdido em Marte"];

// adicionando novos filmes
filmes.push("A caminho da Lua");
filmes.push("The boss baby");
filmes.push(
  "Phineas e Ferb O Filme",
  "Abominável",
  "Beauty and The Beast",
  "Os incríveis 2",
  "Os incríveis",
  "Viva a vida é uma festa",
  "Monstros S.A.",
  "Wish Dragon",
  "Encantada",
  "Operação Big Hero",
  "Mr. Peabody e Sherman",
  "Família do futuro",
  "The Willoughbys",
  "Tangled",
  "Up",
  "Cada um na sua casa",
  "Inside out",
  "Como treinar seu dragão",
  "O bom dinossauro",
  "Cinderela",
  "Cegonhas",
  "A escolha perfeita"
);

// document.write("<p>" + filmes[0] + "</p>");
// document.write("<p>" + filmes[1] + "</p>");
// document.write("<p>" + filmes[2] + "</p>");
// document.write("<p>" + filmes[3] + "</p>");

// document.body.innerHTML += "<p>" + filmes[0] + "</p>"

//for (var indice = 0; indice < filmes.length; indice++) {
//  document.body.innerHTML += "<p>" + filmes[indice] + "</p>";
//}

// Okay, chega de testar, bora fazer.

var listaLink = [
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/14/20028635.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/2/24/Luca_%28Filme_de_2021_%E2%80%93_Novo_p%C3%B4ster%29.png",
  "https://br.web.img3.acsta.net/pictures/19/10/09/17/03/0582059.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/e/e7/Martian_poster_2015.jpg"
];

listaLink.push(
  "https://br.web.img3.acsta.net/pictures/20/09/09/18/55/1869620.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/b/bf/The_Boss_Baby.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/b/b9/Phineas_and_Ferb_Across_the_2nd_Dimension_Dutch_theatrical_poster.jpg",
  "https://br.web.img2.acsta.net/pictures/19/07/22/21/55/0343539.jpg",
  "https://br.web.img3.acsta.net/pictures/17/01/09/12/22/442219.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/d/de/Incredibles2.png",
  "https://br.web.img3.acsta.net/medias/nmedia/18/90/98/38/20123472.jpg",
  "https://br.web.img3.acsta.net/pictures/17/12/07/11/33/0502209.jpg",
  "https://i.pinimg.com/originals/c7/25/38/c725380264f078f58ad5ec51a9f94780.jpg",
  "https://br.web.img3.acsta.net/pictures/21/05/14/10/39/2376393.jpg",
  "https://br.web.img3.acsta.net/pictures/210/163/21016356_20130627200847944.jpg",
  "https://br.web.img2.acsta.net/pictures/14/10/17/19/18/097729.jpg",
  "https://br.web.img3.acsta.net/pictures/14/02/27/15/35/024482.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/93/75/93/20275889.jpg",
  "https://br.web.img3.acsta.net/pictures/20/04/10/01/31/3480111.jpg",
  "https://i.pinimg.com/564x/eb/e2/9f/ebe29f22a9007e711f61b507287e0033.jpg",
  "https://http2.mlstatic.com/D_NQ_NP_636989-MLB25905283816_082017-O.jpg",
  "https://i.pinimg.com/474x/11/99/86/119986f25344c5090a7c850997396469--aliens-selection.jpg",
  "https://m.media-amazon.com/images/I/91xg89rcT-L._AC_SY679_.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/6/62/How_to_Train_Your_Dragon_%28filme%29_Poster.jpg",
  "https://image.tmdb.org/t/p/w342/6DIObOvdH1jCCIe06DLjQFIsZOY.jpg",
  "https://br.web.img3.acsta.net/pictures/14/11/19/19/02/277077.jpg",
  "https://br.web.img3.acsta.net/pictures/16/09/16/21/27/099034.jpg",
  "https://s2.glbimg.com/rilYwnDhRrD5_X-dv7rNI9jYeuo=/362x536/https://s2.glbimg.com/SoX1uTdUwb2Oan5HOZB81tFaHJ8=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/U/C/rg9sKORBqRZCRCyLCkww/2019-657-paramount-dez-a-escolha-perfeita-poster.jpg"
);

for (var i = 0; i < listaLink.length; i++) {
  document.body.innerHTML += `
    <div class="filme">
      <img src=${listaLink[i]}>
      <p>${filmes[i]} </p>
    </div>
  `;
}

function analisar() {
  var novoLink = document.getElementById("linkFilme").value;
  var novoFilme = document.getElementById("nomeFilme").value;
  var mensagem = document.getElementById("espaco");

  if (novoLink.endsWith(".jpg") || novoLink.endsWith(".png")) {
    console.log("oi");
    loop: for (var i = 0; i < filmes.length; i = i + 1) {
      console.log(i);
      if (novoFilme == filmes[i]) {
        mensagem.innerHTML = "Esse filme já pertence a nossa seleção.";
        break loop;
      } else {
        var teste = filmes.length - 1;
        if (i == teste) {
          adicionar(novoLink, novoFilme);
        }
      }
    }
  } else {
    mensagem.innerHTML = "Endereço de imagem inválido!";
  }
  mensagem.innerHTML = "";
  // console.log("tchau");
}

function adicionar(novoLink, novoFilme) {
  var juncao = ` <div class="filme">
      <img src=${novoLink}>
      <p>${novoFilme} </p>
    </div>
  `;
  document.body.innerHTML += juncao;
}