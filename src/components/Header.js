/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, NavLink } from "theme-ui";

function Header(props) {
  return (
    <header
      sx={{
        justifyContent: "space-between",
        width: "100%",
        display: "flex",
        alignItems: "center",
        py: 2,
      }}
    >
      <Link to="/" sx={{ flex: 1 }}>
        <NavLink sx={{ color: "text" }}>{props.title}</NavLink>
      </Link>
      <Link to="/allposts" sx={{ flex: 0.1 }}>
        <NavLink>Posts</NavLink>
      </Link>
      <Link to="/about">
        <NavLink>About</NavLink>
      </Link>
    </header>
  );
}
export default Header;
