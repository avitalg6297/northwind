import "./RandomImage.css";
import produceSource from '../../../Assets/Images/food.jpg'
import candySource from '../../../Assets/Images/candy.png'
import cheeseSource from '../../../Assets/Images/cheese.jpg'
import fishAndChipsSource from '../../../Assets/Images/fishAndChips.jpeg'
import fruitsSource from '../../../Assets/Images/fruits.jpg'
import candiesSource from '../../../Assets/Images/candies.jpg'
import beveragesSource from '../../../Assets/Images/beverages.jpg'
import { useEffect, useState } from "react";

function RandomImage(): JSX.Element {

    const food = [];
    food.push({ id: 1, subject: "Fruits", image: fruitsSource })
    food.push({ id: 2, subject: "Cheese", image: cheeseSource })
    food.push({ id: 3, subject: "Fish And Chips", image: fishAndChipsSource })
    food.push({ id: 4, subject: "Candies", image: candiesSource })
    food.push({ id: 5, subject: "Beverages", image: beveragesSource })

    const [imageSource, setImageSource] = useState<number>(1);

    useEffect(() => {
        const timerId = window.setInterval(() => {
            const imageNumber = Math.floor(Math.random() * 5) + 1;
            setImageSource(imageNumber);
        }, 3000);

        return () => { clearInterval(timerId) }; // Invoke when component destroyed
    }, [])


    function getImageInPlace(): void {
        {
            // food.map(() => {
            //     if()

            // })
        }
    }


    return (
        <div className="RandomImage">
            {/* <img src={ } /> */}
        </div>
    );
}

export default RandomImage;
