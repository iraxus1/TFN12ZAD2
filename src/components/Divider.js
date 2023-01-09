import React from "react";

export default function Divider({ x, y }) {
    return (
        <div>
            {x} / {y} = {x / y}
        </div>
    );
}
