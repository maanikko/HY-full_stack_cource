import Header from "./Header"
import Total from "./Total"
import Content from "./Content"

const Course = ({ course }) => {
  const total = course.parts.reduce((s, p) => s + p.exercises, 0)

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={total} />
    </>
  )
}

export default Course
