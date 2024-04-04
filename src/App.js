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

    /* STORE DATA */
    // Tags
    const tags = useSelector(state => state.tags.items);
    const hasMore = useSelector(state => state.tags.hasMore)

    // Fetch state
    const currentState = useSelector(state => state.fetchState.currentState)
    const errorMessage = useSelector(state => state.fetchState.errorMessage)

    // Page
    const currentPage = useSelector(state => state.page.currentPage)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchTags(dispatch, currentPage)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    }, [dispatch, currentPage])

    return (
      <>
          <Header />
          <main className="container mx-auto my-5">
              <Filters />
              <TagTable tags={tags} currentState={currentState} errorMessage={errorMessage}/>
              <PaginationButtons currentPage={currentPage} hasMore={hasMore}/>
          </main>
          <Footer />
      </>
  );
}

export default App;
