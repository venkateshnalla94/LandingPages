// import React, { Fragment } from "react";
// import NavBarG from "../NavBarG";
// import "./Catering.css";
// const Catering = () => {
//   return (
//     <Fragment>
//       <NavBarG />
//       <section id="head-section" className="mb-5">
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               <h3 className="text-center" id="herotext">
//                 Catering
//               </h3>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section id="intro-section">
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               <h3 className="text-center mb-3">About us</h3>
//               <hr id="divider" />
//               <p className="lead py-5">
//                 We specializes in all types of catering. Ranging from the basic
//                 food pick up for at least 30 people to 100% custom catering. We
//                 are equipped with the very best equipments for outdoors and our
//                 massive production line enables us to produce food for up to
//                 2000 people. Our recipes are made from scratch using the
//                 freshest of local ingredients, organic when ever possible. Meals
//                 are simple, delicious and nutritious. We always find the best
//                 ingredients and make sure everyone’s food requirements are
//                 covered in our menu selections. We have maintained the
//                 flexibility and level of personal service, which it prides
//                 itself on. We have entertained thousands of guests through
//                 evocative aromas and flavours of personalised hand manufactured
//                 cuisine all over. We present an extensive and innovative menu.
//                 that offers a truly unsurpassed range of authentic and
//                 innovative Indian vegetarian dishes, drawing from the cuisine’s
//                 of various regions of India. If you require a dish that is not
//                 listed on our menu, please do enquire and we will be happy to
//                 accommodate your requirements. We cater for clients with
//                 specific dietary requirements and can adapt our recipes to your
//                 individual tastes and preferences.{" "}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div id="plans-section" className="py-3">
//         <div class="container">
//           <div class="row p-2 text-center">
//             <div class="col-md-3 mb-2">
//               <div class="card bg-light">
//                 <div class="card-header bg-dark">
//                   <h4 class=" text-white">Express Package</h4>
//                 </div>
//                 <div class="card-body">
//                   <div class="card-title">
//                     <h3>$10.95/person</h3>
//                   </div>
//                   {/* <p class="mb-2">
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Aut, quis.
//                   </p> */}

//                   <ul class="list-group list-group-flush mb-2">
//                     <li class="list-group-item">2 Appetizers</li>
//                     <li class="list-group-item">1 Veg + 1 Non-Veg</li>
//                     <li class="list-group-item">1 Veg Entrée</li>
//                     <li class="list-group-item">1 Non-Veg Entrée</li>
//                     <li class="list-group-item">Rice / Naan</li>
//                     <li class="list-group-item">1 Dessert</li>
//                     <li class="list-group-item">Minimum 30 people</li>
//                   </ul>
//                   {/* <button class="btn btn-danger btn-block">Get it</button> */}
//                 </div>
//                 {/* <div class="card-footer">1 Year Plan</div> */}
//               </div>
//             </div>

//             <div class="col-md-3 mb-2">
//               <div class="card bg-light">
//                 <div class="card-header bg-dark">
//                   <h4 class=" text-white">Silver Package</h4>
//                 </div>
//                 <div class="card-body">
//                   <div class="card-title">
//                     <h3>$13.95/person</h3>
//                   </div>

//                   <ul class="list-group list-group-flush mb-2">
//                     <li class="list-group-item">3 Appetizers</li>
//                     <li class="list-group-item">2 Veg + 1 Non-Veg</li>
//                     <li class="list-group-item">2 Veg Entrée</li>
//                     <li class="list-group-item">1 Non-Veg Entrée</li>
//                     <li class="list-group-item">Rice / Biryani</li>
//                     <li class="list-group-item">Naan</li>
//                     <li class="list-group-item">1 Dessert</li>
//                     <li class="list-group-item">Minimum 30 people</li>
//                   </ul>
//                   {/* <button class="btn btn-danger btn-block">Get it</button> */}
//                 </div>
//                 {/* <div class="card-footer">1 Year Plan</div> */}
//               </div>
//             </div>

//             <div class="col-md-3 mb-2">
//               <div class="card bg-light">
//                 <div class="card-header bg-dark">
//                   <h4 class=" text-white">Gold Package</h4>
//                 </div>
//                 <div class="card-body">
//                   <div class="card-title">
//                     <h3>$15.95/person</h3>
//                   </div>

//                   <ul class="list-group list-group-flush mb-2">
//                     <li class="list-group-item">4 Appetizers</li>
//                     <li class="list-group-item">2 Veg + 2 Non-Veg</li>
//                     <li class="list-group-item">2 Veg Entrée</li>
//                     <li class="list-group-item">2 Non-Veg Entrée</li>
//                     <li class="list-group-item">Pulao / Biryani</li>
//                     <li class="list-group-item">Assorted Bread</li>
//                     <li class="list-group-item">1 Dessert</li>
//                     <li class="list-group-item ">Minimum 30 people</li>
//                   </ul>
//                   {/* <button class="btn btn-danger btn-block">Get it</button> */}
//                 </div>
//                 {/* <div class="card-footer">1 Year Plan</div> */}
//               </div>
//             </div>
//             <div class="col-md-3 mb-2">
//               <div class="card bg-light">
//                 <div class="card-header bg-dark">
//                   <h4 class=" text-white">Platinum Package</h4>
//                 </div>
//                 <div class="card-body">
//                   <div class="card-title">
//                     <h3>$19.95/person</h3>
//                   </div>

//                   <ul class="list-group list-group-flush mb-2">
//                     <li class="list-group-item">5 Appetizers</li>
//                     <li class="list-group-item">3 Veg + 2 Non-Veg</li>
//                     <li class="list-group-item">3 Veg Entrée</li>
//                     <li class="list-group-item">2 Non-Veg Entrée</li>
//                     <li class="list-group-item">Pulao / Biryani</li>
//                     <li class="list-group-item">Assorted Bread</li>
//                     <li class="list-group-item">2 Dessert</li>
//                     <li class="list-group-item ">Minimum 30 people</li>
//                   </ul>
//                   {/* <button class="btn btn-danger btn-block">Get it</button> */}
//                 </div>
//                 {/* <div class="card-footer">1 Year Plan</div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Catering;
