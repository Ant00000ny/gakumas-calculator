'use client'

import CustomProgressBar from "@/components/CustomProgressBar";
import {useState} from "react";
import {Input} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/checkbox";

const calculateNeededTestScore = (vi: string, da: string, vo: string, targetFinalScore: number, isFirst: boolean) => {
    const viNumber = vi ? Number(vi) : 0;
    const daNumber = da ? Number(da) : 0;
    const voNumber = vo ? Number(vo) : 0;
    let baseScore = (viNumber + daNumber + voNumber + 90) * 2.3;

    if (isFirst) {
        baseScore += 1700;
    }

    const targetTestScore = targetFinalScore - baseScore;

    let neededTestScore = 0;

    if (targetTestScore <= 0) {
        neededTestScore = 0;
    } else if (targetTestScore <= 1500) {
        neededTestScore = targetTestScore / 0.3;
    } else if (targetTestScore <= 2250) {
        neededTestScore = (targetTestScore - 1500) / 0.15 + 5000;
    } else if (targetTestScore <= 3050) {
        neededTestScore = (targetTestScore - 2250) / 0.08 + 10000;
    } else if (targetTestScore <= 3450) {
        neededTestScore = (targetTestScore - 3050) / 0.04 + 20000;
    } else if (targetTestScore <= 3650) {
        neededTestScore = (targetTestScore - 3450) / 0.02 + 30000;
    } else {
        neededTestScore = (targetTestScore - 3650) / 0.01 + 40000;
    }

    return neededTestScore;
};


export default function Calculator() {
    const [viValue, setViValue] = useState<string>("");
    const [daValue, setDaValue] = useState<string>("");
    const [voValue, setVoValue] = useState<string>("");
    const [testValue, setTestValue] = useState<string>("");
    const [finalScore, setFinalScore] = useState<number | null>(0);
    const [isFirst, setIsFirst] = useState<boolean>(true);
    const [holder, setHolder] = useState('')

    const handleViChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setViValue(value);
        calculateFinalScore(value, daValue, voValue, testValue, isFirst);
    };

    const handleDaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setDaValue(value);
        calculateFinalScore(viValue, value, voValue, testValue, isFirst);
    };

    const handleVoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setVoValue(value);
        calculateFinalScore(viValue, daValue, value, testValue, isFirst);
    };

    const handleTestValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTestValue(value);
        calculateFinalScore(viValue, daValue, voValue, value, isFirst);
    };

    const handleIsFirstValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.checked;
        setIsFirst(value);
        calculateFinalScore(viValue, daValue, voValue, testValue, value);
    };

    const calculateFinalScore = (vi: string, da: string, vo: string, test: string, isFirst: boolean) => {
        const viNumber = vi ? Number(vi) : 0;
        const daNumber = da ? Number(da) : 0;
        const voNumber = vo ? Number(vo) : 0;
        const testNumber = test ? Number(test) : 0;
        let testScore = 0;

        testScore += (viNumber + daNumber + voNumber + 90) * 2.3;

        if (testNumber < 5000) {
            testScore += testNumber * 0.3;
        } else if (testNumber < 10000) {
            testScore += 1500 + 0.15 * (testNumber - 5000);
        } else if (testNumber < 20000) {
            testScore += 2250 + 0.08 * (testNumber - 10000);
        } else if (testNumber < 30000) {
            testScore += 3050 + 0.04 * (testNumber - 20000);
        } else if (testNumber < 40000) {
            testScore += 3450 + 0.02 * (testNumber - 30000);
        } else if (testNumber < 50000) {
            testScore += 3650 + 0.01 * (testNumber - 40000);
        } else {
            testScore += 3750 + 0.004 * (testNumber - 50000);
        } // todo

        if (isFirst) {
            testScore += 1700;
        }

        console.log(testScore)
        setFinalScore(testScore);

        if (!test) {
            let toAPlus = calculateNeededTestScore(vi, da, vo, 11500, isFirst);
            let toS = calculateNeededTestScore(vi, da, vo, 13000, isFirst);
            let message = ''
            if (toAPlus > 30000) {
                message = '距离 A+ 还很远'
            } else if (toS > 30000) {
                message = `${toAPlus.toFixed(2)} 分到 A+，距离 S 还很远`
            } else {
                message = `${toAPlus.toFixed(2)} 分到 A+，${toS.toFixed(2)} 分到 S`
            }
            setHolder(message);
        }
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center">
            <div>
                <div className="w-screen flex justify-center items-center">
                    <div className="max-w-md w-3/4 flex flex-col justify-center items-center gap-4">
                        <Input
                            type="text"
                            label="Vi"
                            value={viValue}
                            color="warning"
                            onChange={handleViChange}
                        />
                        <Input
                            type="text"
                            label="Da"
                            color="primary"
                            value={daValue}
                            onChange={handleDaChange}
                        />
                        <Input
                            type="text"
                            label="Vo"
                            color="danger"
                            value={voValue}
                            onChange={handleVoChange}
                        />
                        <Input
                            type="text"
                            label="最终试验分数"
                            value={testValue}
                            placeholder={holder}
                            onChange={handleTestValueChange}
                        />
                        <Checkbox
                            type="checkbox"
                            defaultSelected
                            value={isFirst.valueOf().toString()}
                            onChange={handleIsFirstValueChange}
                        >
                           最终试验取得第一名
                        </Checkbox>
                    </div>
                </div>

                <div className="w-screen flex justify-center items-center">
                    <CustomProgressBar
                        score={finalScore ? finalScore < 0 ? 0 : finalScore : 0}></CustomProgressBar>
                </div>
            </div>
        </div>
    );
}
