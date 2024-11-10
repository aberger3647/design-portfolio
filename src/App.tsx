import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { Nav, Home, About, Detail, Illustration, Development } from "./components";
import "./App.css"
import { resources } from "./assets/resources";
import { devresources } from './assets/devresources';

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
            <Route path="/" element={<Home resources={resources} />} />
            <Route path="/about" element={<About />} />
            <Route path="/illustration" element={<Illustration />} />
            {resources.map((resource) => (
              <Route
                path={`/${resource.slug}`}
                element={<Detail resource={resource} />}
                key={resource.title}
              />
            ))}
          <Route path='/development' element={<Development devresources={devresources} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
