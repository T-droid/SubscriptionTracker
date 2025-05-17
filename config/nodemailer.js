import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env';

export const accountEmail = 'emmanueltindi66@gmail.com'
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: accountEmail,
        pass: EMAIL_PASSWORD
    }
})

export default transporter;