import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: String,
        object: String
    }
);

export default mongoose.model('user', userSchema, 'users');