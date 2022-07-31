const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignkey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignkey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignkey: 'user_id',
    onDelete: 'CASCADE'
})

Post.hasMany(Comment, {
    foreignkey: 'post_id',
    onDelete: 'CASCADE '
});

Comment.belongsTo(User, {
    foreignkey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignkey: 'post_id',
    onDelete: 'CASCADE '
});

module.exports = {
    User,
    Post,
    Comment
};