'use client'

import CustomProgressBar from "@/components/CustomProgressBar";
import {useState} from "react";
import {Input} from "@nextui-org/react";

export default function Calculator() {
    const [viValue, setViValue] = useState(0);
    const [daValue, setDaValue] = useState(0);
    const [voValue, setVoValue] = useState(0);
    const [testValue, setTestValue] = useState(0);
    const [finalScore, setFinalScore] = useState(0)

    const handleViChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setViValue(value);
        calculateFinalScore(value, daValue, voValue, testValue);
    };

    const handleDaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setDaValue(value);
        calculateFinalScore(viValue, value, voValue, testValue);
    };

    const handleVoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setVoValue(value);
        calculateFinalScore(viValue, daValue, value, testValue);
    };

    const handleTestValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setTestValue(value)
        calculateFinalScore(viValue, daValue, voValue, value);
    };

    const calculateFinalScore = (vi: number, da: number, vo: number, test: number) => {
        const propertyScore = (vi + da + vo + 90) * 2.3
        let testScore = 0
        if (test < 5000) {
            testScore = test * 0.3
        } else if (test < 10000) {
            testScore = 1500 + 0.15 * (test - 5000)
        } else if (test < 20000) {
            testScore = 2250 + 0.08 * (test - 10000)
        } else if (test < 30000) {
            testScore = 3050 + 0.04 * (test - 20000)
        } else if (test < 40000) {
            testScore = 3450 + 0.02 * (test - 30000)
        } else if (test < 50000) {
            testScore = 3650 + 0.01 * (test - 40000)
        }

        setFinalScore(propertyScore + testScore);
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center">
            <div>
                <div className="w-screen flex justify-center items-center">
                    <div className="m-4 max-w-md flex flex-col justify-center items-center gap-4">
                        <Input
                            type="number"
                            label="Vi"
                            value={viValue.toString()}
                            onChange={handleViChange}
                        />
                        <Input
                            type="number"
                            label="Da"
                            value={daValue.toString()}
                            onChange={handleDaChange}
                        />
                        <Input
                            type="number"
                            label="Vo"
                            value={voValue.toString()}
                            onChange={handleVoChange}
                        />
                        <Input
                            type="number"
                            label="最终考核分"
                            value={testValue.toString()}
                            onChange={handleTestValueChange}
                        />
                    </div>
                </div>

                <div className="w-screen flex justify-center items-center">
                    <CustomProgressBar score={finalScore < 0 ? 0 : finalScore}></CustomProgressBar>
                </div>
            </div>
        </div>
    );
}
