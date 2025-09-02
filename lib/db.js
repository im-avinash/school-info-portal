import mysql from "mysql2/promise";

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    contact VARCHAR(20) NOT NULL,
    email_id VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL
  );
`;


export async function connectDB() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });
    console.log("Connected to the database");
    await connection.execute(createTableQuery);
    return connection;
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
}
