import useEmblaCarousel from "embla-carousel-react";
import { atom, useAtom } from "jotai";
import { atomFamily } from "jotai-family";
import { useCallback, useEffect } from "react";

type CarouselState = {
	selectedIndex: number;
	scrollSnaps: number[];
	loadedSlides: Set<number>;
};

const carouselStateFamily = atomFamily(() =>
	atom<CarouselState>({
		selectedIndex: 0,
		scrollSnaps: [],
		loadedSlides: new Set([0]),
	}),
);

export function useProjectCarousel({
	carouselId,
	slideCount,
}: {
	carouselId: string;
	slideCount: number;
}) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const [state, setState] = useAtom(carouselStateFamily(carouselId));

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
	const scrollTo = useCallback(
		(index: number) => emblaApi?.scrollTo(index),
		[emblaApi],
	);

	useEffect(() => {
		if (!emblaApi) return;

		setState((current) => ({
			...current,
			scrollSnaps: emblaApi.scrollSnapList(),
		}));

		const onSelect = () => {
			const selectedIndex = emblaApi.selectedScrollSnap();

			setState((current) => {
				const loadedSlides = new Set(current.loadedSlides);
				const neighboringSlides = [
					selectedIndex - 1,
					selectedIndex,
					selectedIndex + 1,
				].filter((index) => index >= 0 && index < slideCount);

				for (const index of neighboringSlides) {
					loadedSlides.add(index);
				}

				return { ...current, selectedIndex, loadedSlides };
			});
		};

		emblaApi.on("select", onSelect);
		onSelect();

		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi, setState, slideCount]);

	return {
		emblaRef,
		selectedIndex: state.selectedIndex,
		scrollSnaps: state.scrollSnaps,
		loadedSlides: state.loadedSlides,
		scrollPrev,
		scrollNext,
		scrollTo,
	};
}
