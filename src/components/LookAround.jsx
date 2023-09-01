import {Link} from 'react-router-dom';

function LookAround(props) {
    return (
        <div>
            <h1 style={{ color: "grey" }}>
                Items in room:
            </h1>
            <p style={{color:'red'}}>
            <Link to={"/pickupsword"}>Pick Up The Sword</Link>
            </p>
            <p style={{color:"orange"}}>
            <Link to={"/pickupwand"}>Pick Up The Wand</Link>
            </p>
            <p style={{color:"yellow"}}>
            <Link to={"/pickupaxe"}>Pick Up The Axe</Link>
            </p>
            <p style={{color:"green"}}>
            <Link to={"/pickupbow"}>Pick Up The Bow</Link>
            </p>
            <p style={{color:"blue"}}>
            <Link to={"/pickupaxe"}>Pick Up The Axe</Link>
            </p>
            <p style={{color:"purple"}}>
            <Link to={"/pickupbag"}>Pick Up The Bag of Magick</Link>
            </p>
        </div>
    );
}

export default LookAround;