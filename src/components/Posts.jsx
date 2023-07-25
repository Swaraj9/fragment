import React, {useState, useEffect} from 'react'

const Post = ({post}) => {
    return(
        <div style={{width:"90%", marginBottom:"3rem", padding:"1rem", borderRadius:"10px", border:"2px solid rgb(120,120,120)", backgroundColor:"rgb(100,100,100,0.5)"}}>
            <div style={{display:"flex", marginBottom:"1rem"}}>
                <div style={{fontSize:"1.4rem"}}>{post.title.rendered}</div>
                <div style={{marginLeft:"auto"}}>
                    <div>{post.date.slice(0, 10)}</div>
                    <div style={{textAlign:"right"}}>{post.date.slice(11)}</div>
                </div>
            </div>
            <div>
                {post.content.rendered.slice(4, -5)}
            </div>
        </div>
    )
}

const Posts = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
      fetch("http://wordpress.fragmentstudios.xyz:8000/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then(res => {
        setPosts(res)
      })
    }, [])

    return (
        <div style={{marginTop:"7rem",display:"flex", alignItems:"center", flexDirection:"column", backgroundColor:"transparent"}}>
            <div style={{fontSize:"3rem", marginBottom:"2rem"}}>Blog</div>
            {posts && posts.map(post => <Post post={post}/>)}
        </div>
    )
}

export default Posts