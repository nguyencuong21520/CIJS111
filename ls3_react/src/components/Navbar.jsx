const Navbar = (props) =>{
    const { cardClicked } = props;

    return (
        <nav>
            <h1 style={{color: 'red', fontSize: '20px'}}>Navbar</h1>
            <ul>
                <li>Card Licked: {cardClicked}</li>
                <li>Contact</li>
            </ul>
            
        </nav>
    )
}

export default Navbar;