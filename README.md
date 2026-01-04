## CRM Dashboard – Assignment Overview

This project implements a CRM-style dashboard using Next.js with a clean, desktop-first UI.

### Implemented Features

- **Dashboard Layout**
  - Fixed left sidebar with static navigation icons
  - Top bar with search input and profile icon
  - Main content area for company and sales data

- **Company Details Section**
  - Displays company name, address, phone, email, country, category, and VAT number
  - Tab-based navigation: Company, Activities, Contacts, Sales, Requests
  - Tab switching updates the visible content

- **Sales / Leads Management**
  - Sales table with status, sale date, amount, stage, next activity date, and sale name
  - Status badges with color indicators (Open, Lost, Sold, Stalled)
  - Pagination implemented for the sales table

- **Add New Sale**
  - Modal form for adding a new lead/sale
  - Required field validation
  - Newly added records persist via database and appear in the table

- **Backend & Data**
  - API routes implemented using Next.js
  - MongoDB used for persistent data storage
  - Error handling for API failures

The UI is designed to closely resemble a real-world CRM dashboard and meets all assignment requirements.
