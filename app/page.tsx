"use client";

import { useState } from "react";

export default function Home() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [people, setPeople] = useState(2);
  const [rooms, setRooms] = useState(1);

  // Icon components
  const LocationIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const PersonIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  return (
    <main className="min-h-screen text-white relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-black bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hotel.jpg')",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Main content - CTA */}
      <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            Discover <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Hotels</span>
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            Quick, Easy & Open-Source
          </h1>
        </div>
      </div>

      {/* Glass bar at center bottom */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 z-50">
        <div className="bg-gray-800/60 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-0">
            {/* Destination */}
            <div className="flex-1 flex items-center gap-3 px-6 py-4 cursor-pointer hover:bg-white/5 transition-colors rounded-l-full">
              <LocationIcon />
              <div className="flex-1">
                <div className="text-xs text-slate-400 mb-1">Where to next</div>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Destination"
                  className="w-full bg-transparent border-none outline-none text-white placeholder-slate-500 text-sm"
                />
              </div>
            </div>

            {/* Separator */}
            <div className="h-12 w-px bg-white/20"></div>

            {/* Dates */}
            <div className="flex-1 flex items-center gap-3 px-6 py-4 cursor-pointer hover:bg-white/5 transition-colors relative">
              <CalendarIcon />
              <div className="flex-1">
                <div className="text-xs text-slate-400 mb-1">Pick your dates</div>
                <div className="text-sm text-white relative">
                  {checkIn && checkOut ? (
                    <span>{new Date(checkIn).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(checkOut).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  ) : checkIn ? (
                    <span>{new Date(checkIn).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - Select checkout</span>
                  ) : (
                    <span className="text-slate-500">Select dates</span>
                  )}
                  {!checkIn ? (
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  ) : (
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="h-12 w-px bg-white/20"></div>

            {/* Guests & Rooms */}
            <div className="flex-1 flex items-center gap-3 px-6 py-4 cursor-pointer hover:bg-white/5 transition-colors">
              <PersonIcon />
              <div className="flex-1">
                <div className="text-xs text-slate-400 mb-1">Guests & Rooms</div>
                <div className="text-sm text-white">
                  <span>{people} Person{people !== 1 ? 's' : ''} {rooms} Room{rooms !== 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="ml-2 mr-2 my-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Find my trip
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}