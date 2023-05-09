// import stripe from "stripe" 
// var StripePay = stripe(process.env.STRIPE_PRIVATE_KEY)
  
export const Payment =async (req,res) => {
    //     try{
    //     const session = await StripePay.checkout.sessions.create({
    //         payment_method_types: ["card"],
    //         mode: "payment",
    //         line_items: req.body.items.map(item => {
    //             return {
    //               price_data: {
    //                 currency: "PKR",
    //                 product_data: {
    //                   name: item.name,
    //                 },
    //                 unit_amount: item.price,
    //               },
    //               quantity: item.quantity,
    //             }
    //           }),
    //       success_url: `https://wxample.com`
    //     })
    //     res.json({ url: session.url })
    // }
    // catch(e){
    //     res.status(500).json({ error: e.message })
    // }
}