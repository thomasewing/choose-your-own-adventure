import {Link} from 'react-router-dom'

function Home(props) {
    return (
        <div>
            <h1 style={{ color: "red" }}>
                Level 1: General Access
            </h1>
            <p><Link to={"/about"}>Go To Level 2</Link></p>
            <p><Link to={"/look"}>Look around</Link></p>
        </div>
    );
}

export default Home;