import './style/global.css'

import { Habit } from './components/Habit'

function App() {

  return (
    <div>
      <Habit completed={3} />
      <Habit completed={42} />
      <Habit completed={11} />
    </div>
  )
}

export default App
