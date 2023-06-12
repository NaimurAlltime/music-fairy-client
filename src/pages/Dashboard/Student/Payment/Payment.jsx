import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

// TODO: provide publish key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  // const [cart] = useCart();
  const selectClass = useLoaderData();
  console.log(selectClass.price);
  // work reduce
  // const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
  const classPrice = selectClass.price;
  const price = parseFloat(classPrice);
  return (
    <div className="w-full">
      <h2 className="text-center text-3xl uppercase font-semibold mt-4">
        Payment system
      </h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm selectClass={selectClass} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
