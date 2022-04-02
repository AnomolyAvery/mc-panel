import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import {
    FaHome,
    FaUsers,
    FaFolder,
    FaTimes,
    FaBars,
    FaTerminal,
    FaDatabase,
    FaPuzzlePiece,
    FaUsersCog,
    FaCreditCard,
} from 'react-icons/fa';
import { Link, matchPath, useLocation, useMatch } from 'react-router-dom';

const navigation = [
    { name: 'Dashboard', href: '/', icon: FaHome, current: true },
    { name: 'Subusers', href: '/subusers', icon: FaUsersCog, current: false },
    { name: 'Billing', href: '/billing', icon: FaCreditCard, current: false },
];
const serverNavigation = [
    { name: 'Console', href: '/', icon: FaTerminal, current: false },
    { name: 'Files', href: '/files', icon: FaFolder, current: false },
    { name: 'Databases', href: '/databases', icon: FaDatabase, current: false },
    { name: 'Plugins', href: '/plugins', icon: FaPuzzlePiece, current: false },
    { name: 'Players', href: '/players', icon: FaUsers, current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const AppLayout = ({ children, pageTitle }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const serverMatch = useMatch({
        path: '/servers/:id',
        end: true,
    });

    /**
     *
     * @param {String} path
     * @returns {Boolean}
     */
    const isServerActive = (path) => {
        const match = matchPath(`/servers/:id${path}`, location.pathname);

        return !!match;
    };

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 flex z-40 md:hidden"
                        onClose={setSidebarOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                        >
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                            <FaTimes
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                    <div className="flex-shrink-0 flex items-center justify-center px-4">
                                        <img
                                            className="h-16 w-auto"
                                            src={
                                                'https://i.pinimg.com/originals/d7/c8/22/d7c822375e53d05e290d862402b8f806.png'
                                            }
                                            alt="Workflow"
                                        />
                                    </div>
                                    <nav className="mt-5 px-2 space-y-1">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    isActive(item.href)
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                    'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        isActive(item.href)
                                                            ? 'text-gray-500'
                                                            : 'text-gray-400 group-hover:text-gray-500',
                                                        'mr-4 flex-shrink-0 h-6 w-6'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        ))}
                                        <div className="">
                                            <hr className="mt-3 border-b-0 border-gray-200" />
                                            <span className="px-2 py-2 mt-3 rounded-md text-base font-medium text-gray-900">
                                                Server
                                            </span>
                                        </div>
                                        {serverNavigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    isServerActive(item.href)
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                    'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        isServerActive(
                                                            item.href
                                                        )
                                                            ? 'text-gray-500'
                                                            : 'text-gray-400 group-hover:text-gray-500',
                                                        'mr-3 flex-shrink-0 h-6 w-6'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                                    <Link
                                        to="/account"
                                        className="flex-shrink-0 group block"
                                    >
                                        <div className="flex items-center">
                                            <div>
                                                <img
                                                    className="inline-block h-10 w-10 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                                                    Tom Cook
                                                </p>
                                                <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                                                    View profile
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14">
                            {/* Force sidebar to shrink to fit close icon */}
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center justify-center flex-shrink-0 px-4">
                                <img
                                    className="h-20 w-auto"
                                    src={
                                        'https://i.pinimg.com/originals/d7/c8/22/d7c822375e53d05e290d862402b8f806.png'
                                    }
                                    alt="MCPanel"
                                />
                            </div>
                            <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            isActive(item.href)
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                isActive(item.href)
                                                    ? 'text-gray-500'
                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </Link>
                                ))}
                                {/* Divider with title */}
                                <div className="mb-4">
                                    <hr className="mt-3 border-b-0 border-gray-200" />
                                    <span className="px-2 py-2 mt-3 rounded-md text-sm font-medium text-gray-900">
                                        Server
                                    </span>
                                </div>
                                {serverNavigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            isServerActive(item.href)
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                isServerActive(item.href)
                                                    ? 'text-gray-500'
                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                            <Link
                                to={'/account'}
                                className="flex-shrink-0 w-full group block"
                            >
                                <div className="flex items-center">
                                    <div>
                                        <img
                                            className="inline-block h-9 w-9 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                            Tom Cook
                                        </p>
                                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                                            View profile
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:pl-64 flex flex-col flex-1">
                    <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <FaBars className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <main className="flex-1">
                        <div className="py-6">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <h1 className="text-2xl font-semibold text-gray-900">
                                    {pageTitle ? pageTitle : 'Dashboard'}
                                </h1>
                            </div>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                {/* Replace with your content */}
                                {children}
                                {/* /End replace */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default AppLayout;
