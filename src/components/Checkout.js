import React, { useState } from 'react';

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Checkout</h2>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" />
            </div>
          </div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea className="form-control" id="address" rows="4"></textarea>
        </div>
        
        <div className="mb-3">
          <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
          <select
            className="form-select"
            id="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="creditCard">Credit Card</option>
            <option value="upi">UPI ID</option>
          </select>
        </div>
        
        {paymentMethod === 'creditCard' && (
          <>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input type="text" className="form-control" id="cardNumber" />
            </div>
            
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                  <input type="text" className="form-control" id="expiryDate" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cvv" />
                </div>
              </div>
            </div>
          </>
        )}

        {paymentMethod === 'upi' && (
          <div className="mb-3">
            <label htmlFor="upiId" className="form-label">UPI ID</label>
            <input type="text" className="form-control" id="upiId" />
          </div>
        )}
        
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;

