export default function AdminSettingsPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">Admin Settings</h1>

      {/* Profile Settings */}
      <section className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">Profile Settings</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="Full Name" />
          <input className="border p-2 rounded" placeholder="Email (readonly)" readOnly />
          <input className="border p-2 rounded" placeholder="Phone Number" />
          <select className="border p-2 rounded">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
      </section>

      {/* Account & Security */}
      <section className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">Account & Security</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="Old Password" type="password" />
          <input className="border p-2 rounded" placeholder="New Password" type="password" />
          <label className="flex items-center space-x-2 mt-2">
            <input type="checkbox" />
            <span>Enable Two-Step Verification</span>
          </label>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Update Security</button>
      </section>

      {/* System Management */}
      <section className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">System Management</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Maintenance Mode</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Email Verification Required</span>
          </label>
          <input className="border p-2 rounded" placeholder="Session Timeout (minutes)" />
          <input className="border p-2 rounded" placeholder="Max Login Attempts" />
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Save System Settings</button>
      </section>

      {/* User Management */}
      <section className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">User Management Preferences</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Auto-Approve New Users</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Restrict Admin Creation</span>
          </label>
          <select className="border p-2 rounded">
            <option>Default Role: user</option>
            <option>Default Role: driver</option>
          </select>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Require Approval for Role Change</span>
          </label>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Save Preferences</button>
      </section>

      {/* Data & Backup */}
      <section className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">Data & Backup</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button className="bg-gray-200 px-4 py-2 rounded">Backup Now</button>
          <select className="border p-2 rounded">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
          <input type="file" className="border p-2 rounded" />
          <button className="bg-gray-200 px-4 py-2 rounded">Export Data (CSV)</button>
          <input className="border p-2 rounded" placeholder="Delete Logs Older Than (days)" />
        </div>
        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">Delete Old Logs</button>
      </section>
    </div>
  );
}
