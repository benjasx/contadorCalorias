type DisplayCaloriesProps = {
  calories: number;
  text: string;
};
export default function DisplayCalories({
  calories,
  text,
}: DisplayCaloriesProps) {
  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
      <span className="font-black text-6xl text-orange-600">{calories}</span>
      {text}
    </p>
  );
}
