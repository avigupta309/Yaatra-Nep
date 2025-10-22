import React from "react";
import { User } from "../../types";
import { LucideEdit, LucideTrash2 } from "lucide-react";

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onRemove: (id: string) => void;
}

export const UserList: React.FC<UserListProps> = ({
  users,
  onEdit,
  onRemove,
}) => (
  <div className="bg-white p-2 shadow rounded">
    {users.map((user) => (
      <div
        key={user.id}
        className="flex justify-between items-center p-2 border-b"
      >
        <span>{user.name}</span>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(user)}
            className="p-1 bg-gray-200 rounded"
          >
            <LucideEdit size={16} />
          </button>
          <button
            onClick={() => onRemove(user.id)}
            className="p-1 bg-red-500 text-white rounded"
          >
            <LucideTrash2 size={16} />
          </button>
        </div>
      </div>
    ))}
  </div>
);
