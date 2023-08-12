import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="m-5">
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        type="button"
        className="bg-orange-400 px-2 py-1 rounded-md border-0 outline-none"
      >
        Increment by amount
      </button>
      <button
        onClick={() => dispatch(decrement())}
        type="button"
        className="bg-orange-400 px-2 py-1 rounded-md border-0 outline-none"
      >
        Decrement
      </button>
      <p>{count}</p>
      <button
        onClick={() => dispatch(increment())}
        type="button"
        className="bg-orange-400 px-2 py-1 rounded-md border-0 outline-none"
      >
        Increment
      </button>
    </div>
  );
}

export default App;
