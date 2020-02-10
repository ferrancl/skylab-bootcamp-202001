function UserButton (props) {
    return <div className="user-nav" id="nav" onClick={props.showNav}>
        <div className="user">
        <span className="login__text">{props.user}</span>
            <div className="line"></div>
        </div>
        {props.toggleMenu===true && <UserNav/>}
    </div>
}