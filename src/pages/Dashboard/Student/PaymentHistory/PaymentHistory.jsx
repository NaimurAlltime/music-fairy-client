import moment from "moment";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/payments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPaymentHistory(data));
  }, [user]);
  return (
    <div className="w-full">
      <h2 className="text-3xl uppercase font-semibold text-center mb-5">
        Payment History
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full md:w-[892px] md:ml-14">
          {/* head */}
          <thead className="uppercase bg-[#0d96f1]">
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Class Name</th>
              <th>TransactionId</th>
              <th>Price</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody className="mt-7">
            {paymentHistory.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{item.name}</td>
                <td>{item.transactionId}</td>
                <td>${item.price}</td>
                <td>{moment(item.date).format("MMMM Do YYYY, h:mm:ss a")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
