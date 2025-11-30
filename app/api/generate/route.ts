import { NextResponse } from "next/server";
import { tonePresets, DEFAULT_TONE_LEVEL } from "@/lib/tone";

export async function POST(req: Request) {
  try {
    const { inputText, toneLevel } = await req.json();
    
    if (!inputText) {
      return NextResponse.json(
        { error: "请输入内容 (Input is required)" },
        { status: 400 }
      );
    }

    const currentLevel = toneLevel && toneLevel.length > 0 ? toneLevel[0] : DEFAULT_TONE_LEVEL;
    const tone = tonePresets[currentLevel] || tonePresets[DEFAULT_TONE_LEVEL];

    const systemPrompt = `You are an expert conflict resolution assistant (AI 嘴替). 
Your goal is to generate 3 distinct responses to a given conflict statement based on a specific tone.
The user will provide what the opponent said.
You must return a JSON object with a "replies" array. 
Each item in the array must have:
- "content": The actual response text (in Chinese, unless the input is English).
- "context": A brief explanation of when to use this response (in Chinese).

The tone required is: ${tone.label} - ${tone.description}.
Ensure the responses strictly follow this tone.`;

    const userPrompt = `The opponent said: "${inputText}"
    
Generate 3 responses in valid JSON format like:
{
  "replies": [
    { "content": "...", "context": "..." }
  ]
}`;

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey || apiKey.includes("******")) {
      return NextResponse.json(
        { error: "API configuration error: API Key not set." },
        { status: 500 }
      );
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "https://github.com/nobruf/shadcn-landing-page", // Optional for OpenRouter
        "X-Title": "Argue Cure", // Optional for OpenRouter
      },
      body: JSON.stringify({
        model: "google/gemini-3-pro-preview",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
        reasoning: {
            enabled: true
        }
        // response_format: { type: "json_object" } // OpenRouter/Gemini specific if supported, but prompt usually works
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("OpenRouter API Error:", errorData);
      return NextResponse.json(
        { error: "Failed to generate response from AI provider." },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    try {
        const content = data.choices[0].message.content;
        // Try to find JSON in the response (sometimes models add markdown code blocks)
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        const jsonString = jsonMatch ? jsonMatch[0] : content;
        
        const parsedData = JSON.parse(jsonString);
        
        if (parsedData.replies && Array.isArray(parsedData.replies)) {
             return NextResponse.json({ replies: parsedData.replies });
        } else {
            throw new Error("Invalid JSON structure");
        }
    } catch (parseError) {
        console.error("JSON Parse Error:", parseError);
        // Fallback if JSON parsing fails, just return raw text as one reply
        return NextResponse.json({
            replies: [{
                content: data.choices[0].message.content,
                context: "Raw AI Response (Parse Failed)"
            }]
        });
    }

  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

