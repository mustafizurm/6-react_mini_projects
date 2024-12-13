import { useState } from "react";
import ListProduct from "./ListProduct";
import FormProduct from "./FormProduct";
import EditProduct from "./EditProduct";

const Product = () => {

  const [content, setContent] = useState("listProduct")
  const [editProduct, setEditProduct] = useState("")

  return (
    <div>
      {
        content === "listProduct" ? <ListProduct content={content} setContent={setContent} setEditProduct={setEditProduct} /> : ""
      }
            {
        content === "formProduct" ? <FormProduct content={content} setContent={setContent} editProduct={editProduct} /> : ""
      }
            {
        content === "editProduct" ? <EditProduct /> : ""
      }
    </div>
  );
}

export default Product;
