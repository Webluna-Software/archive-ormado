import React, { useEffect, useState } from 'react';

const CampaignTimer = ({ endTime, onEnd }) => {
  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$/;
    return regex.test(dateString);
  };

  const parseTime = (timeString) => {
    if (!isValidDate(timeString)) {
      console.error('Tarixi düzgün daxil edin: YYYY-MM-DD HH:MM:SS');
      return null;
    }
    return new Date(timeString);
  };

  const calculateTimeLeft = (endDate) => {
    const now = new Date();
    const difference = endDate - now;

    if (difference <= 0) {
      onEnd(); 
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(() => {
    const parsedTime = parseTime(endTime);
    if (parsedTime) {
      return calculateTimeLeft(parsedTime);
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  });

  useEffect(() => {
    const parsedTime = parseTime(endTime);
    if (!parsedTime) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(parsedTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <>
      <p>
        {timeLeft.days > 0 && `${timeLeft.days} days `}
        {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}:
        {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}:
        {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
      </p>
    </>
  );
};

export default CampaignTimer;
