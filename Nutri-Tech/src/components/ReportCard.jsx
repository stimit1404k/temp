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
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
      <img src={imageUrl} alt={foodName} className="w-full h-48 object-cover" />

      <div className="p-4 space-y-2">
        <h2 className="text-2xl font-semibold text-green-700">{foodName}</h2>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-2">
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

        <div className="mt-4 bg-green-50 border border-green-200 text-green-800 text-sm p-3 rounded-md">
          <strong>Recommendation:</strong> {recommendation}
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
