import React from 'react'


function MainBtm(props) {
    return (
      <>
        <div className="main-bottom-section">
          <div className="bottom-section">
            <div className="glide">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  <li className="glide__slide image-fit">
                    <img src="/Assets/Rectangle6.png" alt />
                  </li>
                  <li className="glide__slide image-fit">
                    <img src="/Assets/Videoframe.png" alt />
                  </li>
                  <li className="glide__slide image-fit">
                    <img src="/Assets/Rectangle6.png" alt />
                  </li>
                </ul>
              </div>
              <div className="glide__arrows" data-glide-el="controls">
                <button
                  className="glide__arrow glide__arrow--left no-borders"
                  data-glide-dir="<"
                >
                  <div className="arrow-left" />
                </button>
                <button
                  className="glide__arrow glide__arrow--right no-borders"
                  data-glide-dir=">"
                >
                  <div className="arrow-right" />
                </button>
              </div>
            </div>
          </div>
          <div className="bottom-p">
            <p>Media</p>
          </div>
        </div>
      </>
    );
}



export default MainBtm

