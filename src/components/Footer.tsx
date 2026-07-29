import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pb-8 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Aakash Gangji. All rights reserved.</p>
    </footer>
  );
};
