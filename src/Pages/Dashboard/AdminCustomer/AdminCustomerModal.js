import React from "react";

const AdminCustomerModal = () => {
  return (
    <>
      <input type="checkbox" id="admin-customer-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-xl">
          <label
            htmlFor="admin-customer-modal"
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Add Customer
          </h3>
            <form className="mt-5">
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="input input-bordered" />
                </div>
                <div className="flex flex-col mt-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="input input-bordered" />
                </div>
                <div className="flex flex-col mt-4">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" className="input input-bordered" />
                </div>
                <div className="flex flex-col mt-4">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" className="input input-bordered" />
                </div>
                <div className="flex flex-col mt-4">
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status" className="input input-bordered">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <div className="flex flex-col mt-4">
                    <button type="submit" className="btn btn-primary">Add Customer</button>
                </div>
            </form>
        </div>
      </div>
    </>
  );
};

export default AdminCustomerModal;
