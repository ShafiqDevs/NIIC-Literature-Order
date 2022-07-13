import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(`mongodb+srv://admin:admin@cluster-niicorders.zhdke.mongodb.net/NIIC-Order-Portal`);

export default connectMongo;