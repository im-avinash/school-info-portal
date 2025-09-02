"use client";
import { useEffect, useState } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await fetch("/api/schools");
        if (!res.ok) {
          throw new Error("Failed to fetch schools");
        }
        const data = await res.json();
        setSchools(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSchools();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {schools.map((school) => (
        <div key={school.id} className="border p-4 rounded shadow">
          <img
            src={school.image}
            alt={school.name}
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="text-xl font-bold mt-2">{school.name}</h2>
          <p>{school.address}</p>
          <p className="text-gray-500">{school.city}</p>
        </div>
      ))}
    </div>
  );
}
