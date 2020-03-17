import './Navbar.sass'

export default function(){
      return <> 
      <nav className="navbar" >
        {/* <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} /> */}
        <section className="logo" >
          <img className="logoimg" src="img/logo.png" alt=""/>
        </section>
    ​
        <section className="items" >
          <ul>
            <li><a> SEARCH</a></li>
            <li><a>FOR SALE</a></li>
          </ul>
        </section>
    ​
        <section className="navbar__profile" >
          <div>
            <i className="far fa-user"></i>
            <label>
              {user ? firstUppercase(user.name): "gdfg"}
            </label>
          </div>
          <div>
            <i className="fas fa-sign-out-alt"></i>
            <label>Logout</label>
          </div>
        </section>
    ​
        <section  className="bars">
          <i className="fas fa-bars"></i>
        </section>
    ​
      </nav>
    </>
    }
    ​