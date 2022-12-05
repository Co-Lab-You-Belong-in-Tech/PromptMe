import React from 'react'

export default function Button({
    type = 'submit',
    className = '',
    processing,
    children,
  }) {
    return (
      <button
        type={type}
        className={
          `items-center px-4 py-2 border bg-primary rounded-md font-semibold text-xs text-white uppercase tracking-widest transition ease-in-out duration-150 ${
            processing && 'opacity-25'
          } ` + className
        }
        disabled={processing}
      >
        {children}
      </button>
    );
  }