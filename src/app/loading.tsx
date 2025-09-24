export default function Loading() {
	return (
		<div className="flex min-h-[50vh] items-center justify-center">
			<div className="inline-flex items-center gap-3 text-gray-700">
				<span className="size-3 animate-ping rounded-full bg-gray-900" />
				<span className="size-3 animate-ping rounded-full bg-gray-900 [animation-delay:150ms]" />
				<span className="size-3 animate-ping rounded-full bg-gray-900 [animation-delay:300ms]" />
				<span className="text-sm font-medium">Loading...</span>
			</div>
		</div>
	);
}


