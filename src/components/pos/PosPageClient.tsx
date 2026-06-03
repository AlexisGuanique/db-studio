"use client";

import { useCallback, useEffect, useState } from "react";
import { PosTerminal } from "@/components/pos/PosTerminal";

export function PosAccessGate({ children }: { children: React.ReactNode }) {
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch("/api/pos/auth")
      .then((res) => res.json())
      .then((data) => setAuthenticated(Boolean(data.authenticated)))
      .catch(() => setAuthenticated(false))
      .finally(() => setChecking(false));
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      setSubmitting(true);
      setError(null);

      try {
        const response = await fetch("/api/pos/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Access denied");
        }

        setAuthenticated(true);
        setPassword("");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Access denied");
      } finally {
        setSubmitting(false);
      }
    },
    [password],
  );

  if (checking) {
    return (
      <div className="pos-page flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-text-secondary">Verifying access...</p>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="pos-page flex min-h-[60vh] items-center justify-center px-6 py-16">
        <form
          onSubmit={handleSubmit}
          className="pos-auth w-full max-w-sm rounded-2xl border-2 border-burgundy/15 bg-white p-8 shadow-lg"
        >
          <h1 className="text-xl font-semibold uppercase text-burgundy">
            POS Access
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            Authorized staff only — DB Studio Media Orlando, FL
          </p>
          <label htmlFor="pos-password" className="mt-6 block text-sm font-medium">
            Access code
          </label>
          <input
            id="pos-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-lg border-2 border-burgundy/20 px-4 py-3 focus:border-burgundy focus:outline-none"
            autoComplete="current-password"
            required
          />
          {error && (
            <p className="mt-3 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full rounded-[10px] bg-burgundy px-6 py-3 text-sm font-semibold uppercase text-white disabled:opacity-50"
          >
            {submitting ? "Verifying..." : "Enter POS"}
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}

export function PosPageClient() {
  return (
    <PosAccessGate>
      <PosTerminal />
    </PosAccessGate>
  );
}
