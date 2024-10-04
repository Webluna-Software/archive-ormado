import React, { useEffect, useState } from 'react';

const CampaignTimer = ({ endTime }) => {
    const parseTime = (timeString) => {
        const timeParts = timeString.split(':').map(Number);
        let hours = 0, minutes = 0, seconds = 0;

        if (timeParts.length === 2) { 
            [hours, minutes] = timeParts;
        } else if (timeParts.length === 3) { 
            [hours, minutes, seconds] = timeParts;
        }

        return { hours, minutes, seconds };
    };

    const calculateTimeLeft = (startTime) => {
        const { hours, minutes, seconds } = parseTime(endTime);
        const totalDuration = hours * 3600 + minutes * 60 + seconds; 
        const now = Math.floor(Date.now() / 1000); 

        const timePassed = now - startTime;

        const remainingTime = totalDuration - timePassed;

        if (remainingTime <= 0) {
            return { hours: 0, minutes: 0, seconds: 0 };
        }

        const remainingHours = Math.floor(remainingTime / 3600);
        const remainingMinutes = Math.floor((remainingTime % 3600) / 60);
        const remainingSeconds = remainingTime % 60;

        return { hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds };
    };

    const [timeLeft, setTimeLeft] = useState(() => {
        const savedStartTime = localStorage.getItem('campaignStartTime');
        const startTime = savedStartTime ? Number(savedStartTime) : Math.floor(Date.now() / 1000); // Saniyə ilə vaxt
        return calculateTimeLeft(startTime);
    });

    useEffect(() => {
        const savedStartTime = localStorage.getItem('campaignStartTime');
        const startTime = savedStartTime ? Number(savedStartTime) : Math.floor(Date.now() / 1000);

        if (!savedStartTime) {
            localStorage.setItem('campaignStartTime', startTime);
        }

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(startTime));
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    return (
        <h6 className='p-title'>
            {timeLeft.hours}:{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}:
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
        </h6>
    );
};

export default CampaignTimer;
