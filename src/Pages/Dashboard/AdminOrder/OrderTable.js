import React from "react";
import orderData from "./OrderData";
import { toast } from "react-hot-toast";

const OrderTable = () => {
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
              <th>ProductName</th>
              <th>CustomerName</th>
              <th>Contact</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {orderData.length > 0 ? (
              orderData.map((item, index) => {
                return (
                  <tr className="text-center" key={index}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>
                      <div className="flex jus items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt={item.productName} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.productName}</div>
                          <div className="text-sm opacity-50">
                            {item.showRoomAddress}
                          </div>
                        </div>
                      </div>
                    </th>
                    <th>
                      <div>
                        <div className="font-bold">{item.customerName}</div>
                        <div className="text-sm opacity-50">
                          {item.customerAddress}
                        </div>
                      </div>
                    </th>
                    <th>
                      <div>
                        <div className="font-bold">{item.customerEmail}</div>
                        <div className="text-sm opacity-50">
                          {item.customerPhone}
                        </div>
                      </div>
                    </th>
                    <th>{item.price}</th>
                    <th>{item.quantity}</th>
                    <th>
                      <button
                        className="btn btn-error btn-xs mr-2"
                        onClick={() => {
                          orderData.splice(index, 1);
                          toast.success("Order Deleted");
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
                <td colSpan="7">No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderTable;
