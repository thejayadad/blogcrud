'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getWebsitesByUser } from '@/lib/actions/website/get-website';

interface Website {
  id: string;
  name: string;
}

interface Props {
  userEmail: string;
}

const StoreSwitcher = ({ userEmail }: Props) => {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        // Directly call the server function to fetch websites
        const websites = await getWebsitesByUser(userEmail);
        setWebsites(websites);
      } catch (error) {
        console.error('Failed to fetch websites:', error);
      }
    };

    fetchWebsites();
  }, [userEmail]);

  const handleWebsiteChange = (id: string) => {
    setIsOpen(false); // Close the dropdown
    router.push(`/admin/${id}`); // Redirect to the selected website
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        className="flex text-[8px] items-center justify-between w-full px-1 py-1  font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:w-auto"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Select Website
        <svg
          className={`w-1 h-1 ml-2 transition-transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg sm:w-12">
          {websites.map((website) => (
            <li key={website.id}>
              <button
                className="w-full px-2 py-1 text-left text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                onClick={() => handleWebsiteChange(website.id)}
              >
                {website.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StoreSwitcher;
