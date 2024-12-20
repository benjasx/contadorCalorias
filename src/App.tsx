import { useReducer, useEffect, useMemo } from "react";
import { ActivityReducer, initialState } from "./reducers/activityReducer";
import Form from "./components/Form";
import ActivityList from "./components/ActivityList";
import CaloryTralker from "./components/CaloryTralker";

function App() {
  const [state, dispatch] = useReducer(ActivityReducer, initialState);
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestartApp = useMemo(
    () => state.activities.length > 0,
    [state.activities]
  );
  return (
    <>
      <header className="bg-lime-600 p-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="uppercase text-white font-black text-lg">
            contador de calorias
          </h1>
          <button
            className="bg-gray-800 py-1 px-4 rounded text-white hover:bg-slate-600 disabled:opacity-10"
            disabled={!canRestartApp}
            onClick={() => dispatch({ type: "restart-app" })}
          >
            Reiniciar
          </button>
        </div>
      </header>
      <section className=" bg-lime-500">
        <div className="max-w-4xl mx-auto py-20 px-5">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className="bg-gray-800 py-10 ">
        <div className="max-w-4xl mx-auto ">
          <CaloryTralker
            activities = {state.activities}
          />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList activities={state.activities} dispatch={dispatch} />
      </section>
    </>
  );
}

export default App;
