import React from "react";

function Carousel() {
  return (
    <div>
      <div className="carousel items-center w-full h-96">
        <div id="item1" className="carousel-item w-full">
          <img src="eight.jpg" className="w-full" loading="lazy" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="nine.jpg" className="w-full" loading="lazy" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="ten.jpg" className="w-full" loading="lazy" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="eleven.jpg" className="w-full" loading="lazy" />
        </div>
      </div>
      <div className="flex w-full  justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}

export default Carousel;
