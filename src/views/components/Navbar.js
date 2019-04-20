// Juste un menu basique pour tester la nav d'une page à l'autre (surement inutile pour l'appli finale)

import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

const Navbar = () => (
  <div>
    <Link to='/'>Home</Link>
    <Link to='/cities'>Cities</Link>
  </div>
)

export default Navbar
