import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import bcrypt from 'bcrypt';
const userSchema = mongoose.Schema({
    name: {
        type: String,
       
    },
    email: {
        type: String
    },
   
    password: {
        type: String
    },
    role: {
        type: String
    },
    st: {
        type: String
        
    },
    code: {
        type: String
        
    }
});


userSchema.pre('save',async function(next)
{
this.password=bcrypt.hash(this.password,10)
next();

}



)


autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

const postUser = mongoose.model('user', userSchema);

export default postUser;

    

    
    
   



