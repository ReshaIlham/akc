export default function ClientsLoading() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96"></div>
        </div>
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 mb-2"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
              </div>
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters Skeleton */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          ))}
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <th key={i} className="px-6 py-3">
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-20"></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i}>
                  <td className="px-6 py-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-8"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-16 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
