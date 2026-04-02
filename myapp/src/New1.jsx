// import React from "react";

// const New = ({ user }) => {
//   return (
//     <div style={{display:"flex",flexWrap:"wrap",
//     gap:"20px", flexDirection:"row"}}>
//       {user.map((item) => (
//         <div key={item.id} style={{width:"200px", }}>
//           <img
//             src={item.images[0]}
//             alt={item.title}
//             style={{ width: "50%", height: "50px", objectFit: "cover" }}
//           />
//           <p>{item.description}</p>
//           <h3>{item.title}</h3>
//           <p>
//             <span style={{ textDecoration: "line-through" }}> MRP:
//               {item.discountPercentage}
//             </span>
//             price{item.price}
//           </p>

//           <p>Category:{item.category}</p>
//           <p>Rating{item.rating}</p>
//           <p>stock{item.stock}</p>
//           <p>tags:{item.tags}</p>
//           <p>Brand{item.brand}</p>
//           <p>sku:{item.sku}</p>
//           <p>weight{item.weight}</p>
//           <p>
//             dimensions:width{item.dimensions.width} height:
//             {item.dimensions.height} depth:{item.dimensions.depth}
//           </p>
//           <p> warrantyInformation:{item.warrantyInformation}</p>
//           <p> shippingInformation:{item.shippingInformation}</p>
//           <p>availabilityStatus:{item.availabilityStatus}</p>
//           <h2>reviews</h2>
//           {item.reviews.map((data, index) => (
//             <div key={index}>
//               <p>rating:{data.rating}</p>
//               <p>comment:{data.comment}</p>
//               <p>date:{data.date}</p>
//               <p>reviewerName:{data.reviewerName}</p>
//               <p>reviewerEmail:{data.reviewerEmail}</p>
//             </div>
//           ))}
//           <p>returnPolicy:{item.returnPolicy}</p>
//           <p>minimumOrderQuantity:{item.minimumOrderQuantity}</p>
//           <h2>meta</h2>
//           <div>
//             <p>createdAt{item.meta.createdAt}</p>
//             <p>updatedAt:{item.meta.updatedAt}</p>
//             <p>barcode:{item.meta.barcode}</p>
//             <p>qrcode:{item.meta.qrcode}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default New;
import React, { useState } from "react";

const New = ({ user }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
        background: "#f5f5f5",
      }}
    >
      {user.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

const ProductCard = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "280px",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: hover
          ? "0 8px 20px rgba(0,0,0,0.2)"
          : "0 4px 10px rgba(0,0,0,0.1)",
        transform: hover ? "translateY(-8px)" : "translateY(0)",
        transition: "0.3s",
        position: "relative",
      }}
    >
      {/* IMAGE */}
      <img
        src={item.images[0]}
        alt={item.title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
        }}
      />

      {/* BASIC INFO */}
      <div style={{ padding: "12px" }}>
        <h3 style={{ margin: "5px 0" }}>{item.title}</h3>

        <p style={{ fontSize: "12px", color: "#555" }}>
          {item.description.slice(0, 60)}...
        </p>

        <p>
          <span
            style={{
              textDecoration: "line-through",
              color: "gray",
              marginRight: "8px",
            }}
          >
            ₹{Math.round(item.price + item.discountPercentage)}
          </span>

          <span style={{ color: "green", fontWeight: "bold" }}>
            ₹{item.price}
          </span>
        </p>

        <p>
          ⭐ {item.rating} | Stock: {item.stock}
        </p>
      </div>

      {/* HOVER DETAILS */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          background: "#fff",
          padding: "10px",
          fontSize: "12px",
          transform: hover ? "translateY(0)" : "translateY(100%)",
          transition: "0.3s",
          maxHeight: "200px",
          overflowY: "auto",
        }}
      >
        <p>Category: {item.category}</p>
        <p>Brand: {item.brand}</p>
        <p>SKU: {item.sku}</p>
        <p>Weight: {item.weight}</p>

        <p>
          Size: {item.dimensions.width} × {item.dimensions.height} ×{" "}
          {item.dimensions.depth}
        </p>

        <p>Warranty: {item.warrantyInformation}</p>
        <p>Shipping: {item.shippingInformation}</p>
        <p>Status: {item.availabilityStatus}</p>

        <h4>Reviews:</h4>
        {item.reviews.slice(0, 2).map((r, i) => (
          <div key={i}>
            <p>⭐ {r.rating}</p>
            <p>{r.comment}</p>
          </div>
        ))}

        <p>Return: {item.returnPolicy}</p>
        <p>Min Qty: {item.minimumOrderQuantity}</p>

        <h4>Meta:</h4>
        <p>Created: {item.meta.createdAt}</p>
        <p>Updated: {item.meta.updatedAt}</p>
      </div>
    </div>
  );
};

export default New;
