const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51JtnAbSCYDML1dwkXVGovOmKH5OL375w4WUsBXAVqQ3L2EWVGQbT2KuLIpdfR1kWKlzeUi1E5p4HGygHKZm5axwT00N7owgLmK")
const OrderModel = require('../models/orderModel');

module.exports.PlaceOrder = async (req, res) => {
    try {
        const userId = res?.locals?.userId;
        const { token, subtotal, cartItems } = req.body;

        const customer = await stripe?.customers?.create({
            email: token?.email,
            source: token?.id
        });

        const payment = await stripe.charges.create({
            amount: subtotal * 100,
            currency: 'inr',
            customer: customer?.id,
            receipt_email: token?.email
        }, {
            idempotencyKey: uuidv4()
        });

        if (payment) {
            const neworder = new OrderModel({
                userId,
                orderItems: cartItems,
                orderAmount: subtotal,
                shippingAddress: {
                    street: token?.card?.address_line1,
                    city: token?.card?.address_city,
                    country: token?.card?.address_country,
                    pincode: token?.card?.address_zip
                },
                transactionId: payment?.source?.id
            })
            neworder.save();
            res.send('order Placed Successfully !');
        } else {
            res.send('Payment Failed!');
        }
    } catch (error) {
        return res.status(400).json({ messgae: 'Something went wrong' });
    }
};

module.exports.getOrders = async (req, res) => {
    // const { userid } = req.body;
    try {
        const orders = await OrderModel.find();
        res.send({ statusCode: 200, message: 'Orders fetched successfully', orders });
    } catch (error) {
        return res.status(400).json({ messgae: 'Something went wrong' });
    }
}

module.exports.getOrdersByUserId = async (req, res) => {
    // const { userid } = req.body;
    const query = { userId: res?.locals?.userId };
    try {
        const orders = await OrderModel.find(query);
        res.send({ statusCode: 200, message: 'Orders fetched successfully', orders });
    } catch (error) {
        return res.status(400).json({ messgae: 'Something went wrong' });
    }
}
