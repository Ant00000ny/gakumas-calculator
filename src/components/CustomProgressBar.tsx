import React, {useEffect, useState} from "react";
import {Progress} from "@nextui-org/react";

export default function CustomProgressBar({score}: { score: number }) {
    let cRank = 3000;
    let cPlusRank = 4500;
    let bRank = 6000;
    let bPlusRank = 8000;
    let aRank = 10000;
    let aPlusRank = 11500;
    let sRank = 13000;

    const [valueLabel, setValueLabel] = useState('');
    const [maxValue, setMaxValue] = useState(Number.MAX_VALUE);
    const [minValue, setMinValue] = useState(0);


    const updateValues = (value: number) => {
        if (value < cRank) {
            setMaxValue(cRank);
            setMinValue(0)
            setValueLabel(`${value} / ${cRank} 到 C Rank`);
        } else if (value < cPlusRank) {
            setMaxValue(cPlusRank);
            setMinValue(cRank)
            setValueLabel(`${value} / ${cPlusRank} 到 C+ Rank`);
        } else if (value < bRank) {
            setMaxValue(bRank);
            setMinValue(cPlusRank)
            setValueLabel(`${value} / ${bRank} 到 B Rank`);
        } else if (value < bPlusRank) {
            setMaxValue(bPlusRank);
            setMinValue(bRank)
            setValueLabel(`${value} / ${bPlusRank} 到 B+ Rank`);
        } else if (value < aRank) {
            setMaxValue(aRank);
            setMinValue(bPlusRank)
            setValueLabel(`${value} / ${aRank} 到 A Rank`);
        } else if (value < aPlusRank) {
            setMaxValue(aRank);
            setMinValue(bPlusRank)
            setValueLabel(`${value} / ${aPlusRank} 到 A+ Rank`);
        } else if (value < sRank) {
            setMaxValue(sRank);
            setMinValue(aPlusRank)
            setValueLabel(`${value} / ${sRank} 到 S Rank`);
        } else {
            setMaxValue(value);
            setMinValue(sRank)
            setValueLabel(`S rank achieved, awsome!`);
        }
    }

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
            label="评价分数"
            value={parseFloat(score.toFixed(2))}
            maxValue={maxValue}
            minValue={minValue}
            showValueLabel={true}
            valueLabel={valueLabel}
        />
    );
}
