import React from "react";
import customerData from "./CustomerData";
import { toast } from "react-hot-toast";

const CustomerTable = () => {
  return (
    <>
      <div className="overflow-x-auto w-full py-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {customerData.length > 0 ? (
              customerData.map((item, index) => {
                return (
                  <tr className="text-center" key={index}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">{item.address}</div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold">{item.email}</div>
                    </td>
                    <td>
                      <div className="font-bold">{item.phone}</div>
                    </td>
                    <td>
                      <div className="font-semibold btn btn-xs btn-info">
                        {item.status}
                      </div>
                    </td>
                    <th>
                      <button
                        className="btn btn-error btn-xs mr-2"
                        onClick={() => {
                          customerData.splice(index, 1);
                          toast.success("Customer Deleted Successfully");
                        }}
                      >
                        delete
                      </button>
                      <button className="btn btn-primary btn-xs">
                        details
                      </button>
                    </th>
                  </tr>
                );
              })
            ) : (
              <tr className="text-center">
                <td colSpan="6">No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomerTable;
