import RestaurantCard from "./RestaurantCard";
import { ResList } from "./Utils/MockData";

let listOfRestaurants = [{
    "info": {
        "id": "518651",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_518651.JPG",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.4,
        "sla": {
          "deliveryTime": 24,
        }
        },

    "info": {
        "id": "518652",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_518651.JPG",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 3.4,
        "sla": {
          "deliveryTime": 24,
        }
        },
        "info": {
        "id": "518653",
        "name": "Dominos",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_518651.JPG",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 2.4,
        "sla": {
          "deliveryTime": 24,
        }
        },
        "info": {
        "id": "518654",
        "name": "Ghar Ka Khaana",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_518651.JPG",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.6,
        "sla": {
          "deliveryTime": 24,
        }
        }
}
]

const Body = ()=>(
    <div className="body">
        <div className = "filter"> 
            <button className="filter-btn" onClick={()=>{
                // filter logic here
                listOfRestaurants = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                console.log(listOfRestaurants)
            }}> Top Rated Restaurants</button> 
        </div>
        
        <div className="res-container">
            {listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))}         
        </div>
    </div>
);

export default Body