import React from "react";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

export default function SortMenu({ onSort }) {
    const [order, setOrder] = React.useState("");

    const handleSort = (event, newOrder) => {
        if (newOrder) {
            setOrder(newOrder);
            onSort(newOrder);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                flexWrap: "wrap", // helps for smaller screens
                gap: "0.5rem",
                marginBottom: "1.5rem",
            }}
        >
            <Typography variant="subtitle1">Sort by Name:</Typography>

            <ToggleButtonGroup
                value={order}
                exclusive
                onChange={handleSort}
                size="small"
                style={{
                    marginLeft: "0.5rem",
                    flexShrink: 0, // prevents wrapping of buttons
                }}
            >
                <ToggleButton value="asc">A–Z</ToggleButton>
                <ToggleButton value="desc">Z–A</ToggleButton>
            </ToggleButtonGroup>
        </div>

    );
}
