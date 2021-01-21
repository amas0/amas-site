/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";

function HeaderLink(props) {
  return (
    <Link
      to={props.to}
      sx={{
        color: "background",
        mx: ".5rem",
        textDecoration: "none",
        fontWeight: "bold",
        "&:hover": {
          color: "#5496ff"
        }
      }}
    >
      {props.text}
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
          alignItems: "center",
        }}
      >
        <HeaderLink to="/allposts" text="Posts" />
        <HeaderLink to="/about" text="About" />
      </div>
    </header>
  );
}
export default Header;
