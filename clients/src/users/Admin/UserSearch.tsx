import React from "react";

interface UserSearchProps {
  query: string;
  onChange: (q: string) => void;
}

export const UserSearch: React.FC<UserSearchProps> = ({ query, onChange }) => (
  <div className="flex gap-2 mb-2">
    <input
      type="text"
      placeholder="Search user..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
      className="border p-1 rounded flex-1"
    />
    <button className="bg-blue-500 text-white p-1 rounded">Search</button>
  </div>
);
