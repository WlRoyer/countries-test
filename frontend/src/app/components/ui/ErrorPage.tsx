interface ErrorPageProps {
  error: string | undefined;
}

export function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-700 to-slate-500">
      <div className="flex w-full max-w-4xl p-4 space-y-6 text-center bg-white border border-gray-200 shadow rounded-xl min-h-64 dark:bg-gray-800 dark:border-gray-700">
        <p className="m-auto text-6xl font-bold text-white">{error}</p>
      </div>
    </div>
  );
}
