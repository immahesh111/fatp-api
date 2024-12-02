import express from 'express';
import cors from 'cors';
import helmet from 'helmet'; // Import helmet for security headers
import authRouter from './routes/auth.js';
import connectToDatabase from './db/db.js';
import departmentRouter from './routes/department.js';
import employeeRouter from './routes/employee.js';
import leaveRouter from './routes/leave.js';
import settingRouter from './routes/setting.js';
import dashboardRouter from './routes/dashboard.js';
// import formTemplateRouter from './routes/formTemplate.js'
import { userRegister } from './userSeed.js'; // Import user registration function

const app = express();

// Use Helmet to set security headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"], // Allow resources only from your own domain
            scriptSrc: ["'self'", 'https://vercel.live', "'unsafe-inline'"], // Allow scripts from your domain and Vercel
            styleSrc: ["'self'", 'https://fonts.googleapis.com'], // Allow styles from your domain and Google Fonts
            imgSrc: ["'self'", 'data:', 'https://your-image-source.com'], // Adjust as needed
            connectSrc: ["'self'", 'https://your-api-endpoint.com'], // Adjust as needed
        },
    },
}));

// Configure CORS
app.use(cors({
    origin: 'https://checksheet-frontend.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use(express.static('public/uploads')); // Serve static files

// Define routes
app.use('/api/auth', authRouter);
app.use('/api/department', departmentRouter);
app.use('/api/employee', employeeRouter);
app.use('/api/leave', leaveRouter);
app.use('/api/setting', settingRouter);
app.use('/api/dashboard', dashboardRouter);
// app.use('/api/form-templates', formTemplateRouter);

// Connect to the database and create initial admin user
const startServer = async () => {
    try {
        await connectToDatabase();
        await userRegister(); // Ensure initial users are registered if needed
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1); // Exit the process if there's an error
    }
};

startServer();