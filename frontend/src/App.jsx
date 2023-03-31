import { Header } from "./components";
import { Create, Home, Note } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <div className="bg-gray-400 max-w-xl rounded-xl mt-10 min-h-[50vh] mx-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
