import React from 'react';

type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  sent_at: string;
};

interface Props {
  messages: Message[];
}

const MessageTable: React.FC<Props> = ({ messages }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl p-6 shadow-xs">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Inbound Messages & Inquiries</h2>
      {messages.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-sm">No messages received yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="p-3 font-semibold">Message ID</th>
                <th className="p-3 font-semibold">Name</th>
                <th className="p-3 font-semibold">Email</th>
                <th className="p-3 font-semibold">Message</th>
                <th className="p-3 font-semibold">Date Sent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {messages.map((msg) => (
                <tr key={msg.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
                  <td className="p-3 text-gray-500 dark:text-gray-400 font-mono text-xs">{msg.id}</td>
                  <td className="p-3 font-medium text-gray-900 dark:text-white">{msg.name}</td>
                  <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{msg.email}</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300 max-w-sm whitespace-pre-wrap">{msg.message}</td>
                  <td className="p-3 text-gray-500 dark:text-gray-400 text-xs">{msg.sent_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MessageTable;
