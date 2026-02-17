"use client"

import { useSession } from "@/lib/auth-client";

export function UserInfo() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="animate-pulse">
        <div className="mb-2 h-4 w-32 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-3 w-48 rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>
    );
  }

  if (!session) {
    return <div className="text-gray-600 dark:text-gray-400">Not signed in</div>;
  }

  return (
    <div className="space-y-2">
      <div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Name:
        </span>
        <span className="ml-2 text-gray-900 dark:text-white">
          {session.user.name}
        </span>
      </div>
      <div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Email:
        </span>
        <span className="ml-2 text-gray-900 dark:text-white">
          {session.user.email}
        </span>
      </div>
      <div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          User ID:
        </span>
        <span className="ml-2 font-mono text-xs text-gray-600 dark:text-gray-400">
          {session.user.id}
        </span>
      </div>
    </div>
  );
}
