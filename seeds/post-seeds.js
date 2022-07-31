const { Post } = require('../models');

const postData = [
    {
        title: "this is a comment",
        contents: "trying",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;