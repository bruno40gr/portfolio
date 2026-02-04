import React from "react";
const DataTable = ({ columns = [], rows = [] }) => {
  if (!Array.isArray(columns) || columns.length === 0) return null;
  if (!Array.isArray(rows) || rows.length === 0) return null;

  return (
    <div className="w-full mb-12">
      <div className="overflow-x-auto border border-neutral-200 rounded-sm bg-white shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-neutral-50 border-b border-neutral-200">
            <tr>
              {columns.map((c, i) => (
                <th key={i} className="px-4 py-3 text-[12px] font-semibold text-neutral-600">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri} className="border-b border-neutral-100 last:border-b-0">
                {r.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 text-[14px] md:text-[15px] text-neutral-800 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
