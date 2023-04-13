const express = require('express');

const Stripe = require('stripe');
const cors = require('cors');
const stripe = Stripe('sk_test_51MfV7mHVw3NF151dq2xr5ff5T9YuyeT9BIhR1o98Vb9ihZqOcYdhPTox9IHZF68on24B36JMGhWVUsRRkeGuLv4y00oggtvHXG');

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;
const host = "10.0.0.27"


app.post('/payment-sheet', async (req, res, next) => {
    try {
        const data = req.body;

        const params = {
            email: data.email,
            name: data.name,
        };

        const customer = await stripe.customers.create(params)

        const ephemeralKey = await stripe.ephemeralKeys.create(
            { customer: customer.id },
            { apiVersion: '2022-11-15' }
        )

        const paymentIntent = await stripe.paymentIntents.create({
            amount: parseInt(data.amount),
            currency: data.currency,
            customer: customer.id,
            automatic_payment_methods: {
                enabled: true,
            },
        });

        const paymentMethod = await stripe.paymentMethods.create({
            type: 'card',
            card: {
              number: '4242424242424242',
              exp_month: 12,
              exp_year: 2025,
              cvc: '220',
            },
          });

        const response = {
            paymentIntent: paymentIntent.client_secret,
            ephemeralKey: ephemeralKey.secret,
            customer: customer.id
        }
        res.status(200).send(response);
    }
    catch (e) {
        next(e);
    }

})

app.listen(port, host, () => {
    console.log('App is running on port 3000');
})

