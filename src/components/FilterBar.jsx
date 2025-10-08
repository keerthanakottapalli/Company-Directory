import React, { useState, useMemo } from "react";
import { TextField, MenuItem, Button, Box } from "@mui/material";

export default function FilterBar({ companies, onFilter }) {
  const [filters, setFilters] = useState({ name: "", location: "", industry: "" });

  // extract unique locations & industries dynamically
  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(companies.map((c) => c.location))];
    return uniqueLocations.sort();
  }, [companies]);

  const industries = useMemo(() => {
    const uniqueIndustries = [...new Set(companies.map((c) => c.industry))];
    return uniqueIndustries.sort();
  }, [companies]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApply = () => {
    onFilter(filters);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        mb: 3,
        alignItems: "center",
      }}
    >
      <TextField
        label="Search by Name"
        name="name"
        value={filters.name}
        onChange={handleChange}
        size="small"
      />

      <TextField
        select
        label="Location"
        name="location"
        value={filters.location}
        onChange={handleChange}
        size="small"
        sx={{ minWidth: 150 }}
      >
        <MenuItem value="">All</MenuItem>
        {locations.map((loc) => (
          <MenuItem key={loc} value={loc}>
            {loc}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Industry"
        name="industry"
        value={filters.industry}
        onChange={handleChange}
        size="small"
        sx={{ minWidth: 150 }}
      >
        <MenuItem value="">All</MenuItem>
        {industries.map((ind) => (
          <MenuItem key={ind} value={ind}>
            {ind}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="outlined" style={{ backgroundColor: "#1a1a1a", color: "#fff" }} onClick={handleApply}>
        Apply Filters
      </Button>
    </Box>
  );
}
