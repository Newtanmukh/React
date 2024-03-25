import PropTypes from 'prop-types';

function List(props){
    // const fruits = [ {id : 1,name: "apple", calories: 45},
    //                  {id: 2,name: "banana", calories: 20},    
    //                  {id: 3,name: "pineapple", calories: 10},
    //                  {id : 4,name: "watermelon", calories: 90},
    //                  {id : 5, name: "mango", calories:100}
    //                 ];

    const itemList = props.items;

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); Alphabetical

    // fruits.sort((a,b) => b.name.localeCompare(a.name));

    // fruits.sort((a,b) => a.calories - b.calories);//NUMERIC ASCENDING ORDER.

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const category = props.category;

    const listItems = itemList.map(fruit => <li key={fruit.id}>
                                               {fruit.name}: &nbsp; 
                                               <b>{fruit.calories}</b></li> )

    

    return (<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>);
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number, 
                                               name: PropTypes.string,
                                            calories: PropTypes.number}))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List;