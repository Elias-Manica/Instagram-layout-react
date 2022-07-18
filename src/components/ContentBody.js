import Post from "./Post";
import Suggest from "./Suggest";
import Story from "./Story";
import User from "./User";
import Bottom from "./Bottom";
import Copyright from "./Copyright";

export default function ContentBody() {
  const dataUser = [
    {
      name: "catanacomics",
      profileName: "Catana",
      urlImgUser:
        "https://elias-manica.github.io/Instagram-layout/imagens/fotos-comprovam-que-cachorros-sao-os-pets-mais-engracados-20032018161340130.jpeg",
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

        <Post />
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
