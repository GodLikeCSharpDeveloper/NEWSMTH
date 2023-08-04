import * as React from 'react';
import '../../../../css/MainMenuStories.css'
import StoryCard from './StoryCard';
const MainMenuStories = () => {


    return (
        <div className='row'>
            <div className='col-1'></div>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
        </div>
    );
};

export default MainMenuStories;