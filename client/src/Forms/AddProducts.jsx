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

      if (response.ok) {
        toast.success('Product added successfully!');
      } else {
        const errorText = await response.text();
        toast.error(`Failed to add product: ${errorText}`);
      }

      formRef.current.reset();
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Toaster position="bottom-left" reverseOrder={true} />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">{addProduct.productHead}</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              className="border rounded-md px-4 py-2"
              type="number"
              name="product[id]"
              placeholder="Product ID"
              required
            />
            <input
              className="border rounded-md px-4 py-2"
              type="text"
              name="product[title]"
              placeholder="Title"
              required
            />
            <input
              className="border rounded-md px-4 py-2"
              type="number"
              name="product[price]"
              placeholder="Price"
              required
            />
          </div>
          <textarea
            className="border rounded-md px-4 py-2 w-full"
            name="product[description]"
            placeholder="Write about Product Description.."
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              className="border rounded-md px-4 py-2"
              type="text"
              name="product[image1]"
              placeholder="Image URL 1"
            />
            <input
              className="border rounded-md px-4 py-2"
              type="text"
              name="product[image2]"
              placeholder="Image URL 2"
            />
            <input
              className="border rounded-md px-4 py-2"
              type="text"
              name="product[image3]"
              placeholder="Image URL 3"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">{addProduct.categoryHead}</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              className="border rounded-md px-4 py-2"
              type="number"
              name="category[id]"
              placeholder="Category ID"
              required
            />
            <input
              className="border rounded-md px-4 py-2"
              type="text"
              name="category[name]"
              placeholder="Category Name"
              required
            />
            <input
              className="border rounded-md px-4 py-2"
              type="text"
              name="category[image]"
              placeholder="Category Image URL"
            />
          </div>
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          type="submit"
        >
          {addProduct.submit}
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
