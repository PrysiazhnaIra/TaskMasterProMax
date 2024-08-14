import css from "./Filter.module.css";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFilter } from "../../redux/filtersSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.search) || "";

  const handleFilterChange = (value) => {
    dispatch(setSearchFilter(value));
  };

  return (
    <div className={css.inputContainer}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleFilterChange(e.target.value)}
      />
      {!value && <CiSearch className={css.searchIcon} />}
    </div>
  );
}
