import User from '../model/user.js';
import hbs from 'nodemailer-express-handlebars';
import nodemailer from 'nodemailer';
import path from 'path';

export const getUsers = async (request, response) => {

    try{
        // finding something inside a model is time taking, so we need to add await
        const users = await User.find();
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the user in database
export const addUser = async (request, response) => {
 
 request.body.code=Math.floor(Math.random() * (10000000 - 100 + 1)) + 100;
    const user = request.body;
    console.log("inside")
   emailsend(request.body.code,request.body.email);
   
    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a user by id
export const getUserById = async (request, response) => {
    try{
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editUser = async (request, response) => {
    let user = await User.findById(request.params.id);
    user = request.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteUser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

export const emailsend =  (code, email) =>{
    var transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth:{
                user: 'worldcelebrity12@gmail.com',
                pass: 'Amna1997.'
            }
        }
    );
    
    // point to the template folder
    const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve('./views/'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./views/'),
    };
    
    // use a template file with nodemailer
    transporter.use('compile', hbs(handlebarOptions))
    
    
    var mailOptions = {
        from: '"No reply" <worldcelebrity12@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Welcome!',
        template: 'email', // the name of the template file i.e email.handlebars
        context:{
            Activationcode: code, 
            title:  'hello' // replace {{company}} with My Company
        }
    };
    
    // trigger the sending of the E-mail
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
    }
