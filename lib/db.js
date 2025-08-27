import mysql from "mysql2/promise"

let connection

export async function getConnection() {
  if (!connection) {
    connection = await mysql.createPool({
      host: "localhost",   // e.g. "localhost"
      user: "sculpted_appointments",   // e.g. "root"
      password: "sculpted_appointments",
      database: "sculpted_appointments",
      waitForConnections: true,
      connectionLimit: 10,
    })
  }
  return connection
}
