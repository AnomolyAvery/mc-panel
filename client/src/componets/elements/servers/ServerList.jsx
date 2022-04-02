import React from 'react';

import {
    FaCheckCircle,
    FaChevronRight,
    FaMailBulk,
    FaJava,
    FaDotCircle,
    FaMemory,
    FaMicrochip,
    FaFolder,
    FaUsers,
    FaNetworkWired,
} from 'react-icons/fa';
import ServerStatus from './ServerStatus';

const servers = [
    {
        id: 1,
        name: 'SMP',
        type: 'vanilla',
        status: 'running',
        memory: '1024',
        connection: {
            ip: '127.0.0.1',
            port: 25565,
        },
    },
    {
        id: 2,
        name: 'Minigames',
        type: 'paper',
        status: 'running',
        memory: '1024',
        connection: {
            ip: '127.0.0.1',
            port: 25565,
        },
    },
    {
        id: 3,
        name: 'Test',
        type: 'forge',
        status: 'stopped',
        memory: '1024',
        connection: {
            ip: '127.0.0.1',
            port: 25565,
        },
    },
];

const ServerList = () => {
    const getServerJarIcon = (type) => {
        switch (type) {
            case 'paper':
                return 'https://avatars.githubusercontent.com/u/7608950?s=200&v=4';
            case 'forge':
                return 'https://inceptum-stor.icons8.com/EUa8euxuOlqn/forge.jpg';
            case 'vanilla':
            default:
                return 'https://icons.iconarchive.com/icons/chrisl21/minecraft/512/Mycelium-icon.png';
        }
    };

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                {servers.map((server) => (
                    <li key={server.id}>
                        <a
                            href={`/servers/${server.id}`}
                            className="block hover:bg-gray-50"
                        >
                            <div className="flex items-center px-4 py-4 sm:px-6">
                                <div className="min-w-0 flex-1 flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src={getServerJarIcon(server.type)}
                                            alt=""
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1 px-4 lg:grid lg:grid-cols-2 lg:gap-4">
                                        <div>
                                            <p className="text-sm font-medium text-green-600 truncate">
                                                {server.name}
                                            </p>
                                            <p className="mt-2 flex items-center text-sm text-gray-500">
                                                <ServerStatus
                                                    status={server.status}
                                                />
                                            </p>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="mt-4 grid grid-cols-2 grid-rows-2 gap-2 items-center justify-center">
                                                <p className="text-sm text-gray-900 flex gap-1">
                                                    <FaMicrochip
                                                        className="flex-shrink-0 mr-1.5 h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                    1vCore
                                                </p>
                                                <p className="text-sm text-gray-900 flex gap-1">
                                                    <FaMemory
                                                        className="flex-shrink-0 mr-1.5 h-5 w-5 "
                                                        aria-hidden="true"
                                                    />
                                                    {server.memory} MB
                                                </p>
                                                <p className="text-sm text-gray-900 flex gap-1">
                                                    <FaFolder
                                                        className="flex-shrink-0 mr-1.5 h-5 w-5 "
                                                        aria-hidden="true"
                                                    />
                                                    {server.memory} MB
                                                </p>
                                                <p className="text-sm text-gray-900 flex gap-1">
                                                    <FaNetworkWired
                                                        className="flex-shrink-0 mr-1.5 h-5 w-5 "
                                                        aria-hidden="true"
                                                    />
                                                    {`${server.connection.ip}:${server.connection.port}`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <FaChevronRight
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServerList;
