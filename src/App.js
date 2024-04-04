import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TagTable from "./components/TagTable";
import PaginationButtons from "./components/paginationButtons"
import { useSelector } from 'react-redux'

function App() {

    const currentPage = useSelector(state => state.page.currentPage)
    const hasMore = useSelector(state => state.tags.hasMore)

    return (
      <>
          <Header />
          <main className="container mx-auto my-5">
              <Filters />
              <TagTable />
              <PaginationButtons currentPage={currentPage} hasMore={hasMore}/>
          </main>
          <Footer />
      </>
  );
}

export default App;
