import {Link} from 'react-router-dom';

const PickUpSword =(props)=>{
    return(
        <div>
            <h1 style ={{color:"blue"}}>
            You reach down to pick up the ornate broadsword..
            </h1>
            <p>It is heavier in your hand than it looks.  As you inspect it you hear a rapidly loudening trample from behind the only door in the room; the TROLLUSK bursts into the room! In your last moments, you see only it's gnashing teeth, dripping with horey saliva in anticipation of the meal whenced unknowingly summoned it..</p>
            <p>
            <Link to={"/"}>Start Over</Link>
            </p>
        </div>
    )
}

export default PickUpSword;