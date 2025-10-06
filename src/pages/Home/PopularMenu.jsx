import { Link } from "react-router";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="w-full p-8 sm:w-10/12 md:p-0 mx-auto my-12">
      <SectionTitle
        subheading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {menu?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center sm:flex sm:flex-row md:h-[104px] sm:items-start justify-between  rounded-lg hover:scale-105 transition-all duration-300 gap-4 md:gap-8"
          >
            <div className="rounded-bl-none rounded-full h-40 w-40 sm:h-full sm:w-24 md:h-full md:w-40 bg-[#D9D9D9] sm:rounded-full  sm:rounded-tl-none overflow-hidden ">
              <img
                src={item?.image || item?.imageUrls[0]}
                alt=""
                className="h-40 w-40 sm:h-full sm:w-24 md:h-full md:w-40 object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex sm:flex-row sm:justify-between md:justify-start ">
              <div>
                <h3 className="text-lg font-semibold new_heading_font text-center sm:text-start">
                  {item?.name}
                </h3>
                <p className="text-gray-600 text-sm text-center sm:text-start">
                  {item?.recipe.slice(0, 100) + ".."}
                </p>
              </div>
            </div>
            <div className="text-xl font-bold text-[#BB8506] text-center sm:text-start">
              ${item?.price}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to={"/menu"}
          className="px-6 py-2 text-black rounded-2xl border-b-4 border-black"
        >
          View Full Menu
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
