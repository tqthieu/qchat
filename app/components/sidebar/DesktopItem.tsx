import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type Props = {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<Props> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(`
          group
          flex
          gap-x-3
          rounded-md
          p-3
          text-sm
          loading-6
          font-semibold
          text-gray-500
          hover:text-black
          hover:bg-gray-100
        `,
        active && 'text-black bg-gray-100'
      )}
      >
        <Icon className='h-6 w-6 shrink-0' />
        <span className='sr-only'>{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;