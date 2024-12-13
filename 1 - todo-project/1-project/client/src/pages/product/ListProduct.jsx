import { useEffect, useState } from "react";
import "./Product.css"
import FormProduct from "./FormProduct";

const ListProduct = ({content, setContent, setEditProduct}) => {

    const [products, setProducts] = useState();

    const fetchProduct = () => {
        fetch("http://localhost:3004/products")
        .then((res)=> res.json())
        .then((data)=> setProducts(data))
    }

    useEffect(()=> {
        fetchProduct()
    }, [])


    const editFunck = (product) => {
        // console.log(product)
        setContent("formProduct")
        setEditProduct(product)
        
    }

  return (
    // <div>
    //   <h1 className="text-3xl text-center">List Product</h1>
    //   <div className="flex gap-2">
    //     <button onClick={()=> setContent("formProduct")} className="py-[3px] text-white px-[10px] rounded-md bg-indigo-700">Create</button>
    //     <button onClick={()=> setContent("listProduct")} className="py-[3px] text-white px-[10px] rounded-md bg-indigo-400">Refresh</button>
    //   </div>
    // </div>

    <>
      <h2 className="text-center text-4xl mt-[20px] mb-[32px]">List Of Product</h2>
      <div className="xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] m-auto overflow-y-auto">
         <div className="flex gap-2 ml-5">
           <button onClick={()=> setContent("formProduct")} className="py-[3px] text-white px-[10px] rounded-md bg-indigo-700">Create</button>
          <button onClick={()=> setContent("listProduct")} className="py-[3px] text-white px-[10px] rounded-md bg-indigo-400">Refresh</button>
       </div>
        <table className="w-[100%] min-w-[600px] mt-[20px]">
            <thead>
                <tr className="bg-gray-600 text-white">
                    <th className="text-center py-[10px]">Id</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Brand</th>
                    <th className="text-center">Category</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Created At</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody >
                {/* <tr className="bg-gray-100">
                    <td className="text-center py-[5px]">1</td>
                    <td className="text-center">Amd Raizon</td>
                    <td className="text-center">Laptop</td>
                    <td className="text-center">Dell</td>
                    <td className="text-center">$640</td>
                    <td className="text-center">12 july 2024</td>
                    <div className="flex gap-1 justify-center py-[5px]">
                        <button className="py-[3px] px-[5px] bg-gray-400 rounded-sm text-white">Edit</button>
                        <button className="py-[3px] px-[5px] bg-red-400 rounded-sm text-white">Delete</button>
                    </div>
                </tr>
                <tr className="bg-gray-300">
                    <td className="text-center py-[5px]">1</td>
                    <td className="text-center">Amd Raizon</td>
                    <td className="text-center">Laptop</td>
                    <td className="text-center">Dell</td>
                    <td className="text-center">$640</td>
                    <td className="text-center">12 july 2024</td>
                    <div className="flex gap-1 justify-center py-[5px]">
                        <button className="py-[3px] px-[5px] bg-gray-400 rounded-sm text-white">Edit</button>
                        <button className="py-[3px] px-[5px] bg-red-400 rounded-sm text-white">Delete</button>
                    </div>
                </tr>
                <tr className="bg-gray-100">
                    <td className="text-center py-[5px]">1</td>
                    <td className="text-center">Amd Raizon</td>
                    <td className="text-center">Laptop</td>
                    <td className="text-center">Dell</td>
                    <td className="text-center">$640</td>
                    <td className="text-center">12 july 2024</td>
                    <div className="flex gap-1 justify-center py-[5px]">
                        <button className="py-[3px] px-[5px] bg-gray-400 rounded-sm text-white">Edit</button>
                        <button className="py-[3px] px-[5px] bg-red-400 rounded-sm text-white">Delete</button>
                    </div>
                </tr>
                <tr className="bg-gray-300">
                    <td className="text-center py-[5px]">1</td>
                    <td className="text-center">Amd Raizon</td>
                    <td className="text-center">Laptop</td>
                    <td className="text-center">Dell</td>
                    <td className="text-center">$640</td>
                    <td className="text-center">12 july 2024</td>
                    <div className="flex gap-1 justify-center py-[5px]">
                        <button className="py-[3px] px-[5px] bg-gray-400 rounded-sm text-white">Edit</button>
                        <button className="py-[3px] px-[5px] bg-red-400 rounded-sm text-white">Delete</button>
                    </div>
                </tr> */}

                {
                   products && products.map((product,index) => {
                    return (
                        <tr key={index} className="bg-gray-100">
                            <td className="text-center py-[5px]">{index + 1}</td>
                            <td className="text-center">{product.name}</td>
                            <td className="text-center">{product.brand}</td>
                            <td className="text-center">{product.category}</td>
                            <td className="text-center">{product.price} $</td>
                            <td className="text-center">{product.createdAt}</td>
                            <div className="flex gap-1 justify-center py-[5px]">
                                <button onClick={()=> {editFunck(product)}} className="py-[3px] px-[5px] bg-gray-400 rounded-sm text-white">Edit</button>
                                <button className="py-[3px] px-[5px] bg-red-400 rounded-sm text-white">Delete</button>
                            </div>
                        </tr>
                            )
                   })
                }
            </tbody>
        </table>
      </div>
    </>
    
    // <div className="xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[95%] m-auto table-wrapper overflow-scroll">
    //     <table className="w-[100%] min-w-[600px]">
    //         <thead>
    //             <tr className="text-left">
    //                 <th>Id</th>
    //                 <th>Name</th>
    //                 <th>Category</th>
    //                 <th>Brand</th>
    //                 <th>Price</th>
    //                 <th>Created At</th>
    //                 <th>Action</th>
    //             </tr>
    //         </thead>
    //         <tbody className="gap-5">
    //             <tr className="text-left">
    //                 <td>1</td>
    //                 <td>Amd Raizon 5</td>
    //                 <td>Laptop</td>
    //                 <td>Dell</td>
    //                 <td>$650</td>
    //                 <td>23 july 2024</td>
    //                 <div className="flex gap-2">
    //                     <button className="py-[3px] px-[12px] bg-gray-500 rounded-md">Edit</button>
    //                     <button className="py-[3px] px-[12px] bg-red-500 rounded-md">Delete</button>
    //                     <button className="py-[3px] px-[12px] bg-orange-500 rounded-md">View</button>
    //                 </div>
    //             </tr>
    //             <tr className="text-left">
    //                 <td>1</td>
    //                 <td>Amd Raizon 5</td>
    //                 <td>Laptop</td>
    //                 <td>Dell</td>
    //                 <td>$650</td>
    //                 <td>23 july 2024</td>
    //                 <div className="flex gap-2">
    //                     <button className="py-[3px] px-[12px] bg-gray-500 rounded-md">Edit</button>
    //                     <button className="py-[3px] px-[12px] bg-red-500 rounded-md">Delete</button>
    //                     <button className="py-[3px] px-[12px] bg-orange-500 rounded-md">View</button>
    //                 </div>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>
  );
}

export default ListProduct;
