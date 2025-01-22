import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import User from '../models/User';

export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) {
            res.status(400).json({ msg: 'User already exists' });
            return;
        }

        user = new User({
            username,
            password,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            'your_jwt_secret',
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if (!user) {
            res.status(400).json({ msg: 'Invalid Credentials' });
        } else {

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            'your_jwt_secret',
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};
