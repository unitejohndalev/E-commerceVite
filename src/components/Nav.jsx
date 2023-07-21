import React, { useContext, useEffect, useRef, useState } from "react";

//import react icons
import { BiShoppingBag } from "react-icons/bi";

//import components
import Login from "./Login";
import Register from "./Register";

//import link
import { Link } from "react-router-dom";

//logo
import Logo from "./img/logo.png";

//import cart context to get itemAmount function for cart button
import { CartContext } from "../contexts/CartContext";

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
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { ProductContext } from "../contexts/ProductContext";

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
    icon: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f205124e-309a-4098-bdaa-7f5a24278ea7/dri-fit-club-kids-unstructured-metal-swoosh-cap-MfPJz0.png",
    title: "Hats",
    link: "/hatproducts",
    description: "Your favorite hats, with brand new products every week.",
  },
  {
    color: "purple",
    icon: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/60b49213-cab7-491b-8c44-0d23309e9108/air-max-solo-mens-shoes-4SzqpT.png",
    title: "Shoes",
    link: "/shoeproducts",
    description: "Your favorite shoes, with brand new products every week.",
  },
  {
    color: "orange",
    icon: "https://lp2.hm.com/hmgoepprod?set=source[/9a/ca/9acaa9b9b2d7b542777171f23c7733ee1dba1b28.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    title: "Clothing",
    link: "/clothingproducts",
    description: "Your favorite clothes, with brand new products every week.",
  },

  {
    color: "blue-gray",
    icon: "https://michaelkors.scene7.com/is/image/MichaelKors/30S0GEZB2V-2618_1?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90",
    title: "Bags",
    link: "/bagproducts",
    description: "Your favorite bags, with brand new products every week.",
  },
  {
    color: "green",
    icon: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2112797-fcec-477c-8d09-e2b214aed47f/victory-sunglasses-PP0tbC.png",
    title: "Accessories",
    link: "/accessoriesproducts",
    description: "put any description here.",
  },
  {
    color: "cyan",
    icon: "https://michaelkors.scene7.com/is/image/MichaelKors/32S3G7PC8J-1251_1?wid=558&hei=748&op_sharpen=1&resMode=sharp2&qlt=90",
    title: "Feature Products",
    link: "/featureproducts",
    description: "Discover our most popular products.",
  },
  {
    color: "pink",
    icon: "https://lp2.hm.com/hmgoepprod?set=source[/c2/4a/c24a1071f460ace040df4209a01d57925c544b90.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    title: "Off Products",
    link: "/offproducts",
    description: "Check out our discounted products.",
  },
  {
    color: "blue",
    icon: "https://clipart-library.com/images/kcKorp5xi.jpg",
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
    ({ icon, title, description, color, link }, key) => (
      <Link to={link} key={key} className="" onClick={hideToggle}>
        <MenuItem className="flex gap-3 rounded-sm ">
          <div className={`rounded-sm  ${colors[color]}`}>
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
    document.addEventListener("mousedown", (e) => {
      if (!registerRef.current.contains(e.target)) {
        setRegShow(false);
      }
    });
  });

  //Reg state for desktop
  const [regMobileShow, setRegMobileShow] = useState();

  //button function for desktop
  const toggleMobileReg = () => {
    setRegMobileShow((prevRegShow) => !prevRegShow);
  };

  //ERROR on console, keeps accumulating so for now removed it
  //COMMENTED THIS OUT, MAKE SURE TO ASIGN ref that wraps the whole setRegMobileShow

  // //Reg ref for mobile
  // let RegMobileRef = useRef();

  // //Reg handle side effects for mobile
  // useEffect(() => {
  //   document.addEventListener("mousedown", (e) => {
  //     if (!RegMobileRef.current.contains(e?.target)) {
  //       setRegMobileShow(false);
  //     }
  //   });
  // });

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
                <span className="hidden md:flex font-primary py-4 text-lg text-gray-900 dark:text-white justify">
                  Shoppy
                </span>
              </div>
            </Link>
          </Typography>

          <div className="hidden lg:block">
            <NavList />
          </div>

          <div className="cursor-pointer w-[40%] md:w-[50%] md:ml-[50px] lg:ml-0 lg:w-[20%] xl:ml-[30px]">
            {/* search bar */}
            <AllSearchProductInfosMain />
          </div>
          <Link
            to={"/yourcart"}
            className="absolute right-[60px] lg:hidden flex justify-center "
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
              <BiShoppingBag />
            </div>
          </Link>
          {/*Log in Toggle Button */}

          <div className="hidden gap-2 lg:flex justify-center items-center ">
            <div
              ref={LogInRef}
              className="absolute lg:right-[200px] xl:right-[350px]"
            >
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
                  <div className="fixed left-0 w-[100%] h-[500px] flex justify-center items-center  mt-14 bg-transparent">
                    <Login />
                  </div>
                )}
              </div>
            </div>

            {/*Register Toggle Button */}

            <div className="hidden gap-2 lg:flex justify-center items-center ">
              <div
                ref={registerRef}
                className="absolute lg:right-[200px] xl:right-[250px] !rounded-sm"
              >
                <Button
                  variant="text"
                  size="sm"
                  color="blue-gray"
                  onClick={toggleReg}
                  className="!rounded-sm"
                >
                  Register
                </Button>
                <div className="relative">
                  {regShow && (
                    <div className="fixed left-0 w-[100%] h-[500px] flex justify-center items-center  mt-14 bg-transparent">
                      <Register />
                    </div>
                  )}
                </div>
              </div>

              <Link
                to={"/yourcart"}
                className="absolute lg:right-[20px] xl:right-[100px] flex justify-center "
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
                  <BiShoppingBag />
                </div>
              </Link>
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

            <div className=" w-[100%]">
              <div ref={registerRef}>
                <Button
                  onClick={toggleMobileReg}
                  variant="outlined"
                  size="sm"
                  color="blue-gray"
                  className="w-[100%]"
                >
                  Register
                </Button>
                <div className="relative">
                  {regMobileShow && (
                    <div className="fixed left-0 w-[100%] h-[500px] flex justify-center items-center border-solid ">
                      <div className="  w-[50%] max-w-[500px] h-[80%] flex justify-center items-center">
                        <Register />
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
