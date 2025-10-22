const BusInterior = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="text-lg font-semibold mb-1">Bus Interior</h3>
        <div className="aspect-video bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg relative overflow-hidden">
          <img src="/interior.jpg" alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export { BusInterior };
