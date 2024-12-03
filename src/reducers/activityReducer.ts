import { Activity } from "../types"

export type ActivityActions = 
    {type:'save-activity', payload:{newActivity:Activity}}


type ActivityState = {
    activities: Activity[]
}

export const initialState: ActivityState = {
    activities:[]
}

export const ActivityReducer = (
    state:ActivityState = initialState,
    action:ActivityActions
) => {
    if(action.type === 'save-activity'){
        //Este codigo maneja la logica para actualiar el state
        console.log('Click desde use reducer');
        
    }
}