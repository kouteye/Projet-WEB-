import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></h1>;
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}) Total Items: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                  return(
                <tr key={index}>
                  <td>
                    <img src={item.img} style={{ height: "6rem" }} />
                  </td>
                  <td>{item.title}</td>
                  <td>$ {item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                      <button className="btn btn-info ms-2" 
                      onClick={()=> updateItemQuantity(item.id, item.quantity -1)}>-</button>
                      <button className="btn btn-info ms-2"
                      onClick={()=> updateItemQuantity(item.id, item.quantity +1)}>+</button>
                      <button className="btn btn-info ms-2"
                      onClick={()=> removeItem(item.id)}>Remove Item</button>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
            <h2>Total Price: $ {cartTotal}</h2>
        </div>
        <div className="col-auto">
              <button className="btn btn-danger m-2" onClick={ () => emptyCart()}>Clear Cart</button>
              <button className="btn btn-primary m-2" onClick={() => alert("You're purchase has been processed successfuly")}>Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
