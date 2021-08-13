import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"

import UniversityHomeView from "./views/UniversityHomeView"
import LawSchoolView from "./views/LawSchoolView"
import BusinessSchoolView from "./views/BusinessSchoolView"
import CareerSchoolView from "./views/CareerSchoolView"

const App = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <h1><Link to="/">The University of Denver</Link></h1>
          <nav>
            <ul>
              <li>
                <Link to="/career">University College</Link>
              </li>
              <li>
                <Link to="/law">Sturm College of Law</Link>
              </li>
              <li>
                <Link to="/business">Daniels College of Business</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/law">
              <LawSchoolView />
            </Route>
            <Route path="/business">
              <BusinessSchoolView />
            </Route>
            <Route path="/career">
              <CareerSchoolView />
            </Route>
            <Route exact path="/">
              <UniversityHomeView />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
}

export default App
