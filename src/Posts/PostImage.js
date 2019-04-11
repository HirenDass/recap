import React from 'react'

const PostImage = props => (
    <img src={props.post.image} alt={props.post.name} />
)
export default PostImage;