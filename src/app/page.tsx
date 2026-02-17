'use client';

import React, { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (num: string) => {
    setDisplay(prev => prev === '0' ? num : prev + num);
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
    } catch {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#1a1a1a' }}>
      <div style={{ backgroundColor: '#2c3e50', padding: '25px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', width: '320px' }}>
        {/* 태양광 패널 느낌의 상단 장식 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
          <div style={{ width: '80px', height: '25px', backgroundColor: '#3e2723', borderRadius: '4px', border: '1px solid #1a1a1a' }}></div>
        </div>

        {/* 결과창 */}
        <div style={{ backgroundColor: '#ecf0f1', padding: '15px', borderRadius: '8px', marginBottom: '20px', textAlign: 'right', fontSize: '32px', fontWeight: 'bold', color: '#2c3e50', minHeight: '40px', boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.2)' }}>
          {display}
        </div>

        {/* 버튼들 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
          <button onClick={clear} style={{ ...btnStyle, backgroundColor: '#e74c3c', gridColumn: 'span 1' }}>C</button>
          <button onClick={() => handleOperator('/')} style={btnStyle}>÷</button>
          <button onClick={() => handleOperator('*')} style={btnStyle}>×</button>
          <button onClick={() => handleOperator('/')} style={btnStyle}>/</button>

          {[7, 8, 9].map(n => <button key={n} onClick={() => handleNumber(String(n))} style={numBtnStyle}>{n}</button>)}
          <button onClick={() => handleOperator('-')} style={btnStyle}>-</button>

          {[4, 5, 6].map(n => <button key={n} onClick={() => handleNumber(String(n))} style={numBtnStyle}>{n}</button>)}
          <button onClick={() => handleOperator('+')} style={btnStyle}>+</button>

          {[1, 2, 3].map(n => <button key={n} onClick={() => handleNumber(String(n))} style={numBtnStyle}>{n}</button>)}
          <button onClick={calculate} style={{ ...btnStyle, backgroundColor: '#2ecc71', gridRow: 'span 2', height: 'auto' }}>=</button>

          <button onClick={() => handleNumber('0')} style={{ ...numBtnStyle, gridColumn: 'span 2' }}>0</button>
          <button onClick={() => handleNumber('.')} style={numBtnStyle}>.</button>
        </div>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: '15px 0',
  fontSize: '20px',
  fontWeight: 'bold' as const,
  color: 'white',
  backgroundColor: '#34495e',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'transform 0.1s',
  boxShadow: '0 4px #2c3e50',
};

const numBtnStyle = {
  ...btnStyle,
  backgroundColor: '#7f8c8d',
};

