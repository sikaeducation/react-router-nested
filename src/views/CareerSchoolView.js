import { Switch, Route, Link, useRouteMatch } from "react-router-dom"
import DepartmentView from "./DepartmentView"
import DepartmentIndexView from "./DepartmentIndexView"

import "./CareerSchoolView.css"

const CareerSchoolView = () => {
  const { url, path } = useRouteMatch()
  const departments = [{
    id: "ict",
    label: "Information and Communications Technology",
  },{
    id: "acm",
    label: "Arts and Culture Management",
  },{
    id: "cm",
    label: "Communication Management",
  }]
  const $departments = departments.map(department => (
    <li key={department.id}>
      <Link to={`${url}/${department.id}`}>{department.label}</Link>
    </li>
  ))

  return (
    <div className="CareerSchoolView">
      <h2>Welcome to the University of Denver's University College</h2>
      <nav>
        <ul>{$departments}</ul>
      </nav>
      <Switch>
        <Route path={`${path}/:departmentName`}>
          <DepartmentView />
        </Route>
        <Route exact path={path}>
          <DepartmentIndexView />
        </Route>
      </Switch>
    </div>
  )
}

export default CareerSchoolView
