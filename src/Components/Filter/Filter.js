import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../Redux/dishesSlice";

const Filter = ({category})=>{
    const selectedCategory = useSelector (getSelectedCategory);
    const dispatch = useDispatch();
    return (<div className="category">
        <p onClick={()=>{dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButton categoryButtonSelected':'categoryButton'}>{category}</p>
    </div>)
}
export default Filter;
