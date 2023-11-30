import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log(`[📥] MongoDB Connected!`);
  })
  .catch((e) => {
    console.log(`Connection Error - ${e}`);
  });
