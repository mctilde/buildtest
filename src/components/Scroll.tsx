import React, { forwardRef } from "react";

const data = [0, 1, 2, 3, 4, 5, 6, 7];

const Scroll = forwardRef<HTMLDivElement>((_, forwardedRef) => {
  return (
    <div ref={forwardedRef} className="flex bg-custom-gradient overflow-hidden font-roboto-mono">
      {data.map((v) => {
        return (
          <div key={v} className="relative whitespace-nowrap">
            <div className="flex animate-customScroll">
              <span className="mx-14 my-3 text-[#0E0E0E] text-base font-bold">
                WE'RE ON A MISSION!
              </span>
              <span className="mx-14 my-3 text-[#0E0E0E] text-base font-bold">
                WE'RE ON A MISSION!
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
});

Scroll.displayName = "CustomComponent";

export default Scroll;
