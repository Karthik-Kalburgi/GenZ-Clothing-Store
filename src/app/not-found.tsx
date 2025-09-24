import Link from "next/link";

export default function NotFound() {
	return (
		<div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
			<h1 className="text-4xl font-bold tracking-tight text-gray-900">404</h1>
			<p className="mt-3 text-lg text-gray-700">Page not found</p>
			<p className="mt-2 text-sm text-gray-500">
				The page you are looking for might have been removed, had its name
				changed, or is temporarily unavailable.
			</p>
			<Link
				href="/"
				className="mt-6 inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
			>
				Back to home
			</Link>
		</div>
	);
}


