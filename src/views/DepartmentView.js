import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./DepartmentView.css"

const DepartmentView = () => {
  const { departmentName } = useParams()
  const [greeting, setGreeting] = useState("Loading...")

  useEffect(() => {
    fetch("/university-college.json")
      .then(response => response.json())
      .then(({ departments }) => {
        const department = departments[departmentName]
        setGreeting(department.greeting)
      })
  }, [departmentName])

  return (
    <p>{ greeting }</p>
  )
}

export default DepartmentView
