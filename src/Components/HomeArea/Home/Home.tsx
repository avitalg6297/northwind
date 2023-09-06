import "./Home.css";
import produceSource from '../../../Assets/Images/food.jpg'
import candySource from '../../../Assets/Images/candy.png'
import cheeseSource from '../../../Assets/Images/cheese.jpg'
import fishAndChipsSource from '../../../Assets/Images/fishAndChips.jpeg'
import fruitsSource from '../../../Assets/Images/fruits.jpg'
import candiesSource from '../../../Assets/Images/candies.jpg'
import beveragesSource from '../../../Assets/Images/beverages.jpg'
import Search from "../Search/Search";
import useTitle from "../../../Utils/UseTitle";
import Orders from "../../SharedArea/Orders/Orders";

function Home(): JSX.Element {

    useTitle("Home");

    const food = [];
    food.push({ id: 1, subject: "Fruits", image:  fruitsSource  })
    food.push({ id: 2, subject: "Cheese", image:  cheeseSource  })
    food.push({ id: 3, subject: "Fish And Chips", image:  fishAndChipsSource })
    food.push({ id: 4, subject: "Candies", image: candiesSource  })
    food.push({ id: 5, subject: "Beverages", image:  beveragesSource })

    // gets the data from the server
    const desserts = [
        { id: 1, name: "Ice cream", price: 10 },
        { id: 2, name: "Eclair", price: 15 },
        { id: 3, name: "Apple pie", price: 20 },
        { id: 4, name: "Pavlova", price: 5 }
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

            <Search/>
            

            { /*Conditional rendering first way - */}
            <img src={imageNumber === 1 ? produceSource : candySource} />
            <br />

            {desserts.map(d => <span key={d.id}>{d.name} {d.price}🤍</span>)}

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
            {(day <= 4 && day >= 0) ? <p>week day</p> : <p>weekend</p>}

            <div className="Products">
            {food.map(f=> (
                <div className="Product" key={f.id}>
                    <img src={f.image} />
                    <p>{f.subject}</p>
                </div>
            ))}
            </div>

            <Orders />



        </div>
    );
}

export default Home;
