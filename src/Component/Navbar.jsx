import React from 'react';

const Navbar = ({ onTogglePendingTasks }) => {
  return (
    <nav className="flex justify-between bg-indigo-900 text-white py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-8">ToDo List</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all" onClick={onTogglePendingTasks}>Your Task</li>
      </ul>
    </nav>
  );
};

export default Navbar;