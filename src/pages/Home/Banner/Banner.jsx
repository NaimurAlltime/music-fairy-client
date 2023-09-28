import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero h-[65vh] md:h-[85vh]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/little-boy-sitting-music-class_236854-49970.jpg?size=626&ext=jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div>
                <h3 className="text-5xl font-bold">Bing Music To Live</h3>
                <h5 className="mt-3 text-3xl font-semibold">Start Today</h5>
                <p className="mt-3">
                  We have talented and very experienced instructors
                  <br />
                  who teach piano, violin, guitar, cello
                  <br />
                  and other instruments.
                  {/* bg-[#333] */}
                </p>
                <button className="btn btn-outline text-white mt-5">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[65vh] md:h-[85vh] object-cover"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/group-students-playing-double-bass-drum-set-piano_107420-64786.jpg?size=626&ext=jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div>
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
                <button className="btn btn-outline text-white mt-5">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[65vh] md:h-[85vh]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/happy-girls-recording-new-songs-studio-garage_274679-22634.jpg?size=626&ext=jpg)",
              objectFit: "cover",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div>
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
                <button className="btn btn-outline text-white mt-5">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[65vh] md:h-[85vh]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/group-photo-music-band-studio_279525-2519.jpg?w=900)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div>
                <h3 className="text-5xl font-bold">Start With a Note</h3>
                <h5 className="mt-3 text-3xl font-semibold">
                  Awaken posibility
                </h5>
                <p className="mt-3">
                  We have talented and very experienced instructors
                  <br />
                  who teach piano, violin, guitar, cello
                  <br />
                  and other instruments.
                </p>

                <button className="btn btn-outline text-white mt-5">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
