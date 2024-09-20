const mongoose = require('mongoose');
const Joi = require('joi');

// Mongoose Schema for Admin
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }, profile: {
        type: String,
        required:true,
    }
});

// Joi Validation Schema for Admin
const validateAdmin = (admin) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    });
    return schema.validate(admin);
};

const AdminModel = mongoose.model('Admin', adminSchema);

module.exports = AdminModel;