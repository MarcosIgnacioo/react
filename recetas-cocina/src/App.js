import Header from './Header';
import Recipe from './Recipe';
import './App.css';
import poptarts from './poptarts.json'

function App() {
    let recipes = poptarts.map((pt) => < Recipe imgUrl={pt.image} name={pt.name} description={pt.description} />)
    console.log(recipes[0])
    return (
        <div className="App" class="app">
            <Header logoUrl="https://pbs.twimg.com/media/GG0WauJaMAAADjW?format=png&name=360x360" title="Encuentra las mejores pop tarts" placeholder="Nombre del producto" />
            <div class="recipes">
                {recipes}
            </div>
        </div>
    );
}

export default App;
