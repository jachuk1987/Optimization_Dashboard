import React from 'react';

const ChangePointDetectionSummary = () => {
  const issues = [
    {
      title: 'Gas interference',
      count: 4,
      status: 'red',
    },
    {
      title: 'Possible hole in tubing',
      count: 3,
      status: 'red',
    },
    {
      title: 'Worn out pump',
      count: 5,
      status: 'red',
    },
    {
      title: 'Possible broken shaft',
      count: 0,
      status: 'green',
    },
  ];

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md max-w-sm">
      <h2 className="text-lg font-semibold mb-4">Change point detection summary</h2>
      <div>
        {issues.map((issue, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b border-gray-700"
          >
            <div className="flex items-center">
              <span
                className={`w-3 h-3 rounded-full mr-3 ${
                  issue.status === 'red' ? 'bg-red-500' : 'bg-green-500'
                }`}
              ></span>
              <span>{issue.title}</span>
            </div>
            <span className="text-gray-300">{issue.count} potential well issue(s)</span>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
        View all
      </button>
    </div>
  );
};

export default ChangePointDetectionSummary;
