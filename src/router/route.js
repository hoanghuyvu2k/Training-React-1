import Dashboard from "view/Dashboard/Dashboard";
import Setting from "view/Setting/Setting";
import PostManagement from "view/PostManagement/PostManagement";
const routes = [
  {
    path: "dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "subcription",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "revenue",
        name: "Dashboard",
        component: Dashboard,
      },
    ],
  },
  { path: "/setting", name: "Setting", component: Setting },
  { path: "/posts", name: "Home", component: PostManagement },
];
export default routes;
