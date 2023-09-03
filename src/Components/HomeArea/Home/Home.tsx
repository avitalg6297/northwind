import "./Home.css";
import produceSource from '../../../Assets/Images/food.jpg'
import candySource from '../../../Assets/Images/candy.png'

function Home(): JSX.Element {

    // gets the data from the server
    const desserts = [
        { id:1 , name:"Ice cream" , price:10},
        { id:2 , name:"Eclair", price:15},
        { id:3 , name:"Apple pie", price:20},
        { id:4 , name:"Pavlova", price:5}
    ];

    const imageNumber = Math.floor(Math.random() * 2) + 1;
    const now = new Date();
    const day = now.getDay();


    // conditional rendering- fifth way
    // if (imageNumber === 1) {
    //     return (
    //         <div>
    //             < img src={produceSource} />
    //         </div>
    //     );
    // }
    return (
        <div className="Home">

            { /*Conditional rendering first way - */}
            <img src={ imageNumber === 1 ? produceSource : candySource} />
            <br/>

            {desserts.map(d =><span key={d.id}>{d.name} {d.price}🤍</span>)}

            {/* Conditional rendering second way */}
            {/* {imageNumber === 1 ? <img src = {produceSource} /> :  < img src = {candySource} />} */}

            {/* Conditional rendering third way */}
            {/* {imageNumber === 1 && <img src={produceSource} />}
            {imageNumber === 2 && <img src={candySource} />} */}

            {/* Conditional rendering fourth way */}
            {/* {imageNumber === 1 || <img src={produceSource} />}
            {imageNumber === 2 || <img src={candySource} />} */}

            {/* <img src={candySource} /> */}
            <br></br>
            {(day <= 4 && day >=0) ? <p>week day</p> : <p>weekend</p>}

            

        </div>
    );
}

export default Home;
