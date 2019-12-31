import React from 'react';

const Counter = ({
    delCount,
    intCount,
    oodCount,
    nfiCount,
    dexCount,
    currentData,
    updateCurrentData,
    updateCurrentTimeline
    }) => (
    <main className="counter">
        <div 
            className={`counter-box counter-box--${ currentData === 'delData' ? 'active' : ''}`} 
            onClick={() => {
                updateCurrentTimeline(null);
                updateCurrentData('delData');
            }}
        >
            <p className="counter-box__text">DEL</p>
            <p className="counter-box__count">{delCount}</p>
        </div>
        <div 
            className={`counter-box counter-box--${ currentData === 'intData' ? 'active' : ''}`} 
            onClick={() => {
                updateCurrentTimeline(null);
                updateCurrentData('intData');
            }}
        >
            <p className="counter-box__text">INT</p>
            <p className="counter-box__count">{intCount}</p>
        </div>
        <div 
            className={`counter-box counter-box--${ currentData === 'oodData' ? 'active' : ''}`} 
            onClick={() => {
                updateCurrentTimeline(null);
                updateCurrentData('oodData');
            }}
        >
            <p className="counter-box__text">OOD</p>
            <p className="counter-box__count">{oodCount}</p>
        </div>
        <div 
            className={`counter-box counter-box--${ currentData === 'dexData' ? 'active' : ''}`} 
            onClick={() => {
                updateCurrentTimeline(null);
                updateCurrentData('dexData');
            }}
        >
            <p className="counter-box__text">DEX</p>
            <p className="counter-box__count">{dexCount}</p>
        </div>
        <div 
            className={`counter-box counter-box--${ currentData === 'nfiData' ? 'active' : ''}`} 
            onClick={() => {
                updateCurrentTimeline(null);    
                updateCurrentData('nfiData');
            }}
        >
            <p className="counter-box__text">NFI</p>
            <p className="counter-box__count">{nfiCount}</p>
        </div>
    </main>


)

export default Counter;