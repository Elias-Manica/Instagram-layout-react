import React from "react";

export default function Post(props) {
  const [typeButtom, setTypeButtom] = React.useState("heart-outline");
  const [typeLike, setTypeLike] = React.useState("normal");

  return (
    <div class="posts">
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imgUser} alt="" />
            {props.nameUser}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <div className="positionHeart">
            <div className={typeLike}></div>
            <img
              src={props.imgPost}
              alt=""
              onClick={() => {
                setTypeButtom("heart");
                setTypeLike("heart");
                setTimeout(() => {
                  setTypeLike("normal");
                }, 700);
              }}
            />
          </div>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon
                name={typeButtom}
                onClick={() => {
                  if (typeButtom === "heart") {
                    setTypeButtom("heart-outline");
                    setTypeLike("normal");
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
            <img src={props.imgLikedBy} alt="" />
            <div class="texto">
              Curtido por <strong>{props.likedBy}</strong> e{" "}
              <strong>outras {props.likedOthers} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
