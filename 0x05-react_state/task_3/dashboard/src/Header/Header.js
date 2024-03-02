import React, { useContext } from "react"
import logo from '../assest/holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";

const Header = () => {
  const { user, logOut } = useContext(AppContext)
    return(
        <>
          <header className={css(style.AppHeader)}>
              <img src={logo} className={css(style.AppLogo)} alt='logo' />
              <h1>School dashboard</h1>
          </header>
          {user.isLoggedIn && (
            <section id="logoutSection" >
              Welcome <strong>{user.email}</strong>
              <em>
                <a href="#" onClick={logOut}>(logout)</a>
              </em>
            </section>
          )
          }
        </>
    )
}

const style = StyleSheet.create({
    
AppHeader: {
    borderBottom: "0.2rem solid #e0354b",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "1rem",
    color: "#e0354b",
    fontWeight: "800",
    fontSize: "1.5rem",
    margin: "0",
    padding: "0",
    height: "25vh",
  },
  
  AppLogo: {
    maxHeight: "calc(0.9 * 25vh)",
  },
  
})
export default Header;