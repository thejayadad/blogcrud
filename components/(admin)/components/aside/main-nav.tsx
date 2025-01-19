'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';
import { FiImage, FiSettings } from 'react-icons/fi';

const MainNav = () => {
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/admin/${params.id}/settings`,
      label: 'Settings',
      icon: FiSettings,
      active: pathname === `/admin/${params.id}/settings`,
    },
    {
      href: `/admin/${params.id}/hero`,
      label: 'HeroBanner',
      icon: FiImage,
      active: pathname === `/admin/${params.id}/hero`,
    },
  ];
  console.log("Pathname " + pathname)
  console.log("PArams " + params.id)

  return (
    <nav className="flex flex-col ">
      {routes.map((route) => (
        <Link
          key={route.label}
          href={route.href}
          className={`flex items-center space-x-2 p-2  transition-colors ${
            route.active
              ? 'bg-primary text-gray-600 '
              : 'text-gray-600 hover:text-primary hover:bg-gray-100'
          }`}
        >
          <route.icon
            className={`text-lg transition-transform ${
              route.active ? 'text-sky-300' : 'text-gray-500'
            }`}
          />
          <span className={`hidden lg:block  text-md font-medium 
            
            ${route.active ? 'text-sky-300': 'text-gray-600'}
            `}>
            {route.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
