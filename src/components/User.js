export default function User(props) {
  return (
    <div class="usuario">
      <img src={props.urlImgUser} alt="" />
      <div class="texto">
        <strong>{props.name}</strong>
        {props.profileName}
      </div>
    </div>
  );
}
