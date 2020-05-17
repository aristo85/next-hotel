const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    type: {
        type: String,
        required: [true, 'Please add a type'],
        trim: true,
        maxlength: [40, 'type cannot be more than 40 characters']
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 5000
    },
    size: {
        type: Number,
        required: true,
        min: 0,
        max: 1000
    },
    capacity: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    pets: {
        type: Boolean,
        required: true
    },
    breakfast: {
        type: Boolean,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    extras: {
        type: [String],
        required: true
    },
    images: {
        type: Array,
        required: true
    }
});
module.exports = mongoose.models.Room || mongoose.model('Room', RoomSchema);