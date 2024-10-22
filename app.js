// app.js
import express from 'express';
import { getUserData, saveUserData } from './mongodb.js';  

const app = express();


app.use(express.static('public'));

app.use(express.json());


app.get('/getUserData', async (req, res) => {
    const { userId } = req.query;
    try {
        const userData = await getUserData(userId);
        res.json(userData);
    } catch (error) {
        console.error('Error retrieving user data:', error);
        res.status(500).json({ error: 'Failed to retrieve user data' });
    }
});


app.post('/saveUserData', async (req, res) => {
    const { userId, data } = req.body;
    try {
        await saveUserData(userId, data);
        res.sendStatus(200);
    } catch (error) {
        console.error('Error saving user data:', error);
        res.status(500).json({ error: 'Failed to save user data' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
