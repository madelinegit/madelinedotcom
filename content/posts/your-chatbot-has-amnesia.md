---
title: Your Chatbot Has Amnesia (and That's a Product Decision)
date: 2026-07-20
excerpt: What building an AI assistant product — and shipping memory systems for clients since — taught me about making an LLM actually remember people.
tags: [AI, product management, architecture]
published: true
---

LLM models have no memory. None. Every API call starts from zero. There's no "memory feature" you switch on. If your bot "remembers" a user's dog's name, it's because someone built a system that stores that fact and feeds it back into the prompt every single time.

You may have noticed that bots don't know what day it is. Models have no clock, either. You fix it in code — inject the current datetime into the system prompt on every request (in the user's timezone), and timestamp every stored memory so the bot can tell "an hour ago" from "back in March." Skip that second part and every recalled fact reads as current, which is how a bot ends up asking about a job the user left months ago.

I learned this building an AI assistant product with a custom backend, and I've re-learned it on other projects since. The model is not the limitation. So memory isn't an engineering detail. It's a product decision: what to remember, for how long, at what cost, and what happens when the bot remembers wrong.

## Options for memory simulation

Each one has trade-offs that an AI PM should understand:

**Replay everything.** Stuff the whole conversation history into every prompt. Simple and faithful — until costs balloon, you hit the context window, and the model starts losing track of what's buried in the middle. Fine for a demo. Not a product.

**Sliding window.** Keep the last N messages, drop the rest. Cheap, easy, and what a lot of products quietly do. The catch: anything outside the window never happened. Your bot remembers the last twenty minutes of its life.

**Summarization.** Compress older history into a running summary. You keep the gist for a fraction of the tokens. But summaries are lossy, and a summary of a summary drifts further from what was actually said.

**Retrieval (RAG).** Store history in a vector database, pull only the pieces relevant to the current message. This scales forever — but retrieval quality *is* memory quality. When the search grabs the wrong memory, the bot confidently misremembers, and users experience that as "broken."

**Structured fact extraction.** Pull discrete facts — "user's dog is Biscuit" — into a profile you inject every time. Compact, auditable, and users can literally see and correct it. The cost: the extraction pipeline is now its own product, with its own bugs.

**Sidebar: no, prompt caching isn't memory.** This honestly confused me at first. Prompt caching stores a repeated prompt *prefix* server-side so your calls get cheaper and faster. It expires in minutes and remembers nothing about your user. It makes whatever memory architecture you chose cheaper to run — it isn't one. If someone suggests "let's just use caching for memory," the architecture conversation hasn't happened yet.

## What I actually chose (three times, three answers)

There's no best technique. There's a best technique *for a product*. I've made this call three different ways:

**Internal tool running repetitive agentic tasks → structured fact extraction.** For a bot doing the same job over and over, dependability beats richness. A fact store is deterministic and auditable — when the agent does something wonky, I can inspect the exact facts it was fed and the tool code it's calling, deterministic pieces I wrote, instead of guessing which prompt phrasing sent it sideways.

**Cost-sensitive client → summarization.** No vector database to host, no pipeline to maintain, tiny prompts. We named the lossiness upfront and accepted it, instead of letting it surprise us later.

**Performance-first client with money to spend → they ask for replay-everything, and I talk them out of it.** Unlimited budget doesn't buy unlimited recall. Context windows are a hard ceiling no matter what you pay, and even below the ceiling, models skim long prompts — stuff in the middle gets missed. What I recommend instead is a layered hybrid: a fact profile on every request, retrieval over the full history, and the recent transcript replayed verbatim. Same price range, but every token is curated context instead of haystack. The client didn't actually want replay — they wanted the best-performing bot. A PM's job is hearing the outcome behind the request.

## How memory fails — and why that's a PM problem

Quietly. That's the problem.

A wrong memory surfaces and the user doesn't think "bug" — they think "this thing doesn't know me." One bad recall undoes twenty good ones. Facts go stale. The bot brings up something sensitive in the wrong context and attentive turns into invasive. And underneath it all: a memory layer is a database of intimate information, so retention and deletion are product decisions with legal weight, not cleanup for later.

Every AI product with returning users has a memory design, whether anyone chose it deliberately or not. "No memory" is a design too, just usually the wrong one.

The job isn't picking the fanciest architecture. It's translating "it should know me" into specific, costed, failure-aware choices — and knowing the menu well enough to push back when someone proposes a sliding window for a product whose whole promise is continuity.

That translation layer is where technical product management earns its title.
