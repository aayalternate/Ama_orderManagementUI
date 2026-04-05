import { Link } from "react-router-dom";


function HomePage(){
    return(
        <>
        <h2>this page will be built soon</h2>
        <Link to ="/items">Item List</Link>
        <Link to ="/stock">Stock List</Link>
        </>
    );
}

export default HomePage;