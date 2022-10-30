import connectMongo from "../../../lib/connectMongo";
import Order from "../../../models/Order";
import Product from "../../../models/Products";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {

  await connectMongo();
  if (req.method !== 'POST') {
    res.json('should a post but its not!').send();
    return;
  }

  const { email, name, adress, city } = req.body;
  const productsIds = req.body.products.split(',');
  const uniqIds = [...new Set(productsIds)];
  const products = await Product.find({ _id: { $in: uniqIds } }).exec();

  let line_items = [];
  for (let productId of uniqIds) {
    const quantity = productsIds.filter(id => id === productId).length;
    const product = products.find(p => p._id.toString() === productId);
    line_items.push({
      quantity,
      price_data: {
        currency: 'MAD',
        product_data: { name: product.name },
        unit_amount: product.price * 100,
      },
    });
  }

  const order = await Order.create({
    products: line_items,
    name: name,
    email: email,
    adress: adress,
    city: city,
    paid: 0,
  })

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: 'payment',
    customer_email: email,
    success_url: `${req.headers.origin}/?success=true`,
    cancel_url: `${req.headers.origin}/?canceled=true`,
    metadata: { orderId:order._id.toString()},
  });
  res.redirect(303, session.url);

}