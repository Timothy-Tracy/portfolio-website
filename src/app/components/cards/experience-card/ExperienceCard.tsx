'use client'
import React, { useState, useEffect, useRef } from 'react';
import TimeProgressBar from '../../time-progress-bar/TimeProgressBar';
import ReactiveCardOneSide from '../hover-card/ReactiveCardOneSide';

interface ExperienceCardProps {
    title: string;
    children: React.ReactNode;
    className?: string;

}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, className, children }) => {
    return (
        <div className={`w-[100%] h-full p-2 ${className || ''}`}>
            <ReactiveCardOneSide>
                <section className="flex-col w-full h-full">
                    <div className="flex"><h4>{title}</h4> </div>
                    <div className="flex-grow flex flex-col  justify-center">{children}</div>
                </section>
            </ReactiveCardOneSide>
        </div>
    );
};

export default ExperienceCard;