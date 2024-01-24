import Link from "@/node_modules/next/link";

export default function Navi() {
    return (
        <div className="flex justify-center items-center bg-white h-[100px] w-full border-b">
                <Link className="text-black text-5xl" href="https://github.com/991creator" target="_blank">991</Link>
        </div>
    )
}