import Post from "./post"

import image1 from '@/app/images/posts/post1.jpg'
import image2 from '@/app/images/posts/post2.jpg'
import image3 from '@/app/images/posts/post3.jpg'
import image4 from '@/app/images/posts/post4.jpg'
import image5 from '@/app/images/posts/post5.jpg'
import image6 from '@/app/images/posts/post6.jpg'

export default function Posts(){
    const posts = [{
        postImage: image1
    },{
        postImage: image2
    },{
        postImage: image3
    },{
        postImage: image4
    },{
        postImage: image5
    },{
        postImage: image6
    }]
    const showPosts = posts.map(item => (<Post post={item}/>))
    return (<div className='profile-posts-container flex'>
        {showPosts}
    </div>
    )
}