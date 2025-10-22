/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { mockUsers } from "../../data/mockData";
import { UserSearch } from "./UserSearch";
import { UserList } from "./UserList";
import { AddStaff } from "./AddStaff";

export const AdminPanel: React.FC = () => {
  const [users, setUsers] = useState(mockUsers);
  const [query, setQuery] = useState("");

  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));

  const handleEdit = (user: any) => alert("Edit " + user.name);
  const handleRemove = (id: string) => setUsers(users.filter(u => u.id !== id));
  const handleAddStaff = (staff: any) => setUsers([...users, { ...staff, id: Date.now().toString(), role: "staff" }]);

  return (
    <div className="mt-4">
      <UserSearch query={query} onChange={setQuery} />
      <UserList users={filteredUsers} onEdit={handleEdit} onRemove={handleRemove} />
      <AddStaff onAdd={handleAddStaff} />
    </div>
  );
};
