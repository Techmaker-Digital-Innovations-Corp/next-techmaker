import React from 'react';

import {
  AiFillCheckCircle,
  AiFillInfoCircle,
  AiFillExclamationCircle,
} from 'react-icons/ai';
import { HiX } from 'react-icons/hi';

export default function AlertTemplate({ style, options, message, close }) {
  return (
    <div
      style={style}
      className={`bg-white rounded-lg border-t-2 sm:border-l-2 sm:border-t-0 flex items-center space-x-4 px-4 py-4 shadow-lg
        ${options.type === 'info' && 'border-blue-500'}
        ${options.type === 'success' && 'border-green-500'}
        ${options.type === 'error' && 'border-red-500'}
      `}
    >
      {options.type === 'info' && (
        <AiFillInfoCircle className={`h-6 w-6 text-blue-500`} />
      )}
      {options.type === 'success' && (
        <AiFillCheckCircle className={`h-6 w-6 text-green-500`} />
      )}
      {options.type === 'error' && (
        <AiFillExclamationCircle className={`h-6 w-6 text-red-500`} />
      )}
      <div className="w-full">
        <div className="font-medium leading-tight text-gray-700">
          {options.type === 'info' && 'Info'}
          {options.type === 'success' && 'Success'}
          {options.type === 'error' && 'Error'}
        </div>
        <div className="text-xs leading-tight text-gray-500">{message}</div>
      </div>
      <button onClick={close} className="active:transform active:scale-125">
        <HiX className="h-4 w-4 text-gray-500" />
      </button>
    </div>
  );
}
