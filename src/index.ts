import express from "express";

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`🚀 Server listening on http://localhost:${port}`);
});
