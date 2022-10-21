import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import routes from "router/route.js";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { useEffect, useState } from "react";
function App() {
  const [listRoute, setListRoute] = useState([]);
  const getChildrenRoute = (childrenRoute) => {
    if (!childrenRoute || childrenRoute.length == 0) return "";
    let ListChildRoute = childrenRoute.map((route, index) => {
      let ChildRoute = getChildrenRoute(route.children);
      let Layout = route.layout ? route.layout : DefaultLayout;
      return (
        <Route
          key={index}
          path={route.path}
          element={
            <Layout>
              <route.component></route.component>
            </Layout>
          }
        >
          {ChildRoute
            ? ChildRoute.map((child) => {
                return child;
              })
            : ""}
        </Route>
      );
    });
    return ListChildRoute;
  };
  useEffect(() => {
    setListRoute(getChildrenRoute(routes));
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          {listRoute.map((route) => {
            return route;
          })}
          <Route
            path="/"
            element={<Navigate to="dashboard/subcription" replace />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
