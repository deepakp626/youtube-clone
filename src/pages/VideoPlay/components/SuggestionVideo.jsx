import VideoCmp from '../../../components/VideoCmp'
const SuggestionVideo = () => {
  return (
    <>
      <div className="custom-grid w-full lg:w-[20rem]  grid grid-cols-1 xs:grid-cols-2 gap-4 p-4 lg:grid-cols-1 border-4 border-orange-600">
        <VideoCmp />
        <VideoCmp />
        <VideoCmp />
        <VideoCmp />
      </div>
    </>
  )
}

export default SuggestionVideo