import React from 'react';
import './HeaderButton.css';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Add any custom props here
  icon?: React.ReactNode;
}

const HeaderButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <div className="group relative">
      <button className='btn' {...props}>
        <div className='inner text-neutral-800 dark:text-neutral-200 '>
          {children}
        </div>
      </button>
    </div>
  );
}

export default HeaderButton;