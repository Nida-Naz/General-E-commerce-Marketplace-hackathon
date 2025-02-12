"use client";

import { useState } from "react";

const items = ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS"];

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-md mx-auto my-4">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {query && (
        <ul className="absolute left-0 w-full bg-white shadow-md rounded-lg mt-1">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-200">
                {item}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}
