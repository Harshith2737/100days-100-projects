import os
from typing import Any, Dict

import httpx

OPENAI_KEY = os.getenv("OPENAI_API_KEY")
ANTHROPIC_KEY = os.getenv("ANTHROPIC_API_KEY")
PROVIDER = os.getenv("LLM_PROVIDER", "mock").lower()
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
ANTHROPIC_MODEL = os.getenv("ANTHROPIC_MODEL", "claude-3.5-mini")


async def handle_agent(payload: Dict[str, Any]) -> Dict[str, Any]:
    message = payload.get("message", "")

    if PROVIDER == "openai" and OPENAI_KEY:
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(
                "https://api.openai.com/v1/chat/completions",
                json={
                    "model": OPENAI_MODEL,
                    "messages": [{"role": "user", "content": message}],
                    "max_tokens": 800,
                    "temperature": 0.2,
                },
                headers={"Authorization": f"Bearer {OPENAI_KEY}"},
            )
            resp.raise_for_status()
            data = resp.json()
            return {"reply": data["choices"][0]["message"]["content"], "raw": data}

    if PROVIDER == "anthropic" and ANTHROPIC_KEY:
        prompt = f"\n\nHuman: {message}\n\nAssistant:"
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(
                "https://api.anthropic.com/v1/complete",
                json={
                    "model": ANTHROPIC_MODEL,
                    "prompt": prompt,
                    "temperature": 0.2,
                    "max_tokens_to_sample": 800,
                },
                headers={"x-api-key": ANTHROPIC_KEY},
            )
            resp.raise_for_status()
            data = resp.json()
            return {"reply": data.get("completion", ""), "raw": data}

    return {"reply": f"Astra (mock): I received your message and I’m ready to help.\n\n{message}"}
