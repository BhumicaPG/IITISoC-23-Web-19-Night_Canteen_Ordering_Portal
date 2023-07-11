const router = require("express").Router();
const admin = require('firebase-admin');
const db=admin.firestore();
const express = require("express");

const stripe = require('stripe')(process.env.STRIPE_KEY);
// const stripe = require('stripe')(process.env.CLIENT_URL);


db.settings({ignoreUndefinedProperties : true});


router.post("/create", async(req, res)=>{
    try{
        const id=Date.now();
        const data={
            product_id         : id,
            product_name       : req.body.product_name,
            product_category   : req.body.product_category,
            product_price      : req.body.product_price,
            imageURL           : req.body.imageURL,
        };

        const response=await db.collection("products").doc(`/${id}/`).set(data);

        console.log(response);
        
        return res.status(200).send({success : true , data : response});

    }catch(err){
        return res.send({success : false , msg : `Error : ${err}`});
    }
})


//get all the products
router.get("/all", async(req, res)=>{
    (
        async()=>{
            try{
                let query=db.collection("products");
                let response=[];
                await query.get().then((querysnap)=>{
                    let docs=querysnap.docs;
                    docs.map((doc)=>{
                        response.push({...doc.data()});
                    })
                    return response;
                });   
                return res.status(200).send({success : true , data : response});
            }catch(err){
                return res.send({success : false , msg : `Error : ${err}`});
            }
        })();
});

// delete a product
router.delete("/delete/:productId", async (req, res) => {
    const productId = req.params.productId;
    try {
      await db.collection("products").doc(`/${productId}/`).delete().then((result) => {
          return res.status(200).send({ success: true, data: result });
        });
    } catch (err) {
      return res.send({ success: false, msg: `Error :${err}` });
    }
  });

// create a cart
router.post("/addToCart/:userId", async (req, res) => {
    const userId = req.params.userId;
    const product_id = req.body.product_id;
  
    try {
      const doc = await db
        .collection("cartItems")
        .doc(`/${userId}/`)
        .collection("items")
        .doc(`/${product_id}/`)
        .get();
  
      if (doc.data()) {
        const quantity = doc.data().quantity + 1;
        const updatedItem = await db
          .collection("cartItems")
          .doc(`/${userId}/`)
          .collection("items")
          .doc(`/${product_id}/`)
          .update({ quantity });
        return res.status(200).send({ success: true, data: updatedItem });
      } else {
        const data = {
          product_id: product_id,
          product_name: req.body.product_name,
          product_category: req.body.product_category,
          product_price: req.body.product_price,
          imageURL: req.body.imageURL,
          quantity: 1,
        };
        const addItems = await db
          .collection("cartItems")
          .doc(`/${userId}/`)
          .collection("items")
          .doc(`/${product_id}/`)
          .set(data);
        return res.status(200).send({ success: true, data: addItems });
      }
    } catch (err) {
      return res.send({ success: false, msg: `Error :${err}` });
    }
  });
  
  // update cart to increase and decrease the quantity
  router.post("/updateCart/:user_id", async (req, res) => {
    const userId = req.params.user_id;
    const product_id = req.query.product_id;
    const type = req.query.type;
  
    try {
      const doc = await db
        .collection("cartItems")
        .doc(`/${userId}/`)
        .collection("items")
        .doc(`/${product_id}/`)
        .get();
  
      if (doc.data()) {
        if (type === "increment") {
          const quantity = doc.data().quantity + 1;
          const updatedItem = await db
            .collection("cartItems")
            .doc(`/${userId}/`)
            .collection("items")
            .doc(`/${product_id}/`)
            .update({ quantity });
          return res.status(200).send({ success: true, data: updatedItem });
        } else {
          if (doc.data().quantity === 1) {
            await db
              .collection("cartItems")
              .doc(`/${userId}/`)
              .collection("items")
              .doc(`/${product_id}/`)
              .delete()
              .then((result) => {
                return res.status(200).send({ success: true, data: result });
              });
          } else {
            const quantity = doc.data().quantity - 1;
            const updatedItem = await db
              .collection("cartItems")
              .doc(`/${userId}/`)
              .collection("items")
              .doc(`/${product_id}/`)
              .update({ quantity });
            return res.status(200).send({ success: true, data: updatedItem });
          }
        }
      }
    } catch (err) {
      return res.send({ success: false, msg: `Error :${err}` });
    }
  });
  
  // get all the cartitems for that user
  router.get("/getCartItems/:user_id", async (req, res) => {
    const userId = req.params.user_id;
    (async () => {
      try {
        let query = db
          .collection("cartItems")
          .doc(`/${userId}/`)
          .collection("items");
        let response = [];
  
        await query.get().then((querysnap) => {
          let docs = querysnap.docs;
  
          docs.map((doc) => {
            response.push({ ...doc.data() });
            console.log("response", response);
          });
          
          return response;
        });
        return res.status(200).send({ success: true, data: response });
      } catch (er) {
        return res.send({ success: false, msg: `Error :,${er}` });
      }
    })();
  });
  

  //checkout method
  router.post("/create-checkout-session", async (req, res) => {
    const customer = await stripe.customers.create({
      metadata: {
        user_id: req.body.data.user.user_id,
        cart: JSON.stringify(req.body.data.cart),
        total: req.body.data.total,
      },
    });
    
    const line_items = req.body.data.cart.map((item) => {
      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: item.product_name,
            images: [item.imageURL],
            metadata : {
              id : item.product_id,
            }
          },
          unit_amount: item.product_price * 100,
        },
        quantity: item.quantity,
      };
      

      })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // phone_number_collection: {
      //   enabled: true,
      // },
      line_items,
      customer: customer.id,
      mode: 'payment',

      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/`,
    });
    // console.log("or yhaaaa p products.js m aaya h")
    res.send({url : session.url});
    // res.redirect(303, session.url)
      // res.redirect(303, session.url);
  });

  let endpointSecret;
  // const endpointSecret = process.env.WEBHOOK_SECRET;
 router.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
    const sig = req.headers['stripe-signature'];
    let data;
    let eventType;

    if (endpointSecret) {
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
   
    data=event.data.object;
    eventType = event.type;  
  }else{
    data=req.body.data.object;
    eventType = req.body.type;
  }

    // Handle the event
    if (eventType === 'checkout.session.completed') {
      // console.log(data)
      // console.log("Payment was successful.");
      stripe.customers.retrieve(data.customer, function(err, customer) {
        // console.log("customer's data", customer);
        // console.log("Data", data);
        createOrder(customer, data, res);
      }
      );
      
    }

    // switch (event.type) {
    //   case 'payment_intent.succeeded':
    //     const paymentIntentSucceeded = event.data.object;
    //     // Then define and call a function to handle the event payment_intent.succeeded
    //     break;
    //   // ... handle other event types
    //   default:
    //     console.log(`Unhandled event type ${event.type}`);
    // }
  
    // Return a 200 response to acknowledge receipt of the event
    res.send().end();
  });


  const createOrder = async (customer, intent, res) => {
    console.log("Inside the orders");
    try {
      const orderId = Date.now();
      const data = {
        intentId: intent.id,
        orderId: orderId,
        amount: intent.amount_total,
        created: intent.created,
        payment_method_types: intent.payment_method_types,
        status: intent.payment_status,
        customer: intent.customer_details,
        // shipping_details: intent.shipping_details,
        userId: customer.metadata.user_id,
        items: JSON.parse(customer.metadata.cart),
        total: customer.metadata.total,
        sts: "preparing",
      };
  
      await db.collection("orders").doc(`/${orderId}/`).set(data);
  
      deleteCart(customer.metadata.user_id, JSON.parse(customer.metadata.cart));
      console.log("*****************************************");
  
      return res.status(200).send({ success: true });
    } catch (err) {
      console.log(err);
    }
  };
  


  const deleteCart = async (userId, items) => {
    console.log("Inside the delete");
  
    console.log(userId);
  
    console.log("*****************************************");
    items.map(async (data) => {
      console.log("-------------------inside--------", userId, data.productId);
      await db
        .collection("cartItems")
        .doc(`/${userId}/`)
        .collection("items")
        .doc(`/${data.productId}/`)
        .delete()
        .then(() => console.log("-------------------successs--------"));
    });
  };
  


module.exports = router;