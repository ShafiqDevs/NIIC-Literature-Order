import db from "../../utils/db";
import Order from "../../models/Order";
import quranCollection from "../../models/quranCollection";

const handler = async(req, res) => {
  // console.log("line 6:", JSON.parse(req.body.metadata.billingForm));
  // console.log("line 7:", JSON.parse(req.body.metadata.cartItems));

console.log("xxxxxxxxxxxxxxxxx  order api xxxxxxxxxxxxxxxxxxxxxx");

  await db.connect();

  const billingForm = JSON.parse(req.body.metadata.billingForm);
  const cartItems = JSON.parse(req.body.metadata.cartItems);

  const cartItemsFormatted = await Promise.all(cartItems.map(async(item) => {
    return {
      ...await getProductData(item.product_id),
      Quantity: item.quantity
    };
  }));

  console.log("line 22:", cartItemsFormatted);

  let orders = cartItemsFormatted.map((item) => {
    return {
      ...item,
      ...billingForm
    };
  });
  console.log("line 29:", orders);
  await Order.insertMany(orders);
  await db.disconnect();
  res.send("addded order bro plzzzz!!");
};

async function getProductData(_product_id) {
  const {_doc} = await quranCollection.findById(_product_id, "item_Name value weight length width height -_id");
  //console.log("line 34:", _doc);
  return _doc;
}

export default handler;
