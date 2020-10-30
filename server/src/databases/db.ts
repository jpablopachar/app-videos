import mongoose, { ConnectionOptions } from 'mongoose';
import config from '../config/config';

(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(config.MONGODB_URI, mongooseOptions);

    console.log(`Database is connected`);
  } catch (error) {
    console.log(error);
  }
})();
