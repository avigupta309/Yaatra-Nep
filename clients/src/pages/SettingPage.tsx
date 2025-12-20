export default function AdminSettingsPage() {
  return (
    <div className="p-6">
      <div className=" bg-red-700">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-4">Admin Settings</h1>
      </div>
      <div className="container border-2 border-yellow-400 rounded-lg w-96 h-60 relative">
        <div className="flex gap-4 p-2 columns-2">
          <div className="p-2 bg-gray-400 rounded-lg">
            <h1 className="text-xl text-blue-600 font-medium underline  rounded-lg">List Of Users</h1>
            <div className="w-full">
              <ol>
                <li>Applevvvvvvvvvvvvvvvvvv</li>
                <li>Mango</li>
                <li>Litche</li>
                <li>banana</li>
                <li>banana</li>
                <li>banana</li>
                <li>banana</li>
               
              </ol>
            </div>
          </div>

          <div className="p-2 bg-green-600 rounded-lg relative">
            <h1>Specific User</h1>
            <div className="h-full w-full">
              <h1>Avinash Gupta</h1>
              <img src="##" alt="" height={10} />
              <div className="flex flex-col bg-red-500  ">
                <span>
                  {" "}
                  <strong>Role:</strong>Admin
                </span>
                <span>
                  <strong>Email:</strong>@123gmail.com
                </span>
                <span>
                  <strong>Phone:</strong>1234
                </span>
               
              </div >
              <div className="flex justify-center items-center rounded-lg  bg-white absolute bottom-0 ">
                <input type="text" name="" id="" />
              <button className="bg-blue-600 p-2 rounded-r-lg text-white">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
