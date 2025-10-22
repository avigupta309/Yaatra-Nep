/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

interface AddStaffProps {
  onAdd: (staff: any) => void;
}

export const AddStaff: React.FC<AddStaffProps> = ({ onAdd }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onAdd(form);
    setForm({ name: "", email: "", phone: "", password: "" });
  };

  return (
    <div className="bg-white p-4 shadow rounded my-2">
      <h3 className="font-bold mb-2">Add Staff</h3>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-1 rounded mb-1 w-full" />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-1 rounded mb-1 w-full" />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="border p-1 rounded mb-1 w-full" />
      <input name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-1 rounded mb-1 w-full" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded mt-2">Add Staff</button>
    </div>
  );
};
