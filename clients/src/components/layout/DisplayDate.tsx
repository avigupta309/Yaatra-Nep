import { useState, useEffect } from "react";
import { Input } from "../../components/ui/input";

export function DisplayDate() {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setCurrentDateTime(now.toLocaleString("en-US", options));
    };

    updateDateTime(); // initial
    const interval = setInterval(updateDateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <Input
        type="text"
        readOnly
        value={currentDateTime}
        className="h-12 text-gray-700 font-medium"
      />
    </div>
  );
}
