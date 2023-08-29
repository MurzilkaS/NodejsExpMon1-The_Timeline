const post = require('../model/postModel')

const getpost = (req , res) =>{
    post.find()
        .then(result => {res.render('index', {post: result} )})
        .catch(err => console.log(err))
}

const createPost = (req, res) => {
    let newPost = new post(req.body)
    newPost.save()
        .then(()=>{res . redirect('/')})
        .catch(err => console.log(err))

}

const deletepost = (req, res) => {
    post.findByIdAndDelete(req . params. id )
        .then(() =>{res. redirect('/') })
        .catch(err =>console.log(err))
}

module.exports={
    getpost,
    createPost,
    deletepost
    
}