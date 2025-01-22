import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/healthcare', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions);
        console.log('MongoDB Connected');
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error('An unknown error occurred');
        }
        process.exit(1);
    }
};

export default connectDB;
