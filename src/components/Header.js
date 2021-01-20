/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, NavLink } from "theme-ui";

function HeaderLink(props) {
  return (
    <Link to={props.to} sx={{ mx: ".5rem" }}>
      <NavLink sx={{ color: "background" }}>{props.text}</NavLink>
    </Link>
  );
}

function Header(props) {
  return (
    <header
      sx={{
        justifyContent: "space-between",
        width: "100%",
        display: "flex",
        alignItems: "center",
        py: 2,
        px: 2,
        background: "#171717",
      }}
    >
      <div>
        <HeaderLink to="/" text={props.title} />
      </div>
      <div
        sx={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center"
        }}
      >
        <HeaderLink to="/allposts" text="Posts" />
        <HeaderLink to="/about" text="About" />
      </div>
    </header>
  );
}
export default Header;
