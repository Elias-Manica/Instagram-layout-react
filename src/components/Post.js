import React from "react";

export default function Post() {
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

  const [typeButtom, setTypeButtom] = React.useState("heart-outline");

  return (
    <div class="posts">
      {post.map((item) => (
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={item.imgUser} alt="" />
              {item.nameUser}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img
              src={item.imgPost}
              alt=""
              onClick={() => {
                if (typeButtom === "heart") {
                  setTypeButtom("heart-outline");
                } else {
                  setTypeButtom("heart");
                }
              }}
            />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon
                  name={typeButtom}
                  onClick={() => {
                    if (typeButtom === "heart") {
                      setTypeButtom("heart-outline");
                    } else {
                      setTypeButtom("heart");
                    }
                  }}
                ></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={item.imgLikedBy} alt="" />
              <div class="texto">
                Curtido por <strong>{item.likedBy}</strong> e{" "}
                <strong>outras {item.likedOthers} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
