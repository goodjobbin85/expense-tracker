import "./Item.css"

function Item(props) { 
    return ( 
        <ul> 
            <li>{props.expense}</li> 
            <li>{props.amount}</li> 
            <li>{props.date}</li>
        </ul>
    )
} 

export default Item; 