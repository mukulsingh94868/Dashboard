const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
    blogIds: [{ type: mongoose.Types.ObjectId, ref: "Blog" }],
    userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
}, {
    timestamps: true,
});

const FavouriteModel = mongoose.model('favourite', favouriteSchema);
module.exports = FavouriteModel;