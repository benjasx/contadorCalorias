import { useMemo } from "react";
import { Activity } from "../types";
import DisplayCalories from "./DisplayCalories";

type CaloryTralkerProps = {
  activities: Activity[];
};
export default function CaloryTralker({ activities }: CaloryTralkerProps) {
  //Contadores
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + +activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + +activity.calories : total,
        0
      ),
    [activities]
  );

  const netCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [activities]
  );
  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <DisplayCalories calories={caloriesConsumed} text={"Consumidas"} />
        <DisplayCalories calories={netCalories} text={"Diferencia"} />
        <DisplayCalories calories={caloriesBurned} text={"Ejercicio"} />
      </div>
    </>
  );
}
