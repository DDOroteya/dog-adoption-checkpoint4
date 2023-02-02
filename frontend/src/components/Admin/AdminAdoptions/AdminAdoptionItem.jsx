import React from "react";

function AdminAdoptionItem({ adoption }) {
  return (
    <tr className="text-gray-400">
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
        {adoption.name}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
        {adoption.location}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">
        {adoption.firstname}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
        {adoption.lastname}
      </th>
      <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white">
        {adoption.adoption_date}
      </th>
    </tr>
  );
}

export default AdminAdoptionItem;
