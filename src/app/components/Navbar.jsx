"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const links = [
        { name: "Home", href: "/" },
        { name: "Quién Soy", href: "/about" },
        { name: "Mis Portfolios", href: "/my-portfolios" },
        { name: "Galerías", href: "/my-galeries" },
        { name: "Mis Servicios", href: "/my-services" },
        { name: "Contacto", href: "/contact" },
    ];

    const path = usePathname();

    return (
        <nav className="flex items-center">
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`bg-gray-900 rounded-md px-3 py-2 text-sm font-medium ${
                                link.href === path
                                    ? "text-red-300"
                                    : "text-white"
                            }`}
                            aria-current="page"
                        >
                            <p>{link.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
