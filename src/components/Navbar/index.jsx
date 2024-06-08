import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem, Avatar,
  IconButton,
  Collapse
} from "@material-tailwind/react";

import {
  UserCircleIcon,
  ChevronDownIcon, PowerIcon,
  Bars2Icon,
  Square3Stack3DIcon, HomeIcon,
  BookOpenIcon,
  DocumentDuplicateIcon,
  TicketIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  InformationCircleIcon
} from "@heroicons/react/24/solid";


import { Img, Text } from "components";
import { Link } from "react-router-dom";
import { Context } from "index";
import axios from "../../utils/index";

const navListMenuItems = [
  {
    title: "Rapport & document",
    description: "contient tous les documents et Rapport",
    url: "/library",
  },
  {
    title: "Image",
    description: "contient tous les documents et rapports",
    url: "/images",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description, url }) => (
    <a href={url} key={title} >
      <MenuItem >
        <Typography variant="h6" color="white" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="white" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-gray-900 flex rounded-full ">
              <BookOpenIcon className="h-[18px] w-[18px]  text-blue-gray-500" />{" "}
              Bibliothèque{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="bg-light_blue-900_01 hidden overflow-visible grid ml-4 " >
          <ul className="col-span-4 flex w-full flex-col gap-1 " style={{ color: "white" }}>
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}

const profileMenuItemsConnected = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    href: "editProfilePage",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

const profileMenuItemsNotConnected = [
  {
    label: "Sign in",
    icon: UserCircleIcon,
    href: "login",
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [url, setUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
  );
  const [profileMenuItems, setProfileMenuItems] = useState(
    profileMenuItemsNotConnected
  );
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("image");
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", JSON.stringify(false));
  };

  const getFileNameWithoutExtension = (filename) => {
    return filename.split(".").slice(0, -1).join(".");
  };

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const fetchProfileImage = async () => {
      const UrlPath = localStorage.getItem("image");

      if (
        UrlPath &&
        UrlPath !==
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
      ) {
        const imagePath = UrlPath.split("/").pop();
        const imageNameWithoutExtension =
          getFileNameWithoutExtension(imagePath);
        try {
          const response = await axios.get(
            `/api/admin/users/profile-image/${imageNameWithoutExtension}`
          );
          const blob = response.data;
          const file = new File([blob], "image", { type: blob.type });
          const fr = new FileReader();
          fr.onload = () => {
            setUrl(fr.result);
            setProfileMenuItems(profileMenuItemsConnected); // Update profileMenuItems after URL is set
          };
          fr.readAsDataURL(file);
        } catch (error) {
          console.error("Error fetching profile image", error);
          // Handle error (optional)
        }
      } else {
        setUrl(UrlPath);
        setProfileMenuItems(profileMenuItemsConnected);
        console.log("url path", UrlPath);
      }
    };

    if (isAuthenticated) {
      fetchProfileImage();
    } else {
      setProfileMenuItems(profileMenuItemsNotConnected);
    }
  }, [isAuthenticated]);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 py-0.5 pr-2 pl-0.5"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={url}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 bg-white-A700">
        {profileMenuItems.map(({ label, icon, href }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                closeMenu();
                if (label === "Sign Out") {
                  handleLogout();
                }
              }}
              className={`flex items-center gap-2 ${isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
                }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}

              {href ? (
                <Link to={href} className="flex items-center gap-2">
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              )}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

const navListItems = [
  {
    label: "Accueil",
    icon: HomeIcon,
    href: "/",
  },
  {
    label: "Publications",
    icon: DocumentDuplicateIcon,
    href: "posts",
  },
  {
    label: "Évènement",
    icon: TicketIcon,
    href: "eventspage",
  },
  {
    label: "Contact",
    icon: ChatBubbleOvalLeftEllipsisIcon,
    href: "contact",
  },
  {
    label: " A Propos",
    icon: InformationCircleIcon,
    href: "about",
  },
];

function NavList() {
  return (
    <ul className="mt-2  flex  gap-2 mb-0  lg:flex-col items-start">
      <NavListMenu />
      {navListItems.map(({ label, icon, href }, key) => (
        <li key={label}>
          <Link to={href} className="font-medium text-blue-gray-500">
            <MenuItem className="flex items-center gap-2 ">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              <span className="text-gray-900"> {label}</span>
            </MenuItem>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar className=" max-w-full p-2 rounded-none  pl-6">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center ml-6 lg:m-0">
            <div className="w-14 h-14 lg:w-10  lg:h-10  ">
              <Img src="images/img_image34.png" alt="banner" />
            </div>

          </div>
          <div className="lg:hidden ml-20">
            <NavList />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className=" mr-2 invisible lg:visible "
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
          <ProfileMenu />
        </div>
        <Collapse open={isNavOpen} className=" flex flex-wrap">
          <NavList />
        </Collapse>
      </Navbar>
    </>
  );
}
