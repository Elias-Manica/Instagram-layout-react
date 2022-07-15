export default function Story(props) {
  return (
    <div class="posicao">
      <img
        class={props.classBack}
        src="images/stories_background-removebg-preview.png"
        alt=""
      />
      <img class={props.classImg} src={props.url} alt="" />
      <p class={props.className}>{props.name}</p>
    </div>
  );
}
