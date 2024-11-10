import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://harshitha:harshitha123@cluster0.fbeim.mongodb.net/blogg?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;