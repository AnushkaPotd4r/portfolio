import Link from 'next/link';
import { ArrowLeft, Brain } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Brain className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          404 Error
        </span>
        <h1 className="text-3xl font-extrabold text-[#14213D] mt-4 mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          The requested page could not be located in Anushka Potdar&apos;s AI/ML portfolio.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
