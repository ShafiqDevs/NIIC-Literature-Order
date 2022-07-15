import { loadStripe } from "@stripe/stripe-js";

export async function Checkout({ lineItems }) {
  let stripePromise = null;



  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        "pk_test_51LABzlBP38kujVQZZ8ywAVPaGa4gkZqz2sMCvsc7Ow7KvJ3I0WGOPR5Qrmwnl86RkVrbiC7eC0aFgqF2g8GX4F2P00W38Ce7zQ"
      );
    }
    return stripePromise;
  };
  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}`,
    cancelUrl: `${window.location.origin}/discord`,
  });
}
