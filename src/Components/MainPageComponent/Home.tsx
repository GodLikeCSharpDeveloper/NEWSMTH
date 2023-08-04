import SidePanel from "../MainPageComponent/MainMenu/SideMenu/SidePanel"
import Header from './Header/Header';
import MainMenuStories from './MainMenu/MainMenuStories/MainMenuStories'
import NewsFeed from './MainMenu/NewsFeed/NewsFeed';

function Home() {
  return (
    <div className='container-fluid'>
    <Header></Header>
    <div className="row">
      <div className="col-2"></div>
      <SidePanel></SidePanel>
      <div className="col-9">
        <MainMenuStories></MainMenuStories>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-7">
            <NewsFeed></NewsFeed>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home;