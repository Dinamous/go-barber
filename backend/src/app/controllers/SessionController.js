// import jwt from 'jsonwebtoken';
import User from '../models/User';

class Session {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Password does not match' });
        }

        // const { id, name } = user;

        return this;
    }
}

export default new Session();
