import { Link } from "react-router-dom";
export default function Product({ id, nom, prix, image }) {
  return (
    <div>
      <Link key={id} to={`/produit/${id}`} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={image}
            alt={nom}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{nom}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{prix}€</p>
      </Link>
    </div>
  );
}
