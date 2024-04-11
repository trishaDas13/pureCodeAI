// import { Link } from "react-router-dom";
// icons
import { LuLogOut, LuMoreVertical, LuPencil, LuTrash } from "react-icons/lu";

const Dropdown = () => {
  return (
    <>
      <div className="hs-dropdown relative inline-flex [--placement:left-top] rtl:[--placement:right-top]">
        <button
          id="hs-dropright"
          type="button"
          className="hs-dropdown-toggle rounded"
        >
          <LuMoreVertical size={16} />
        </button>
        <div
          className="hs-dropdown-menu transition-[opacity,margin] w-40 duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow rounded py-2 dark:bg-default-50 border border-default-200"
          aria-labelledby="hs-dropright"
        >
          <a href="#"
            className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
            
          >
            <LuPencil size={14} className="me-1" />
            <span>Edit</span>
          </a>
          <a href="#"
            className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-default-800 hover:bg-default-100"
            
          >
            <LuLogOut size={14} className="me-1" />
            <span>Refresh</span>
          </a>
          <hr className="my-2 border-default-200" />
          <a href="#"
            className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-danger hover:bg-default-100"
            
          >
            <LuTrash size={14} className="me-1" />
            <span>Delete</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
