import StockLabel from "../componets/StockLabel.jsx"
import "../css/StockListPage.css"

function StockListPage(){
    return(
        <div className="stock-page"> 
            <h1>Stock List</h1>
            <div className="StockList">
                <StockLabel name="apple" quantity = "4" />
                <StockLabel name="apple" quantity = "4" />
                <StockLabel name="apple" quantity = "4" />
                <StockLabel name="apple" quantity = "4" />
            </div>
        </div>
    );
}

export default StockListPage;