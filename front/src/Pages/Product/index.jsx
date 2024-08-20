import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../Utils/api";

export default function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const api = new Api();
    api.getProduit(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="lg:w-1/2">
            <img
              className="w-full h-full object-cover"
              src={product.image}
              alt={product.nom}
            />
          </div>
          <div className="lg:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800">
                {product.nom}
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                {product.description}
              </p>
            </div>
            <div className="mt-6">
              <p className="text-2xl font-bold text-gray-900">
                {product.prix} €
              </p>
              <button className="mt-4 w-full bg-yellow-500 text-white text-lg font-semibold py-3 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
                Ajouter au panier
              </button>
              <button className="mt-3 w-full bg-gray-200 text-gray-700 text-lg font-semibold py-3 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
                Acheter maintenant
              </button>
              <p className="mt-4 text-sm text-gray-500">transaction sécurisé</p>
              <p className="mt-2 text-sm text-gray-500">
                Vendu par
                <span className="text-blue-600"> Ipssi</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
