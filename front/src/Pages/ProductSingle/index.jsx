import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Product({ id, nom, prix, image, callbackedit }) {
  return (
    <div className="relative group">
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
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={() => callbackedit({ id: id })}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
