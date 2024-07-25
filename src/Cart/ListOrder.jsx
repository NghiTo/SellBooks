import React from "react";

function ListOrder({ id, title, quantity, price }) {
  return (
    <tr id="listOrderTable">
      <td>{title}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">{price}</td>
    </tr>
  );
}

export default ListOrder;
