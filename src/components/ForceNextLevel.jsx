import {Link} from 'react-router-dom';

function ForceNextLevel(props) {
    return (
        <div>
            <h1 style={{ color: "purple" }}>
                Choose your fate:
            </h1>
            <p style={{color:"blue"}}>
            <Link to={"/death"}>Battle Trollusk</Link>
            </p>
            <p style={{color:"red"}}>
            <Link to={"/levelthree"}>Battle Warzid</Link>
            </p>
        </div>
    );
}

export default ForceNextLevel;