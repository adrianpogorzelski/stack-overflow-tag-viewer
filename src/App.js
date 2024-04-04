import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TagTable from "./components/TagTable";
import PaginationButtons from "./components/paginationButtons"
import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from "react";
import { fetchTags } from "./services/fetchTags"

function App() {

    const dispatch = useDispatch();

    /* STORE DATA TO BE PASSED AS PROPS */
    // Another approach I tried is to simply pass the direct calls into props, but that decreased readability

    // Tags
    const tags = useSelector(state => state.tags.items);
    const hasMore = useSelector(state => state.tags.hasMore)

    // Fetch state
    const currentState = useSelector(state => state.fetchState.currentState)
    const errorMessage = useSelector(state => state.fetchState.errorMessage)

    // Filters
    const tagsPerPage = useSelector(state => state.filters.tagsPerPage)
    const sortBy = useSelector(state => state.filters.sortBy)
    const order = useSelector(state => state.filters.order)

    // Page
    const currentPage = useSelector(state => state.page.currentPage)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchTags(dispatch, currentPage, tagsPerPage, sortBy, order)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    }, [ // Refresh when these store states change - also when an action is dispatched
        dispatch,
        currentPage,
        tagsPerPage,
        sortBy,
        order]
    )

    return (
      <>
          <Header />
          <main className="container mx-auto my-5">
              <Filters />
              <TagTable
                  tags={tags}
                  currentState={currentState}
                  errorMessage={errorMessage}
              />
              <PaginationButtons
                  currentPage={currentPage}
                  hasMore={hasMore}
              />
          </main>
          <Footer />
      </>
  );
}

export default App;
