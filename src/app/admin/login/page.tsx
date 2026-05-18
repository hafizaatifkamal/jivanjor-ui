"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, signIn } from "../../../lib/auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/admin");
    }
  }, [router]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError("Please provide both email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    const success = signIn(email.trim());
    if (success) {
      router.push("/admin");
    } else {
      setError("Unable to sign in. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 py-10 text-white">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-zinc-900/95 p-10 shadow-2xl shadow-black/20">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Admin login</p>
          <h1 className="mt-4 text-3xl font-semibold text-white">Sign in to Jivanjor</h1>
          <p className="mt-2 text-sm text-zinc-400">Use your admin credentials to manage site content.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-zinc-200">
            Email
            <input
              className="mt-2 w-full rounded-3xl border border-zinc-700 bg-zinc-950/90 px-4 py-3 text-white outline-none transition focus:border-sky-400"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
            />
          </label>

          <label className="block text-sm font-medium text-zinc-200">
            Password
            <input
              className="mt-2 w-full rounded-3xl border border-zinc-700 bg-zinc-950/90 px-4 py-3 text-white outline-none transition focus:border-sky-400"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
            />
          </label>

          {error ? <p className="text-sm text-rose-400">{error}</p> : null}

          <button
            className="w-full rounded-3xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
