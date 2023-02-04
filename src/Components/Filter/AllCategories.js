import Filter from "./Filter";

const AllCategories =()=>{
    return(<div>
        <h1>What kind of food do you like?</h1>
        {['ITALIAN', 'SEAFOOD', 'APPETIZERS', 'SALADS', 'ALL'].map((category,index)=><Filter category={category} key={index}/>)}
    </div>)
}
export default AllCategories;