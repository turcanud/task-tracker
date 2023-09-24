import Button from "./Button"

const Header = ({ title, onAdd, isShowing }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={isShowing ? 'red' : 'green'} text={isShowing ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

export default Header