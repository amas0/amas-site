/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";

function Snippet({ frontmatter }) {
  return (
    <Link
      to={frontmatter.path}
      sx={{
        textDecoration: "none",
        "&:hover": {
          color: "#5496ff",
        },
      }}
    >
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
    </Link>
  );
}

export default Snippet;
