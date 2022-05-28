import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import toast, { Toaster } from "react-hot-toast";
const Navbar = ({ user, isAuthenticated }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const logoutHandler = async () => {
    localStorage.removeItem("userToken");
    toast.success("Logout successfully");
    window.location.href = "/";
  };
  return (
    <div>
      <Disclosure
        as="nav"
        className="bg-white fixed top-0 left-0 shadow  right-0 z-50"
      >
        {({ open }) => (
          <>
            <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className=" flex-1 flex     sm:items-stretch sm:justify-start">
                  <div className="text-black  flex-shrink-0 flex items-center text-lg md:text-3xl mr-2">
                    <Link to="/">
                      <h2>onlineGURU</h2>
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center   sm:static sm:inset-auto  sm:pr-0">
                  { isAuthenticated ? (
                    <Menu as="div" className="ml- relative">
                      <div>
                        <Menu.Button className=" flex text-lg text-white ">
                          <span className="sr-only">Open user menu</span>
                          <p className="text-black shadow-lg px-2 bg-gray-200 rounded-full ">
                            {user && user.name}
                          </p>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => logoutHandler()}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <div className="mr-2">
                      <Link to="/signin">
                        <a className="md:bg-mainBaseColor md:mx-2 text-white md:px-3 md:py-2 rounded-md text-sm font-medium">
                          Sign in
                        </a>
                      </Link>
                      <span className="text-white inline-block md:hidden">
                        /
                      </span>
                      <Link to="/signup">
                        <a className="md:bg-mainBaseColor text-white md:px-3 md:py-2 rounded-md text-sm font-medium">
                          Sign up
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <Toaster />
    </div>
  );
};

export default Navbar;
