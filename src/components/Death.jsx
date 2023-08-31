import {Link} from 'react-router-dom';

const Death =(props)=>{
    return(
        <div>
            <h1 style ={{color:"yellow"}}>
            !VANQUISHED!
            </h1>
            <h3>The creature has bested your meager efforts.</h3>
            <Link to={"/"}>Start Over</Link>
        </div>
    )
}

export default Death;