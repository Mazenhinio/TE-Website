import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet({ contentSecurityPolicy: false })); // CSP disabled for CDN assets
app.use(cors());
app.use(express.json());

// Rate limiting for forms
const formLimiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 5 });

// API Routes
app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date() }));
app.post('/api/demo-request', formLimiter, (req, res) => {
    // Logic to process the request
    console.log("Demo request received:", req.body);
    res.json({ success: true, message: "Demo request received" });
});
app.post('/api/contact', formLimiter, (req, res) => {
    console.log("Contact form request received:", req.body);
    res.json({ success: true, message: "Contact request received" });
});

// Serve React app (in production)
app.use(express.static(path.join(__dirname, 'dist')));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Total Engage running on port ${PORT}`));
