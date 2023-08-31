import {Link} from 'react-router-dom';

function LookAround(props) {
    return (
        <div>
            <h1 style={{ color: "purple" }}>
                Items in room:
            </h1>
            <p style={{color:"orange"}}>
            <Link to={"/pickupsword"}>Pick Up The Sword</Link>
            </p>
            <p style={{color:"red"}}>
            <Link to={"/pickupwand"}>Pick Up The Wand</Link>
            </p>
        </div>
    );
}

export default LookAround;