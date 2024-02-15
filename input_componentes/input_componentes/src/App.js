import './Form.css';
import Button from './Button';
import Input from './Input';

function App() {
    return (
        <form>
            <h1>Nuevo usuario</h1>
            <label for="username">Usuario</label>
            <Input name="username" />
            <label for="email">Correo</label>
            <Input name="email" />
            <label for="password">Contrasena</label>
            <Input type="password" name="password" />
            <div class="terms">
                <input type="checkbox" name="terms" />
                <span>Acepto los terminos y condiciones</span>
            </div>
            <div class="buttons">
                <Button disabled="disabled" text="Cancelar" />
                <Button text="Aceptar" />
            </div>
        </form>
    )
}

export default App;
