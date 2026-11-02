"use client";

import { useState } from "react";

const testimonials = [
	{
		client: "Client",
		text: "Finally, it feels like we're being listened to and promises are being kept.",
	},
	{
		client: "Manager",
		text: "I know that when Dave takes something on, it's going to get done, and done right.",
	},
	{
		client: "Colleague",
		text: "Your meetings are so detailed, how are they also so easy?",
	},
	{
		client: "Colleague",
		text: "These design prototype walkthroughs are so relaxing, and I understand everything!",
	},
];

export default function TestimonialCarousel() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const selectedTestimonial = testimonials[selectedIndex];

	const showPrevious = () => {
		setSelectedIndex(
			(current) => (current - 1 + testimonials.length) % testimonials.length,
		);
	};
	const showNext = () => {
		setSelectedIndex((current) => (current + 1) % testimonials.length);
	};

	return (
		<section
			className="mt-8 border-t border-gray-light/20 border-dashed pt-6"
			aria-label="Testimonials"
			aria-roledescription="carousel"
		>
			<div aria-live="polite" aria-atomic="true">
				<fieldset
					className="min-h-40 min-w-0 border-0 p-0"
					aria-roledescription="slide"
					aria-label={`${selectedIndex + 1} of ${testimonials.length}`}
				>
					<p className="mb-5 leading-relaxed text-pretty flex justify-center align-center font-serif font-light italic text-gray-lightest -rotate-2">
						{selectedTestimonial.text}
					</p>
					<div className="flex items-center gap-3">
						<div
							className="flex size-10 shrink-0 items-center justify-center rounded border border-gray-light/30 text-[10px] font-bold uppercase text-gray-light"
							aria-hidden="true"
						>
							Logo
						</div>
						<p className="font-bold">{selectedTestimonial.client}</p>
					</div>
				</fieldset>
			</div>
			<div className="mt-4 flex items-center justify-between">
				<button
					type="button"
					className="rounded px-3 py-2 font-bold text-blue hover:bg-blue/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
					onClick={showPrevious}
					aria-label="Previous testimonial"
				>
					Previous
				</button>
				<p className="text-sm" aria-hidden="true">
					{selectedIndex + 1} / {testimonials.length}
				</p>
				<button
					type="button"
					className="rounded px-3 py-2 font-bold text-blue hover:bg-blue/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
					onClick={showNext}
					aria-label="Next testimonial"
				>
					Next
				</button>
			</div>
		</section>
	);
}
