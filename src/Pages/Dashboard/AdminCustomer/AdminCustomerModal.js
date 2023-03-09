import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import customerData from "./CustomerData";
import { toast } from "react-hot-toast";

const AdminCustomerModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const newCustomer = {
      id: customerData.length + 1,
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      status: data.status,
    };
    customerData.push(newCustomer);
    toast.success("Customer added successfully");

    //clear form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("status").value = "";

    //close modal
    document.getElementById("admin-customer-modal").checked = false;
  };

  return (
    <>
      <input
        type="checkbox"
        id="admin-customer-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-xl">
          <label
            htmlFor="admin-customer-modal"
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Customer</h3>
          <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="input input-bordered"
                {...register("name", { required: "**Name is Required" })}
              />
              {errors.name && (
                <p className="text-red-700 mt-2">{errors.name?.message}</p>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="input input-bordered"
                {...register("email", { required: "**Email is Required" })}
              />
              {errors.email && (
                <p className="text-red-700 mt-2">{errors.email?.message}</p>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="input input-bordered"
                {...register("phone", {
                  required: "**Phone Number is Required",
                  minLength: {
                    value: 11,
                    message: "**Phone Number must be at least 11 characters",
                  },
                  maxLength: {
                    value: 11,
                    message: "**Phone Number must be at most 11 characters",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-700 mt-2">{errors.phone?.message}</p>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                className="input input-bordered"
                {...register("address", { required: "**Address is Required" })}
              />
              {errors.address && (
                <p className="text-red-700 mt-2">{errors.address?.message}</p>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                id="status"
                className="input input-bordered"
                {...register("status", { required: "**Status is Required" })}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              {errors.status && (
                <p className="text-red-700 mt-2">{errors.status?.message}</p>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <button type="submit" className="btn btn-primary">
                Add Customer
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AdminCustomerModal;
