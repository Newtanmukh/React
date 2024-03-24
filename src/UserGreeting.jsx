import propTypes from 'prop-types';

function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message">
                                Welcome {props.username} 
                           </h2>;

    const loginPrompt = <h2 className="login-prompt">
                                Please LOGIN TO Continue 
                        </h2>;

    if(props.isLoggedIn){
        return welcomeMessage
    }else{
        return loginPrompt
    }
}

UserGreeting.propTypes = {
    isLoggedIn : propTypes.bool,
    username : propTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : "Guest" 
}


export default UserGreeting;