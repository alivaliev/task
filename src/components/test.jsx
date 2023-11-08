import React, { useEffect, useState } from "react";
import "./Filter.scss";

export default function Filter() {
  const url =
    "https://assignment-6fdaf-default-rtdb.firebaseio.com/orders.json";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = () => {
    return fetch(url)
      .then((x) => x.json())
      .then((x) => setData(x));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="filter">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Product"
        />
        <input type="number" placeholder="Enter order amount" />
        <input className="date" type="date" placeholder="Select Date" />
        <button>Filter</button>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>Product Name</th>
            <th>Order Date</th>
            <th>Order Amount</th>
            <th>Total Price</th>
          </tr>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.product[0].name.toLowerCase().includes(search);
            })
            .map((item) => (
              <tr key={item.id}>
                <td>{item.product[0].name}</td>
                <td>{new Date(item.date).toISOString().split("T")[0]}</td>
                <td>{item.amount}</td>
                <td>${item.product[0].price}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
