"use client";
import React, { useState } from "react";
import { ArgumentForm } from "./hero-components/argument-form";
import { ResponseDisplay, Reply } from "./hero-components/response-display";
import { DEFAULT_TONE_LEVEL } from "@/lib/tone";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  const [inputText, setInputText] = useState("");
  const [toneLevel, setToneLevel] = useState([DEFAULT_TONE_LEVEL]);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!inputText.trim()) {
      setError("请先输入对方说的话 (Please enter some text first)");
      return;
    }

    setIsLoading(true);
    setError("");
    setReplies([]);

    // Call the real API
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputText, toneLevel }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate response");
      }

      if (data.replies) {
        setReplies(data.replies);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (replies.length > 0) {
      const text = replies.map((r) => r.content).join("\n\n");
      navigator.clipboard.writeText(text);
      // You could add a toast notification here
    }
  };

  return (
    <section className="container w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mx-auto py-20 md:py-32 items-center">
        {/* Left Side: Text Content */}
        <div className="text-center lg:text-left space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> AI Argument Helper </span>
          </Badge>

          <div className="text-4xl md:text-6xl font-bold">
            <h1>
              吵架没发挥好？
              <br />
              <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                AI 嘴替
              </span>
              来帮你
            </h1>
          </div>

          <p className="text-xl text-muted-foreground">
            Argue Cure —— 你的在线吵架参谋。
            <br />
            无论是职场阴阳怪气，还是亲戚无理取闹，输入对方的话，AI 帮你通过得体（或发疯）的方式怼回去。
          </p>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="w-full max-w-md mx-auto lg:max-w-none">
          <ArgumentForm
            inputText={inputText}
            setInputText={setInputText}
            toneLevel={toneLevel}
            setToneLevel={setToneLevel}
            isLoading={isLoading}
            error={error}
            onGenerate={handleGenerate}
          />
          
          <ResponseDisplay
            replies={replies}
            isLoading={isLoading}
            error={error}
            onRetry={handleGenerate}
            onCopy={handleCopy}
          />
        </div>
      </div>
    </section>
  );
};
