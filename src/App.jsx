// import DashBoardLayout from "./components/DashBoardLayout"
import { Routes, Route } from "react-router-dom"
import HomeLayout from './pages/HomePage/HomeLayout'
import SearchPageLayout from './pages/SearchPage/SearchPageLayout'
import PhoneSearchBar from './components/PhoneSearchBar'
import PlayVideoLayout from "./pages/VideoPlay/PlayVideoLayout"
import ShortsLayout from "./pages/ShortsPage/ShortsLayout"

function App() {
  return (
    <>
    <div className=" ">
      <Routes>
          <Route path="/" exact  element={<HomeLayout />}  />
          <Route path="/search" element={<SearchPageLayout />}  />
          <Route path="/phonesearchbar" element={<PhoneSearchBar />}  />
          <Route path="/watch/:id" element={<PlayVideoLayout />}  />
          <Route path="/shorts" element={<ShortsLayout />}  />
      </Routes>
    </div>
    </>
  )
}

export default App
