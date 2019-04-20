// Composant de référence pour le router

import { h } from "hyperapp"
import Navbar from './components/Navbar.js'

const Layout = (props, page)  => (
  <div>
    <Navbar></Navbar>
    <article>{page}</article>
  </div>
)

export default Layout
