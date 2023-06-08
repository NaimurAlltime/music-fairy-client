import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/image/banner/banner1.png";
import img2 from "../../../assets/image/banner/banner2.png";
import img3 from "../../../assets/image/banner/banner3.png";
import img4 from "../../../assets/image/banner/banner4.png";

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="md:flex flex-row-reverse items-center gap-12 mb-5">
            <img src={img1} alt="" />
            <div>
              <h3 className="text-5xl font-bold">Bing Music To Live</h3>
              <h5 className="mt-3 text-3xl font-semibold">Start Today</h5>
              <p className="mt-3">
                We have talented and very experienced instructors
                <br />
                who teach piano, violin, guitar, cello
                <br />
                and other instruments.
              </p>
              <button className="btn bg-[#333] text-white mt-5">
                Start Learning
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex flex-row-reverse items-center gap-7">
            <img src={img2} alt="" />
            <div className="">
              <h3 className="text-5xl font-bold">Music is Your World</h3>
              <h5 className="mt-3 text-3xl font-semibold">
                Do not miss a chance
              </h5>
              <p className="mt-3">
                We have talented and very experienced instructors
                <br />
                who teach piano, violin, guitar, cello
                <br />
                and other instruments.
              </p>
              <button className="btn bg-[#333] text-white mt-5">
                Start Learning
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex flex-row-reverse items-center gap-10">
            <img src={img3} alt="" />
            <div className="">
              <h3 className="text-5xl font-bold">Music For Everyone</h3>
              <h5 className="mt-3 text-3xl font-semibold">
                Awaken Possibility
              </h5>
              <p className="mt-3">
                We have talented and very experienced
                <br />
                instructors who teach piano, violin,
                <br />
                guitar, cello and other instruments.
              </p>
              <button className="btn bg-[#333] text-white mt-5">
                Start Learning
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex flex-row-reverse items-center gap-12">
            <img src={img4} alt="" />
            <div className="">
              <h3 className="text-5xl font-bold">Start With a Note</h3>
              <h5 className="mt-3 text-3xl font-semibold">Awaken posibility</h5>
              <p className="mt-3">
                We have talented and very experienced instructors
                <br />
                who teach piano, violin, guitar, cello
                <br />
                and other instruments.
              </p>
              <button className="btn bg-[#333] text-white mt-5">
                Start Learning
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
