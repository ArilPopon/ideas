function Card({ post }) {
    console.log(post);
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.small_image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-xs text-gray-500 uppercase mb-2">
                    {new Date(post.published_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>
                <h2 className="text-sm font-semibold line-clamp-3">{post.title}</h2>
            </div>
        </div>
    );
}

export default Card;
