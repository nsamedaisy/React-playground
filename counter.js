//Implement a Counter app in React JS using the CDN version distribution of React while componentizing it as much as possible, The app should increment on every second.

const rootElement = document.getElementById('root')
function App() {
  //state the store count value
  const [count, setCount] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  let interval = 0
  const pauseCount = () => {
    setPause(true)
  }
  
  const startCount = () => {
    interval = setInterval(() => {setCount((count) => ++count)}, 1000)
  }
   
  React.useEffect(() => {
  //the clearinterval (cleanup function) stops the app from running when its destroyed
  return () => clearInterval(interval)
  },[pause])
  
  return (
    <div>
      <h2>Counter App</h2>
      <p>{count}</p>
      <div className='btns'>
        <div><button onClick={startCount}>Start</button></div>
        <div><button onClick={pauseCount}>Pause</button></div>
      </div>
    </div>
  )
}
ReactDOM.render(<App />, rootElement)