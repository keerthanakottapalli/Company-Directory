import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

export default function CompanyCard({ company }) {
    return (
        <Card
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                backgroundColor: "#D7DBFF",
                "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-5px)",
                }
            }}
        >
            {/* Image container */}
            {company.image && (
                <Box
                    sx={{
                        width: '250px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
                        gap: 2,
                    }}
                >
                    <CardMedia
                        component="img"
                        image={company.image}
                        alt={company.name}
                        sx={{
                            height: 160,              
                            width: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            borderBottom: "1px solid rgba(255,255,255,0.1)"
                        }}
                    />
                </Box>
            )}

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                    {company.name}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1, fontStyle: "italic" }}
                >
                    {company.industry}
                </Typography>
                <Typography variant="body2" color="primary">
                    {company.location}
                </Typography>
            </CardContent>
        </Card>
    );
}
