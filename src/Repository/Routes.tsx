import { Route, Routes } from 'react-router-dom';
import Home from '../Components/MainPageComponent/Home'


const FeedRoutes = () => {
  return (
    <Routes>

      <Route path="/" Component={Home} />
    </Routes>
  );
};

export default FeedRoutes;