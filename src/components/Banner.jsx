import banner from "../assets/banner.webp";

function Banner() {
    return (
        <div className="relative h-[200px] md:h-[500px] bg-gray-200 flex items-center justify-center overflow-hidden">
            {/* Gambar Background */}
            <img
                src={banner}
                alt="Banner"
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
            />

            {/* Overlay Hitam */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

            {/* Teks di atas Overlay */}
            <div className="z-20 text-white text-center">
                <h1 className="text-3xl md:text-5xl font-bold">Ideas</h1>
                <p className="mt-2 text-lg md:text-xl">Where all our great things begin</p>
            </div>

            {/* Area Miring Putih */}
            <div
                className="absolute bottom-0 left-0 w-full h-12 bg-white z-30"
                style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
            />
        </div>
    );
}

export default Banner;
