import express from 'express';

const app = express();

app.get('/', (_request, response) => {
  const version = process.env.APP_VERSION ?? 'development';

  response.type('html').send(`
    <h1>CI/CD Lab</h1>
    <p>The application is running.</p>
    <p>Version ${version}</p>
  `);
});

// 👇 Route temporaire ajoutée pour tester
app.get('/api/ping', (_request, response) => {
  response.json({ pong: true });
});

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
  });
});

export default app;
