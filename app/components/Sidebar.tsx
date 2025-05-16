"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-gray-900 text-white h-screen ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 shadow-lg`}
    >
      <div className="p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-4 p-2 rounded-lg hover:bg-gray-700 w-full text-left flex items-center justify-between transition-colors duration-200"
        >
          {isOpen ? (
            <>
              <span>Menu</span>
              <span>◄</span>
            </>
          ) : (
            <span>►</span>
          )}
        </button>

        {/* User Profile Section */}
        <div className="mb-8 bg-gray-800 p-4 rounded-lg">
          <div className="text-center">
            {isOpen && (
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <p className="text-gray-300">Not signed in</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {isOpen && <span className="font-medium">Dashboard</span>}
          </Link>

          <Link
            href="/notes"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {isOpen && <span className="font-medium">Notes</span>}
          </Link>

          <Link
            href="/login"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            {isOpen && <span className="font-medium">Login</span>}
          </Link>

          <Link
            href="/register"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            {isOpen && <span className="font-medium">Register</span>}
          </Link>
        </nav>
      </div>
    </div>
  );
}
