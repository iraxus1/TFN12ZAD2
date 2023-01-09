import React from 'react';
import {Route, Routes, useSearchParams} from 'react-router-dom';
import { Adder, Subtractor, Multiplier, Divider, UnexpectedSite } from "./components/index.js";

function App() {
    const [searchParams] = useSearchParams();
    const x = parseInt(searchParams.get('x') || '0');
    const y = parseInt(searchParams.get('y') || '0');

    return (
        <div>
            <Routes>
                <Route path="/add" element={<Adder x={x} y={y} />} />
                <Route path="/sub" element={<Subtractor x={x} y={y} />} />
                <Route path="/mul" element={<Multiplier x={x} y={y} />} />
                <Route path="/div" element={<Divider x={x} y={y} />} />
                <Route path="*" element={<UnexpectedSite />} />
            </Routes>
        </div>
    );
}

export default App;
