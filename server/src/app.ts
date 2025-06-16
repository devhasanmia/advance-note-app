import express from 'express'
const app = express()

app.get("/api/v1", (req, res) => {
  res.json({
    success: true,
    statusCode: 200,
    service: "Advance Note App",
    environment: process.env.NODE_ENV || "development",
    message: "Server is up and running.",
    timestamp: new Date().toISOString(),
  });
});


export default app