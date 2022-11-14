import React, { useState } from 'react'
import UserBadge from '../UserBadge'
import cn from "classnames"
import './style.scss'
import { FcLike, FcLikePlaceholder, FcComments } from "react-icons/fc";
import Comment from '../Comment';

export const Card = ({
    nickName,
    avatarUrl,
    id,
    imgUrl,
    likes,
    isLikeByYou,
    comments,
    className,
}) => {
    
    const [isCommentShow, setIsCommentShow] = useState(false)
   
    const renderComments = () => {       
        if (comments.length > 2 && !isCommentShow) {
            
             const commentsCopy = [...comments]
            const renderForComments = commentsCopy.splice(comments.length - 2, 2)
            return (
                <>
                    <span onClick={() => setIsCommentShow(true)}> {`show ${comments.length - renderForComments.length} comments`}</span>
                    {renderForComments.map(comment => (<Comment key={comment.id} {...comment} />))}
                </>
            )
        } return (
            <>
            
            <span onClick={() => setIsCommentShow(false)}> {`hide comments`}</span>
            {comments.map(comment => (<Comment key={comment.id} {...comment} />))}
            </>
            )
            
    }

    return (
        <div className={cn('cnCardRoot', className)}>
            <div className='cnCardHeader'>
                <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
            </div>
            <div>
                <img src={imgUrl} alt="img" className='cnCardImage' />
            </div>
            <div className="cnCardButtons">
                <i className='cnCardLikeIcon'>{isLikeByYou ? <FcLike /> : <FcLikePlaceholder />}</i>
                <i className='cnCardCommentsIcon'>{<FcComments />}</i>
            </div>
            <div className="cnCardLikes"> {`${likes} likes`}</div>
            <div className="cnCardComments">
                {renderComments()
                
                }
            </div>
            <textarea className="cnCardMyComment" />
        </div>
    )
}

export default Card
