import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TagTable from "./components/TagTable";

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
