import express,{ Express } from "express";
import cors from "cors";
import verifyToken,{CustomRequest} from "./firebaseauthentication/TokenMiddleware";
import User from './models/user';
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 4555;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/EcommerceApp')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

app.get('/protected', verifyToken, (req:CustomRequest, res) => {
  const user = req.user;

  res.json({
    message: 'This is a protected route',
    user: user,
  });
});



app.post('/createuser',verifyToken,async (req:CustomRequest,res)=>{
  try {
    const userid = req.user.uid;

    if (!userid) {
      return res.status(400).send({ error: 'User ID not found' });
    }
   
    let user = await User.findOne({ uid: userid });
    if (!user) {
 
      user = new User({ uid: userid, favoriteProducts: [] });
      await user.save();
    }

    res.status(200).send({ message: 'User created/exists', user });
  } catch (error) {
    console.error('Error creating user:', (error as Error).message);
    res.status(400).send({ error: 'Error creating user', details: (error as Error).message });
  }
})



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
