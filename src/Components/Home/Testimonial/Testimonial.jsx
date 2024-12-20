import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "Ayesha Khan",
    grade: "Grade 9",
    text: "Tutor Linking made finding the perfect math teacher so easy—my grades have improved dramatically!",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
    rating: 5,
  },
  {
    id: 2,
    name: "Yusuf Ahmed",
    grade: "Grade 12",
    text: "Through Tutor Linking, I found the perfect chemistry tutor who helped me ace my college entrance exams.",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Fatima Khan",
    grade: "Grade 7",
    text: "My English teacher from Tutor Linking is so helpful. I enjoy learning and have improved a lot in class!",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
    rating: 5,
  },
  {
    id: 5,
    name: "Hamza Ali",
    grade: "Grade 5",
    text: "Learning with my new science tutor is exciting and fun. Thanks to Tutor Linking for the connection!",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
    rating: 4,
  },
];

const Testimonial = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            OUR TESTIMONIALS
          </h1>
          <p className="font-semibold text-3xl">
            What Our Students Say About Us
          </p>
        </div>
        {/* Testimonial cards section */}
        <div>
          <Slider {...setting}>
            {TestimonialsData.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                  {/* upper section */}
                  <div className="flex justify-start items-center gap-5">
                    <img
                      src={item.img}
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <p className="text-xl font-bold text-black/80">
                        {item.name}
                      </p>
                      <p>{item.grade}</p>
                    </div>
                  </div>
                  {/* bottom section */}
                  <div className="py-6 space-y-4">
                    <p className="text-sm text-gray-500">{item.text}</p>
                    <p>{renderStars(item.rating)}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;