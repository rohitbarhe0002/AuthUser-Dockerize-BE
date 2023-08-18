import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import authRoutes from './routes/auth.route'
import userRoutes from './routes/user.route'
const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as mongoose.ConnectOptions).then(() => {
    console.log("sapia db is connected");
}).catch((e) => {
    console.log("no connection with sapia db");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}` );
});

export default app;