---
marp: true
theme: thg-accelerator
footer: "![](thg-accelerator-theme/accelerator-logo.svg)"
style: |
  img[alt~="centre"] {
    display: block;
    margin: 0 auto;
  }
---

# SQLite

## Data and databases

Robert Woodward-Massey, Aarjav Jain and Ines Cortina

---

# SQLite

## Background

- Most widely deployed database in the world
- Can be easily embedded into other software
- Fully self-contained
- Serverless
- Reads and writes directly to ordinary disk files
- Wide range of uses: web browsers, commercial airplanes and WhatsApp.

---

# SQLite

## History

<span >(WHEN and WHERE)
In the year 2000, Richard Hipp was working for a shipbuilding subsidiary of defense contractor General Dynamic in Maine (US)</span>

(THEN)
Hipp was building software for a battleship, which would operate on crucial data about the ship’s valves

(PROBLEM)
The databse which they were using, Informix, stopped working whenever the server went down

(SOLUTION)
Hipp developed SQLite to solve this problem
The developed database was very compact, less than 250 kilobytes
SQLite as we know ito today, implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.

---

# SQLite

## Popularity

SQLite is found in:

- Every Android device
- Every iPhone and iOS device
- Every Mac
- Every Windows10 machine
- Every Firefox, Chrome, and Safari web browser
- Every instance of Skype
- Every instance of iTunes
- Every Dropbox client
- Every TurboTax and QuickBooks
- PHP and Python
- Most television sets and set-top cable boxes
- Most automotive multimedia systems
- Countless millions of other applications

It is estimated that there are over one trillion SQLite databases in active use.

---

# SQLite

## File format

- Multiple tables, indices, triggers, and views contained in a single disk file.
- Stable, cross-platform, and backwards compatible
- SQLite database files are commonly used:
  - As containers to transfer rich content between systems
  - As a long-term archival format for data
- Source code is in the public-domain
