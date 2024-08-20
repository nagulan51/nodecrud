import React, { useEffect, useState, useRef } from "react";
import Api from "../../Utils/api";

export default function Edit({ setclose, id }) {
  const [product, setProduct] = useState({
    nom: "",
    image: "",
    prix: "",
    description: "",
  });

  const modalRef = useRef(null); // Ref to the modal content

  useEffect(() => {
    if (id) {
      const api = new Api();
      api.getProduit(id).then((data) => {
        setProduct(data);
      });
    }
  }, [id]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setclose(false); // Close the modal if click is outside
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setclose]);

  return (
    <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
      <div
        ref={modalRef} // Attach ref to the modal content
        data-dialog="dialog"
        className="relative m-4 w-2/5 min-w-[40%] max-w-[50%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
      >
        <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
          Edit
        </div>
        <div className="p-4">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="nom"
                className="font-sans text-sm font-semibold text-blue-gray-900"
              >
                Nom du produit
              </label>
              <input
                id="nom"
                type="text"
                value={product.nom}
                onChange={(e) =>
                  setProduct({ ...product, nom: e.target.value })
                }
                className="bg-gray-200 w-full px-4 py-2 text-sm font-sans font-light text-blue-gray-900 bg-blue-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="image"
                className="font-sans text-sm font-semibold text-blue-gray-900"
              >
                Image du produit
              </label>
              <input
                id="image"
                type="text"
                value={product.image}
                onChange={(e) =>
                  setProduct({ ...product, image: e.target.value })
                }
                className="bg-gray-200 w-full px-4 py-2 text-sm font-sans font-light text-blue-gray-900 bg-blue-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="prix"
                className="font-sans text-sm font-semibold text-blue-gray-900"
              >
                Prix du produit
              </label>
              <input
                id="prix"
                type="number"
                value={product.prix}
                onChange={(e) =>
                  setProduct({ ...product, prix: e.target.value })
                }
                className="bg-gray-200 w-full px-4 py-2 text-sm font-sans font-light text-blue-gray-900 bg-blue-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="description"
                className="font-sans text-sm font-semibold text-blue-gray-900"
              >
                Description du produit
              </label>
              <textarea
                id="description"
                rows={4}
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                className="bg-gray-200 w-full px-4 py-2 text-sm font-sans font-light text-blue-gray-900 bg-blue-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
          <button
            onClick={() => setclose(false)}
            data-ripple-dark="true"
            data-dialog-close="true"
            className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Annuler
          </button>
          <button
            data-ripple-light="true"
            data-dialog-close="true"
            className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
