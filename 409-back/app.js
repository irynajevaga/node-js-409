import express from 'express';
import cors from 'cors';
import env from 'dotenv';
env.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome aboard!');
    // res.json(['Welcome Back!', 'Second Value']);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})