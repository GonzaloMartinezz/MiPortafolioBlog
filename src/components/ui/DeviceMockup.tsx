"use client"

import React from "react"

/* ────────────────────────────────────────────────────────────
   LaptopMockup
   Renders children inside a realistic dark-laptop frame.
   ──────────────────────────────────────────────────────────── */
interface LaptopMockupProps {
  children: React.ReactNode
  className?: string
  screenClassName?: string
}

export function LaptopMockup({ children, className = "", screenClassName = "" }: LaptopMockupProps) {
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* ── Screen lid ── */}
      <div
        className="relative w-full rounded-t-[14px] rounded-b-[4px] overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 100%)",
          padding: "10px 10px 6px",
          boxShadow:
            "0 0 0 1px #111, 0 20px 60px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        {/* Camera dot */}
        <div className="flex justify-center mb-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "#3a3a3a", boxShadow: "inset 0 0 0 1px #111" }}
          />
        </div>

        {/* Screen glass */}
        <div
          className={`relative overflow-hidden rounded-[6px] ${screenClassName}`}
          style={{
            background: "#090909",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
            aspectRatio: "16/10",
          }}
        >
          {/* Glare overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(130deg, rgba(255,255,255,0.04) 0%, transparent 55%)",
            }}
          />
          {children}
        </div>
      </div>

      {/* ── Base / keyboard ── */}
      <div className="relative w-full" style={{ marginTop: "-1px" }}>
        {/* Hinge bar */}
        <div
          className="w-full h-[5px] rounded-none"
          style={{
            background: "linear-gradient(180deg, #252525 0%, #1a1a1a 100%)",
            boxShadow: "0 1px 0 #111",
          }}
        />
        {/* Keyboard deck — wider than lid */}
        <div
          className="relative mx-auto"
          style={{
            width: "110%",
            marginLeft: "-5%",
            background: "linear-gradient(180deg, #272727 0%, #1e1e1e 100%)",
            borderRadius: "0 0 12px 12px",
            clipPath: "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)",
            height: "28px",
            boxShadow: "0 6px 16px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.6)",
          }}
        >
          {/* Trackpad */}
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-[4px]"
            style={{
              width: "28%",
              height: "10px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          />
        </div>
        {/* Ground shadow */}
        <div
          className="absolute -bottom-3 left-0 right-0 mx-auto h-3 rounded-full"
          style={{
            width: "80%",
            background: "rgba(0,0,0,0.35)",
            filter: "blur(8px)",
          }}
        />
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────
   PhoneMockup
   Renders children inside a realistic iPhone-style frame.
   ──────────────────────────────────────────────────────────── */
interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export function PhoneMockup({ children, className = "", dark = true }: PhoneMockupProps) {
  const frameColor = dark
    ? "linear-gradient(145deg, #2a2a2a 0%, #111 100%)"
    : "linear-gradient(145deg, #e5e5e5 0%, #c8c8c8 100%)"
  const sideColor = dark ? "#1a1a1a" : "#b0b0b0"
  const buttonColor = dark ? "#222" : "#c0c0c0"

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
      style={{
        background: frameColor,
        borderRadius: "44px",
        padding: "12px 10px",
        boxShadow: dark
          ? "0 0 0 1px #000, inset 0 0 0 1px rgba(255,255,255,0.08), 0 30px 70px rgba(0,0,0,0.7), 0 10px 30px rgba(0,0,0,0.5)"
          : "0 0 0 1px #999, inset 0 0 0 1px rgba(255,255,255,0.6), 0 20px 50px rgba(0,0,0,0.25)",
      }}
    >
      {/* Side buttons — volume (left) */}
      {[24, 52, 76].map((top, i) => (
        <div
          key={i}
          className="absolute -left-[3px] rounded-l-sm"
          style={{
            top: `${top}px`,
            width: "3px",
            height: i === 0 ? "22px" : "32px",
            background: buttonColor,
          }}
        />
      ))}
      {/* Power button (right) */}
      <div
        className="absolute -right-[3px] rounded-r-sm"
        style={{
          top: "54px",
          width: "3px",
          height: "48px",
          background: buttonColor,
        }}
      />

      {/* Screen */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: "34px",
          width: "100%",
          aspectRatio: "9/19.5",
          background: "#fff",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
        }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
          <div
            style={{
              width: "80px",
              height: "26px",
              borderRadius: "13px",
              background: "#000",
            }}
          />
        </div>

        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 pt-2 pb-1">
          <span className="text-[10px] font-bold text-black leading-none mt-1">
            09:41
          </span>
          <div className="flex items-center gap-1 mt-1">
            {/* Signal dots */}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <rect x="0" y="6" width="2" height="4" rx="0.5" fill="black" />
              <rect x="3" y="4" width="2" height="6" rx="0.5" fill="black" />
              <rect x="6" y="2" width="2" height="8" rx="0.5" fill="black" />
              <rect x="9" y="0" width="2" height="10" rx="0.5" fill="black" />
            </svg>
            {/* WiFi */}
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path d="M6 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="black"/>
              <path d="M3 6a4.24 4.24 0 0 1 6 0" stroke="black" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M1 4a6.97 6.97 0 0 1 10 0" stroke="black" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            {/* Battery */}
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <rect x="0.5" y="0.5" width="16" height="9" rx="2.5" stroke="black" strokeOpacity="0.35"/>
              <rect x="2" y="2" width="12" height="6" rx="1.5" fill="black"/>
              <path d="M17.5 3.5v3a1.5 1.5 0 0 0 0-3Z" fill="black" fillOpacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* App content */}
        <div className="absolute inset-0 pt-14 pb-6">{children}</div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <div
            style={{
              width: "100px",
              height: "4px",
              borderRadius: "2px",
              background: "rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </div>
    </div>
  )
}
