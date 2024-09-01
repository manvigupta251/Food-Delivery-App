import React from "react";
import ReactDOM from "react-dom"
import logo from './logo.png';
import './index.css'



//functional component

const Header = ()=>(
    <div className="header">
        <div className="logo-container">
        {/* <img className="logo" src="logo.png"></img> */}
        <img className="logo" src={logo} alt="Logo"></img>

        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>  
);


const RestaurantCard =(props)=>{
    const {resData} = props;
    return(
    <div className="res-card">
        
        <img className="resimg" alt="biryani" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/3334c8c2-3a17-4531-a91d-fe43776e2df1_513403.JPG"></img>
        <h3>{resData.restaurants.info.name}</h3>
        <h4>{resData.restaurants.info.cuisines.join(", ")}</h4>
        <h4>{resData.restaurants.info.avgRating} stars</h4>
        <h4>{resData.restaurants.info.sla.deliveryTime} minutes</h4>
    </div>
)};

const resObj = {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
    "restaurants": 
    {
        "info": {
            "id": "518651",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_518651.JPG",
            "name": "KFC",
            "locality": "Mohammadpur",
            "areaName": "Mission Compound",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.4,
            "parentId": "166",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },          
        }
    }           
}

const Body = ()=>(
    <div className="body">
        <div className = "search"> Search</div>
        
        <div className="res-container">
            <RestaurantCard resData={resObj}/>
            
        </div>
    </div>

);

const AppLayout = ()=>(
    <div className="app">
        <Header/>
        <Body/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)



  
