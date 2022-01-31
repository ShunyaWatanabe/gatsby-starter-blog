import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <p style={{ display: "flex", gap: "8px" }}>
          <a href="https://github.com/ShunyaWatanabe">GitHub</a>
          <a href="https://www.linkedin.com/in/shunya-watanabe-aba1a5151">LinkedIn</a>
        </p>
        <p>© {new Date().getFullYear()}, Built with love</p>
      </footer>
    </div>
  )
}

export default Layout
