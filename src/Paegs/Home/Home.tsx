import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import shop1 from "../../assets/shop1.jpeg";
import shop5 from "../../assets/shop5.jpeg";
import shop4 from "../../assets/shop4.jpg";
import Categories from "../Categories/Categories.";
import AllProducts from "../AllProducts/AllProducts";
import red from "../../assets/red.jpg";
import AboutUs from "../AboutUs/AboutUs";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta name="Home page" content="Home" />
        <title>Home page</title>
      </Helmet>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="mb-24">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-14">
              Welcome to Our Shop
            </h1>
            <div className="py-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-8 rounded-lg overflow-hidden shadow-lg">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={false} // Remove navigation buttons
                    className="mySwiper"
                    loop={true}
                  >
                    <SwiperSlide>
                      <img
                        src={red}
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-xl"
                        alt="Slide 1"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={shop4}
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-md"
                        alt="Slide 2"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={shop5}
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-md"
                        alt="Slide 3"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={shop4}
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-md"
                        alt="Slide 4"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="col-span-12 lg:col-span-4 space-y-4">
                  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <img
                      className="w-full h-[250px] object-cover rounded-lg"
                      src={shop1}
                      alt="Sidebar Image 1"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <img
                      className="w-full h-[250px] object-cover rounded-lg"
                      src={shop4}
                      alt="Sidebar Image 2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <div>
            <h2 className="text-4xl font-bold text-primary text-center mb-14">
              Categories Section
            </h2>
            <Categories />
          </div>
        </div>
        {/* Products Section */}
        <section className="bg-slate-100 text-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 text-center  mb-14">
              Products Section
            </h2>
            <AllProducts />
          </div>
        </section>
        {/* About Us Section */}

        <section className="pt-24">
          <AboutUs />
        </section>

        {/* Newsletter Section */}
        <div className="container mx-auto px-4">
          <section className="bg-slate-100 p-8 mt-24 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-4 text-gray-700">
              Stay updated with our latest offers and products.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 border border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
