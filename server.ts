import dotenv from "dotenv";
dotenv.config();
import express from "express";
import logger from "./src/utils/logger.config";

const server = express();
const PORT = process.env.PORT || 5050;

server.listen(PORT, () => {
  logger.log(`Server is running on PORT: ${PORT}`);
});
