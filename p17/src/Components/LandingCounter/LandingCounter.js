import React, { useEffect, useState } from 'react'

export default function LandingCounter({ count, timer }) {
    const [courseCounter, setCourseCounter] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setCourseCounter(prevCount => prevCount + 1)

        }, timer);
        if (courseCounter === count) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [courseCounter])
    return (
        <div>
            <p>{courseCounter}</p>
        </div>
    )
}
