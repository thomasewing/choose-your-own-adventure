import {Link} from 'react-router-dom';

const About =(props)=>{
    return(
        <div>
            <h1 style ={{color:"blue"}}>
            Level 2: 2nd Tier Clearance Required
            </h1>
            <p>
            <Link to={"/"}>Go back To Level 1</Link>
            </p>
            <p>
            <Link to={"/forceNextLevel"}>Press Forward</Link>
            </p>
        </div>
    )
}

export default About;