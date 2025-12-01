import React from "react";

export default function Card(props) {
  const { title, backgroundColor, children } = props;

  return (
    <div style={{
      margin: '10px',
      padding: '10px',
      border: '1px solid gray',
      boxShadow: '0px 2px 8px rgba(0,0,0,0.3)',
      borderRadius: '8px',
      backgroundColor: backgroundColor || 'white'
    }}>
      {title && <h1>{title}</h1>}
      {children}  {/* ProfileCard 내용 출력 */}
    </div>
  );
}
