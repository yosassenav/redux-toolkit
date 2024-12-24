import { useDispatch, useSelector } from 'react-redux'
import { increment } from './slices/counter';
import './App.css'


function App() {

  const {counter} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <button onClick={()=>{dispatch(increment())}}>
          count is {counter}
        </button>
      </div>
    </>
  )
}

export default App
