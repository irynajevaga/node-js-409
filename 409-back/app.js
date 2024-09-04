import express from 'express';
import cors from 'cors';
import env from 'dotenv';
import sequelize from './config/db.js'; // подключить sequelize
import Pirates from './models/pirates.js';
env.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const createPirate = async (obj) => {
    const { name, email, phone, address, password } = obj;
    try {
        const newPirate = await Pirates.create({
            name,
            email,
            phone,
            address,
            password
        })
        console.log('Pirate created:', newPirate)
    } catch (error) {
        console.log('Error creating pirate', error);
    }
}

app.post('/pirates', async (req, res) => {
    try {
        console.log(req.body);
        const pirate = req.body;
        await createPirate(pirate);
    } catch (error) {
        console.log('Error creating new Pirate', error);
    }
}); // Создание сущности

app.get('/pirates');  // Получить всех

app.get('/', (req, res) => {
    res.send('Welcome aboard!');
    // res.json(['Welcome Back!', 'Second Value']);
})

app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection successfully to database');
        console.log('Server is running on http://localhost:' + port)
    } catch (error) {
        console.log('Unable to connect to the database: ', error);
    }
})