import { useRef} from "react";

const ProfileImageUpload = ({ imageUrl, setImageUrl }) => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e: { target: { files: any[]; }; }) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={imageUrl}
        alt="Profile"
        className="w-28 h-28 rounded-full border-2 border-gray-300 object-cover cursor-pointer hover:opacity-80 transition"
        onClick={handleImageClick}
      />
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <p className="text-sm text-gray-500">Click image to upload</p>
    </div>
  );
};

export default ProfileImageUpload;
