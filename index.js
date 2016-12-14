const mongoose = require('mongoose');

const User = require('./user');
const Product = require('./product');
const Post = require('./post');


// mongoose.connect('mongodb://localhost/products', (err)=>{
// const product1 = new Product({
//   productName: 'box',
//   description: 'good to keep close',
//   sku: '334ggs',
//   quantity: '300'
// });
// product1.save((err)=>{
//   if(err){
//     throw err;
//   }
//   console.log(product1);
//   process.exit();
// })
// if(err){
//   throw err;
// }
//   Product.find((err, products)=>{
//     if(err){
//       throw err;
//     }
//     console.log(products);
//     process.exit();
//   });

// const query = {
//   email: /kleito/
// };
// User.findOne(query, (err, user)=>{
//   if(err){
//     throw err;
//   }
//   console.log(user.fullName);
//   process.exit();
// });
// const query = {
//   quantity: /700/
// };
// Product.findOne(query, (err, product)=>{
//   if(err){
//     throw err;
//   }
//   console.log(product.fullProduct);
//   process.exit();
// })
//
// });

mongoose.connect('mongodb://localhost/quotes', (err) => {
    if (err) {
        throw err;

    }
      // post start

    // const post = new Post({
    //   date: Date.now(),
    //   title: 'Green',
    //   content: 'Good color',
    //   author: 'Caleo'
    // });
    // post.save((err)=>{
    //   if(err){ throw err;}
    //   console.log(post);
    //   process.exit();
    // })

    Post.find((err, products)=>{
      if(err){throw err;}
      console.log(products);
      process.exit();
    })

    // post end

    // const email = 'Alanespi@gamil.com';
    // const password = 'caleoito';
    //
    // User.attemptLogin(email, password, (err, user) => {
    //     if (user) {
    //         console.log('You logged in as ', user.fullName);
    //     }
    //     process.exit();
    // })
    // user.validate((err) => {
    //     if (!err) {
    //         save(user);
    //         return;
    //     }
    //     for (const path in err.errors) {
    //         if (err.errors.hasOwnProperty(path)) {
    //             const error = err.errors[path];
    //
    //             console.log('Error: ', error.message)
    //         }
    //     }
    //     process.exit();
    // });
    // function save(user) {
    //     user.save((err) => {
    //         if (err) {
    //             throw err;
    //         }
    //         console.log(user);
    //         process.exit();
    //     });
    //   }

        // User.findByEmail(email, (err, user)=>{
        //   if(err){
        //     throw err;
        //   }
        //
        //   user.comparePassword(password, (err, isMatch)=>{
        //     if(err){
        //       throw err;
        //     }
        //     if(isMatch){
        //       console.log('You are logged in');
        //     }else{
        //       console.log('Login failed');
        //     }
        //     process.exit();
        //   });
        // });
        // const me = new User({firstName: 'Alan', lastName: 'Espinosa', userName: 'Alain', email: 'Alanespi@gamil.com', password: 'caleoito'});
        //
        // me.save((err) => {
        //     if (err) {
        //         throw err;
        //     }
        // User.find((err, users)=>{
        //   if(err){
        //     throw err;
        //   }
        //   console.log(users);
        //   process.exit();
        // });
        // Use.findById('id', (err, user)=>{
        //   if(err){
        //     throw err;
        //   }
        //   console.log(users);
        //   process.exit();
        //  });
        //  User.find({'email': 'ksldkaf@sdf.com', }, (err,user)=>{
        //    if(err){
        //     throw err;
        //   }
        //  });

        //     console.log(me);
        //     process.exit();
        // });

        // const query = {
        //   email: /kleito/
        // };
        // User.findOne(query, (err, user)=>{
        //   if(err){
        //     throw err;
        //   }
        //   console.log(user.fullName);
        //   process.exit();
        // });
        //
    });
