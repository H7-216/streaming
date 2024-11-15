import Layout from "../components/Layout";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const recipes = [
    { id: 1, title: "Pizza Margherita", description: "Simple et délicieuse", image: "/images/pizza.jpg" },
    { id: 2, title: "Tiramisu", description: "Un dessert italien classique", image: "/images/tiramisu.jpg" },
  ];

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Bienvenue sur FoodApp</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;