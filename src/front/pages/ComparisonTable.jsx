import React, { useState } from "react";

// Drop this file into: src/front/pages/ComparisonTable.jsx
// Then in src/front/routes.jsx import it and set it as "/":
//   import { ComparisonTable } from "./pages/ComparisonTable";
//   <Route path="/" element={<ComparisonTable />} />
//
// Uses Bootstrap (already loaded in the react-flask-hello boilerplate).

const COLUMNS = [
    { key: "ui", label: "UI / UX" },
    { key: "cost", label: "Cost" },
    { key: "speed", label: "Speed" },
    { key: "platformDep", label: "Platform Dependency" },
    { key: "control", label: "Control" },
    { key: "maintain", label: "Maintainability" },
    { key: "quality", label: "Code Quality" },
    { key: "reuse", label: "Reusability" },
];

const INITIAL_ROWS = [
    { tool: "Vercel v0", italic: false, ui: 4, cost: 3, speed: 4, platformDep: 4, control: 2, maintain: 3, quality: 3, reuse: 3, notes: "Great for UI prototyping with React/Next." },
    { tool: "Replit", italic: false, ui: 3, cost: 4, speed: 4, platformDep: 3, control: 3, maintain: 3, quality: 3, reuse: 3, notes: "All-in-one online IDE + AI." },
    { tool: "Lovable", italic: false, ui: 5, cost: 3, speed: 5, platformDep: 4, control: 3, maintain: 4, quality: 4, reuse: 4, notes: "Full-stack apps from prompts." },
    { tool: "Windsurf", italic: false, ui: 4, cost: 3, speed: 4, platformDep: 2, control: 4, maintain: 4, quality: 4, reuse: 4, notes: "Agentic IDE by Codeium." },
    { tool: "Cursor", italic: false, ui: 4, cost: 3, speed: 5, platformDep: 2, control: 5, maintain: 4, quality: 5, reuse: 4, notes: "VS Code fork with strong AI." },
    { tool: "ChatGPT", italic: true, ui: 3, cost: 4, speed: 4, platformDep: 1, control: 5, maintain: 4, quality: 4, reuse: 4, notes: "General-purpose LLM (OpenAI)." },
    { tool: "Claude", italic: true, ui: 3, cost: 4, speed: 4, platformDep: 1, control: 5, maintain: 5, quality: 5, reuse: 4, notes: "Strong reasoning & long context (Anthropic)." },
    { tool: "Perplexity", italic: true, ui: 3, cost: 4, speed: 5, platformDep: 1, control: 4, maintain: 3, quality: 3, reuse: 3, notes: "Search-augmented answers." },
];

const ratingColor = () => "bg-light";

export const ComparisonTable = () => {
    const [rows, setRows] = useState(INITIAL_ROWS);

    const getAverage = (row) => {
        const values = COLUMNS.map((c) => row[c.key]);
        const avg =
            values.reduce((sum, value) => sum + value, 0) / values.length;

        return avg.toFixed(1);
    };

    return (
        <div className="container-fluid py-4">
            <div className="d-flex flex-column align-items-center mb-4">
                <h1 className="display-5 fw-bold">Choosing Your Vibe-Coding Tools Wisely</h1>
                <p className="lead text-muted mb-0">
                    Compare AI coding tools & LLMs across 8 dimensions. Rate each one yourself (0–5).
                </p>
            </div>

            <div className="table-responsive shadow-sm rounded">
                <table className="table table-bordered align-middle text-center mb-0">
                    <thead className="table-dark">
                        <tr>
                            <th style={{ minWidth: 160 }} className="text-start">Tool</th>
                            {COLUMNS.map((c) => (
                                <th key={c.key}>{c.label}</th>
                            ))}
                            <th style={{ minWidth: 140 }}>Your Rating (0–5)</th>
                            <th style={{ minWidth: 220 }} className="text-start">Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r, i) => (
                            <tr key={r.tool}>
                                <td className="text-start fw-semibold">
                                    {r.italic ? <em>{r.tool}</em> : r.tool}
                                </td>
                                {COLUMNS.map((c) => (
                                    <td key={c.key} className={ratingColor(r[c.key])}>
                                        {r[c.key]} / 5
                                    </td>
                                ))}
                                <td className="bg-light fw-bold">
                                    {getAverage(r)} / 5
                                </td>
                                <td className="text-start small text-muted">{r.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="text-center text-muted mt-3 small">
                Legend: <span className="badge bg-success">5</span>{" "}
                <span className="badge bg-info">4</span>{" "}
                <span className="badge bg-warning text-dark">3</span>{" "}
                <span className="badge bg-danger">1–2</span>
            </p>
        </div>
    );
};

export default ComparisonTable;
