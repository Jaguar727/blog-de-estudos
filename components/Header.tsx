import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Category } from "../types/graphql_queries";
import { getCategories } from "../services/graphcmsclient";

interface CategoriesProps {
    categories: Array<Category>;
}

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(newCategories => setCategories(newCategories));
    }, []);

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl">
                            Jaguar's Studies
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category: Category ) => (
                        <Link
                            key={category.slug}
                            href={`/category/${category.slug}`}
                        >
                            <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
