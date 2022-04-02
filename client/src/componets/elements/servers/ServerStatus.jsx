import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

const ServerStatus = ({ status }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'running':
                return 'text-green-300 animate animate-pulse';
            case 'stopped':
                return 'text-red-300';
            case 'installing':
            case 'starting':
                return 'text-yellow-300';
            default:
                return 'text-gray-300';
        }
    };

    return (
        <>
            <FaDotCircle
                className={`flex-shrink-0 mr-1.5 h-5 w-5 ${getStatusColor(
                    status
                )}`}
                aria-hidden="true"
            />
            <span className="truncate">
                {status[0].toUpperCase() + status.slice(1)}
            </span>
        </>
    );
};

export default ServerStatus;
