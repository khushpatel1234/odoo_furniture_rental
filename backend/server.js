// server.js or index.js (Your server file)
const express = require('express');
const stripe = require('stripe')('sk_test_51PWv9ARo4v1pFzhuxGAg8ispVHqUTfsZtx7Hf7m9ttdzz8gBDIwgfpMbOdOQvoEG31AB6HtQvksOUGDycGfFO56b00PgLNFavN');
const app = express();
const cors = require("cors");

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());
app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: item.amount,
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: `${req.headers.origin}/`,
    cancel_url: `${req.headers.origin}/`,
  });
  res.json({ id: session.id });
});


mongoose.connect('mongodb+srv://admin:1234@krishnacluster.2ckhtjo.mongodb.net/?retryWrites=true&w=majority&appName=krishnacluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const User = mongoose.model('OdooUser', userSchema);

app.post('/signup', async (req, res) => {
  const { firstname,lastname, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ firstname, lastname, email, password: hashedPassword });
  await newUser.save();
  res.status(201).send({ message: 'User created successfully' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send({ message: 'Invalid email or password' });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send({ message: 'Invalid email or password' });
  }
  const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
  res.send({ message: 'Logged in successfully', token, user });
});


app.listen(4242, () => console.log(`Listening on port 4242!`));
