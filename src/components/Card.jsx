import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import fallbackImage from "../assets/notfoundimg.jpg";

function Card({ post }) {
    const imageUrl = post.small_image?.[0]?.url;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <LazyLoadImage
                src={imageUrl}
                alt={post.title}
                effect="blur"
                placeholderSrc={fallbackImage}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = fallbackImage;
                }}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <p className=" font-semibold text-gray-500 uppercase mb-2">
                    {new Date(post.published_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>
                <h1 className="text-lg font-semibold line-clamp-3">{post.title}</h1>
            </div>
        </div>
    );
}

export default Card;
