# Meridian — Banking Dashboard

A fully functional, front-end-only banking dashboard built with **HTML5, CSS3, and Vanilla JavaScript (ES6)**.

![status](https://img.shields.io/badge/status-demo-3ECF8E) ![stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-121A2B)

### Deployment page :https://eren12005.github.io/Banking_Dashboard_Website/

## Project Overview

Meridian is a portfolio-grade simulation of an online banking dashboard: account balances, cards, transactions, transfers, bill payments, analytics, notifications, and settings — all wired up to real, working interactions. Every number you see is generated on first load and then persisted to `localStorage`, so deposits, withdrawals, transfers, and bill payments all update your balance and transaction history live, and survive a page refresh.

The visual language leans into a "digital ledger": deep ink-navy surfaces, tabular monospace numerals for every amount and account number, and mint/amber signal colors for gains and alerts — designed to feel precise and trustworthy rather than templated.

## Features

- **Dashboard** — animated summary cards (Total Balance, Savings, Current, Monthly Income/Expenses, Reward Points), a live balance-growth chart, a spending-by-category donut chart, quick actions, and a recent transactions preview.
- **My Accounts** — per-account balances plus an editable profile (name, email, phone, address) saved to local storage.
- **Transactions** — 27+ generated transactions with search, date filter, credit/debit filter, sorting, CSV export, and print-friendly statement view.
- **Cards** — debit and credit card visuals with masked numbers, available credit limit, and working Freeze/Unfreeze toggles.
- **Payments** — six bill categories (Electricity, Water, Internet, Mobile Recharge, Gas, Credit Card) that open a payment modal and debit your account.
- **Transfer Money** — recipient name, account number, and IFSC code validation before a transfer is processed.
- **Deposit / Withdraw / Recharge / Add Beneficiary** — modal forms that update balances and the transaction ledger in real time.
- **Analytics & Reports** — income/expense bar charts, spending donut, balance-growth line chart (Chart.js), and a downloadable/printable report summary.
- **Notifications** — a notification center with unread badges, mark-as-read, and a dedicated notifications page.
- **Settings** — dark/light mode, notification toggle, language selector, currency selector, and a demo change-password flow — all persisted.
- **Global search** — live suggestions across sections and transactions from the top bar.
- **UI polish** — glassmorphism top bar, gradient accents, sticky sidebar/header, collapsible + mobile sidebar, animated counters, skeleton-ready styles, toast notifications, and a back-to-top button.

## Technologies Used

- **HTML5** — semantic structure, forms, `<details>` for FAQs
- **CSS3** — custom properties (design tokens), Grid + Flexbox, animations, light/dark theming via `data-theme`
- **Vanilla JavaScript (ES6)** — modules-free IIFE architecture, `localStorage`, DOM rendering, form validation, CSV export
- **Chart.js (via CDN)** — the only external dependency, used for the four analytics charts

## Future Improvements

- Connect to a real backend/API for authentication and live account data
- Add multi-currency conversion using a live exchange-rate feed
- Add data export to PDF statements with bank letterhead
- Add biometric/2FA login simulation
- Add a budgeting/goals module with progress tracking

