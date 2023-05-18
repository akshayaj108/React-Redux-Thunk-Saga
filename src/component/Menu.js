import { HashRouter, Link, Routes, Route } from "react-router-dom";
import WithoutRedux from "./withoutRedux/withoutRedux";
import UsingRedux from "./usingredux/usingRedux";
import Users from "./Thunk-Redux/Users";

const Menu = () => {
  return (
    <HashRouter>
      <div id="menu">
        <Link to="without-Redux">Without Redux</Link>
        <Link to="using-Redux">Sample Redux</Link>
        <Link to="using-thunk">Using Thunks</Link>
      </div>
      <Routes>
        <Route path="without-Redux" element={<WithoutRedux />} />
        <Route path="using-Redux" element={<UsingRedux />} />
        <Route path="using-thunk" element={<Users />} />
      </Routes>
    </HashRouter>
  );
};

export default Menu;
