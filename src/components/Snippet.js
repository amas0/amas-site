/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, NavLink } from "theme-ui";

function Snippet({ frontmatter }) {
  return (
    <Link to={frontmatter.path} sx={{ textDecoration: "none" }}>
      <NavLink>
        <div
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {frontmatter.title}
        </div>
        <div
          sx={{
			fontSize: "18px",
			fontWeight: "normal",
            display: "inline",
            color: "#2A2A2A",
          }}
        >
          {frontmatter.date} - {frontmatter.summary}
        </div>
      </NavLink>
    </Link>
  );
}

export default Snippet;
