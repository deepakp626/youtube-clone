import FilterBar from "../../components/FilterBar"
import SearchVideoCmp from "./Components/SearchVideoCmp"
import DashBoardLayout from '../../components/DashBoardLayout'

const SearchPageLayout = () => {
  return (
    <>
    <DashBoardLayout>
      <div>
          <FilterBar />
      </div>
      <div className="flex flex-col gap-4 overflow-scroll sm:px-5  pb-6">
          <SearchVideoCmp />
      </div>
    </DashBoardLayout>
    </>
  )
}

export default SearchPageLayout