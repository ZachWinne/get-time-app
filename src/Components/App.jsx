import React, {useState} from "react";



function App() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now)

  // uncomment to auto update tme every second
  // setInterval(updateTime, 1000)

  function updateTime() {
    const updatedTime = new Date().toLocaleTimeString()
    setTime(updatedTime)
  }

  return(
    <div>
      <h1>{time}</h1>
      <button onClick={() => {
        updateTime()
      }}>GET TIME</button>
    </div>

  )
}


export default App;