//requirements
const {
    User,
    Comment,
    Post
} = require('../models');

const users = [

    {
        username: 'JT Gutierrez',
        password: 'Letsblog12345'
    },
    {
    username: 'Ali Andrade',
    password: 'Fastblogger22'
    }
]

const posts = [

    {
        title: 'Why coding is cool',
        content: 'It just is',
        user_id: 1
    },

    {
        title: 'Do you like JavaScript?',
        content: 'Hard to start, easy to get used to',
        user_id: 1
    }

]

const comments = [

    {
        content: 'this is a comment',
        user_id: 2,
        post_id: 1
    }

]


const plantSeeds = async () => {


    await User.bulkCreate(users, { individualHooks: true });
    await Post.bulkCreate(posts);
    await Comment.bulkCreate(comments);

}

plantSeeds();