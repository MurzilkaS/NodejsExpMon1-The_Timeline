const express = require('express')
const route = express .Router()
const postController= require('../controller/postController')

route.get('/' , postController.getpost )
route.post('/create-post', postController.createPost)
route.post('/delete-post/: id', postController.deletepost)



module. exports=route;