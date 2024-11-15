const RecipeCard = ({ recipe }: { recipe: any }) => (
  <div className="border p-4 rounded-md shadow-md">
    <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md" />
    <h2 className="text-xl font-bold mt-2">{recipe.title}</h2>
    <p className="text-gray-600">{recipe.description}</p>
  </div>
);

export default RecipeCard;