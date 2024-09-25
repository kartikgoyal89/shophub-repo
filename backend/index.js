// jaiswalabhay
// gPI7URPCLP97uvdI
import express from 'express'
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import { type } from 'os';
const port = 4000;
const app = express();
import { fileURLToPath } from 'url';
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");
// const { type } = require("os");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://jaiswalabhay:gPI7URPCLP97uvdI@cluster0.mjucill.mongodb.net/Cluster0");

app.get("/", (req, res)=>{
    res.send("Express App is running");
})

const storage = multer.diskStorage({ 
    destination: './upload/images',
    filename: (req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/images', express.static(path.join(__dirname, 'upload/images')));


app.post("/upload", upload.single('product'), (req, res)=>{
    res.json({
        success: 1, 
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

const Product = mongoose.model("Product", {
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        require: true
    },
    image:{
        type: String,
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean, 
        default: true,
    }
})

app.post('/addproduct', async(req, res)=>{
    let products =await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array=products.slice(-1);
        let last_product = last_product_array[0];
        id=last_product.id+1;
    }
    else
    {
        id=1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: 1, 
        name: req.body.name
    })
})

app.post('/removeproduct', async (req, res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    res.json({
        success: true,
        name:req.body.name
    })
})

app.get('/allproducts', async (req, res)=>{
    let products = await Product.find({});
    res.send(products);
})
app.get('/newcollection', async(req, res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(-8);
    res.send(newcollection);
})
const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String, 
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const fetchUser = async(req, res, next)=>{
    const token = req.header('auth-token');
    if(!token)
    {
        res.status(401).send({error: "Please authenticate using valid token"})
    }
    else
    {
        try{
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        }
        catch(error)
        {
            res.status(401).send({error: "Please authenticate using valid token"});
        }
    }
}
app.post('/addtocart', fetchUser, async(req, res)=>{
    console.log(req.body, req.user);
    let userData = await Users.findOne({_id: req.user.id});
    userData.cartData[req.body.itemId]+=1;
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData})
})

app.post('/removefromcart', fetchUser, async(req, res)=>{
    console.log(req.body, req.user);
    let userData = await Users.findOne({_id: req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId]-=1;
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData})
})

app.post('/getcart', fetchUser, async(req, res)=>{
    let userData = await Users.findOne({_id: req.user.id});
    res.json(userData.cartData);
})

app.post('/signup', async (req, res)=>{
    let check = await Users.findOne({email:req.body.email}) ;
    if(check)
    {
        return res.status(400).json({success:false, error:"User already registered"});
    } 
    let cart = {};
    for (let i=0; i<300; i++)
    {
        cart[i]=0;
    }
    const user = new Users({
        name: req.body.name,
        email: req.body.email, 
        password: req.body.password,
        cartData: cart,
    })
    await user.save();
    const data = {
        user: {
            id: user.id
        }
    }
    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true, token});
})

app.post('/login', async (req, res)=>{
    let user = await Users.findOne({email: req.body.email});
    if(user)
    {
        const passCheck = req.body.password === user.password;
        if(passCheck)
        {
            const data = {
                user:{
                    id: user.id,
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success: true, token});
        }
        else
        {
            res.json({success: false, error: "Wrong Password"});
        }
    }
    else
    {
        res.json({success: false, error: "Wrong Email ID"});
    }
})

app.listen(port, (err)=>{
    if(!err)
    {
        console.log("Running at port "+port);
    }
    else
    {
        console.log("Error"+err);
    }
})