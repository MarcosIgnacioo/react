import { useLayoutEffect } from 'react'
import Card from './Card'

function App() {
    useLayoutEffect
    return (
        <>
            <div className='pokedex'>
                <Card />
                <button id='more_pokemon' type="">More pokemon</button>
            </div>
        </>
    )
}

export default App
