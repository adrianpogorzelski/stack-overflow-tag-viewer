import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TagTable from "./components/TagTable";
import PaginationButtons from "./components/paginationButtons"

function App() {
  return (
      <>
          <Header />
          <main className="container mx-auto my-5">
              <Filters />
              <TagTable />
              <PaginationButtons />
          </main>
          <Footer />
      </>
  );
}

export default App;
