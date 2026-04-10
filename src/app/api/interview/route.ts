import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = `You are a Senior Technical Interviewer at a top tech company. 
Your goal is to conduct a mock interview for the user. Ask them technical questions one by one.
Wait for their response before asking the next question.
Evaluate their answer briefly, give feedback, and then proceed.
If they struggle, provide a hint. Keep responses concise and conversational.`;

  const result = streamText({
    model: google('gemini-1.5-pro'),
    system: systemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}
