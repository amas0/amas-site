import React from "react";
import { Link } from "gatsby";
import { jsx, NavLink } from "theme-ui";

function Snippet({frontmatter}) {
	return (
		<Link to={frontmatter.path} style={{ textDecoration: "none" }}>
			<div style={{ 
				fontSize: "24px", 
				fontWeight: "bold" 
			}}>
				{frontmatter.title}
			</div>
			<div style={{
				fontSize: "18px",
				display: "inline",
				color: "#2A2A2A"
			}}>
			{frontmatter.date} - {frontmatter.summary}
			</div>
		</Link>
	);
}

export default Snippet;