import '../../../../css/NewsFeed.css'
import { BiComment } from 'react-icons/bi'
import { BsSave } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
interface Numbers{
    CommentsCount:number,
    LikesCount:number
}
function FeedButtons({CommentsCount, LikesCount}:Numbers) {

    return (
        <>
            <div className='col-3 '>
                <button className='buttonsForFeed'><BiComment /> {CommentsCount} comments </button>
            </div>
            <div className='col-3'>
                <button className='buttonsForFeed'><BsSave></BsSave>&nbsp; save</button>
            </div>
            <div className='col-3'>
                <button className='buttonsForFeed'><AiOutlineLike className='like' />{LikesCount}</button>
            </div>
        </>
    )
}
export default FeedButtons;