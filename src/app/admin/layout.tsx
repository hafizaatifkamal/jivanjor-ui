"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getUserEmail, isAuthenticated, signOut } from "@/lib/auth";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/admin/login") {
      setReady(true);
      return;
    }

    if (!isAuthenticated()) {
      router.replace("/admin/login");
      return;
    }

    setEmail(getUserEmail());
    setReady(true);
  }, [pathname, router]);

  function handleSignOut() {
    signOut();
    router.push("/admin/login");
  }

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface">
        <div className="rounded-3xl border border-surface/80 bg-background px-8 py-5 text-sm text-foreground">
          Preparing the admin experience…
        </div>
      </div>
    );
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const navItems = [
    { href: "/admin", label: "Overview" },
    { href: "/admin/content", label: "Content" },
    { href: "/admin/settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <header className="px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
              Jivanjor Admin
            </p>
            <p className="mt-1 text-sm text-foreground/70">
              Signed in as {email || "Admin"}
            </p>
          </div>
          <button
            type="button"
            onClick={handleSignOut}
            className="rounded-full border border-surface/80 bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-surface"
          >
            Sign out
          </button>
        </div>
      </header>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col gap-6 px-6 py-8 lg:flex-row">
        <aside className="space-y-6 rounded-3xl border border-surface/80 bg-background p-6 shadow-xl shadow-black/5 lg:w-72">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-400">
              Navigation
            </p>
            <p className="text-sm text-foreground/70">Your admin tools and pages.</p>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block rounded-3xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-sky-500/15 text-sky-300"
                      : "text-foreground/70 hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 rounded-3xl border border-surface/80 bg-background p-6 shadow-xl shadow-black/5">
          {children}
        </main>
      </div>
    </div>
  );
}
