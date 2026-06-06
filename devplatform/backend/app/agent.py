import os
import httpx
from typing import Any, Dict

OPENAI_KEY = os.getenv("OPENAI_API_KEY")
PROVIDER = os.getenv("LLM_PROVIDER", "mock")


async def handle_agent(payload: Dict[str, Any]) -> Dict[str, Any]:
    message = payload.get("message", "")

    if PROVIDER == "openai" and OPENAI_KEY:
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(
                "https://api.openai.com/v1/chat/completions",
                json={
                    "model": os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
                    "messages": [{"role": "user", "content": message}],
                    "max_tokens": 800,
                },
                headers={"Authorization": f"Bearer {OPENAI_KEY}"},
            )
            resp.raise_for_status()
            data = resp.json()
            return {"reply": data["choices"][0]["message"]["content"], "raw": data}

    if PROVIDER == "anthropic":
        # Placeholder for Anthropic/Claude integration
        return {"reply": "(Anthropic integration placeholder)"}

    # Mock fallback: simple echo/assistant style
    return {"reply": f"Nova (mock): I received: {message}"}
