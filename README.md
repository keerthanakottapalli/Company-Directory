# 🏢Companies Directory – Frontend (React.js)

- A React.js frontend application to display a directory of companies with filtering, sorting, pagination, and a polished UI. 
- The project demonstrates practical frontend skills using Material UI, React hooks, pagination, skeleton loading, and empty state handling.

## 🔹 Key Features

- Responsive UI: Cards layout that adjusts to different screen sizes using Material UI Grid.
- Filtering: Filter companies by name, location, or industry.
- Sorting: Sort companies A–Z or Z–A using a toggle button.
- Pagination: Show limited cards per page with Material UI Pagination component.
- Loading Skeletons: Shows skeleton loaders while data is “fetching” for better UX.
- Empty State Handling: Friendly message when no companies match the filter criteria.
- Card Styling: Uniform card sizes with company images and hover effects.

## 🔹 Tech Stack & Libraries

- **Frontend**: React.js (functional components + hooks)
- **Styling & UI**: Material UI (Cards, Grid, Skeleton, Buttons, Pagination)
- **State Management**: useState and useEffect hooks (no Redux / Context API needed)
- **Mock Data**: companies.json file simulates API response
- *Optional Backend*: Node.js + Express + MongoDB (not implemented; focus is frontend)

## 🔹 Bundler / Build Tool

- This project uses Vite as the bundler instead of Webpack or Parcel because it provides faster development startup, instant hot reload, and simpler configuration for React projects.


## 🔹 Getting Started

### 1. Clone the repository
    git clone https://github.com/keerthanakottapalli/Company-Directory
    cd Company-Directory

### 2. Install dependencies
    npm install

### 3. Start the development server
    npm run dev

- The app will run on http://localhost:5174
- The UI will load with skeletons for 1.5 seconds to simulate API loading


## 🔹 Project Structure

    src/
    │
    ├─ components/
    │   ├─ CompanyCard.jsx      # Displays individual company info
    │   ├─ FilterBar.jsx        # Filter fields for name, location, industry
    │   └─ SortMenu.jsx         # Sorting toggle buttons
    │
    ├─ data/
    │   └─ companies.json       # Mock data for companies
    ├─ pages/
    │   └─ Home.jsx             # Main component to display UI
    ├─ App.jsx
    └─ index.js

## 🔹 Usage

- **Filtering**: Type a company name or select a location/industry from dropdowns.
- **Sorting**: Use the toggle buttons to sort names A–Z or Z–A.
- **Pagination**: Navigate through pages if there are many companies.
- **No Results**: If no company matches the filters, a message is displayed.
- **Loading State**: Skeleton cards appear while data is loading.


## 🔹 Key Decisions & Notes

- Used Material UI Cards instead of tables for better visual appeal.
- Implemented custom sorting because cards don’t have built-in table sorting.
- Used fixed card heights and image heights to maintain uniformity.
- Used skeleton loader to simulate API fetch and enhance UX.
- Pagination is client-side, sliced from the filtered array.