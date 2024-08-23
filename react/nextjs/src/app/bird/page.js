'use client'
import { Button, Image } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const Bird = () => {
    const [randomNum, setRandomNum] = useState(0)
    const [isGameStopped, setIsGameStopped] = useState(true)
    const [score, setScore] = useState(0)
    const bombSection = 1  // Fixed bomb section
    const birdCages = ['', '', '']

    useEffect(() => {
        let interval
        if (!isGameStopped) {
            interval = setInterval(() => {
                let newNum = Math.floor(Math.random() * birdCages.length)
                if (newNum === randomNum) {
                    newNum = newNum === 2 ? 0 : newNum + 1
                }
                setRandomNum(newNum)
            }, 500)
        }

        return () => clearInterval(interval)
    }, [isGameStopped, randomNum])

    const handleStop = () => {
        if (!isGameStopped && randomNum === bombSection) {
            // Increase score if the bird and bomb are in the same section
            setScore(score + 1)
        }
        setIsGameStopped(!isGameStopped)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
            <h1 className="text-2xl font-bold mb-4">Bird Game</h1>
            <div className="grid grid-cols-3 gap-4">
                {birdCages.map((item, id) => (
                    <div key={id} className="relative p-2 m-2 h-44 w-24 shadow-lg bg-white rounded-md flex items-center justify-center">
                        {id === randomNum && (
                            <Image
                                src="https://media.istockphoto.com/id/626132614/photo/blue-fronted-redstart-the-beautiful-blue.jpg?s=612x612&w=0&k=20&c=V9ZpAJrnOPxgf9TiT3wxk77V2TbKqiXl_5yOBL1DP_c="
                                width={100}
                                height={100}
                                alt="Bird"
                                className="animate-bounce"
                            />
                        )}
                        {id === bombSection && (
                            <Image
                                src="https://media.tenor.com/ojDYbnx4As8AAAAj/dm4uz3-foekoe.gif"
                                width={100}
                                height={100}
                                alt="Bomb"
                                className={id === randomNum && !isGameStopped ? "animate-none" : ""}
                            />
                        )}
                    </div>
                ))}
            </div>
            <Button
                onClick={handleStop}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                {isGameStopped ? 'Start' : 'Stop'}
            </Button>
            <div className="mt-4 text-xl">
                <p>Score: {score}</p>
            </div>
        </div>
    )
}

export default Bird
