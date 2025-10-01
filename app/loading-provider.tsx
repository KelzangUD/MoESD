"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  // Lock body scroll when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  // Start loader on internal link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a[href]") as
        | HTMLAnchorElement
        | null;
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#")) return;

      setLoading(true);
    };

    window.addEventListener("click", handleClick, true);
    return () => window.removeEventListener("click", handleClick, true);
  }, []);

  // Stop loader when pathname changes
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 300); // adjust delay
      return () => clearTimeout(timer);
    }
  }, [pathname, loading]);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-black bg-opacity-50 pointer-events-none">
          <div className="h-12 w-12 border-4 border-white border-t-transparent rounded-full animate-spin pointer-events-auto"></div>
        </div>
      )}
      {children}
    </>
  );
}
