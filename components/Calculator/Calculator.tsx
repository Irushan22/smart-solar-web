'use client';

import { useState, useMemo } from 'react';
import styles from './Calculator.module.css';

// Standard inverter sizes (kW)
const INVERTER_SIZES = [3, 5, 8, 10, 15, 20, 25, 30, 40, 50];

// Panel specs (standard 550W panel)
const PANEL_WIDTH = 1.7; // meters
const PANEL_HEIGHT = 1.0; // meters
const PANEL_WATT = 550;
const USABLE_AREA_FACTOR = 0.8;
const PEAK_SUN_HOURS = 4.5;
const SYSTEM_EFFICIENCY = 0.85;

function getInverterSize(capacityKw: number): number {
  for (const size of INVERTER_SIZES) {
    if (size >= capacityKw) return size;
  }
  return Math.ceil(capacityKw / 10) * 10;
}

export const Calculator = () => {
  const [width, setWidth] = useState(10);
  const [length, setLength] = useState(8);
  const [monthlyUsage, setMonthlyUsage] = useState(300);

  const results = useMemo(() => {
    const usableArea = width * length * USABLE_AREA_FACTOR;
    const panelsCols = Math.floor(width / PANEL_WIDTH);
    const panelsRows = Math.floor(length / PANEL_HEIGHT);
    const panelCount = Math.floor(panelsCols * panelsRows * USABLE_AREA_FACTOR);
    const capacityKw = parseFloat(((panelCount * PANEL_WATT) / 1000).toFixed(1));
    const inverterKw = getInverterSize(capacityKw);
    const monthlyGeneration = Math.round(
      capacityKw * PEAK_SUN_HOURS * 30 * SYSTEM_EFFICIENCY
    );
    const savedUnits = Math.min(monthlyGeneration, monthlyUsage);
    const savingsPercent = monthlyUsage > 0
      ? Math.min(Math.round((monthlyGeneration / monthlyUsage) * 100), 100)
      : 0;

    return {
      panelCount,
      capacityKw,
      inverterKw,
      monthlyGeneration,
      savedUnits,
      savingsPercent,
      panelsCols: Math.max(panelsCols, 1),
      panelsRows: Math.max(panelsRows, 1),
    };
  }, [width, length, monthlyUsage]);

  // For the panel grid visual: limit display to reasonable size
  const visualCols = Math.min(results.panelsCols, 20);
  const visualRows = Math.min(results.panelsRows, 15);

  return (
    <section id="calculator" className={styles.calculator}>
      {/* Decorative backgrounds */}
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>
      <div className={styles.gridPattern}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>SOLAR CALCULATOR</span>
          <h2 className={styles.title}>
            Estimate Your <span className={styles.highlight}>Solar Potential</span>
          </h2>
          <p className={styles.headerDescription}>
            Enter your roof dimensions and monthly electricity usage to see how much
            solar energy you could generate and save.
          </p>
        </div>

        {/* Layout: Inputs + Results */}
        <div className={styles.layout}>
          {/* ── Left: Input Panel ── */}
          <div className={styles.inputPanel}>
            {/* Roof Dimensions */}
            <div className={styles.inputGroup}>
              <div className={styles.inputGroupTitle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="12" y1="3" x2="12" y2="21" />
                </svg>
                Roof Dimensions
              </div>

              <div className={styles.inputRow}>
                <div className={styles.inputLabel}>
                  <span className={styles.inputLabelText}>Width</span>
                  <div className={styles.inputValue}>
                    <span className={styles.inputValueNumber}>{width}</span>
                    <span className={styles.inputValueUnit}>m</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="3"
                  max="50"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className={styles.slider}
                  style={{
                    background: `linear-gradient(to right, #73b042 0%, #73b042 ${((width - 3) / 47) * 100}%, rgba(255,255,255,0.08) ${((width - 3) / 47) * 100}%, rgba(255,255,255,0.08) 100%)`,
                  }}
                />
              </div>

              <div className={styles.inputRow}>
                <div className={styles.inputLabel}>
                  <span className={styles.inputLabelText}>Length</span>
                  <div className={styles.inputValue}>
                    <span className={styles.inputValueNumber}>{length}</span>
                    <span className={styles.inputValueUnit}>m</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="3"
                  max="50"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className={styles.slider}
                  style={{
                    background: `linear-gradient(to right, #73b042 0%, #73b042 ${((length - 3) / 47) * 100}%, rgba(255,255,255,0.08) ${((length - 3) / 47) * 100}%, rgba(255,255,255,0.08) 100%)`,
                  }}
                />
              </div>
            </div>

            {/* Energy Usage */}
            <div className={styles.inputGroup}>
              <div className={styles.inputGroupTitle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                Monthly Energy Usage
              </div>

              <div className={styles.inputRow}>
                <div className={styles.inputLabel}>
                  <span className={styles.inputLabelText}>Current Usage</span>
                  <div className={styles.inputValue}>
                    <span className={styles.inputValueNumber}>{monthlyUsage}</span>
                    <span className={styles.inputValueUnit}>kWh</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="10"
                  value={monthlyUsage}
                  onChange={(e) => setMonthlyUsage(Number(e.target.value))}
                  className={styles.slider}
                  style={{
                    background: `linear-gradient(to right, #73b042 0%, #73b042 ${((monthlyUsage - 50) / 1950) * 100}%, rgba(255,255,255,0.08) ${((monthlyUsage - 50) / 1950) * 100}%, rgba(255,255,255,0.08) 100%)`,
                  }}
                />
              </div>
            </div>

            {/* Area Visual */}
            <div className={styles.areaVisual}>
              <div className={styles.areaVisualLabel}>Panel Layout Preview</div>
              <div className={styles.areaBox}>
                <div
                  className={styles.panelGrid}
                  style={{
                    gridTemplateColumns: `repeat(${visualCols}, 12px)`,
                  }}
                >
                  {Array.from({ length: Math.min(visualCols * visualRows, 200) }).map((_, i) => (
                    <div key={i} className={styles.panelCell}></div>
                  ))}
                </div>
                <span className={`${styles.areaLabel} ${styles.areaLabelWidth}`}>
                  {width}m
                </span>
                <span className={`${styles.areaLabel} ${styles.areaLabelLength}`}>
                  {length}m
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: Results ── */}
          <div className={styles.resultsPanel}>
            {/* Stat Cards */}
            <div className={styles.resultsGrid}>
              {/* Panels */}
              <div className={styles.resultCard}>
                <div className={styles.resultCardAccent}></div>
                <div className={styles.resultCardIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="14" x2="20" y2="14" />
                    <line x1="12" y1="2" x2="12" y2="22" />
                  </svg>
                </div>
                <div className={styles.resultCardValue}>{results.panelCount}</div>
                <div className={styles.resultCardLabel}>Solar Panels</div>
              </div>

              {/* Capacity */}
              <div className={styles.resultCard}>
                <div className={styles.resultCardAccent}></div>
                <div className={styles.resultCardIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                </div>
                <div className={styles.resultCardValue}>{results.capacityKw}<span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>kW</span></div>
                <div className={styles.resultCardLabel}>System Capacity</div>
              </div>

              {/* Inverter */}
              <div className={styles.resultCard}>
                <div className={styles.resultCardAccent}></div>
                <div className={styles.resultCardIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="7" width="12" height="14" rx="2" />
                    <line x1="10" y1="3" x2="10" y2="7" />
                    <line x1="14" y1="3" x2="14" y2="7" />
                    <line x1="10" y1="12" x2="14" y2="12" />
                    <line x1="12" y1="10" x2="12" y2="14" />
                  </svg>
                </div>
                <div className={styles.resultCardValue}>{results.inverterKw}<span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>kW</span></div>
                <div className={styles.resultCardLabel}>Inverter Size</div>
              </div>

              {/* Monthly Generation */}
              <div className={styles.resultCard}>
                <div className={styles.resultCardAccent}></div>
                <div className={styles.resultCardIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div className={styles.resultCardValue}>{results.monthlyGeneration.toLocaleString()}<span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}> kWh</span></div>
                <div className={styles.resultCardLabel}>Monthly Generation</div>
              </div>
            </div>

            {/* Savings Card */}
            <div className={styles.savingsCard}>
              <div className={styles.savingsHeader}>
                <div className={styles.savingsTitle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                  Monthly Savings
                </div>
                <div className={styles.savingsPercentage}>{results.savingsPercent}%</div>
              </div>

              {/* Progress Bar */}
              <div className={styles.progressBarTrack}>
                <div
                  className={styles.progressBarFill}
                  style={{ width: `${results.savingsPercent}%` }}
                ></div>
              </div>

              {/* Details */}
              <div className={styles.savingsDetails}>
                <div className={styles.savingsDetail}>
                  <span className={styles.savingsDetailValue}>{monthlyUsage} kWh</span>
                  <span className={styles.savingsDetailLabel}>Current Usage</span>
                </div>
                <div className={`${styles.savingsDetail} ${styles.savingsDetailGreen}`}>
                  <span className={styles.savingsDetailValue}>{results.monthlyGeneration.toLocaleString()} kWh</span>
                  <span className={styles.savingsDetailLabel}>Solar Generation</span>
                </div>
                <div className={styles.savingsDetail}>
                  <span className={styles.savingsDetailValue}>{results.savedUnits} units</span>
                  <span className={styles.savingsDetailLabel}>Units Saved</span>
                </div>
                <div className={styles.savingsDetail}>
                  <span className={styles.savingsDetailValue}>{Math.max(monthlyUsage - results.savedUnits, 0)} kWh</span>
                  <span className={styles.savingsDetailLabel}>Grid Needed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
