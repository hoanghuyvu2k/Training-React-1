import Sidebar from "./Sidebar";
function DefaultLayout(props) {
 
  return (
    <div className="pt-20 px-60">
      <Sidebar></Sidebar>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
