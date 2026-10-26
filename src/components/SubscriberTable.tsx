import React from 'react';

type Subscriber = {
  id: string;
  email: string;
  subscribed_at: string;
};

interface Props {
  subscribers: Subscriber[];
}

const SubscriberTable: React.FC<Props> = ({ subscribers }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl p-6 shadow-xs">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Briefing Subscribers</h2>
      {subscribers.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-sm">No subscribers found in database.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="p-3 font-semibold">Subscriber ID</th>
                <th className="p-3 font-semibold">Email</th>
                <th className="p-3 font-semibold">Subscribed Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {subscribers.map((subscriber) => (
                <tr key={subscriber.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
                  <td className="p-3 text-gray-500 dark:text-gray-400 font-mono text-xs">{subscriber.id}</td>
                  <td className="p-3 font-medium text-gray-900 dark:text-white">{subscriber.email}</td>
                  <td className="p-3 text-gray-500 dark:text-gray-400">{subscriber.subscribed_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SubscriberTable;
