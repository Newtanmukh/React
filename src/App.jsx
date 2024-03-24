import Student from "../public/Student";


function App() {
  return(
    <>
       <Student name="SpongeBob" age={19} isStudent={true}></Student>
       <Student name="Patrick" age={42} isStudent={false}></Student>
       <Student name="Sandy" age={90} isStudent={true}></Student>
       <Student></Student>
    </>
            
  );
}

export default App
