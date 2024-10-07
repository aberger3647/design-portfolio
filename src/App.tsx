import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { Nav, Home, About, Detail, Illustration } from "./components";
import "./App.css";
import { resources } from "./assets/resources";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/illustration" element={<Illustration />} />
            {resources.map((resource) => (
              <Route
                path={`/${resource.slug}`}
                element={<Detail />}
                key={resource.title}
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
