import { Slider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export const ConceptItem = ({ concept, amount, sumPercentages }) => {
    const [percentage, setPercentage] = useState(0);
    const [result, setResult] = useState(0);

    const onChangePercentage = event => {
        if (event.target.value[event.target.value.length - 1] === '.') {
            setPercentage(event.target.value);
            return;
        }
        setPercentage(Number(event.target.value));
        sumPercentages(concept, Number(event.target.value));
    }

    useEffect(() => {
        setResult(Math.trunc(percentage / 100 * amount));
    }, [percentage]);


    return (
        <div className='mt-50 conceptContainer'>
            <span className='conceptSpan'>{concept}</span>
            <Slider className='slider' value={Number(percentage)} onChange={onChangePercentage} aria-label="Default" valueLabelDisplay="auto" max={150} sx={{ width: '300px' }} />
            <TextField id="standard-basic" variant="standard" className='percentageSpan' value={percentage} onChange={onChangePercentage} />
            <TextField id="standard-basic" variant="standard" className='amountSpan' value={result} />
        </div>
    );
}