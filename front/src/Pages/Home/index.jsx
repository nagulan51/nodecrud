import Api from "../../Utils/api";
import { useEffect, useState } from "react";
import ProductSingle from "../ProductSingle";
import Edit from "../../components/Edit";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const api = new Api();
    api.getProduits().then((data) => {
      setProducts(data);
    });
  }, []);

  function setEditFunc(value) {
    setEdit(value);
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductSingle
              key={product.id}
              id={product.id}
              nom={product.nom}
              prix={product.prix}
              image={product.image}
              callbackedit={setEditFunc}
            />
          ))}
        </div>
      </div>
      {edit && <Edit id={edit.id} setclose={setEditFunc} />}
    </div>
  );
}
