import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  item_Name: {
    type: String,
    required: false
  },
  value: {
    type: Number,
    required: false,
    min: 6
  },
  Quantity: {
    type: Number,
    required: false
  },
  weight: {
    type: Number,
    min: 0
  },
  height: {
    type: Number,
    min: 0
  },
  length: {
    type: Number,
    min: 0
  },
  width: {
    type: Number,
    min: 0
  },
  Name: {
    type: String,
    required: false
  },
  Property: {
    type: String,
    required: false
  },
  Street: {
    type: String,
    required: false
  },
  Town: {
    type: String,
    required: false
  },
  County: {
    type: String,
    required: false
  },
  PostCode: {
    type: String,
    required: false
  },
  Country: {
    type: String,
    required: false
  },
  Telephone: {
    type: String,
    required: false
  },
  Email: {
    type: String,
    required: false
  }
}, {timestamps: true});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
