import mongoose from "mongoose";
import libConfig from ".";

// Mongoose connections ready state
//     0: disconnected
//     1: connected
//     2: connecting
//     3: disconnecting

const connection: {
  isConnected: number;
} = { isConnected: 0 };

export async function connect() {
  if (connection.isConnected) {
    console.log("Already connected to the database");
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Use previous connection to the database");
      return;
    }
    await mongoose.disconnect();
  }

  // connect mongodb
  const db = await mongoose.connect(libConfig.mongodbUrl);
  console.log("New connection to the database.");
  connection.isConnected = db.connections[0].readyState;
}

export async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = 0;
      return;
    } else {
      console.log("Not disconnection from database");
      return;
    }
  }
}

const mongodb = { connect, disconnect };
export default mongodb;
