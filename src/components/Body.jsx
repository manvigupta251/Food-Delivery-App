import { ResList } from "./Utils/MockData";
import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard'; // Ensure this import is correct and the file exists
import Shimmer from "./Shimmer";

const Body = () => {

    //FIRST WAY

//   const [listOfRestaurants, setlistOfRestaurants] = useState([
//     {
//       info: {
//         id: '518651',
//         name: 'Burger King',
//         cloudinaryImageId: 'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_518651.JPG',
//         costForTwo: '₹350 for two',
//         cuisines: ['Burgers', 'American'],
//         avgRating: 4.4,
//         sla: {
//           deliveryTime: 24,
//         },
//       },
//     },
//     {
//       info: {
//         id: '518652',
//         name: 'KFC',
//         cloudinaryImageId: 'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_518651.JPG',
//         costForTwo: '₹350 for two',
//         cuisines: ['Burgers', 'American'],
//         avgRating: 3.4,
//         sla: {
//           deliveryTime: 24,
//         },
//       },
//     },
//     {
//       info: {
//         id: '518653',
//         name: 'Dominos',
//         cloudinaryImageId: 'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_518651.JPG',
//         costForTwo: '₹350 for two',
//         cuisines: ['Burgers', 'American'],
//         avgRating: 2.4,
//         sla: {
//           deliveryTime: 24,
//         },
//       },
//     },
//   ]);

    //SECOND WAY

    // const [listOfRestaurants, setlistOfRestaurants] = useState(ResList)

    //THIRD WAY -> FETCH

    const [listOfRestaurants, setlistOfRestaurants] = useState([])

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.514858060761934&lng=76.66194017976521&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
         console.log(json);
        //  setlistOfRestaurants(data?.restaurants || []);
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //SHIMMER EFFECT   &  CONDITIONAL RENDERING
    
    return (listOfRestaurants.length === 0) ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.1
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
