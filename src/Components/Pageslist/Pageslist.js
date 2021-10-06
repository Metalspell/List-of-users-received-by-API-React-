// import './Pageslist.css';
// import React, { useState, useEffect } from 'react';
// let carouselOfPages;

// let count = [];

// export default function Pageslist(props) {

//   useEffect(() => {
//     for (let i = 0; i < props.amountOfPages; i++) {
//       count.push(i + 1);
//     }
//     console.log(count)
//   })

//   return (

//     <div className="carousel-of-pages">
//       {count.map((items, i) => (
//         <div onClick={selectPages} className="carousel-items" key={i}>{i+1}</div>
//       ))}
//     </div>
//   )
// }