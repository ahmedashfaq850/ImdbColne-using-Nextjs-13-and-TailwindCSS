"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

/* Define Props Type */
interface Props {
    title: string;
    param: string;
}

export default function NavbarItem({ title, param }: Props) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");


    return (
        <div>
            <Link
                className={`m-4 hover:text-amber-600 font-semibold p-2 ${genre &&
                    genre === param &&
                    "underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg"
                    }`}
                href={`/?genre=${param}`}
            >
                {title}
            </Link>
        </div>
    );
}