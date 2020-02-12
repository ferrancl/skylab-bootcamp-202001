function UserButton (props) {
    return <div className="user-nav" id="nav">
        <div className="user" onClick={()=> props.showNav(props.toggleMenu)}>
            <span className="login__text">{props.user.username}</span>
            <div className="line"></div>
        </div>
        {props.toggleMenu===true && <UserNav watchlist={props.watchlist} editProfile={props.editProfile} logout={props.logout} user={props.user}/>}
    </div>
}