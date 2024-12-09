import { useMemo } from "react";
import { Activity } from "../types";

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
  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
          <span className="font-black text-6xl text-orange-600">
            {caloriesConsumed}
          </span>
          Consumidas
        </p>
      </div>
    </>
  );
}
