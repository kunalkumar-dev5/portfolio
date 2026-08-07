import { useEffect, useState } from "react";

// id, size, x,y, opacity, animationDuration.
// id, size, x,y, delay, animationDuration.

const getStarsData = () => {
    if (typeof window === "undefined") return [];
    const numberOfStarts = Math.floor(
        (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numberOfStarts; i++) {
        newStars.push({
            id: i,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2,
        });
    }
    return newStars;
};

const getMeteorsData = () => {
    const numberOfMeteors = 4;

    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
        newMeteors.push({
            id: i,
            size: Math.random() * 2 + 1,
            x: Math.random() * 100,
            y: Math.random() * 20,
            delay: Math.random() * 3,
            animationDuration: Math.random() * 4 + 2,
        });
    }
    return newMeteors;
};

export const StarBackground = () => {
    const [stars, setStars] = useState(() => getStarsData());
    const [meteors] = useState(() => getMeteorsData());

    useEffect(() => {
        const handleResize = () => {
            setStars(getStarsData());
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}></div>
        ))}

        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size * 3 + "px",
                height: meteor.size * 1 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay + "s",
                animationDuration: meteor.animationDuration + "s",
            }}
            />
        ))}
    </div>

}