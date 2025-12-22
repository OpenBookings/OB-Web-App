"use client";

import { useState } from "react";
import FocusOverlay from "@/components/FocusOverlay";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Calendar05 } from "@/components/DatePicker";

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

  const [open, setOpenSearchBar] = useState(false);
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const CalendarIcon = () => (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="white" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );

  const PersonIcon = () => (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="white" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );

  // magnifying glass icon
  const MagnifyingGlassIcon = () => (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="white" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  return (
    <main className="min-h-screen text-white relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-black bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image.png')",
        }}
      >
        {/* {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main content - CTA */}
      <div className="min-h-screen flex items-center justify-start px-8 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-4xl text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            Discover{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
              Hotels
            </span>
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-gray-300">
            Quick, Easy & Open-Source
          </h1>
        </div>
      </div>

      {/* Search box at right bottom - Glassmorphism design */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 left-4 sm:left-auto w-auto sm:w-96 max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-4rem)] z-50">
        <div className="bg-black/30 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl p-4 sm:p-6">
          <div className="flex flex-col gap-3 sm:gap-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-2 sm:mb-3 text-white/90">
              The world is waiting...
            </h2>
            {/* Destination - Centered with navigation arrows */}
            <InputGroup>
              <InputGroupInput
                placeholder="Destination..."
                value={destination ?? ""}
                readOnly
                onClick={() => setOpenSearchBar(true)}
                className="cursor-pointer"
              />
              <InputGroupAddon>
                <MagnifyingGlassIcon />
              </InputGroupAddon>
            </InputGroup>
            <FocusOverlay open={open} onClose={() => setOpenSearchBar(false)}>
              <div className="bg-black/40 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl p-4 sm:p-6 w-full max-w-[calc(100vw-2rem)] sm:max-w-md">
                <InputGroup className="bg-white/5 border-white/20">
                  <InputGroupInput
                    placeholder="Where are you going?"
                    value={destination ?? ""}
                    onChange={(e) => setDestination(e.target.value)}
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setOpenSearchBar(false);
                      }
                    }}
                    className="text-white placeholder:text-slate-400 text-sm sm:text-base"
                  />
                  <InputGroupAddon>
                    <MagnifyingGlassIcon />
                  </InputGroupAddon>
                  <InputGroupAddon align="inline-end">
                    <Kbd
                      onClick={() => setOpenSearchBar(false)}
                      className="bg-black text-white font-semibold cursor-pointer text-xs sm:text-sm"
                    >
                      ESC
                    </Kbd>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </FocusOverlay>

            {/* Date Picker - From and Till as one field */}
            <div
              className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 p-2.5 sm:p-3 cursor-pointer hover:bg-white/10 transition-all group flex items-center gap-2 sm:gap-3"
              // Use your own handler to open date picker modal/dialog
              onClick={() => setOpenDatePicker(true)}
            >
              <CalendarIcon />
              <div className="flex-1 flex items-center gap-1.5 sm:gap-2">
                {/* From Date */}
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium mb-0.5">
                    From
                  </div>
                  <div className="text-xs sm:text-sm text-white font-medium truncate">
                    {checkIn ? (
                      <span className="text-white">
                        {new Date(checkIn).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    ) : (
                      <span className="text-slate-400">Select date</span>
                    )}
                  </div>
                </div>
                
                {/* Separator */}
                <div className="shrink-0 px-1 sm:px-2">
                  <div className="w-px h-6 sm:h-8 bg-white/20"></div>
                </div>
                
                {/* Till Date */}
                <div className="flex-1 min-w-0 text-right">
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium mb-0.5">
                    Till
                  </div>
                  <div className="text-xs sm:text-sm text-white font-medium truncate">
                    {checkOut ? (
                      <span className="text-white">
                        {new Date(checkOut).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    ) : (
                      <span className="text-slate-400">Select date</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Date picker overlay - optional, implement accordingly */}
            <FocusOverlay
              open={openDatePicker}
              onClose={() => setOpenDatePicker(false)}
            >
              <div className="bg-black/40 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl p-3 sm:p-4 md:p-6 flex justify-center w-full max-w-[calc(100vw-2rem)] sm:max-w-lg overflow-auto">
                <Calendar05
                  checkIn={checkIn}
                  checkOut={checkOut}
                  onDateChange={(dateRange) => {
                    // Update check-in date
                    if (dateRange?.from) {
                      setCheckIn(dateRange.from.toISOString());
                    } else {
                      setCheckIn("");
                    }

                    // Update check-out date
                    if (dateRange?.to) {
                      setCheckOut(dateRange.to.toISOString());
                    } else {
                      setCheckOut("");
                    }
                  }}
                />
              </div>
            </FocusOverlay>

            {/* Guests Selector */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 p-2.5 sm:p-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <PersonIcon />
                <div className="flex-1">
                  <div className="text-[10px] sm:text-xs text-slate-300 font-medium mb-0.5 sm:mb-1">
                    Guests
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={() => setPeople(Math.max(1, people - 1))}
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110 text-sm sm:text-base"
                    >
                      -
                    </button>
                    <span className="text-xs sm:text-sm text-white font-medium min-w-12 sm:min-w-16 text-center">
                      {people} {people !== 1 ? "Guests" : "Guest"}
                    </span>
                    <button
                      onClick={() => setPeople(people + 1)}
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110 text-sm sm:text-base"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-white/95 text-gray-900 rounded-lg sm:rounded-xl font-semibold hover:bg-white transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base">
              Find my trip
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
