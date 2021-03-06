/** @jsx jsx */
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { jsx } from "theme-ui";

import Header from "./Header";
import "./layout.css";

function Layout(props) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              footer
            }
          }
        }
      `}
      render={(data) => (
        <div>
          <Header title={data.site.siteMetadata.title}/>
          <div sx={{ mx: 3, marginTop: "2rem" }}>
            <div
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                maxWidth: "42rem",
                margin: "auto",
              }}
            >
              <main
                sx={{
                  width: "100%",
                  flex: "1 1 auto",
                }}
              >
                <div
                  sx={{
                    mx: "auto",
                    py: 3,
                  }}
                >
                  {props.children}
                </div>
              </main>
              <footer
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                {data.site.siteMetadata.footer}
              </footer>
            </div>
          </div>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
