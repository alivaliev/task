import React, { useEffect, useState } from "react";
import "./Filter.scss";

export default function Filter() {
  const url = "https://assignment-6fdaf-default-rtdb.firebaseio.com/orders.json"; 
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [amountSearch, setAmountSearch] = useState("");
  const [dateSearch, setDateSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getData = () => {
    fetch(url)
      .then((x) => x.json())
      .then((a) => {
        setData(a);
        setFilteredData(a); 
      })
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFilterClick = () => {
    const filteredItems = data.filter((item) => {
      const productName = item.product[0].name.toLowerCase();
      const orderDate = new Date(item.date).toISOString().split("T")[0];
      const orderAmount = item.amount.toString();

      const nameMatch = productName.includes(search.toLowerCase());
      const amountMatch = orderAmount.includes(amountSearch);
      const dateMatch = orderDate.includes(dateSearch);

      return nameMatch && amountMatch && dateMatch;
    });

    setFilteredData(filteredItems);
  };

  return (
    <div>
      <div className="filter">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Product"
        />
        <input
          onChange={(e) => setAmountSearch(e.target.value)}
          type="number"
          placeholder="Enter order amount"
        />
        <input
          onChange={(e) => setDateSearch(e.target.value)}
          className="date"
          type="date"
          placeholder="Select Date"
        />
        <button onClick={handleFilterClick}>Filter</button>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>Product Name</th>
            <th>Order Date</th>
            <th>Order Amount</th>
            <th>Total Price</th>
          </tr>
          {filteredData.map((item) => (
            <tr key={item._id}>
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
