import FilterBar from "../../components/FilterBar"
import SearchVideoCmp from "./Components/SearchVideoCmp"

const SearchPageLayout = () => {
  return (
    <>
      <div>
          <FilterBar />
      </div>
      <div className="flex flex-col gap-4 overflow-scroll sm:px-5  pb-6">
          <SearchVideoCmp />
      </div>
    </>
  )
}

export default SearchPageLayout