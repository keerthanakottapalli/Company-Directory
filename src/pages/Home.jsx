import React, { useState, useEffect } from "react";
import companiesData from "../data/companies.json";
import CompanyCard from "../components/CompanyCard";
import FilterBar from "../components/FilterBar"; // optional, can keep for filters
import SortMenu from "../components/SortMenu"; // optional, keeps sorting buttons
import {
    Grid,
    Container,
    Card,
    CardContent,
    Typography,
    Stack,
    Pagination,
    Skeleton,
    Box,
} from "@mui/material";

const Home = () => {
    const [companies, setCompanies] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    // Pagination state
    const [page, setPage] = useState(0);
    const [rowsPerPage] = useState(10); // cards per page

    useEffect(() => {
        // simulate API delay
        setTimeout(() => {
            setCompanies(companiesData);
            setFiltered(companiesData);
            setLoading(false);
        }, 1500);
    }, []);

    // Handle filtering
    const handleFilter = (filters) => {
        let temp = [...companies];
        if (filters.name)
            temp = temp.filter((c) =>
                c.name.toLowerCase().includes(filters.name.toLowerCase())
            );
        if (filters.location) temp = temp.filter((c) => c.location === filters.location);
        if (filters.industry) temp = temp.filter((c) => c.industry === filters.industry);
        setFiltered(temp);
        setPage(0); // reset to first page after filter
    };

    // Handle sorting (A–Z / Z–A)
    const handleSort = (order) => {
        let temp = [...filtered];
        if (order === "asc") temp.sort((a, b) => a.name.localeCompare(b.name));
        else if (order === "desc") temp.sort((a, b) => b.name.localeCompare(a.name));
        setFiltered(temp);
    };

    // Slice for pagination
    const paginatedCompanies = filtered.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    // Pagination handlers
    const handleChangePage = (event, value) => {
        setPage(value - 1);
    };

    return (
        <Container >
            <Typography variant="h4" mb={3} align="center" sx={{ fontWeight: "bold" }}>
                Companies Directory
            </Typography>

            <Grid container spacing={2} mb={3}>
                <Grid item xs={12} sm={6}>
                    <FilterBar companies={companies} onFilter={handleFilter} />
                </Grid>
                <Grid item xs={12} sm={6}  >
                    <SortMenu onSort={handleSort} />
                </Grid>
            </Grid>


            {!loading && filtered.length === 0 ? (
                <Box
                    sx={{
                        textAlign: "center",
                        py: 5,
                        width: "100%",
                    }}
                >
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        No companies found
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Try changing your search or filter criteria.
                    </Typography>
                </Box>
            ) : (
                <Grid container spacing={5} mt={2}>
                    {loading
                        ? [...Array(10)].map((_, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ background: "#f0eeeeff", color: "#fff", borderRadius: 3 }}>
                                    <Skeleton variant="rectangular" height={160} width={250} animation="wave" />
                                    <CardContent>
                                        <Skeleton width="80%" height={24} animation="wave" />
                                        <Skeleton width="60%" height={20} animation="wave" />
                                        <Skeleton width="40%" height={20} animation="wave" />
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                        : paginatedCompanies.map((company) => (
                            <Grid item xs={12} sm={6} md={4} key={company.id}>
                                <CompanyCard company={company} />
                            </Grid>
                        ))}
                </Grid>
            )}


            {/* Pagination */}
            <Stack spacing={2} mt={4} alignItems="center">
                <Pagination
                    count={Math.ceil(filtered.length / rowsPerPage)}
                    page={page + 1}
                    onChange={handleChangePage}
                    color="primary"
                    sx={{
                        "& .MuiPaginationItem-root": {
                            fontWeight: "bold",
                        },
                    }}
                />
            </Stack>

        </Container >
    );
};

export default Home;
