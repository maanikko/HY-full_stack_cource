const Header = (props) => {
  console.log("Header")
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log("Part")
  console.log(props)
  return (
    <div>
      <p>
        {props.name} {props.count}
      </p>
    </div>
  )
}

const Content = ({ parts }) => {
  console.log("Content")
  console.log(parts)
  return (
    <div>
      <Part name={parts[0].name} count={parts[0].exercises} />
      <Part name={parts[1].name} count={parts[1].exercises} />
      <Part name={parts[2].name} count={parts[2].exercises} />
    </div>
  )
}

const Total = ({ parts }) => {
  console.log("Total")
  console.log(parts)
  return (
    <div>
      <p>
        Number of exercises{" "}
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
