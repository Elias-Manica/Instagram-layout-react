import Post from "./Post";
import Suggest from "./Suggest";

export default function ContentBody() {
  const storys = [
    {
      url: "https://elias-manica.github.io/Instagram-layout/imagens/xdC81pV3_400x400.jpg",
      name: "9gag",
    },
    {
      url: "https://elias-manica.github.io/Instagram-layout/imagens/meowed.png",
      name: "meowed",
    },
    {
      url: "https://elias-manica.github.io/Instagram-layout/imagens/driven%20logo.png",
      name: "driven",
    },
    {
      url: "https://elias-manica.github.io/Instagram-layout/imagens/fluxo%20consultoria%20logo.jpg",
      name: "fluxo",
    },
    {
      url: "https://elias-manica.github.io/Instagram-layout/imagens/barked.png",
      name: "barked",
    },
    {
      url: "https://elias-manica.github.io/Instagram-layout/imagens/responde%20ai%20logo.png",
      name: "responde aí",
    },
    {
      url: "https://elias-manica.github.io/Instagram-layout/imagens/alien.png",
      name: "alien",
    },
    {
      url: "https://elias-manica.github.io/Instagram-layout/imagens/wawawiwa.png",
      name: "wawawiwa",
    },
    {
      url: "https://pi.tedcdn.com/r/pl.tedcdn.com/social/ted-logo-fb.png?v=wAff13s?",
      name: "ted",
    },
  ];

  return (
    <div class="corpo">
      <div class="esquerda">
        <div class="stories">
          {storys.map((item) => (
            <div class="story">
              <div class="imagem">
                <img src={item.url} />
              </div>
              <img
                class="imagem posicao"
                src="https://elias-manica.github.io/Instagram-layout/imagens/stories_background-removebg-preview.png"
              />
              <div class="usuario">{item.name}</div>
            </div>
          ))}
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

        <Post />
      </div>

      <div class="sidebar">
        <div class="usuario">
          <img src="assets/img/catanacomics.svg" />
          <div class="texto">
            <strong>catanacomics</strong>
            Catana
          </div>
        </div>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          <Suggest />
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </div>
    </div>
  );
}
