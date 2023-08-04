import '../../../../css/NewsFeed.css'
import FeedSetting from './FeedSetting'
import FeedButtons from './FeedButtons'
import FeedLinks from './FeedLinks'

import { UseNewsFeed } from '../../../../Repository/UseNewsFeed';
interface Posts {
    nickname: string;
    date_posted: string;
    category: string;
    title: string;
    likes_count: number;
    comments_count: number;
}
function NewsFeed() {
   const {posts, loadingRef} = UseNewsFeed();
    return (
        <div className='FeedSettings'>
            <FeedSetting />
            {posts.map((post:Posts) => (
                <div className='row FeedForm' key={post.date_posted}>
                <FeedLinks time={post.date_posted} user={post.nickname} title={post.title} category={post.category}></FeedLinks>
                <FeedButtons CommentsCount={post.comments_count} LikesCount={post.likes_count}></FeedButtons>
            </div>
            ))}
           
            <div ref={loadingRef}>Loading...</div>
        </div>
    )
}
export default NewsFeed;