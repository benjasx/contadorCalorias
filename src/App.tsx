import {useReducer} from 'react'
import { ActivityReducer, initialState } from './reducers/activityReducer';
import Form from "./components/Form";

function App() {
  const [state,dispatch] = useReducer(ActivityReducer,initialState)
  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="uppercase text-white font-black text-lg">contador de calorias</h1>
          <button className="bg-gray-800 py-1 px-4 rounded text-white hover:bg-slate-600">Reiniciar</button>
        </div>
      </header>
      <section className=" bg-lime-500">
        <div className="max-w-4xl mx-auto py-20 px-5">
          <Form
            dispatch = {dispatch}
          />
        </div>
      </section>
    </>
  );
}

export default App;
