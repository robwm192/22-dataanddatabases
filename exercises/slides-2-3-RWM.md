---
marp: true
theme: thg-accelerator
footer: "![](img/accelerator-logo.svg)"
style: |
  img[alt~="centre"] {
    display: block;
    margin: 0 auto;
    font-size: 18px;
    indent: 0 auto;
  }
---

![width:800px](img/accelerator-logo.svg)

# SQLite

## _ ***[ alt intro page ]*** _

### Ines Cortina, Aarjav Jain, and Rob Woodward-Massey

</br>
<img src="img/sqlite-tutorial-homepage.svg" height="180rem" style="display:flex; text-align:center; margin:auto">

---

# SQLite

### Design and Architecture Overview

- "**SQLite** is a **C-language** library that implements a **small, fast, self-contained, high-reliability, full-featured, SQL database engine**"
  <br/>
- "The SQLite file format is **stable, cross-platform, and backwards compatible**"
<br/>
  <div align='right', style="font-size: 1rem"><p><i>-- from sqlite.org</i></p></div>

---

# SQLite

### Design and Architecture Overview

**Serverless**

![width:600px](img/sqliteDiagram.jpg)

---

# SQLite

### Design and Architecture Overview

- **Zero-configuration**
  <br/>
- **Transactional SQL database engine**
  - Follows **ACID**
  - Atomic, Coherent/Consistent, Isolated, and Durable

---

# SQLite

### Design and Architecture Overview - ACID

- **Atomic**
  - all database operations in the transaction must succeed
- **Coherent/Consistent**
  - all database operations must satisfy the database rules and leave the database in a valid state
- **Isolated**
  - concurrent transactions must leave the database in the same state as that if the transactions were run sequentially
- **Durable**
  - once the database has confirmed the transaction has been committed, the database must retain the changes if an unexpected error occurs

---

# SQLite

### Design and Architecture Overview

Based on **PostgreSQL**

- "_What would PostgreSQL do?_"

#### _KEY DIFFERENCES:_

<div style="text-align:center; margin:auto; justify-content:center; display:flex; font-size:0.68rem">

|              | PostgreSQL                                   | SQLite              |
| ------------ | -------------------------------------------- | ------------------- |
| _DBMS_       | Embedded                                     | Client-server model |
| _Setup size_ | <500 kB                                      | ~200 MB             |
| _Data Types_ | NULL, BLOB, INTEGER, TEXT, REAL              | Any?                |
| _etc..._     | Portability, access, functionality, speed... | -                   |

</div>

---

# SQLite

### Where does it fall on the CAP model?

SQLite = **Consistent** and **Available** - but _not tolerant_ to **Partitions**

<div style="font-size:1.2rem; padding-left:2.7rem;font-style:italic">  
-->> SQLite = CA
</div>

</br>
</br>

_(Aside - who made this grim diagram?)_
<img src="img/SQLiteCAP.png" height="300rem" style="position:relative; left:140px; bottom: 80px; justify-content:right">

---
