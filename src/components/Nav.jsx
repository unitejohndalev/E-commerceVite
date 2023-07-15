import React, { useContext, useEffect, useRef, useState } from "react";

//import react icons
import {BiShoppingBag} from 'react-icons/bi'

//import components
import SignIn from "./SignIn";

//import link
import { Link } from "react-router-dom";

//logo
import Logo from "./img/logo.png";

//import cart context to get itemAmount function for cart button
import { CartContext } from "../contexts/CartContext";



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
  Chip,
} from "@material-tailwind/react";

//import hero icons
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

//custom color
const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [
  {
    color: "teal",
    icon: FaceSmileIcon,
    title: "Hats",
    link: "/hatproducts",
    description: "Your favorite hats, with brand new products every week.",
  },
  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "Shoes",
    link: "/shoeproducts",
    description: "Your favorite shoes, with brand new products every week.",
  },
  {
    color: "orange",
    icon: ChatBubbleOvalLeftIcon,
    title: "Clothing",
    link: "/clothingproducts",
    description: "Your favorite clothes, with brand new products every week.",
  },

  {
    color: "blue-gray",
    icon: FolderIcon,
    title: "Bags",
    link: "/bagproducts",
    description: "Your favorite bags, with brand new products every week.",
  },
  {
    color: "green",
    icon: UsersIcon,
    title: "Accessories",
    link: "/accessoriesproducts",
    description: "put any description here.",
  },
  {
    color: "cyan",
    icon: PuzzlePieceIcon,
    title: "Feature Products",
    link: "/featureproducts",
    description: "Discover our most popular products.",
  },
  {
    color: "pink",
    icon: GiftIcon,
    title: "Off Products",
    link: "/offproducts",
    description: "Check out our discounted products.",
  },
  {
    color: "blue",
    icon: FlagIcon,
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

  //map navListMenuItems
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, link }, key) => (
      <Link to={link} key={key} className="">
        <MenuItem className="flex gap-3 rounded-sm ">
          <div className={`rounded-sm p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
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
        <MenuHandler className="xl:ml-20 ">
          <Typography as="div" variant="small" className="font-normal ">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 !rounded-sm"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Choices
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
      <div className="block lg:hidden  ">
        <Collapse open={isMobileMenuOpen}>
          <div className="h-[55vh] overflow-auto no-scrollbar border-solid border-2 border-red-800 ">
            {renderItems}
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
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

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

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
    document.addEventListener("mousedown", (e) => {
      if (!LogInRef.current.contains(e.target)) {
        setLogInShow(false);
      }
    });
  });

  //login state for desktop
  const [logInMobileShow, setLogInMobileShow] = useState();

  //button function for desktop
  const toggleMobile = () => {
    setLogInMobileShow((prevLogInShow) => !prevLogInShow);
  };

  //LogIn ref for mobile
  let LogInMobileRef = useRef();

  //login handle side effects for mobile
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!LogInMobileRef.current.contains(e.target)) {
        setLogInMobileShow(false);
      }
    });
  });

  return (
    <div className="flex justify-center relative">
      <Navbar
        className={`fixed ${
          scrollDirection === "down" ? "-top-24" : "top-0"
        }  px-4 py-2 z-20 transition-all duration-500 !max-w-[100%]
        !rounded-none`}
        
      >
        <div className="flex items-center text-blue-gray-900 relative w-[100%] ">
          <Typography
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-10 xl:ml-20"
          >
            <Link to={"/"}>
              <div className=" grid-cols-3 flex items-center justify-between ">
                <img className="w-auto h-14 " src={Logo} alt="Logo" />
                <span className="font-primary py-4 text-lg text-gray-900 dark:text-white justify">
                  ExpressShop
                </span>
              </div>
            </Link>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="cursor-pointer absolute right-[150px] md:right-[300px] lg:right-[350px] xl:right-[500px]">
          <Link to={"/searchproducts"}>

            <div>
              Search
            </div>
          </Link>
          </div>
          <div className="hidden gap-2 lg:flex justify-center items-center ">
            <div ref={LogInRef} className="absolute lg:right-[200px] xl:right-[350px]">
              <Button
                variant="text"
                size="sm"
                color="blue-gray"
                onClick={toggle}
                className="!rounded-sm"
              >
                Sign In
              </Button>
              <div className="relative">
                {logInShow && (
                  <div className="fixed left-0 w-[100%] h-[500px] flex justify-center items-center border-solid border-2 border-red-800 bg-white/70">
                    <div className="border-solid border-2 border-red-800 w-[50%] max-w-[500px] h-[80%] flex justify-center items-center bg-pink-400">
                      <SignIn />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Button variant="gradient" size="sm" className="absolute lg:right-[100px] xl:right-[250px] !rounded-sm">
              Sign Up
            </Button>

            <Link to={"/yourcart"} className="absolute lg:right-[20px] xl:right-[100px] flex justify-center ">
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
                
              <BiShoppingBag/>
              </div>
            </Link>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden !bg-white !absolute right-10"
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
                  Sign In
                </Button>
                <div className="relative">
                  {logInMobileShow && (
                    <div className="fixed left-0 w-[100%] h-[500px] flex justify-center items-center border-solid border-2 border-red-800 bg-white/70">
                      <div className="border-solid border-2 border-red-800 w-[50%] max-w-[500px] h-[80%] flex justify-center items-center bg-pink-400">
                        <SignIn />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Button variant="gradient" size="sm" className="w-[100%]">
              Sign Up
            </Button>
            <Link to={"/yourcart"} className="relative">
              {itemAmount > 0 ? (
                <div
                  className="bg-red-500 absolute right-0 lg:right-5  text-[12px]
            w-[18px] h-[18px] text-white rounded-full flex justify-center
            items-center"
                >
                  {itemAmount}
                </div>
              ) : (
                <div></div>
              )}
              <Button
                className="bg-white-800 text-black"
                onClick={() => setOpenNav(!openNav)}
              >
                Cart
              </Button>
            </Link>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
