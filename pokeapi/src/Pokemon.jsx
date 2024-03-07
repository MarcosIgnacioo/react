//https://pokeapi.co/api/v2/pokemon-species <-- descripcion pokemon
import "./styles.css";
function Pokemon(props) {
  let secondTypeTag;
  if (props.secondType) {
    secondTypeTag = (
      <h1 className={props.secondType}>
        {" "}
        {UpperCaseFirstLetter(props.secondType)}{" "}
      </h1>
    );
  }
  return (
    <div
      className={`pokemon_card ${props.firstType}`}
      onClick={(e) => {
        // PlayCry(props.cry);
        // todo hacer que esto me de la card exacta nya
        const pokemonCard = e.target;
        console.log(pokemonCard);
        // const pokemonStats = pokemonCard.querySelector(".pokemon-stats");
        // pokemonStats.hidden = false;
      }}
    >
      <img src={props.sprite} alt="" />
      <h1> No.{props.id}</h1>
      <h1 className="pokemon_name"> {UpperCaseFirstLetter(props.name)} </h1>
      <div className="types_container">
        <h1 className={props.firstType}>
          {" "}
          {UpperCaseFirstLetter(props.firstType)}{" "}
        </h1>
        {secondTypeTag}
      </div>
      <div className="pokemon-stats" hidden>
        <div className="stat-container">
          <h1>HP</h1>
          <div className="indicator" id="hp-indicator" data-stat={props.hp}>
            {props.hp}
          </div>
        </div>
        <div className="stat-container">
          <h1>ATK</h1>
          <div
            className="indicator"
            id="atk-indicator"
            data-stat={props.attack}
          >
            {props.attack}
          </div>
        </div>
        <div className="stat-container">
          <h1>SP.ATK</h1>
          <div
            className="indicator"
            id="spatk-indicator"
            data-stat={props.specialAttack}
          >
            {props.specialAttack}
          </div>
        </div>
        <div className="stat-container">
          <h1>DEF</h1>
          <div
            className="indicator"
            id="def-indicator"
            data-stat={props.defense}
          >
            {props.defense}
          </div>
        </div>
        <div className="stat-container">
          <h1>SP.DEF</h1>
          <div
            className="indicator"
            id="spdef-indicator"
            data-stat={props.specialDefense}
          >
            {props.specialDefense}
          </div>
        </div>
        <div className="stat-container">
          <h1>SPEED</h1>
          <div
            className="indicator"
            id="speed-indicator"
            data-stat={props.speed}
          >
            {props.speed}
          </div>
        </div>
      </div>
    </div>
  );
}

function UpperCaseFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function PlayCry(src) {
  const audio = new Audio(src);
  audio.volume = 0.2;
  audio.play();
}
export default Pokemon;
