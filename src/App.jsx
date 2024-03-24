import UserGreeting from "./UserGreeting";


function App() {
  

  return(
    <>
        <UserGreeting isLoggedIn = {true} username = "Newtan"></UserGreeting>
        <UserGreeting isLoggedIn = {false} username = "amit"></UserGreeting>
        <UserGreeting isLoggedIn = {true} ></UserGreeting>
    </>
            
  );
}

export default App
