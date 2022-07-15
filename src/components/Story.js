export default function Story() {
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

  return storys.map((item) => (
    <div class="story">
      <div class="imagem">
        <img src={item.url} alt="" />
      </div>
      <img
        class="imagem posicao"
        src="https://elias-manica.github.io/Instagram-layout/imagens/stories_background-removebg-preview.png"
        alt=""
      />
      <div class="usuario">{item.name}</div>
    </div>
  ));
}
