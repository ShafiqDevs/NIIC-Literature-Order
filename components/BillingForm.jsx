import React, { useState } from "react";
import Button from "./Button";

export default function CustomerBilling(props) {
  const [billingForm, setBillingForm] = useState({
    fName: "",
    lName: "",
    address: "",
    town: "",
    county: "",
    postCode: "",
    country: "",
    phone: "",
  });

  /*onChange functions for form control */
  /* #region   */
  function fNameChange(e) {
    const id = e.target.id;
    const val = e.target.value;
    setBillingForm((prev) => {
      return { ...prev, [id]: val };
    });
  }
  function lNameChange(e) {
    const id = e.target.id;
    const val = e.target.value;
    setBillingForm((prev) => {
      return { ...prev, [id]: val };
    });
  }
  function addressChange(e) {
    const id = e.target.id;
    const val = e.target.value;
    setBillingForm((prev) => {
      return { ...prev, [id]: val };
    });
  }
  function townChange(e) {
    const id = e.target.id;
    const val = e.target.value;
    setBillingForm((prev) => {
      return { ...prev, [id]: val };
    });
  }
  function countyChange(e) {
    const id = e.target.id;
    const val = e.target.value;
    setBillingForm((prev) => {
      return { ...prev, [id]: val };
    });
  }
  function postCodeChange(e) {
    const id = e.target.id;
    const val = e.target.value;
    setBillingForm((prev) => {
      return { ...prev, [id]: val };
    });
  }
  function countryChange(e) {
    const id = e.target.id;
    const val = e.target.value;
    setBillingForm((prev) => {
      return { ...prev, [id]: val };
    });
  }
  function phoneChange(e) {
    const id = e.target.id;
    const val = e.target.value;
    setBillingForm((prev) => {
      return { ...prev, [id]: val };
    });
  }
  /* #endregion */

  return (
    <div className="p-4">
      <h1 className="text-primary">Information</h1>
      <form>
        <div className="row g-2 mb-2">
          {/* fName */}
          <div className="col-md-2 form-floating">
            <input
              type="text"
              className="form-control"
              id="fName"
              placeholder="name@example.com"
              value={billingForm.fName}
              onChange={(e) => fNameChange(e)}
            />
            <label htmlFor="fName">First name</label>
          </div>
          {/* lName */}
          <div className="col-md-2 form-floating">
            <input
              type="text"
              className="form-control"
              id="lName"
              placeholder="name@example.com"
              value={billingForm.lName}
              onChange={(e) => lNameChange(e)}
            />
            <label htmlFor="lName">Last name</label>
          </div>
        </div>
        <div className="row g-2 mb-2">
          {/* address */}
          <div className="col-md-3 form-floating">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="name@example.com"
              value={billingForm.address}
              onChange={(e) => addressChange(e)}
            />
            <label htmlFor="addressLine">Address line</label>
          </div>
          {/* town */}
          <div className="col-md-1 form-floating">
            <input
              type="text"
              className="form-control"
              id="town"
              placeholder="name@example.com"
              value={billingForm.town}
              onChange={(e) => townChange(e)}
            />
            <label htmlFor="Town">Town</label>
          </div>
        </div>
        <div className="row g-2 mb-2">
          {/* county */}
          <div className="col-md-2 form-floating">
            <input
              type="text"
              className="form-control"
              id="county"
              placeholder="name@example.com"
              value={billingForm.county}
              onChange={(e) => countyChange(e)}
            />
            <label htmlFor="County">County</label>
          </div>
          {/* post code */}
          <div className="col-md-1 form-floating">
            <input
              type="text"
              className="form-control"
              id="postCode"
              placeholder="name@example.com"
              value={billingForm.postCode}
              onChange={(e) => postCodeChange(e)}
            />
            <label htmlFor="postcode">Post code</label>
          </div>
          {/* country */}
          <div className="col-md-1 form-floating">
            <input
              type="text"
              className="form-control"
              id="country"
              placeholder="name@example.com"
              value={billingForm.country}
              onChange={(e) => countryChange(e)}
            />
            <label htmlFor="Country">Country</label>
          </div>
        </div>
        <div className="row g-2 mb-2">
          {/* phone */}
          <div className="col-md-2 form-floating">
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="name@example.com"
              value={billingForm.phone}
              onChange={(e) => phoneChange(e)}
            />
            <label htmlFor="Phone">Phone</label>
          </div>
          {/* checkout */}
          <div className="d-flex col-md-2 form-floating">
            <Button classes="btn btn-primary" text="Checkout" whenClicked={e =>{
              props.checkout(billingForm);
            }} />
          </div>
        </div>
      </form>
    </div>
  );
}
