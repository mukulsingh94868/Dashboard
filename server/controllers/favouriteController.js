const FavouriteModel = require("../models/favouriteModel");

module.exports.addFavourite = async (req, res) => {
    try {
        const { blogId } = req.body;
        let favorite = await FavouriteModel.findOne({ userId: res.locals.userId });
        if (!favorite) {
            favorite = new FavouriteModel({ userId: res.locals.userId, blogIds: [blogId] });
        } else {
            if (favorite.blogIds.includes(blogId)) {
                return res
                    .status(400)
                    .json({ message: "Blog is already in favorites" });
            }
            favorite.blogIds.push(blogId);
        }
        await favorite.save();
        res.status(201).json({ message: "Blog added to favorites", favorite });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.getFavourite = async (req, res) => {
    try {
        const userId = res?.locals?.userId;
        const favorites = await FavouriteModel.findOne({ userId }).populate("blogIds");
        if (!favorites) {
            return res
                .status(200)
                .json({ message: "No favorite blogs found", blogs: [] });
        }
        res.status(200).json({
            message: "Favorites fetched successfully.",
            data: favorites,
            statusCode: 200,
        });
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: error.message });
    }
};