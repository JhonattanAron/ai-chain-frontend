import {
  ArrowDownIcon,
  BellIcon,
  HomeIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import MenuProfile from "../login/MenuProfile";

export default function NavBar() {
  const liStyleNavSmart =
    "flex flex-col items-center justify-center text-white";
  return (
    <>
      <div className="sm:hidden  rounded-xl m-2 bg-blue-900 shadow-xl h-[8vh] fixed bottom-0 left-0 right-0 z-10">
        <ul className="flex w-full h-full justify-around items-center p-3">
          <li>
            <a className={liStyleNavSmart} href="/home">
              <HomeIcon className="h-6 w-6 text-white" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className={liStyleNavSmart} href="/mods">
              <ArrowDownIcon className="h-6 w-6 text-white" />
              <span>Mods</span>
            </a>
          </li>
          <li>
            <a className={liStyleNavSmart} href="/home">
              <PlusCircleIcon className="h-6 w-6 text-white" />
              <span>Cell</span>
            </a>
          </li>
          <li>
            <a className={liStyleNavSmart} href="/home">
              <BellIcon className="h-6 w-6 text-white" />
              <span>Info</span>
            </a>
          </li>
          <li>
            <a className={liStyleNavSmart} href="/home">
              <UserCircleIcon className="h-6 w-6 text-white" />
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </div>
      <header className="sm:block hidden none z-40 fixed items-center w-[100%] h-16  shadow-2xl bg-transparent">
        <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div className="relative flex items-center justify-around  w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
            <a className="flex-shrink-0" href="/">
              <img
                className="w-8 h-8"
                src="https://adaptleap.com/static/media/logo.56d43073712524198c06.webp"
                alt="Workflow"
              />
            </a>
            <div className="flex items-center justify-center space-x-4">
              <a
                className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                href="/#"
              >
                Home
              </a>
              <a
                className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                href="/#"
              >
                Items
              </a>
              <a
                className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                href="/#"
              >
                Rangos
              </a>
              <a
                className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                href="/mods"
              >
                Mods
              </a>
              <a
                className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                href="/#"
              >
                Shop
              </a>
            </div>
            <MenuProfile />
          </div>
        </div>
      </header>
    </>
  );
}
