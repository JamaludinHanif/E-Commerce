/* eslint-disable no-unused-vars */
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import carousel1 from '/4.png';
import carousel2 from '/5.png';
import carousel3 from '/6.png';

export default function slid() {
    return (
        <>
            <Splide
                options={ {
                    rewind: true,
                    gap   : '1rem',
                } }
                aria-label="My Favorite Images"
                >
                <SplideSlide>
                    <img src={carousel1} alt="Image 1" className='m-auto'/>
                </SplideSlide>
                <SplideSlide>
                    <img src={carousel3} alt="Image 2" className='m-auto'/>
                </SplideSlide>
                <SplideSlide>
                    <img src={carousel2} alt="Image 3" className='m-auto'/>
                </SplideSlide>
            </Splide>
        </>
    )
}