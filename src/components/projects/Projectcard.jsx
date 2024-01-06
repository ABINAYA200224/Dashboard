import React from "react";
import endline from '../../assets/images/endline.png'
function Projectcard({compani_img1,compani_name,members_img,percentage, completion,amount}) {
  return (
    <div className=" flex flex-col gap-[10px]">
        {/* <div className="flex col justify-center items-center m-auto">
        <div className="flex gap-[18rem]">
        <div className="flex gap-[10px]">
          <div>
            <img src={compani_img1} className="w-[20px] h-[19.5px]"></img>
          </div>
          <div className="">
            <p className="text-[14px] font-bold text-[#2D3748]">
            {compani_name}
            </p>
          </div>
        </div>
        <div className="flex gap-[6rem]">
          <div className="flex justify-start items-center ">
            <img src={members_img} className="w-[74px] h-[23px]"></img>
          </div>
          <div>
            <p className="text-[14px] font-bold text-[#2D3748]">{amount}</p>
          </div>
          <div>
            <div className="text-[#4FD1C5] text-[14px] font-bold">
              <p>{percentage}</p>
            </div>
            <div>
              <img src={completion} className=" w-[125px] h-[3px]"></img>
            </div>
          </div>
        </div>

      </div>
        </div>
      
      <div className="flex justify-center items-center m-auto">
        <img src={endline} className="w-[57rem]"></img>
      </div> */}
       <table class="table-auto">
    <thead>
      <tr>
        <th class="border px-4 py-2"><div className="flex gap-[10px]">
          <div>
            <img src={compani_img1} className="w-[20px] h-[19.5px]"></img>
          </div>
          <div className="">
            <p className="text-[14px] font-bold text-[#2D3748]">
            {compani_name}
            </p>
          </div>
        </div></th>
        <th class="border px-4 py-2"><div className="flex justify-start items-center ">
            <img src={members_img} className="w-[74px] h-[23px]"></img>
          </div></th>
        <th class="border px-4 py-2"><div>
            <p className="text-[14px] font-bold text-[#2D3748]">{amount}</p>
          </div>
          </th>
        <th class="border px-4 py-2"><div>
            <div className="text-[#4FD1C5] text-[14px] font-bold">
              <p>{percentage}</p>
            </div>
            <div>
              <img src={completion} className=" w-[125px] h-[3px]"></img>
            </div>
          </div></th>
       
      </tr>
    </thead>
    <tbody>
      {/* <!-- Row 1 --> */}
      <tr>
       
      </tr>
      
     
    </tbody>
  </table>

    </div>
  );
}

export default Projectcard;
