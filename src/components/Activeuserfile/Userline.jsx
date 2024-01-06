import React from "react";
import saleimg1 from "../../assets/images/saleimg1.png";
import saleimg2 from "../../assets/images/saleimg2.png";
import saleimg3 from "../../assets/images/saleimg3.png";
import saleimg4 from "../../assets/images/saleimg4.png";
import saleimg5 from "../../assets/images/saleimg5.png";
import saleimg6 from "../../assets/images/saleimg6.png";
import saleimg7 from "../../assets/images/saleimg7.png";
import saleimg8 from "../../assets/images/saleimg8.png";
import saleimg9 from "../../assets/images/saleimg9.png";
function Userline() {
  return (
    <div className="">
      <div className="flex gap-[50px]">
        <div className="flex flex-col gap-[15px] mt-[40px] ml-[20px]">
          <p className="text-[10px] text-[#FFFFFF] font-bold">500</p>
          <p className="text-[10px] text-[#FFFFFF] font-bold">400</p>
          <p className="text-[10px] text-[#FFFFFF] font-bold">300</p>
          <p className="text-[10px] text-[#FFFFFF] font-bold">200</p>
          <p className="text-[10px] text-[#FFFFFF] font-bold">100</p>
          <p className="text-[10px] text-[#FFFFFF] font-bold">0</p>
        </div>

        <div className="flex gap-[50px] ">
          <div  className="mt-[100px]">
            <img src={saleimg1}></img>
          </div>
          <div className="mt-[128px]" >
            <img src={saleimg2}></img>
          </div>
          <div className="mt-[158px]">
            <img src={saleimg3}></img>
          </div>
          <div className="mt-[109px]">
            <img src={saleimg4}></img>
          </div>
          <div className="mt-[46px]">
            <img src={saleimg5}></img>
          </div>
          <div className="mt-[70px]">
            <img src={saleimg6}></img>
          </div>
          <div className="mt-[52px]">
            <img src={saleimg7}></img>
          </div>
          <div className="mt-[108px]">
            <img src={saleimg8}></img>
          </div>
          <div className="mt-[146px]">
            <img src={saleimg9}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userline;
