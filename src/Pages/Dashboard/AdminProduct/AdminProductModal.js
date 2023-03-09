import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import productData from "./ProductData";
import { toast } from "react-hot-toast";

const AdminProductModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const newProduct = {
      id: productData.length + 1,
      name: data.name,
      price: data.price,
      quantity: data.stock,
      status: data.status,
    };
    productData.push(newProduct);
    toast.success("Product added successfully");

    //clear form
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("status").value = "";

    //close modal
    document.getElementById("admin-product-modal").checked = false;
  };
  return (
    <>
      <input
        type="checkbox"
        id="admin-product-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <label
            htmlFor="admin-product-modal"
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Product</h3>
          <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="input input-bordered"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                className="input input-bordered"
                {...register("price", {
                  required: "Price is required",
                  min: {
                    value: 1,
                    message: "Price must be at least 1",
                  },
                })}
              />
              {errors.price && (
                <p className="text-red-500 text-xs italic">
                  {errors.price.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="stock">Stock</label>
              <input
                type="number"
                name="stock"
                id="stock"
                className="input input-bordered"
                {...register("stock", {
                  required: "Stock is required",
                  min: {
                    value: 1,
                    message: "Stock must be at least 1",
                  },
                })}
              />
              {errors.stock && (
                <p className="text-red-500 text-xs italic">
                  {errors.stock.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                {...register("image", {
                  required: "Image is required",
                })}
              />
              {errors.image && (
                <p className="text-red-500 text-xs italic">
                  {errors.image.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                id="status"
                className="input input-bordered"
                {...register("status", {
                  required: "Status is required",
                })}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              {errors.status && (
                <p className="text-red-500 text-xs italic">
                  {errors.status.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AdminProductModal;
