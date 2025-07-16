import { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import banner from "../assets/banner.webp";

function Banner() {
    const wrapperRef = useRef(null);
    const rafId = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (rafId.current !== null) return;

            rafId.current = requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                if (wrapperRef.current) {
                    wrapperRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
                }
                rafId.current = null;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <div className="relative h-[200px] md:h-[500px] bg-gray-200 flex items-center justify-center overflow-hidden">
            <div
                ref={wrapperRef}
                className="absolute top-0 left-0 w-full h-full will-change-transform"
                style={{ transition: "transform 0.1s ease-out" }}
            >
                <LazyLoadImage
                    src={banner}
                    alt="Banner"
                    effect="blur"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

            <div className="z-20 text-white text-center">
                <h1 className="text-3xl md:text-5xl">Ideas</h1>
                <p className="mt-2 text-lg md:text-xl">Where all our great things begin</p>
            </div>

            <div
                className="absolute bottom-0 left-0 w-full h-12 bg-white z-30"
                style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
            />
        </div>
    );
}

export default Banner;
