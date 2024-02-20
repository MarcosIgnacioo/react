import './Recipe.css';

function Recipe(props) {
    console.log(props.recipes)
    return (
        <div class="recipe">
            <img src={props.imgUrl} alt="" />
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <button id="see_btn" type="">Ver</button>
        </div>
    );
}
export default Recipe 
