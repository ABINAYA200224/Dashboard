import React from "react";
import uidashboard from "../assets/images/uidashboard.png";
import arrowmark from "../assets/images/arrowmark.png";
function Uidashboard() {
  return (
    <div className="mt-[20px] ml-[10px]">
      <div className="flex">
        <div className="w-[922px] h-[290.5px] bg-[#fff] rounded-2xl">
          <div className="flex w-[100%]  ">
            <div className="w-[50%] mx-[10px] my-[10px]">
              <div className="flex flex-col gap-[10.25rem]">
                <div>
                  <div>
                    <p className="text-[12px] font-bold text-[#A0AEC0]">
                      Built by developers
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[18px] font-bold text-[#2D3748]">
                      Purity Ui Dashboard
                    </h1>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[#A0AEC0] w-[314px]">
                      From colors,cards,typography to complex elements,you will
                      find the full documentation.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-[5px]">
                    <div>
                      <p className="text-[12px] font-bold text-[#2D3748]">
                        Read more
                      </p>
                    </div>
                    <div className="flex justify-center items-center ">
                      <img src={arrowmark} className="w-[12px] h-[12px]"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] flex justify-center m-auto h-[290px] items-center">
              <img src={uidashboard} className="w-[350px] h-[250px]"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uidashboard;
