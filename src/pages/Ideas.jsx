import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import Pagination from "../components/Pagination";

function Ideas() {
    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();

    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("size") || "10", 10);
    const sort = searchParams.get("sort") || "-published_at";

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/ideas?page[number]=${page}&page[size]=${pageSize}&append[]=small_image&sort=${sort}`)
            .then((res) => {
                setPosts(res.data.data);
                setTotal(res.data.meta.total);
            });
    }, [page, pageSize, sort]);

    const updateParams = (newParams) => {
        setSearchParams({
            page: newParams.page || page,
            size: newParams.size || pageSize,
            sort: newParams.sort || sort,
        });
    };

    return (
        <div className="pt-14">
            <Banner />

            <div className="max-w-7xl mx-auto px-4 py-10">
                {/* Top control (showing & dropdown) */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 text-sm gap-4 font-semibold">
                    <span>
                        Showing {((page - 1) * pageSize + 1)} - {Math.min(page * pageSize, total)} of {total}
                    </span>

                    {/* Dropdown controls */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                        <Dropdown
                            label="Show per page:"
                            value={pageSize}
                            onChange={(e) => updateParams({ size: Number(e.target.value), page: 1 })}
                            options={[10, 20, 50].map((n) => ({ label: n, value: n }))}
                        />
                        <Dropdown
                            label="Sort by:"
                            value={sort}
                            onChange={(e) => updateParams({ sort: e.target.value, page: 1 })}
                            options={[
                                { label: "Newest", value: "-published_at" },
                                { label: "Oldest", value: "published_at" },
                            ]}
                        />
                    </div>
                </div>

                {/* Grid posts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {posts.map((post) => (
                        <Card key={post.id} post={post} />
                    ))}
                </div>

                {/* Pagination */}
                <Pagination
                    currentPage={page}
                    totalPages={Math.ceil(total / pageSize)}
                    onChange={(p) => updateParams({ page: p })}
                />
            </div>
        </div>
    );
}

export default Ideas;
