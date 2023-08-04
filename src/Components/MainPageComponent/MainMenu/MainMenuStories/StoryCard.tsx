import * as React from 'react';
import '../../../../css/MainMenuStories.css'

function StoryCard() {


    return (

        <div className='col-3'>
            <a href="https://google.com">
                <form className='StoryCard'>
                    <img className='StoryImg' src='https://t3.ftcdn.net/jpg/04/49/19/08/360_F_449190831_i2whvIQdDIGtuIVWT6QfenWwmRApVJ5l.jpg' />
                    <label className='labelForImg'>There is a super caption for this anime card</label>
                    <label className='labelForImg EndLabel'>creator's nickname</label>
                </form>
            </a>
        </div>

    );
};

export default StoryCard;