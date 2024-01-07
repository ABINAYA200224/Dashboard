import React from "react";
import endline from "../../assets/images/endline.png";
function Projectcard2() {
  return (
    <div className="flex flex-col gap-[10px]">
      <div>
        <table class="">
          <thead>
            <tr>
              <th class="  w-[400px] flex justify-start">
                <p className="text-[#A0AEC0] text-[12px] font-bold">
                  COMPANIES
                </p>
              </th>
              <th class=" w-[160px]  ">
                <p className="text-[#A0AEC0] text-[12px] font-bold flex justify-start">
                  MEMBERS
                </p>
              </th>
              <th class="  w-[139px]  ">
                <p className="text-[#A0AEC0] text-[12px] font-bold">BUDGET</p>
              </th>
              <th class="  w-[157px] ">
                <p className="text-[#A0AEC0] text-[12px] font-bold flex justify-start ml-[75px]">
                  COMPLETION
                </p>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div>
        <img src={endline} className="w-[910px]"></img>
      </div>
    </div>
  );
}

export default Projectcard2;
