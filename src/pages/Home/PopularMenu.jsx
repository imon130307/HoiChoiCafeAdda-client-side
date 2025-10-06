import { Link } from "react-router";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import MenuItem from "../shared/MenuItem/MenuItem";

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
        {menu?.map((menuitem, index) => (
          <MenuItem item={menuitem} key={index} />
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
