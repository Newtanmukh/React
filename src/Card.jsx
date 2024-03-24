import profilePic from './assets/ryangosling.jpeg';


function Card(){
    return(
        <div className="card">
            <img className = "card-image" src = {profilePic} alt="Profile Picture"></img>
            <h2 className='card-title'>Ryan Gosling</h2>
            <p className='card-text'>Ryan Thomas Gosling is a Canadian actor who has appeared in numerous independent films and major studio features. His films have grossed of over $1.9 billion worldwide, and he has received various accolades, including a Golden Globe Award, and has been nominated for three Academy Awards and two BAFTAs.</p>
        </div>
    );
    }

export default Card;