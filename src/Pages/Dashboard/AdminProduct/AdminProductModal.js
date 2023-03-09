import React from "react";

const AdminProductModal = () => {
  return (
    <>
        <input type="checkbox" id="admin-product-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box w-11/12 max-w-2xl">
                <label htmlFor="admin-product-modal" className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Add Product</h3>
                <form className="mt-5">
                    <div className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="input input-bordered" />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" id="price" className="input input-bordered" />
                    </div>
                    <div className="flex flex-col mt-4">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full" />

                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" className="input input-bordered">
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="sports">Sports</option>
                        </select>
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="status">Status</label>
                        <select name="status" id="status" className="input input-bordered">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="flex flex-col mt-4">
                        <button type="submit" className="btn btn-primary">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
};

export default AdminProductModal;
