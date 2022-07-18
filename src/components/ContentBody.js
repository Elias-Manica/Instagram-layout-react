import Suggest from "./Suggest";
import Story from "./Story";
import User from "./User";
import Bottom from "./Bottom";
import Copyright from "./Copyright";
import Post from "./Post";

export default function ContentBody() {
  const dataUser = [
    {
      name: "catanacomics",
      profileName: "Catana",
      urlImgUser:
        "https://elias-manica.github.io/Instagram-layout/imagens/fotos-comprovam-que-cachorros-sao-os-pets-mais-engracados-20032018161340130.jpeg",
    },
  ];

  const post = [
    {
      nameUser: "meowed",
      imgUser:
        "https://elias-manica.github.io/Instagram-layout/imagens/meowed.png",
      imgPost:
        "https://elias-manica.github.io/Instagram-layout/imagens/gato-da-selfie-2.jpg",
      imgLikedBy:
        "https://elias-manica.github.io/Instagram-layout/imagens/responde%20ai%20logo.png",
      likedBy: "respondeai",
      likedOthers: "101.523",
    },
    {
      nameUser: "driven",
      imgUser:
        "https://elias-manica.github.io/Instagram-layout/imagens/driven%20logo.png",
      imgPost:
        "https://elias-manica.github.io/Instagram-layout/imagens/cachorro-selfie2.jpg",
      imgLikedBy:
        "https://elias-manica.github.io/Instagram-layout/imagens/alien.png",
      likedBy: "alien",
      likedOthers: "92.321",
    },
    {
      nameUser: "fluxo",
      imgUser:
        "https://elias-manica.github.io/Instagram-layout/imagens/fluxo%20consultoria%20logo.jpg",
      imgPost:
        "https://elias-manica.github.io/Instagram-layout/imagens/cachorros-fazendo-selfie_3.jpg",
      imgLikedBy:
        "https://elias-manica.github.io/Instagram-layout/imagens/wawawiwa.png",
      likedBy: "wawawiwa",
      likedOthers: "76.089",
    },
  ];

  return (
    <div class="corpo">
      <div class="esquerda">
        <div class="stories">
          <Story />
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
        {post.map((item) => (
          <Post
            nameUser={item.nameUser}
            imgUser={item.imgUser}
            imgPost={item.imgPost}
            imgLikedBy={item.imgLikedBy}
            likedBy={item.likedBy}
            likedOthers={item.likedOthers}
          />
        ))}
      </div>

      <div class="sidebar">
        {dataUser.map((item) => (
          <User
            name={item.name}
            profileName={item.profileName}
            urlImgUser={item.urlImgUser}
          />
        ))}

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          <Suggest />
        </div>

        <Copyright />
      </div>
      <Bottom />
    </div>
  );
}
