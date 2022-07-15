export default function Suggest() {
  const suggestProfilesAPI = [
    {
      imgUser:
        "https://elias-manica.github.io/Instagram-layout/imagens/e4b604dd5919ebf1d051335359f1a3d1--animal-funnies-funny-animals.jpg",
      nameUser: "bad.vibes.memes",
      reasonUser: "Segue você",
    },
    {
      imgUser:
        "https://elias-manica.github.io/Instagram-layout/imagens/17533-memes-de-cachorro-ganham-o-mundo-pelas-m-articles_media_mobile-1.jpg",
      nameUser: "chibirdart",
      reasonUser: "Segue você",
    },
    {
      imgUser:
        "https://elias-manica.github.io/Instagram-layout/imagens/Nicole_Rayner__Smiley_.jpeg",
      nameUser: "razoesparaacreditar",
      reasonUser: "Novo no Instagram",
    },
    {
      imgUser:
        "https://elias-manica.github.io/Instagram-layout/imagens/piadas-muito-engracadas-de-animais-de-estimacao-id1272139756.jpg",
      nameUser: "adorableanimals",
      reasonUser: "Segue você",
    },
    {
      imgUser:
        "https://elias-manica.github.io/Instagram-layout/imagens/noodles_capa_widelg.jpg",
      nameUser: "smallcutecats",
      reasonUser: "Segue você",
    },
  ];

  const suggestProfilesJSX = suggestProfilesAPI.map((dataUser) => (
    <div class="sugestao">
      <div class="usuario">
        <img src={dataUser.imgUser} />
        <div class="texto">
          <div class="nome">{dataUser.nameUser}</div>
          <div class="razao">{dataUser.reasonUser}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  ));

  return <div>{suggestProfilesJSX}</div>;
}
