"use client"

import { SessionProvider } from "next-auth/react"; //Session provider

export const AuthProvider = ({ children }) => {
    // AuthProvider เหมือนเป็น Session Provider ส่งค่าให้ตัวอื่นๆ >> เดี๋ยวเอาไปครอบตัวอื่นๆ
    return <SessionProvider>{children}</SessionProvider>;
}
