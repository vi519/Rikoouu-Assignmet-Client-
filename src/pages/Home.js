import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPrice } from "../redux/actions";

function Home() {
  let dispatch = useDispatch();
  const { prices } = useSelector((state) => state.prices);

  useEffect(() => {
    dispatch(loadPrice());
  }, []);

  console.log("value of API", prices);

  return (
    <div>
      <div className="flex flex-row  justify-between ">
        <div class="flex mt-4 ">
          <div class="flex-none  text-center outline  outline-1 rounded-full px-2  ">
            on Sale
          </div>
          <div class="flex-none outline-offset-2 outline-1 rounded-full px-6 mx-4 bg-gray-200">
            All
          </div>
        </div>

        <div class="flex py-4 ">
          <div className=" px-2 border rounded-lg">Higher Prices ▼</div>
        </div>
      </div>
      <div class="min-h-screen flex items-center justify-center">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          {prices?.length > 0 &&
            prices.map((dollarprice) => (
              <div>
              <div className="box-border h-32 w-32 p-4 border-4"></div>
              <div class=" flex">
  <img src="https://lh3.googleusercontent.com/Natb1gD6hS-ANc79rfI_9RomG9cOVtVs3oR6QDW9FQ_SlakHb0QU3fBPbXsU1aMf4tQa=s85" className="w-8 h-8 mt-2"/>
 <p className="mt-2 px-2">
  
 <span >Creator </span>
 <br />
 <span>Art Title Something</span>
 <br /> 
 <strong>{dollarprice.price}</strong>

   </p> 


 
   

 



</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
