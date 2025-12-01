// src/chap14/Heading.jsx
import React from "react";

export default function Heading({ level, children }) {
  const Tag = `h${level}`;
  return <Tag>{children}</Tag>;
}
