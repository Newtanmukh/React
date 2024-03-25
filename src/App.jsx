import List from './List.jsx';

function App() {

  const fruits = [ {id : 1,name: "apple", calories: 45},
                     {id: 2,name: "banana", calories: 20},    
                     {id: 3,name: "pineapple", calories: 10},
                     {id : 4,name: "watermelon", calories: 90},
                     {id : 5, name: "mango", calories:100}
                    ];

                    const vegetables = [ {id : 1,name: "carrot", calories: 145},
                     {id: 2,name: "potato", calories: 220},    
                     {id: 3,name: "corn", calories: 210},
                     {id : 4,name: "ice", calories: 290},
                     {id : 5, name: "pumpkin", calories:200}
                    ];

  return(
    <>
      {fruits.length > 0 ? <List items = {fruits} category = "Fruits"></List> : null}
      {vegetables.length > 0 ? <List items = {vegetables}></List> : null} {/*not passing category, so it will take the default one then.*/}
    </>
          
  );
}

export default App
