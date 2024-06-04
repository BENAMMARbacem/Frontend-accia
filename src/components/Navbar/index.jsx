import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  Avatar,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

import {
  UserCircleIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
  Cog6ToothIcon,
  PowerIcon,
  Bars2Icon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  HomeIcon,
  BookOpenIcon,
  DocumentDuplicateIcon,
  TicketIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import {
  MobileNav,
  CodeBracketSquareIcon,
  CubeTransparentIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
} from "@material-tailwind/react";

import { Text } from "components";
import { Link } from "react-router-dom";
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
    <a href={url} key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
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
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 flex rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              Bibliothèque{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="bg-gray-50 hidden overflow-visible grid ml-4">
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}
// // profile menu component
// const profileMenuItems = [
//   {
//     label: "My Profile",
//     icon: UserCircleIcon,
//   },
//   {
//     label: "Edit Profile",
//     icon: Cog6ToothIcon,
//     href: "editProfilePage",
//   },

//   {
//     label: "Sign Out",
//     icon: PowerIcon,
//     href:"/about"
//   },
// ];

// function ProfileMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
//       <MenuHandler>
//         <Button
//           variant="text"
//           color="blue-gray"
//           className="flex items-center gap-1  py-0.5 pr-2 pl-0.5 "
//         >
//           <Avatar
//             variant="circular"
//             size="sm"
//             alt="tania andrew"
//             className="border border-gray-900 p-0.5"
//             src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//           />
//           <ChevronDownIcon
//             strokeWidth={2.5}
//             className={`h-3 w-3 transition-transform ${
//               isMenuOpen ? "rotate-180" : ""
//             }`}
//           />
//         </Button>
//       </MenuHandler>
//       <MenuList className="p-1 bg-white-A700">
//         {profileMenuItems.map(({ label, icon, href }, key) => {
//           const isLastItem = key === profileMenuItems.length - 1;
//           return (
//             <MenuItem
//               key={label}
//               onClick={closeMenu}
//               className={`flex items-center gap-2  ${
//                 isLastItem
//                   ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
//                   : ""
//               }`}
//             >
//               {React.createElement(icon, {
//                 className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
//                 strokeWidth: 2,
//               })}

//               <Typography
//                 as="span"
//                 variant="small"
//                 className="font-normal"
//                 color={isLastItem ? "red" : "inherit"}
//               >
//                 {label}
//               </Typography>
//             </MenuItem>
//           );
//         })}
//       </MenuList>
//     </Menu>
//   );
// }
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    href: "editProfilePage",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    href: "logout",
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

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
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
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
              onClick={closeMenu}
              className={`flex items-center gap-2 ${
                isLastItem
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
    label: "Bibliothèque",
    icon: BookOpenIcon,
    href: "library",
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
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
  return (
    <>
      <Navbar className=" max-w-full p-2 rounded-none  pl-6">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center">
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className=""
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <Text size={19}>Accia</Text>
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
