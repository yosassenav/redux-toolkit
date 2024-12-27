import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './slices/counter';
import './App.css'


function App() {

  const {counter} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <p>count is {counter}</p>
        <button onClick={()=>dispatch(increment())}>
          Increment
        </button>
        <button onClick={()=>dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={()=>dispatch(increment())}>
          Increment by 2
        </button>
      </div>
    </>
  )
}

export default App
