
import { GoogleGenAI, Type } from "@google/genai";

// Fix: Initializing GoogleGenAI with process.env.API_KEY directly as per SDK requirements
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLeadScript = async (niche: string, targetAudience: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a high-converting WhatsApp lead generation script for a ${niche} business targeting ${targetAudience}. 
    Include:
    1. A curiosity-driven opener.
    2. A value proposition.
    3. A clear call to action.
    Format the response in JSON with keys: title, script.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          script: { type: Type.STRING }
        },
        required: ["title", "script"]
      }
    }
  });

  // Fix: Accessing .text property directly and trimming before parsing JSON as recommended
  return JSON.parse(response.text.trim());
};

export const calculateROI = async (monthlyLeads: number, conversionRate: number, avgLTV: number) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Calculate potential ROI for WhatsApp automation. 
    Current metrics: ${monthlyLeads} leads/month, ${conversionRate}% conversion, $${avgLTV} average value. 
    Automation typically increases conversion by 30-50% and reduces manual work by 80%. 
    Provide a professional summary with projected revenue growth.`,
  });

  // Fix: Using .text property instead of method calls or deep path access
  return response.text;
};
