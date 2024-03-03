//https://pokeapi.co/api/v2/pokemon-species <-- descripcion pokemon
import './styles.css';
function Pokemon(props) {
    return (
        <div className={`pokemon_card ${props.firstType}`} onClick={() => {
            PlayCry(props.cry)
        }}>
            <img src={props.sprite} alt="" />
            <h1> No.{props.id}</h1>
            <h1 className='pokemon_name'> {UpperCaseFirstLetter(props.name)} </h1>
            <div className='types_container'>
                <h1 className={props.firstType}> {UpperCaseFirstLetter(props.firstType)} </h1>
                <h1 className={props.secondType}> {UpperCaseFirstLetter(props.secondType)} </h1>
            </div>
        </div>
    )
}

function UpperCaseFirstLetter(text) {
    return (text.charAt(0)).toUpperCase() + text.slice(1);
}

function PlayCry(src) {
    const audio = new Audio(src);
    audio.volume = 0.2;
    audio.play();
}
export default Pokemon;
