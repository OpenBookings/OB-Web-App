"use client";

import { useState } from "react";
import FocusOverlay from "@/components/FocusOverlay";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function Home() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [people, setPeople] = useState(2);
  const [destination, setDestination] = useState("");

  const [open, setOpen] = useState(false);

  const CalendarIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );

  const PersonIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );

  const ChevronDownIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  const PaperPlaneIcon = () => (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <polygon points="2 22 23 12 2 2 6 12 2 22" />
      <line x1="6" y1="12" x2="23" y2="12" />
    </svg>
  );

  return (
    <main className="min-h-screen text-white relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-black bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hotel2.jpg')",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main content - CTA */}
      <div className="min-h-screen flex items-center justify-start px-8 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-4xl text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            Discover{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Hotels
            </span>
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-gray-300">
            Quick, Easy & Open-Source
          </h1>
        </div>
      </div>

      {/* Search box at right bottom - Glassmorphism design */}
      <div className="fixed bottom-8 right-8 w-96 max-w-[calc(100vw-4rem)] z-50">
        <div className="bg-black/30 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-6">
          <div className="flex flex-col gap-5">
            {/* Destination - Centered with navigation arrows */}
            <InputGroup>
              <InputGroupInput
                placeholder="Destination..."
                value={destination ?? ""}
                readOnly
                onClick={() => setOpen(true)}
                className="cursor-pointer"
              />
              <InputGroupAddon>
                <PaperPlaneIcon />
              </InputGroupAddon>
            </InputGroup>
            <FocusOverlay open={open} onClose={() => setOpen(false)}>
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6">
                <InputGroup className="bg-white/5 border-white/20">
                  <InputGroupInput
                    placeholder="Where are you going?"
                    value={destination ?? ""}
                    onChange={(e) => setDestination(e.target.value)}
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setOpen(false);
                      }
                    }}
                    className="text-white placeholder:text-slate-400"
                  />
                  <InputGroupAddon>
                      <PaperPlaneIcon />
                  </InputGroupAddon>
                  <InputGroupAddon align="inline-end">
                      <Kbd
                        onClick={() => setOpen(false)}
                        className="bg-black text-white font-semibold cursor-pointer"
                      >
                        ESC
                      </Kbd>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </FocusOverlay>

            {/* Date Pickers - Side by Side with distinct styling */}
            <div className="flex gap-3">
              {/* From Date */}
              <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-3 cursor-pointer hover:bg-white/10 transition-all group">
                <div className="flex items-center gap-2 mb-1">
                  <CalendarIcon />
                  <div className="text-xs text-slate-300 font-medium">From</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white font-medium relative flex-1">
                    {checkIn ? (
                      <span>
                        {new Date(checkIn).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    ) : (
                      <span className="text-slate-400">Select date</span>
                    )}
                    <input
                      type="date"
                      value={checkIn ?? ""}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                  <ChevronDownIcon />
                </div>
              </div>

              {/* Till Date */}
              <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-3 cursor-pointer hover:bg-white/10 transition-all group">
                <div className="flex items-center gap-2 mb-1">
                  <CalendarIcon />
                  <div className="text-xs text-slate-300 font-medium">Till</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white font-medium relative flex-1">
                    {checkOut ? (
                      <span>
                        {new Date(checkOut).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    ) : (
                      <span className="text-slate-400">Select date</span>
                    )}
                    <input
                      type="date"
                      value={checkOut ?? ""}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || new Date().toISOString().split("T")[0]}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            {/* Guests Selector */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-3">
              <div className="flex items-center gap-3">
                <PersonIcon />
                <div className="flex-1">
                  <div className="text-xs text-slate-300 font-medium mb-1">
                    Guests
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setPeople(Math.max(1, people - 1))}
                      className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                    >
                      -
                    </button>
                    <span className="text-sm text-white font-medium min-w-[4rem] text-center">
                      {people} {people !== 1 ? "Guests" : "Guest"}
                    </span>
                    <button
                      onClick={() => setPeople(people + 1)}
                      className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full px-6 py-4 bg-white/95 text-gray-900 rounded-xl font-semibold hover:bg-white transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
              Find my trip
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
