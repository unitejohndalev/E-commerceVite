import React, { useContext, useEffect, useRef, useState } from "react";

//import react icons
import { PiBagThin, PiHeartThin } from "react-icons/pi";

//import link
import { Link } from "react-router-dom";

//logo
import Logo from "./img/logo.png";

//import cart context to get itemAmount function for cart button
import { CartContext } from "../contexts/CartContext";

import { FavoriteContext } from "../contexts/FavoriteContext";

//import img for icons
import hatsIcon from "./img/nobg_icons/hats.svg";
import clothsIcon from "./img/nobg_icons/cloths.svg";
import shoesIcon from "./img/nobg_icons/shoes.svg";
import bagsIcon from "./img/nobg_icons/bags.svg";
import accesIcon from "./img/nobg_icons/acces.svg";
import featureIcon from "./img/nobg_icons/feature.svg";
import offIcon from "./img/nobg_icons/off.svg";
import aboutIcon from "./img/nobg_icons/about.svg";

//import allsearchproductinfosmain lol ang haba
import AllSearchProductInfosMain from "./searchpage/AllSearchProductInfosMain";

// import material-tailwind components
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

//import hero icons
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ProductContext } from "../contexts/ProductContext";

//import react icons

import Login from "./Login";

const navListMenuItems = [
  {
    icon: hatsIcon,
    title: "Hats",
    link: "/hatproducts",
    description: "Your favorite hats, with brand new products every week.",
  },
  {
    icon: shoesIcon,

    title: "Shoes",
    link: "/shoeproducts",
    description: "Your favorite shoes, with brand new products every week.",
  },
  {
    icon: clothsIcon,
    title: "Clothing",
    link: "/clothingproducts",
    description: "Your favorite clothes, with brand new products every week.",
  },

  {
    icon: bagsIcon,
    title: "Bags",
    link: "/bagproducts",
    description: "Your favorite bags, with brand new products every week.",
  },
  {
    icon: accesIcon,
    title: "Accessories",
    link: "/accessoriesproducts",
    description:
      "Your favorite accessories, with brand new products every week.",
  },
  {
    icon: featureIcon,
    title: "Feature Products",
    link: "/featureproducts",
    description: "Discover our most popular products.",
  },
  {
    icon: offIcon,
    title: "Off Products",
    link: "/offproducts",
    description: "Check out our discounted products.",
  },
  {
    icon: aboutIcon,
    title: "About us",
    link: "/aboutus",
    description: "Learn about our story and our mission statement.",
  },
];

function NavListMenu() {
  //menu state
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  //mobile nav state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const { hideToggle } = useContext(ProductContext);

  //map navListMenuItems
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      <Link to={link} key={key} className="" onClick={hideToggle}>
        <MenuItem className="flex gap-3 rounded-sm relative shadow-sm">
          <div className="rounded-sm hidden md:flex">
            <img
              src={icon}
              className="min-h-[10vh] max-w-[25vw] md:max-h-[25vh] md:max-w-[10vw] lg:max-h-[100px] lg:max-w-[90px]"
              alt=""
            />
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm "
            >
              <span className="font-bold md:font-semibold font-montserrat">
                {title}
              </span>
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="font-normal mt-1"
            >
              <span className="font-montserrat"> {description}</span>
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
        className=""
      >
        <MenuHandler className="ml-5">
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 !rounded-sm"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <p className="font-montserrat font-medium">Shop now</p>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className=" hidden lg:block mt-2 w-[100%] bg-transparent  shadow-none border-none  ">
          <ul className="grid grid-cols-4 gap-y-2 w-[80%] m-auto rounded-sm shadow-md bg-white p-2 ">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden ">
        <Collapse open={isMobileMenuOpen}>
          <div className="h-[55vh] overflow-auto no-scrollbar ">
            {renderItems}
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
      <NavListMenu />
    </List>
  );
}

const Nav = () => {
  //state for on scroll down hide nav and onscroll up show nav
  const [scrollDirection, setScrollDirection] = useState(null);

  //handle side effect for scroll up and down
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);
  //useContext for CartContext
  const { itemAmount } = useContext(CartContext);

  const { openNav, setOpenNav } = useContext(ProductContext);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, [setOpenNav]);

  //login state for desktop
  const [logInShow, setLogInShow] = useState();

  //button function for desktop
  const toggle = () => {
    setLogInShow((prevLogInShow) => !prevLogInShow);
  };

  //LogIn ref for desktop
  let LogInRef = useRef();

  //login handle side effects for desktop
  useEffect(() => {
    document.addEventListener(
      "mousedown",
      (e) => {
        if (!LogInRef.current.contains(e.target)) {
          setLogInShow(false);
        }
      },
      []
    );
    document.removeEventListener("mousedown", (e) => {
      if (!LogInRef.current.contains(e.target)) {
        setLogInShow(false);
      }
    });
  });

  //login state for mobile
  const [logInMobileShow, setLogInMobileShow] = useState();

  //button function for mobile
  const toggleMobile = () => {
    setLogInMobileShow((prevLogInShow) => !prevLogInShow);
  };

  //LogIn ref for mobile
  let LogInMobileRef = useRef();

  //login handle side effects for mobile
  useEffect(() => {
    document.removeEventListener("mousedown", (e) => {
      if (!LogInMobileRef.current.contains(e.target)) {
        setLogInMobileShow(false);
      }
    });
  });

  {
    /*Register Toggle */
  }

  //reg state for desktop
  const [regShow, setRegShow] = useState();

  //button function for desktop
  const toggleReg = () => {
    setRegShow((prevRegShow) => !prevRegShow);
  };

  //Reg ref for desktop
  let registerRef = useRef();

  //Reg handle side effects for desktop
  useEffect(() => {
    document.removeEventListener(
      "mousedown",
      (e) => {
        if (!registerRef.current.contains(e.target)) {
          setRegShow(false);
        }
      },
      []
    );
  });

  //Reg state for mobile
  const [regMobileShow, setRegMobileShow] = useState();

  //button function for mobile
  const toggleMobileReg = () => {
    setRegMobileShow((prevRegShow) => !prevRegShow);
  };

  //LogIn ref for mobile
  let regMobileRef = useRef();

  //login handle side effects for mobile
  useEffect(() => {
    document.removeEventListener(
      "mousedown",
      (e) => {
        if (!regMobileRef.current.contains(e.target)) {
          setRegMobileShow(false);
        }
      },
      []
    );
  });

  const { favorite } = useContext(FavoriteContext);

  return (
    <div className="flex justify-center relative">
      <Navbar
        className={`fixed ${
          scrollDirection === "down" ? "-top-24" : "top-0"
        }  px-4 py-2 z-20 transition-all duration-500 !max-w-[100%]
        !rounded-none rel p-0`}
      >
        <div className="flex items-center text-blue-gray-900 relative w-[100%] ">
          <Typography
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:mr-10 xl:mr-15"
          >
            <Link to={"/"}>
              <div className=" grid-cols-3 flex ml-2 md:ml-5 items-center justify-between ">
                <img className="w-auto h-12 md:h-14 " src={Logo} alt="Logo" />
                <span className="hidden md:flex font-primary py-4 text-lg text-gray-900 dark:text-white justify">
                  <p className="text-[2rem] font-montserrat font-light">
                    Shoppy
                  </p>
                </span>
              </div>
            </Link>
          </Typography>

          <div className="flex items-center justify-center w-[100%] md:justify-normal lg:w-[65vw] xl:w-[50vw] lg:justify-between lg:gap-x-20 xl:relative xl:left-[300px]  ">
            {/* search bar */}
            <AllSearchProductInfosMain />
            <div className="hidden lg:block">
              <NavList />
            </div>
          </div>

          <Link
            to={"/yourcart"}
            className="absolute right-[60px] md:right-[100px] xl:right-[80px] flex justify-center "
          >
            {itemAmount > 0 ? (
              <div
                className="bg-red-500 absolute -right-2 top-0 text-[12px]
            w-[18px] h-[18px] text-white rounded-full flex justify-center
            items-center"
              >
                {itemAmount}
              </div>
            ) : (
              <div></div>
            )}
            <div className="text-[2rem]">
              <PiBagThin />
            </div>
          </Link>
          {/* fav icon */}
          <Link
            to={"/allfavorite"}
            className="absolute right-[50px] xl:right-[30px] hidden md:flex justify-center "
          >
            {favorite.length > 0 ? (
              <div
                className="bg-red-800 absolute right-0 top-1 text-[12px]
            w-[10px] h-[10px] text-white rounded-full flex justify-center
            items-center"
              ></div>
            ) : (
              <div></div>
            )}
            <div className="text-[2rem]">
              <PiHeartThin />
            </div>
          </Link>

          {/*Log in Toggle Button */}

          <div className="hidden gap-2 lg:flex justify-center items-center ">
            <div ref={LogInRef} className="absolute lg:right-[150px]">
              <Button
                variant="text"
                size="sm"
                color="blue-gray"
                onClick={toggle}
                className="!rounded-sm"
              >
                Log in
              </Button>
              <div className="relative">
                {logInShow && (
                  <div className=" fixed flex  left-0   w-[100%] h-[500px]  justify-center items-center ">
                    <Login />
                  </div>
                )}
              </div>
            </div>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden !bg-transparent !absolute right-0 !rounded-sm"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>

        <Collapse open={openNav} className="">
          <NavList />
          <div className=" flex w-full flex-nowrap items-center gap-2 lg:hidden ">
            <div className=" w-[100%]">
              <div ref={LogInMobileRef}>
                <Button
                  onClick={toggleMobile}
                  variant="outlined"
                  size="sm"
                  color="blue-gray"
                  className="w-[100%]"
                >
                  Login
                </Button>
                <div className="relative">
                  {logInMobileShow && (
                    <div className="fixed left-0 w-[100%] h-[500px] flex justify-center items-center border-solid ">
                      <div className="  w-[50%] max-w-[500px] h-[80%] flex justify-center items-center">
                        <Login />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
