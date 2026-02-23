import { Save, X } from "lucide-react";
import { useForm } from "react-hook-form";

interface ModalProps {
  closeModal: () => void;
}

interface UserFormInputs {
  fullName: string;
  phoneNumber: string;
  address: string;
  role: string;
  profilePic: FileList;
}

export function UserModal({ closeModal }: ModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormInputs>();

  const onSubmit = async (data: UserFormInputs) => {
    console.log("Submitted Data:", data);

    reset();
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box w-11/12 max-w-2xl bg-white  text-black">
        <h3 className="font-bold text-xl mb-2 text-blue-700 ">Modify User</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              {...register("fullName", { required: "Name is required" })}
              className="w-full border rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              {...register("phoneNumber", { required: "Phone is required" })}
              className="w-full border rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-medium">Address</label>
            <input
              {...register("address", { required: "Adress is required" })}
              className="w-full border rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block mb-1 font-medium">Role</label>
            <select
              className="w-full border rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none bg-white cursor-pointer"
              {...register("role")}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="driver">Driver</option>
            </select>
          </div>

          {/* Profile Pic */}
          <div>
            <label className="block mb-1 font-medium">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full"
              {...register("profilePic")}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={closeModal}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <span className="flex">
                Cancel
                <X />
              </span>
            </button>

            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              <span className="flex">
                Save
                <Save />
              </span>
            </button>
          </div>
        </form>
      </div>

      <div className="modal-backdrop"></div>
    </div>
  );
}
