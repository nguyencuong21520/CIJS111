const Navbar = () =>{

    const a = 300

    return (
        <nav>
            <h1 style={{color: 'red', fontSize: '20px'}}>Navbar</h1>
            <ul>
                <li>{ a > 10 ? 'a lớn hơn 10' : 'a nhỏ hơn 10' }</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;