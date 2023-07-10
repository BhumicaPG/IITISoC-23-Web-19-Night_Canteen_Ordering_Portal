const router = require("express").Router();
const admin = require('firebase-admin');
const db=admin.firestore();
// const express = require("express");

const stripe = require('stripe')(process.env.STRIPE_KEY);


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
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/`,
    });
    // console.log("or yhaaaa p products.js m aaya h")
    res.send({url : session.url});
    // res.redirect(303, session.url)
      // res.redirect(303, session.url);
  });

module.exports = router;