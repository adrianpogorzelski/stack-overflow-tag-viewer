import Filters from "./Filters";
import Footer from "./Footer";
import Header from "./Header";
import TagTable from "./TagTable";

function App() {
  return (
      <>
          <Header />
          <main className="container mx-auto my-5">
              <Filters />
              <TagTable />
          </main>
          <Footer />
      </>
  );
}

export default App;
