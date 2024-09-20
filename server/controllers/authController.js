const {User} = require('../models/User');

const register = async (req, res) => {
    const { name, email, phone, age, birthday, gender, terms } = req.body;

    if (!name || !email || !phone || !age || !birthday || !gender || terms === undefined) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Form already Submitted' });
        }
        const user = new User({
            name, email, phone, age, birthday, gender, role: 'User', terms
        });
        await user.save();
        res.status(201).json({ message: 'Form Submitted successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
module.exports = {
    register
};
