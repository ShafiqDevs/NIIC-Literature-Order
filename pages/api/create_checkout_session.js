const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const cartItems = req.body.cartItems;
  const billingForm = req.body.billingForm;

  console.log("line 7:", cartItems);

  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe
        .checkout
        .sessions
        .create({
          line_items: cartItemsToStripeFormat(cartItems),
          mode: "payment",
          success_url: `${req.headers.origin}/?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/?session_id={CHECKOUT_SESSION_ID}`,
          metadata: {
            cartItems: JSON.stringify(cartItems.map(item => {
              return {product_id: item.product_id, quantity: item.quantity}
            })),
            billingForm: JSON.stringify(billingFormToDatabaseFormat(billingForm))
          }
        });

      res
        .status(200)
        .json({checkout_session: session});
    } catch (err) {
      res
        .status(err.statusCode || 500)
        .json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res
      .status(405)
      .end("Method Not Allowed");
  }
}

function cartItemsToStripeFormat(_cartItems) {
  const lineItems = _cartItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        unit_amount: item.totalPrice * 100,
        product_data: {
          name: item.productName
        }
      },
      quantity: item.quantity
    };
  });
  return lineItems;
}

function billingFormToDatabaseFormat(_billingForm) {
  return {
    Name: _billingForm.fName + " " + _billingForm.lName,
    Property: _billingForm.address,
    Street: _billingForm.address,
    Town: _billingForm.town,
    County: _billingForm.county,
    PostCode: _billingForm.postCode,
    Country: _billingForm.country,
    Telephone: _billingForm.phone
  };
}
