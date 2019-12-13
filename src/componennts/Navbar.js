import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {authContext => (
//           <ThemeContext.Consumer>
//             {ThemeContext => {
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, light, dark } = ThemeContext;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <nav style={{ color: theme.syntax, background: theme.ui }}>
//                   <h1>Contex App</h1>
//                   <button onClick={toggleAuth}>
//                     {isAuthenticated ? "Logged in" : "Logged Out"}
//                   </button>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

// export default Navbar;

//functional component with useContext hook
const NavBar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ color: theme.syntax, background: theme.ui }}>
      <h1>Context App</h1>
      <button onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged Out"}
      </button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
