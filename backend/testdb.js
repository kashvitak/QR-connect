const pool = require('./db');

async function test() {
  try {
    const conn = await pool.getConnection();
    console.log("Connected to Railway DB!");
    conn.release();
  } catch (err) {
    console.error(err);
  }
}

test();