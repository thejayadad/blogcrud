'use client';

import React from 'react';
import { newHeroBanner } from '@/lib/actions/herobanner/add-hero';

interface Props {
  userEmail: string;
  websiteId: string;
}

const HeroForm = ({ userEmail, websiteId }: Props) => {
  return (
    <div>
      <form action={newHeroBanner}>
        {/* Hidden Inputs */}
        <input type="hidden" id="userEmail" name="userEmail" defaultValue={userEmail} />
        <input type="hidden" id="websiteId" name="websiteId" defaultValue={websiteId} />

        {/* Visible Inputs */}
        <div>
          <label htmlFor="label">Label</label>
          <input
            id="label"
            name="label"
            placeholder="Label..."
            required
            className="border p-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            id="imageUrl"
            name="imageUrl"
            placeholder="ImageUrl..."
            required
            className="border p-2 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
          New Banner
        </button>
      </form>
    </div>
  );
};

export default HeroForm;
