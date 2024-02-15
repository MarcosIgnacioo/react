function Button(props) {
    return (
        <button disabled={props.disabled}>{props.text}</button>
    )
}
export default Button
