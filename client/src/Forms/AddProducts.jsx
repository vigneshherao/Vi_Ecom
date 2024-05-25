import React, { useRef } from "react";
import { addProduct } from "../utils/constants/stringConstants";
import toast, { Toaster } from 'react-hot-toast';

const AddProductForm = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const productDetail = {
      id: formData.get("product[id]"),
      title: formData.get("product[title]"),
      price: formData.get("product[price]"),
      description: formData.get("product[description]"),
      images: [
        formData.get("product[image1]"),
        formData.get("product[image2]"),
        formData.get("product[image3]"),
      ],
      category: {
        id: formData.get("category[id]"),
        name: formData.get("category[name]"),
        image: formData.get("category[image]"),
      },
    };
    try {
      const response = await fetch("http://localhost:8080/product/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productDetail),
      });
      console.log(response);
      if (response.ok) {
        toast('Here is your toast.');;
      }

    
      formRef.current.reset();
    } catch (error) {
      console.error("There was a problem adding the product:", error.message);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="id"
        >
          {addProduct.productHead}
        </label>
        <div className="flex">
          <input
            className="border rounded-md px-4 py-2 w-1/3 mr-2"
            type="number"
            name="product[id]"
            placeholder="Number"
          />
          <input
            className="border rounded-md px-4 py-2 w-1/3 mr-2"
            type="text"
            name="product[title]"
            placeholder="Title"
          />
          <input
            className="border rounded-md px-4 py-2 w-1/3"
            type="number"
            name="product[price]"
            placeholder="Price"
          />
        </div>
      </div>
      <div className="mb-4">
        <textarea
          className="border rounded-md px-4 py-2 w-full"
          name="product[description]"
          placeholder="Write about Product Description.."
        />
      </div>
      <div className="mb-4">
        <div className="flex">
          <input
            className="border rounded-md px-4 py-2 w-1/3 mr-2"
            type="text"
            name="product[image1]"
            placeholder="Image Url"
          />
          <input
            className="border rounded-md px-4 py-2 w-1/3 mr-2"
            type="text"
            name="product[image2]"
            placeholder="Image Url"
          />
          <input
            className="border rounded-md px-4 py-2 w-1/3"
            type="text"
            name="product[image3]"
            placeholder="Image Url"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="category[id]"
        >
         {addProduct.categoryHead}
        </label>
        <div className="mb-4">
          <div className="flex">
            <input
              className="border rounded-md px-4 py-2 w-full"
              type="number"
              name="category[id]"
              placeholder="Number"
            />
            <input
              className="border rounded-md px-4 py-2 w-full"
              type="text"
              name="category[name]"
              placeholder="which category"
            />
            <input
              className="border rounded-md px-4 py-2 w-full"
              type="text"
              name="category[image]"
              placeholder="Image"
            />
          </div>
        </div>
      </div>
      <button
        className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
       {addProduct.submit}
      </button>
    </form>
  );
};

export default AddProductForm;
