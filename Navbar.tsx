import Link from "next/link";

const Navbar = () => (
  <nav className="bg-green-500 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">FoodApp</h1>
    <ul className="flex space-x-4">
      <li><Link href="/">Accueil</Link></li>
      <li><Link href="/categories">Catégories</Link></li>
      <li><Link href="/about">À propos</Link></li>
    </ul>
  </nav>
);

export default Navbar;