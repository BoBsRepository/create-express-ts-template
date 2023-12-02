import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  MONGOURI: process.env.MONGOURI,
};

export default config;
