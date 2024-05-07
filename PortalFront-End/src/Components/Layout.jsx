import Sidebar from "./Sidebar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-2 border ">
          <div className="border border-gray-300 h-full p-4 shadow-md">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
