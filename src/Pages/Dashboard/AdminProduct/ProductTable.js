import React from "react";
import productData from "./ProductData";

const ProductTable = () => {
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
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {productData.length > 0 ? (
              productData.map((item, index) => {
                return (
                  <tr className="text-center" key={index}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex jus items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={item.image} alt={item.name} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{item.name}</div>
                          </div>
                        </div>
                    </td>
                    <td>
                        <div className="font-bold">${item.price}.00</div>
                    </td>
                    <td>
                        <div className="font-bold">{item.quantity}</div>
                    </td>
                    <td>
                      <div className="font-semibold btn btn-xs btn-info">
                        {item.status}
                      </div>
                    </td>
                    <th>
                      <button className="btn btn-error btn-xs mr-2">
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

export default ProductTable;
