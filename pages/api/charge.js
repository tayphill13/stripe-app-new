import Stripe from 'stripe';
const stripe = new Stripe(SECRET_STRIPE_KEY);

export default async (req, res) => {
  const { id, amount } = req.body;



}