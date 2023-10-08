import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "mamun",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-full mb-4 '>Tailwind test</h1>
      
         <Card username="chaiaur" btnText="Click me" />
         <Card  username="Mamun" btnText="visit me"/>
    </>
  )
}

export default App
