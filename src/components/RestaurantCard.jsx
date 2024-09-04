const RestaurantCard =(props)=>{
    const {resData} = props;
    return(
    <div className="res-card">
        
        <img className="resimg" alt="pic" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}></img>
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating} stars</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
)};

export default RestaurantCard