import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 to-purple-900 text-white font-sans flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Telegram Боты под ключ</h1>
        <p className="mb-4 text-lg">Создание умных Telegram-ботов: ассистенты, копирайтеры, психологи и приём заявок</p>
        <a href="https://t.me/EkaterinaPrompt_bot" target="_blank" rel="noopener noreferrer">
          <Button className="text-lg px-6 py-3 rounded-xl">Заказать бота</Button>
        </a>
      </div>
    </main>
  );
}
