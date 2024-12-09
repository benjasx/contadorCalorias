import { useState,ChangeEvent,FormEvent, Dispatch, useEffect} from "react";
import {v4 as uuidv4} from 'uuid'
import { categories } from "../data/categories";
import type { Activity } from "../types"; 
import { ActivityActions, ActivityState } from "../reducers/activityReducer";

type FormProps = {
  dispatch:Dispatch<ActivityActions>,
  state: ActivityState
}

const initialState: Activity ={
  id: uuidv4(),
  category: 1,
  namex: "",
  calories: 0,
}

export default function Form({dispatch,state}:FormProps) {

  const [activity, setActivity] = useState<Activity>(initialState)
  
  useEffect(()=>{
    if(state.activeId){
      const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0]
      setActivity(selectedActivity)
    }else{
      console.log("no hay nada en ID")
    }
  },[state.activeId])

  const handleChanges = (e:ChangeEvent<HTMLSelectElement>| ChangeEvent<HTMLInputElement>)=>{
    //PARA COMPROBAR SI ES REQUERIDO COMBERTIR A NUMERO
    const isNumberField = ['category','calories'].includes(e.target.id)
    setActivity({
        ...activity,
        [e.target.id]: isNumberField ? +e.target.value : e.target.value
    })
  }

  const isValidActivity = () =>{
    const {namex, calories} = activity
    return namex.trim() !== '' && calories > 0
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    dispatch({type:'save-activity', payload:{newActivity:activity}})
    setActivity({
      ...initialState,
      id:uuidv4()
    })
  }


 
  return (
    <form className="bg-white space-y-5 shadow p-10 rounded-lg" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categorias
        </label>
        <select
          id="category"
          className="border border-slate-300 p-2 rounded-lg bg-white cursor-pointer"
          value={activity.category}
          onChange={handleChanges}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="namex" className="font-bold">
          Actividad
        </label>
        <input
          type="text"
          id="namex"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de naranja, ensalada. Ejercicio Pesas"
          value={activity.namex}
          onChange={handleChanges}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorias
        </label>
        <input
          type="number"
          id="calories"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. 300 ó 500"
          value={activity.calories}
          onChange={handleChanges}
        />
      </div>

      <input
        type="submit"
        value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
        disabled={!isValidActivity()}
      />
    </form>
  );
}
