const mongoose = require('mongoose');
const Joi = require('joi');

// Mongoose Schema for User
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, maxlength: 50 },
    email: { type: String, required: true, unique: true, trim: true },
    phone: { type: String, required: true, unique: true, minlength: 10, maxlength: 10 },
    age: { type: Number, required: true, min: 12, max: 100 },
    birthday: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female'], required: true },
    role: { type: String, enum: ['Admin', 'User'], default: 'User', required: true },
    terms: { type: Boolean, required: true },
});

const User = mongoose.model('User', userSchema);

// Joi Validation Schema for User
const validateUser = (user) => {
    const schema = Joi.object({
        name: Joi.string().trim().max(50).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().min(10).max(10).required(),
        age: Joi.number().min(12).max(100).required(),
        birthday: Joi.date().required(),
        gender: Joi.string().valid('Male', 'Female').required(),
        role: Joi.string().valid('Admin', 'User').default('User').required(),
        terms: Joi.boolean().valid(true).required(), // Adjust if needed
    });
    return schema.validate(user);
};

module.exports = { User, validateUser };
