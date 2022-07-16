import React from "react";

export default function Icons() {
  const [typeButtom, setTypeButtom] = React.useState("heart-outline");
  return (
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

            console.log("clicou");
          }}
        ></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
  );
}
