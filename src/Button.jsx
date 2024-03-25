
function Button(){


    // ## Paramaters passing to Button.
    // const handleClick = () => console.log("OUCH");
    

    // let count = 0;

    // const handleClickName = (name) =>{ 
    //                             if(count<3){
    //                                 count++;
    //                                 console.log(`${name} you clicked me ${count}`)
    //                             }
    //                             else{
    //                                 console.log(`${name} stop clicking me.`);
    //                             }       

    // };

    // return (<button onClick={

    //         ()=>handleClickName("BRO")
        
    //     }>
    //         Click Me</button>);


    const handleClick = (e) => {e.target.textContent = "! OUCH"};

    return (<button onDoubleClick={

            (e)=>handleClick(e)
        
        }>
            Click Me</button>);
}

export default Button;