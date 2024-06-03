import React, {useEffect, useState} from "react";
import {Progress} from "@nextui-org/react";

export default function CustomProgressBar({score}: { score: number }) {
    let aPlusRank = 11500;
    let sRank = 13000;

    const [valueLabel, setValueLabel] = useState('');
    const [maxValue, setMaxValue] = useState(Number.MAX_VALUE);

    const updateValues = (value: number) => {
        if (value < aPlusRank) {
            setMaxValue(aPlusRank);
            setValueLabel(`${value} / ${aPlusRank} to A+ Rank`);
        } else if (value < sRank) {
            setMaxValue(sRank);
            setValueLabel(`${value} / ${sRank} to S Rank`);
        } else {
            setMaxValue(value);
            setValueLabel(`S rank achieved, awsome!`);
        }
    };

    useEffect(() => {
        updateValues(parseFloat(score.toFixed(2)));
    }, [score]);

    return (
        <Progress
            className="m-4"
            size="lg"
            radius="sm"
            classNames={{
                base: "max-w-md",
                track: "border border-default",
                indicator: "bg-gradient-to-r from-[#A6FFFF] via-[#CED4FD] via-[#E7B8E0] via-[#F0B8DB] to-[#F5E9C8]",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
            }}
            label="Score"
            value={parseFloat(score.toFixed(2))}
            maxValue={maxValue}
            showValueLabel={true}
            valueLabel={valueLabel}
        />
    );
}
