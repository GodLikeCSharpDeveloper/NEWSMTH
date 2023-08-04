import '../../../../css/NewsFeed.css'
import { AiFillFire} from 'react-icons/ai'


function FeedSetting() {
    return (
            <form className='col-12 SettingsForm'>
                <button className='standartBtn'><AiFillFire style={{backgroundColor:'transparent'}}/> Hot</button>
                
                <button className='standartBtn'>first</button>
                <button className='standartBtn'>first</button>
                <button className='standartBtn'>first</button>
            </form>
    )
}
export default FeedSetting;