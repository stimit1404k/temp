const ReportCard = ({
  foodName,
  imageUrl,
  calories,
  protein,
  carbs,
  fat,
  recommendation,
}) => {
  return (
    <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-2xl">
      <img src={imageUrl} alt={foodName} className="object-cover w-full h-48" />

      <div className="p-4 space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">{foodName}</h2>

        <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-gray-600">
          <div>
            <span className="font-medium text-gray-800">Calories:</span>{" "}
            {calories} kcal
          </div>
          <div>
            <span className="font-medium text-gray-800">Protein:</span>{" "}
            {protein} g
          </div>
          <div>
            <span className="font-medium text-gray-800">Carbs:</span> {carbs} g
          </div>
          <div>
            <span className="font-medium text-gray-800">Fat:</span> {fat} g
          </div>
        </div>

        <div className="p-3 mt-4 text-sm text-green-800 border border-green-200 rounded-md bg-green-50">
          <strong>Recommendation:</strong> {recommendation}
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
