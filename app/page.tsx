"use client";
import Image from "next/image";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function MedilabLanding() {
  return (
    <main className="page-bg">
      <style jsx global>{`
        :root {
          --bg: #08080e;
          --bg-elevated: #0e0e18;
          --surface: rgba(255, 255, 255, 0.035);
          --surface-hover: rgba(255, 255, 255, 0.065);
          --border: rgba(255, 255, 255, 0.08);
          --border-hover: rgba(255, 255, 255, 0.16);
          --text: #eeeef0;
          --text-secondary: rgba(255, 255, 255, 0.55);
          --text-muted: rgba(255, 255, 255, 0.3);

          --violet: #8b5cf6;
          --violet-dark: #7c3aed;
          --cyan: #06b6d4;
          --cyan-bright: #22d3ee;
          --rose: #f43f5e;
          --rose-bright: #fb7185;
          --emerald: #34d399;
          --amber: #fbbf24;
          --pink: #ec4899;

          --gradient-primary: linear-gradient(
            135deg,
            var(--violet),
            var(--cyan)
          );
          --gradient-accent: linear-gradient(
            135deg,
            var(--violet),
            var(--rose)
          );
          --gradient-full: linear-gradient(
            135deg,
            var(--violet),
            var(--cyan),
            var(--rose)
          );

          --font-display: ${spaceGrotesk.style.fontFamily}, sans-serif;
          --font-body: ${inter.style.fontFamily}, sans-serif;
          --font-data: ${plexMono.style.fontFamily}, monospace;

          --radius-card: 20px;
          --radius-control: 12px;
          --radius-pill: 100px;

          --space-xs: 8px;
          --space-sm: 16px;
          --space-md: 24px;
          --space-lg: 48px;
          --space-xl: 96px;
          --space-2xl: 144px;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-color: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .page-bg {
          background-color: var(--bg);
          background-image: radial-gradient(
            rgba(255, 255, 255, 0.03) 1px,
            transparent 1px
          );
          background-size: 32px 32px;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .container {
            padding: 0 64px;
          }
        }

        /* ── Typography ── */
        h1,
        h2,
        h3,
        h4 {
          font-family: var(--font-display);
          font-weight: 600;
          line-height: 1.15;
          color: var(--text);
        }
        h1 {
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        h2 {
          font-size: clamp(28px, 3.5vw, 40px);
          line-height: 1.15;
          margin-bottom: var(--space-md);
          letter-spacing: -0.01em;
        }
        h3 {
          font-size: 20px;
          line-height: 1.3;
          margin-bottom: var(--space-sm);
        }
        p {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .large {
          font-size: 18px;
        }

        .gradient-text {
          background: var(--gradient-full);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Badge ── */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: var(--radius-pill);
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          color: var(--violet);
          margin-bottom: var(--space-md);
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--emerald);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,
          100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 0 6px rgba(52, 211, 153, 0);
          }
        }

        .badge-cyan {
          background: rgba(6, 182, 212, 0.08);
          border-color: rgba(6, 182, 212, 0.2);
          color: var(--cyan);
        }
        .badge-muted {
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--border);
          color: var(--text-muted);
        }

        /* ── Buttons ── */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-xs);
          height: 48px;
          padding: 0 28px;
          border-radius: var(--radius-control);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          cursor: pointer;
          transition: all 250ms ease-out;
          border: 1px solid transparent;
          white-space: nowrap;
        }
        .btn-primary {
          background: var(--gradient-primary);
          color: white;
          border: none;
          box-shadow:
            0 0 24px rgba(139, 92, 246, 0.25),
            0 4px 16px rgba(0, 0, 0, 0.3);
        }
        .btn-primary:hover {
          box-shadow:
            0 0 40px rgba(139, 92, 246, 0.4),
            0 4px 20px rgba(0, 0, 0, 0.4);
          transform: translateY(-2px);
        }
        .btn-primary:active {
          transform: translateY(0) scale(0.98);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text);
          border-color: var(--border);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--border-hover);
          transform: translateY(-1px);
        }
        .btn-secondary:active {
          transform: scale(0.98);
        }

        .btn-sm {
          height: 38px;
          padding: 0 18px;
          font-size: 13px;
          border-radius: 10px;
        }

        /* ── Layouts ── */
        section {
          padding: var(--space-xl) 0;
          position: relative;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-md);
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-lg);
          align-items: center;
        }

        @media (min-width: 768px) {
          .grid-3 {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-lg);
          }
          .grid-2 {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-2xl);
          }
        }

        /* ── Cards ── */
        .card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-card);
          padding: 32px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 300ms ease-out;
        }
        .card:hover {
          background: var(--surface-hover);
          border-color: var(--border-hover);
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .card-static {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-card);
          padding: 32px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .icon-lead {
          width: 24px;
          height: 24px;
          margin-bottom: var(--space-sm);
        }
        .icon-violet {
          color: var(--violet);
        }
        .icon-cyan {
          color: var(--cyan);
        }
        .icon-rose {
          color: var(--rose);
        }
        .icon-emerald {
          color: var(--emerald);
        }

        /* ── Gradient Divider ── */
        .gradient-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(139, 92, 246, 0.3),
            rgba(6, 182, 212, 0.3),
            transparent
          );
          border: none;
        }

        /* ── Orbs ── */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }
        .orb-1 {
          width: 550px;
          height: 550px;
          background: var(--violet);
          opacity: 0.1;
          top: -180px;
          right: -120px;
          animation: float-1 8s ease-in-out infinite;
        }
        .orb-2 {
          width: 400px;
          height: 400px;
          background: var(--cyan);
          opacity: 0.07;
          bottom: -120px;
          left: -80px;
          animation: float-2 10s ease-in-out infinite;
        }
        .orb-3 {
          width: 280px;
          height: 280px;
          background: var(--rose);
          opacity: 0.05;
          top: 40%;
          left: 35%;
          animation: float-3 12s ease-in-out infinite;
        }
        .orb-4 {
          width: 350px;
          height: 350px;
          background: var(--violet);
          opacity: 0.06;
          top: -100px;
          left: 30%;
          animation: float-2 14s ease-in-out infinite;
        }
        .orb-5 {
          width: 300px;
          height: 300px;
          background: var(--cyan);
          opacity: 0.05;
          bottom: -80px;
          right: 20%;
          animation: float-1 11s ease-in-out infinite;
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -25px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 15px) scale(0.95);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, -35px) scale(1.08);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(25px, 30px);
          }
        }

        /* ── Nav ── */
        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          padding: var(--space-md) 0;
          background: rgba(8, 8, 14, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
        }
        .nav-links {
          display: none;
          gap: var(--space-lg);
          align-items: center;
        }
        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 200ms;
        }
        .nav-links a:hover {
          color: var(--text);
        }
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
        }

        /* ── Hero ── */
        .hero {
          padding: var(--space-2xl) 0 var(--space-xl);
          position: relative;
          overflow: hidden;
        }
        .hero-visual {
          border-radius: var(--radius-card);
          overflow: hidden;
          border: 1px solid rgba(139, 92, 246, 0.15);
          box-shadow:
            0 0 40px rgba(139, 92, 246, 0.08),
            0 0 80px rgba(6, 182, 212, 0.04),
            0 24px 48px rgba(0, 0, 0, 0.4);
          position: relative;
        }
        .hero-visual::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.08),
            transparent 50%,
            rgba(6, 182, 212, 0.06)
          );
          pointer-events: none;
          z-index: 1;
        }

        /* ── Analytics Section ── */
        .analytics-section {
          background: var(--bg-elevated);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .doctor-image-wrapper {
          width: 100%;
          height: 220px;
          overflow: hidden;
          border-radius: 14px;
          margin-bottom: 20px;
          position: relative;
        }
        .doctor-image-wrapper::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(
            to top,
            rgba(14, 14, 24, 0.8),
            transparent
          );
          pointer-events: none;
        }

        .chart-container {
          display: flex;
          align-items: flex-end;
          gap: var(--space-sm);
          height: 120px;
          margin-top: var(--space-md);
          padding-top: var(--space-md);
          border-top: 1px solid var(--border);
        }
        .bar-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .bar {
          width: 100%;
          background: var(--gradient-primary);
          border-radius: 6px 6px 0 0;
          opacity: 0.75;
          transition: all 250ms ease-out;
        }
        .bar:hover {
          opacity: 1;
          transform: scaleY(1.03);
          transform-origin: bottom;
          box-shadow: 0 -4px 20px rgba(139, 92, 246, 0.3);
        }
        .bar-label {
          font-family: var(--font-data);
          font-size: 11px;
          color: var(--text-muted);
          text-align: center;
        }

        .data-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-xs) 0;
          border-top: 1px solid var(--border);
          font-family: var(--font-data);
          font-size: 13px;
        }
        .data-label {
          color: var(--text-muted);
          font-size: 11px;
          letter-spacing: 0.04em;
        }
        .data-value {
          color: var(--text);
          font-weight: 500;
        }

        .value-emerald {
          color: var(--emerald);
        }
        .value-amber {
          color: var(--amber);
        }
        .value-violet {
          color: var(--violet);
        }
        .value-cyan {
          color: var(--cyan);
        }

        /* ── AI Section ── */
        .ai-section {
          position: relative;
          overflow: hidden;
        }
        .ai-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--violet),
            var(--cyan),
            transparent
          );
          opacity: 0.4;
        }
        .ai-card {
          padding: 32px;
          border: 1px solid var(--border);
          border-radius: var(--radius-card);
          background: var(--surface);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 300ms ease-out;
          position: relative;
          overflow: hidden;
        }
        .ai-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gradient-primary);
          opacity: 0;
          transition: opacity 300ms;
        }
        .ai-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
        }
        .ai-card:hover::before {
          opacity: 1;
        }

        .disclaimer {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: var(--space-lg);
          padding: var(--space-md);
          border: 1px solid var(--border);
          border-radius: var(--radius-control);
          font-family: var(--font-data);
          background: rgba(244, 63, 94, 0.03);
          border-color: rgba(244, 63, 94, 0.12);
          line-height: 1.6;
        }
        .disclaimer-strong {
          color: var(--rose);
          font-weight: 500;
        }

        /* ── Security Section ── */
        .security-section {
          position: relative;
          overflow: hidden;
        }
        .security-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(6, 182, 212, 0.3),
            rgba(139, 92, 246, 0.3),
            transparent
          );
          opacity: 0.4;
        }

        .security-pill {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 6px;
          font-family: var(--font-data);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.06em;
          margin-bottom: 10px;
        }
        .pill-violet {
          background: rgba(139, 92, 246, 0.12);
          color: var(--violet);
        }
        .pill-cyan {
          background: rgba(6, 182, 212, 0.12);
          color: var(--cyan);
        }
        .pill-emerald {
          background: rgba(52, 211, 153, 0.12);
          color: var(--emerald);
        }

        .warning-box {
          margin-top: 20px;
          padding: 14px 16px;
          background: rgba(251, 191, 36, 0.06);
          border: 1px solid rgba(251, 191, 36, 0.15);
          border-radius: var(--radius-control);
          font-size: 13px;
          color: var(--amber);
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.5;
        }

        /* ── Footer ── */
        footer {
          background: var(--bg);
          border-top: 1px solid var(--border);
          padding: var(--space-xl) 0 var(--space-lg);
          position: relative;
        }
        footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(139, 92, 246, 0.2),
            rgba(6, 182, 212, 0.2),
            transparent
          );
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-lg);
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr;
          }
        }
        footer a {
          color: var(--text-muted);
          text-decoration: none;
          display: block;
          margin-bottom: 12px;
          font-size: 14px;
          transition: color 200ms;
        }
        footer a:hover {
          color: var(--cyan-bright);
        }
        .footer-heading {
          color: var(--text);
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 20px;
        }
        .legal {
          font-family: var(--font-data);
          font-size: 11px;
          color: var(--text-muted);
          margin-top: var(--space-xl);
          padding-top: var(--space-md);
          border-top: 1px solid var(--border);
          line-height: 1.6;
        }

        /* ── Rating Stars ── */
        .rating {
          font-family: var(--font-data);
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .rating-star {
          color: var(--amber);
        }
        .rating-number {
          color: var(--amber);
        }
        .rating-count {
          color: var(--text-muted);
          font-weight: 400;
          font-size: 12px;
        }

        /* ── Responsive tweaks ── */
        @media (max-width: 767px) {
          h1 {
            font-size: 32px;
          }
          h2 {
            font-size: 26px;
          }
          section {
            padding: 72px 0;
          }
          .hero {
            padding: 80px 0 64px;
          }
          .card {
            padding: 24px;
          }
          .ai-card {
            padding: 24px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="container nav-inner">
          <a href="#" className="logo">
            MediHealth
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#analytics">Analytics</a>
            <a href="#security">Security</a>
            <a href="#" className="btn btn-secondary btn-sm">
              Sign in
            </a>
            <a href="#" className="btn btn-primary btn-sm">
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="container">
          <div className="grid-2">
            <div style={{ position: "relative", zIndex: 2 }}>
              <div className="badge">
                <span className="badge-dot" />
                AI-Powered Health Platform
              </div>
              <h1>
                Turn paper prescriptions into{" "}
                <span className="gradient-text">structured, secure</span>{" "}
                records.
              </h1>
              <p
                className="large"
                style={{ margin: "24px 0 36px", maxWidth: "520px" }}
              >
                Scan a prescription, and Medi Health extracts the data locally.
                Track your medical history, rate your doctors, and gain
                AI-driven insights — all with strict privacy controls.
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a href="#" className="btn btn-primary">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  Scan a prescription
                </a>
                <a href="#" className="btn btn-secondary">
                  Search doctors
                </a>
              </div>
            </div>

            <div
              className="hero-visual"
              style={{ position: "relative", zIndex: 2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                alt="Medical professional reviewing patient information"
                width={1200}
                height={800}
                priority
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "400px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* Core Features Grid */}
      <section id="features">
        <div className="container">
          <div style={{ marginBottom: "56px", maxWidth: "600px" }}>
            <div className="badge badge-cyan">Core features</div>
            <h2>Everything tied to your medical record.</h2>
            <p style={{ marginTop: "16px" }}>
              From the moment you scan a prescription, Medi Health creates a
              traceable, structured history. Set reminders, track labs, and link
              follow-ups directly to the source.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <svg
                className="icon-lead icon-violet"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 4l6 6-6 6" />
                <path d="M20 10H8" />
                <path d="M10 20H4V14" />
              </svg>
              <h3>On-device OCR</h3>
              <p>
                Prescription images are processed locally on your phone in under
                5 seconds. No image content is ever transmitted to an external
                server.
              </p>
            </div>

            <div className="card">
              <svg
                className="icon-lead icon-cyan"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <h3>Smart health reminders</h3>
              <p>
                OCR detects phrases like "review after 2 weeks," and
                auto-suggests lab test or medication reminders. Syncs with iOS
                and Android calendars.
              </p>
            </div>

            <div className="card">
              <svg
                className="icon-lead icon-rose"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16l7-3 7 3z" />
              </svg>
              <h3>Hospital integration</h3>
              <p>
                Connect securely to external healthcare systems via FHIR/HL7
                APIs. Import medical history with explicit consent and
                end-to-end encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* Doctor Discovery & Analytics */}
      <section id="analytics" className="analytics-section">
        <div className="orb orb-4" />
        <div className="orb orb-5" />

        <div className="container">
          <div className="grid-2">
            <div style={{ position: "relative", zIndex: 2 }}>
              <div className="badge badge-cyan">Doctor discovery</div>
              <h2>Find reliable doctors with anonymized analytics.</h2>
              <p style={{ marginBottom: "32px" }}>
                Search by name, hospital, or specialization. View profiles to
                read reviews and see what conditions a doctor treats most
                frequently.
              </p>

              <div className="card-static">
                <div className="doctor-image-wrapper">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                    alt="Portrait of Dr. Sarah Jenkins"
                    width={800}
                    height={500}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <h3 style={{ margin: 0, marginBottom: 4 }}>
                      Dr. Sarah Jenkins
                    </h3>
                    <span
                      style={{ color: "var(--text-muted)", fontSize: "14px" }}
                    >
                      Cardiology · City Health Clinic
                    </span>
                  </div>
                  <div className="rating">
                    <span className="rating-number">4.8</span>
                    <span className="rating-star">★</span>
                    <span className="rating-count">(142)</span>
                  </div>
                </div>

                <div
                  className="badge badge-muted"
                  style={{ marginBottom: 16, fontSize: "11px" }}
                >
                  Anonymized treatment patterns
                </div>
                <div className="chart-container">
                  <div className="bar-group">
                    <div className="bar" style={{ height: "80%" }}></div>
                    <span className="bar-label">Hypertension</span>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{ height: "45%" }}></div>
                    <span className="bar-label">Arrhythmia</span>
                  </div>
                  <div className="bar-group">
                    <div className="bar" style={{ height: "30%" }}></div>
                    <span className="bar-label">Check-ups</span>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    marginTop: "16px",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-data)",
                  }}
                >
                  Aggregated from OCR data. No individual user names or record
                  IDs are surfaced.
                </p>
              </div>
            </div>

            <div style={{ position: "relative", zIndex: 2 }}>
              <div className="card">
                <svg
                  className="icon-lead icon-violet"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <h3>Prescription-gated reviews</h3>
                <p>
                  You can only rate a doctor if you upload a prescription from
                  them that successfully passes OCR. No workarounds, no fake
                  reviews.
                </p>
                <div
                  style={{
                    marginTop: "28px",
                    padding: "20px",
                    background: "rgba(139, 92, 246, 0.04)",
                    border: "1px solid rgba(139, 92, 246, 0.1)",
                    borderRadius: "var(--radius-control)",
                  }}
                >
                  <div className="data-row" style={{ border: "none" }}>
                    <span className="data-label">RECORD DATE</span>
                    <span className="data-value">2023-10-24</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">DOCTOR</span>
                    <span className="data-value">Dr. S. Jenkins</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">REVIEW STATUS</span>
                    <span className="data-value value-emerald">
                      ✓ ELIGIBLE TO RATE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Health Intelligence */}
      <section className="ai-section">
        <div
          className="orb orb-1"
          style={{ top: "-200px", right: "-200px", opacity: 0.06 }}
        />
        <div
          className="orb orb-2"
          style={{ bottom: "-150px", left: "-150px", opacity: 0.05 }}
        />

        <div className="container">
          <div
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div className="badge" style={{ margin: "0 auto var(--space-md)" }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              AI Health Intelligence
            </div>
            <h2>Informational insights, not clinical directives.</h2>
            <p className="large" style={{ margin: "20px 0 56px" }}>
              Our AI detects long-term trends across your historical health
              records and suggests lab tests based on anonymized patterns.
            </p>
          </div>

          <div className="grid-3" style={{ position: "relative", zIndex: 2 }}>
            <div className="ai-card">
              <svg
                className="icon-lead icon-cyan"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <h3>Health insights</h3>
              <p>
                Detects gradually increasing blood sugar or frequent respiratory
                visits. Prompts you to consult a professional when anomalies
                arise.
              </p>
            </div>

            <div className="ai-card">
              <svg
                className="icon-lead icon-violet"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <h3>Lab test recommendations</h3>
              <p>
                Suggests relevant lab tests based on your medical history. Each
                recommendation includes an explainable reasoning summary.
              </p>
            </div>

            <div className="ai-card">
              <svg
                className="icon-lead icon-emerald"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h3>Preventive care</h3>
              <p>
                Generates personalized preventive checkup suggestions based on
                age, medical history, and prior conditions. Adapts as new
                records are added.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* Security & Compliance */}
      <section id="security" className="security-section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="badge badge-cyan">
                Privacy, security & compliance
              </div>
              <h2>Your health data is encrypted, scoped, and yours alone.</h2>
              <p style={{ marginBottom: "36px" }}>
                Prescription images are stored in a private Cloudflare R2 bucket
                with server-validated pre-signed URLs. No cross-user access is
                possible.
              </p>
              <div className="grid-3" style={{ gap: "24px" }}>
                <div>
                  <div className="security-pill pill-violet">ENCRYPTED</div>
                  <p style={{ fontSize: "14px" }}>
                    TLS in transit, R2 server-side encryption at rest.
                  </p>
                </div>
                <div>
                  <div className="security-pill pill-cyan">SCOPED</div>
                  <p style={{ fontSize: "14px" }}>
                    Strict per-user access. Biometric Face ID / fingerprint
                    locking supported.
                  </p>
                </div>
                <div>
                  <div className="security-pill pill-emerald">COMPLIANT</div>
                  <p style={{ fontSize: "14px" }}>
                    Architecture designed to align with GDPR, HIPAA, and CCPA
                    principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Lab Report Card */}
            <div
              className="card-static"
              style={{ position: "relative", zIndex: 2 }}
            >
              <div className="badge badge-muted" style={{ fontSize: "11px" }}>
                Lab report OCR tracking
              </div>
              <h3 style={{ marginTop: 16 }}>Historical Health Values</h3>

              <div style={{ marginTop: "24px" }}>
                <div className="data-row">
                  <span className="data-label">GLUCOSE (2022-05)</span>
                  <span className="data-value value-emerald">95 mg/dL</span>
                </div>
                <div className="data-row">
                  <span className="data-label">GLUCOSE (2023-01)</span>
                  <span className="data-value value-emerald">102 mg/dL</span>
                </div>
                <div className="data-row">
                  <span className="data-label">GLUCOSE (2023-10)</span>
                  <span className="data-value value-amber">118 mg/dL</span>
                </div>
              </div>

              <div className="warning-box">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, marginTop: 2 }}
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span>
                  <strong>Amber flag:</strong> Out-of-range lab value detected.
                  AI suggests a follow-up test.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <a
                href="#"
                className="logo"
                style={{
                  display: "inline-block",
                  marginBottom: "16px",
                  fontSize: "20px",
                }}
              >
                MediHealth
              </a>
              <p
                style={{
                  color: "var(--text-muted)",
                  maxWidth: "300px",
                  fontSize: "14px",
                }}
              >
                Clinical paper turning into clean signal. A mobile-first
                application for managing your medical history securely.
              </p>
            </div>
            <div>
              <div className="footer-heading">Product</div>
              <a href="#">Features</a>
              <a href="#">AI Intelligence</a>
              <a href="#">Hospital Integration</a>
            </div>
            <div>
              <div className="footer-heading">Legal</div>
              <a href="#">Privacy Policy</a>
              <a href="#">Data Governance</a>
              <a href="#">Request Data Export</a>
            </div>
          </div>

          <div className="legal">
            © 2023 Intellisr Inc. · Architecture designed to align with GDPR,
            HIPAA, and applicable healthcare data privacy standards.
          </div>
        </div>
      </footer>
    </main>
  );
}
