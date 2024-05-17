import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8 mt-8">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2023 WorkspaceApp. All rights reserved.</p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
