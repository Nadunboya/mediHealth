"use client";
import Image from "next/image";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";

// Initialize fonts
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function MedilabLanding() {
  return (
    <main className="page-bg">
      <style jsx global>{`
        :root {
          --paper: #f2f4ef;
          --ink: #1c2b36;
          --ink-60: #5b6b75;
          --ink-30: #a9b4b9;
          --pulse: #c43d2e;
          --pulse-dark: #a6321f;
          --sage: #3e7a6b;
          --mist: #dce3e0;
          --amber: #d68a2d;
          --white: #ffffff;

          --font-display: ${fraunces.style.fontFamily}, serif;
          --font-body: ${inter.style.fontFamily}, sans-serif;
          --font-data: ${plexMono.style.fontFamily}, monospace;

          --space-xs: 8px;
          --space-sm: 16px;
          --space-md: 24px;
          --space-lg: 48px;
          --space-xl: 96px;
          --space-2xl: 144px;

          --radius-card: 12px;
          --radius-control: 8px;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-color: var(--paper);
          color: var(--ink);
          font-family: var(--font-body);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        @media (min-width: 768px) {
          .container {
            padding: 0 64px;
          }
        }

        /* Typography */
        h1,
        h2,
        h3 {
          font-family: var(--font-display);
          font-weight: 500;
          line-height: 1.15;
        }
        h1 {
          font-size: clamp(40px, 5vw, 56px);
          line-height: 1.05;
        }
        h2 {
          font-size: 36px;
          line-height: 1.15;
          margin-bottom: var(--space-md);
        }
        h3 {
          font-size: 22px;
          line-height: 1.3;
          margin-bottom: var(--space-sm);
        }
        p {
          font-size: 16px;
          color: var(--ink-60);
        }
        .large {
          font-size: 18px;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-xs);
          height: 48px;
          padding: 0 24px;
          border-radius: var(--radius-control);
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          cursor: pointer;
          transition: all 150ms ease-out;
          border: 1px solid transparent;
        }
        .btn-primary {
          background: var(--pulse);
          color: var(--paper);
        }
        .btn-primary:hover {
          background: var(--pulse-dark);
        }
        .btn-primary:active {
          transform: scale(0.98);
        }

        .btn-secondary {
          background: transparent;
          color: var(--ink);
          border-color: var(--ink-30);
        }
        .btn-secondary:hover {
          background: rgba(220, 227, 224, 0.4);
        }

        .btn-on-dark {
          background: var(--pulse);
          color: var(--paper);
        }

        /* Layouts */
        section {
          padding: var(--space-xl) 0;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-lg);
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
          }
          .grid-2 {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-2xl);
          }
        }

        /* Cards */
        .card {
          background: var(--white);
          border: 1px solid var(--mist);
          border-radius: var(--radius-card);
          padding: 32px;
          transition: border-color 150ms ease-out;
        }
        .card:hover {
          border-color: var(--ink-30);
        }

        .icon-lead {
          width: 24px;
          height: 24px;
          margin-bottom: var(--space-sm);
          color: var(--pulse);
        }
        .icon-sage {
          color: var(--sage);
        }

        /* Nav */
        nav {
          padding: var(--space-md) 0;
          border-bottom: 1px solid var(--mist);
        }
        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 500;
          color: var(--ink);
          text-decoration: none;
        }
        .nav-links {
          display: none;
          gap: var(--space-lg);
          align-items: center;
        }
        .nav-links a {
          color: var(--ink-60);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 150ms;
        }
        .nav-links a:hover {
          color: var(--ink);
        }
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
        }

        /* Hero */
        .hero {
          padding: var(--space-2xl) 0;
        }
        .eyebrow {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: var(--pulse);
          margin-bottom: var(--space-sm);
        }
        .hero-visual {
          background: var(--white);
          border: 1px solid var(--mist);
          border-radius: var(--radius-card);
          padding: var(--space-md);
          position: relative;
        }
        .prescription-line {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 18px;
          color: var(--ink-60);
          margin-bottom: var(--space-sm);
        }
        .data-row {
          display: flex;
          justify-content: space-between;
          padding: var(--space-xs) 0;
          border-top: 1px solid var(--mist);
          font-family: var(--font-data);
          font-size: 15px;
        }
        .data-label {
          color: var(--ink-60);
        }
        .data-value {
          color: var(--ink);
          font-weight: 500;
        }

        /* Analytics / Charts */
        .chart-container {
          display: flex;
          align-items: flex-end;
          gap: var(--space-sm);
          height: 120px;
          margin-top: var(--space-md);
          padding-top: var(--space-md);
          border-top: 1px solid var(--mist);
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
          background: var(--sage);
          border-radius: 4px 4px 0 0;
          opacity: 0.8;
          transition: opacity 150ms;
        }
        .bar:hover {
          opacity: 1;
        }
        .bar-label {
          font-family: var(--font-data);
          font-size: 12px;
          color: var(--ink-60);
        }

        /* Dark Section */
        .dark-section {
          background: var(--ink);
          color: var(--paper);
        }
        .dark-section h2,
        .dark-section h3 {
          color: var(--paper);
        }
        .dark-section p {
          color: var(--mist);
        }
        .disclaimer {
          font-size: 13px;
          color: var(--ink-30);
          margin-top: var(--space-lg);
          padding-top: var(--space-md);
          border-top: 1px solid var(--ink-60);
          font-family: var(--font-data);
        }
        .sage-text {
          color: var(--sage);
        }
        .amber-text {
          color: var(--amber);
        }

        /* Footer */
        footer {
          background: var(--ink);
          padding: var(--space-xl) 0 var(--space-lg);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-lg);
          color: var(--mist);
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr;
          }
        }
        footer a {
          color: var(--ink-30);
          text-decoration: none;
          display: block;
          margin-bottom: 12px;
          font-size: 14px;
          transition: color 150ms;
        }
        footer a:hover {
          color: var(--paper);
        }
        .legal {
          font-family: var(--font-data);
          font-size: 12px;
          color: var(--ink-30);
          margin-top: var(--space-xl);
          padding-top: var(--space-md);
          border-top: 1px solid var(--ink-60);
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="container nav-inner">
          <a href="#" className="logo">
            Medilab
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#analytics">Analytics</a>
            <a href="#security">Security</a>
            <a
              href="#"
              className="btn btn-secondary"
              style={{ height: "40px", padding: "0 16px" }}
            >
              Sign in
            </a>
            <a
              href="#"
              className="btn btn-primary"
              style={{ height: "40px", padding: "0 16px" }}
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        {/* Hero Visual: App in use */}
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="eyebrow">Your health, structured</div>
              <h1>Turn paper prescriptions into structured, secure records.</h1>
              <p className="large" style={{ margin: "24px 0 32px" }}>
                Scan a prescription, and Medilab extracts the data locally.
                Track your medical history, rate your doctors, and gain
                AI-driven insights—all with strict privacy controls.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="#" className="btn btn-primary">
                  Scan a prescription
                </a>
                <a href="#" className="btn btn-secondary">
                  Search doctors
                </a>
              </div>
            </div>

            {/* Hero Visual: App in use */}
            <div
              className="hero-visual"
              style={{ padding: 0, overflow: "hidden" }}
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

      {/* Core Features Grid */}
      <section id="features" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ marginBottom: "48px", maxWidth: "600px" }}>
            <div className="eyebrow">Core features</div>
            <h2>Everything tied to your medical record.</h2>
            <p>
              From the moment you scan a prescription, Medilab creates a
              traceable, structured history. Set reminders, track labs, and link
              follow-ups directly to the source.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <svg
                className="icon-lead"
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
                className="icon-lead"
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
                OCR detects phrases like review after 2 weeks, and auto-suggests
                lab test or medication reminders. Syncs with iOS and Android
                calendars.
              </p>
            </div>

            <div className="card">
              <svg
                className="icon-lead"
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

      {/* Doctor Discovery & Analytics */}
      <section
        id="analytics"
        style={{
          background: "var(--mist)",
          borderTop: "1px solid var(--mist)",
          borderBottom: "1px solid var(--mist)",
        }}
      >
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="eyebrow">Doctor discovery</div>
              <h2>Find reliable doctors with anonymized analytics.</h2>
              <p style={{ marginBottom: "32px" }}>
                Search by name, hospital, or specialization. View profiles to
                read reviews and see what conditions a doctor treats most
                frequently.
              </p>

              <div className="card" style={{ background: "var(--paper)" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <div>
                    <h3 style={{ margin: 0 }}>Dr. Sarah Jenkins</h3>
                    <span style={{ color: "var(--ink-60)", fontSize: "14px" }}>
                      Cardiology · City Health Clinic
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-data)",
                      color: "var(--sage)",
                      fontWeight: 500,
                    }}
                  >
                    4.8 ★
                  </div>
                </div>

                <div className="eyebrow" style={{ color: "var(--ink-60)" }}>
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
                    fontSize: "13px",
                    marginTop: "16px",
                    color: "var(--ink-30)",
                  }}
                >
                  Aggregated from OCR data. No individual user names or record
                  IDs are surfaced.
                </p>
              </div>
            </div>

            <div>
              <div className="card" style={{ background: "var(--paper)" }}>
                <h3>Prescription-gated reviews</h3>
                <p>
                  You can only rate a doctor if you upload a prescription from
                  them that successfully passes OCR. No workarounds, no fake
                  reviews.
                </p>
                <div
                  style={{
                    marginTop: "24px",
                    padding: "16px",
                    background: "var(--mist)",
                    borderRadius: "var(--radius-control)",
                  }}
                >
                  <div className="data-row" style={{ border: "none" }}>
                    <span className="data-label">RECORD DATE</span>
                    <span className="data-value">2023-10-24</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">REVIEW STATUS</span>
                    <span className="data-value sage-text">
                      ELIGIBLE TO RATE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Health Intelligence (Dark Section) */}
      <section className="dark-section">
        <div className="container">
          <div
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <div className="eyebrow" style={{ color: "var(--sage)" }}>
              AI health intelligence
            </div>
            <h2>Informational insights, not clinical directives.</h2>
            <p className="large" style={{ margin: "24px 0 48px" }}>
              Our AI detects long-term trends across your historical health
              records and suggests lab tests based on anonymized patterns.
            </p>
          </div>

          <div className="grid-3">
            <div
              style={{
                padding: "32px",
                border: "1px solid var(--ink-60)",
                borderRadius: "var(--radius-card)",
              }}
            >
              <svg
                className="icon-lead icon-sage"
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
              <p style={{ color: "var(--mist)" }}>
                Detects gradually increasing blood sugar or frequent respiratory
                visits. Prompted to consult a professional when anomalies arise.
              </p>
            </div>

            <div
              style={{
                padding: "32px",
                border: "1px solid var(--ink-60)",
                borderRadius: "var(--radius-card)",
              }}
            >
              <svg
                className="icon-lead icon-sage"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
              <h3>Lab test recommendations</h3>
              <p style={{ color: "var(--mist)" }}>
                Suggests relevant lab tests based on your medical history. Each
                recommendation includes an explainable reasoning summary.
              </p>
            </div>

            <div
              style={{
                padding: "32px",
                border: "1px solid var(--ink-60)",
                borderRadius: "var(--radius-card)",
              }}
            >
              <svg
                className="icon-lead icon-sage"
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
              <p style={{ color: "var(--mist)" }}>
                Generates personalized preventive checkup suggestions based on
                age, medical history, and prior conditions. Adapts as new
                records are added.
              </p>
            </div>
          </div>

          <div
            className="disclaimer"
            style={{ maxWidth: "800px", margin: "48px auto 0" }}
          >
            AI DISCLAIMER: All AI-generated outputs are informational and
            assistive only. They are not medical diagnoses and must not be
            treated as professional medical advice. Always consult a licensed
            healthcare professional.
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section id="security">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="eyebrow">Privacy, security & compliance</div>
              <h2>Your health data is encrypted, scoped, and yours alone.</h2>
              <p style={{ marginBottom: "32px" }}>
                Prescription images are stored in a private Cloudflare R2 bucket
                with server-validated pre-signed URLs. No cross-user access is
                possible.
              </p>
              <div className="grid-3" style={{ gap: "24px" }}>
                <div>
                  <div
                    className="data-value"
                    style={{
                      fontFamily: "var(--font-data)",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    ENCRYPTED
                  </div>
                  <p>TLS in transit, R2 server-side encryption at rest.</p>
                </div>
                <div>
                  <div
                    className="data-value"
                    style={{
                      fontFamily: "var(--font-data)",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    SCOPED
                  </div>
                  <p>
                    Strict per-user access. Biometric Face ID / fingerprint
                    locking supported.
                  </p>
                </div>
                <div>
                  <div
                    className="data-value"
                    style={{
                      fontFamily: "var(--font-data)",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    COMPLIANT
                  </div>
                  <p>
                    Architecture designed to align with GDPR, HIPAA, and CCPA
                    principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated Lab Report Card */}
            <div className="card" style={{ background: "var(--white)" }}>
              <div className="eyebrow" style={{ color: "var(--ink-60)" }}>
                Lab report OCR tracking
              </div>
              <h3>Historical Health Values</h3>

              <div style={{ marginTop: "24px" }}>
                <div className="data-row">
                  <span className="data-label">GLUCOSE (2022-05)</span>
                  <span className="data-value sage-text">95 mg/dL</span>
                </div>
                <div className="data-row">
                  <span className="data-label">GLUCOSE (2023-01)</span>
                  <span className="data-value sage-text">102 mg/dL</span>
                </div>
                <div className="data-row">
                  <span className="data-label">GLUCOSE (2023-10)</span>
                  <span className="data-value amber-text">118 mg/dL</span>
                </div>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--amber)",
                  marginTop: "16px",
                }}
              >
                ⚠ Amber flag: Out of range lab value detected. AI suggests a
                follow-up test.
              </p>
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
                style={{ color: "var(--paper)", marginBottom: "16px" }}
              >
                Medilab
              </a>
              <p style={{ color: "var(--ink-30)", maxWidth: "300px" }}>
                Clinical paper turning into clean signal. A mobile-first
                application for managing your medical history securely.
              </p>
            </div>
            <div>
              <h4
                style={{
                  color: "var(--paper)",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  marginBottom: "16px",
                }}
              >
                Product
              </h4>
              <a href="#">Features</a>
              <a href="#">AI Intelligence</a>
              <a href="#">Hospital Integration</a>
            </div>
            <div>
              <h4
                style={{
                  color: "var(--paper)",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  marginBottom: "16px",
                }}
              >
                Legal
              </h4>
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
