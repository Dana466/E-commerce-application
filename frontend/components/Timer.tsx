import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: Arial, sans-serif;
  color: #333;

  .time-unit {
    text-align: center;
    margin: 0 10px;

    .label {
      font-size: 18px;
      margin-bottom: 5px;
    }

    .value {
      font-size: 36px;
      font-weight: bold;
    }
  }

  .separator {
    font-size: 36px;
    color: #db4444;
    margin: 0 5px;
    display: flex;
    align-items: center;
    margin-bottom:-20px;
  }
`;

const Timer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2024-09-30') - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <TimerContainer>
      <div className="time-unit">
        <div className="label">Days</div>
        <div className="value">{timeLeft.days}</div>
      </div>
      <div className="separator">:</div>
      <div className="time-unit">
        <div className="label">Hours</div>
        <div className="value">{timeLeft.hours}</div>
      </div>
      <div className="separator">:</div>
      <div className="time-unit">
        <div className="label">Minutes</div>
        <div className="value">{timeLeft.minutes}</div>
      </div>
      <div className="separator">:</div>
      <div className="time-unit">
        <div className="label">Seconds</div>
        <div className="value">{timeLeft.seconds}</div>
      </div>
    </TimerContainer>
  );
};

export default Timer;
