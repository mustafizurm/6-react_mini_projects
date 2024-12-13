import { useEffect, useState } from "react";

const FormProduct = ({ content, setContent, editProduct }) => {

  const [number, setNumber] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then((res) => res.json())
      .then((data) => setNumber(data));
  }, []);

  const handelSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const product = Object.fromEntries(formData.entries());
    console.log(product);

    if (
      !product.name ||
      !product.brand ||
      !product.category ||
      !product.price
    ) {
      console.log("please provide all the required fields");
    } else {
      if (editProduct.id) {
        fetch("http://localhost:3004/products/" + editProduct.id, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => {
              if (!res.ok) {
                throw new Error("Network Response was not ok");
              }
              return res.json();
            })
            .then((data) => setContent("listProduct"))
            .catch((error) => {
              console.error("error", error);
            });
      } else {
        // create product
        product.createdAt = new Date().toString().slice(0, 10);
        product.id = number.length + 1;
        fetch("http://localhost:3004/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network Response was not ok");
            }
            return res.json();
          })
          .then((data) => setContent("listProduct"))
          .catch((error) => {
            console.error("error", error);
          });
      }
    }
  };

  return (
    <>
      <h1 className="text-3xl text-center">
        {editProduct.id ? "Edit Product" : "Create New Product"}
      </h1>
      <div className="sm:w-[540px] w-[95%] m-auto mt-11">
        <form onSubmit={handelSubmit} className="flex flex-col gap-6">
          {editProduct ? (
            <div className="flex gap-[170px]">
              <label>Id</label>
              <input
                readOnly
                className="outline-none border w-[100%] py-1 px-3 rounded-md"
                type="text"
                name="name"
                defaultValue={editProduct.id}
              />
            </div>
          ) : (
            ""
          )}
          <div className="flex gap-[140px]">
            <label>Name</label>
            <input
              className="outline-none border w-[100%] py-1 px-3 rounded-md"
              type="text"
              name="name"
              defaultValue={editProduct.name}
            />
          </div>

          <div className="flex gap-[140px]">
            <label>Brand</label>
            <input
              className="outline-none border w-[100%] py-1 px-3 rounded-md"
              type="text"
              name="brand"
              defaultValue={editProduct.brand}
            />
          </div>

          <div className="flex gap-[118px]">
            <label>Category</label>
            <select
              className="outline-none border w-[100%] py-1 px-3 rounded-md"
              type="text"
              name="category"
              defaultValue={editProduct.category}
            >
              <option value="Other">Other</option>
              <option value="Phones">Phones</option>
              <option value="Computer">Computer</option>
              <option value="Accessories">Accessories</option>
              <option value="Gps">Gps</option>
              <option value="Cameras">Cameras</option>
            </select>
          </div>
          <div className="flex gap-[148px]">
            <label>Price</label>
            <input
              className="outline-none border w-[100%] py-1 px-3 rounded-md"
              type="number"
              name="price"
              defaultValue={editProduct.price}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-[102px]">
              <label>Description</label>
              <input
                className="outline-none border w-[100%] py-1 px-3 rounded-md"
                type="text"
                name="description"
                defaultValue={editProduct.description}
              />
            </div>
            <div className="flex gap-2 mt-9">
              <button className="py-[3px] text-white px-[110px] rounded-md bg-indigo-700">
                Save
              </button>
              <button
                className="py-[3px] text-white px-[110px] rounded-md bg-gray-700"
                onClick={() => setContent("listProduct")}
              >
                Cancel
              </button>
              {/* <button onClick={()=> setContent("listProduct")} className="py-[3px] text-white px-[110px] rounded-md bg-indigo-700">Save</button>
                    <button onClick={()=> setContent("formProduct")} className="py-[3px] text-white px-[110px] rounded-md bg-gray-700">Cancel</button> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormProduct;
