---
title: 'Why I Build My Own Tools'
date: 2026-07-12
excerpt: 'The software market is very good at solving the average version of your problem. Operations is where the average version stops being useful.'
tags: ['operations', 'product', 'tooling']
published: true
---

There is a moment in every operations job where you realize the tool you are using was designed for a company that is not yours.

I was looking at two platforms — both good, both charging a monthly fee the size of most of our admins' paychecks. Both tools tracked tasks beautifully but neither had any concept of a route. And neither could answer the only question that mattered at 8AM every morning: *in what order should these ten people visit these forty properties?*

## The gap is usually not a feature gap

It is tempting to file this under "missing feature" and open a support ticket. But the honest read is different. Route optimization was not missing from those platforms by oversight. It was missing because solving it well requires knowing things about your specific geography, your specific staffing model, and your specific definition of "late" — and no vendor can encode that for every customer at once.

That is the actual shape of the gap. Not *the vendor forgot*, but *the vendor cannot know*.

## Process before software

The instinct at this point is to start building. I have learned to wait.

Automation applied to a broken process produces broken results faster. Before I wrote a line of the dispatch platform, I spent weeks on unglamorous work: documenting how issues got logged, standardizing task types, defining what "priority" actually meant in a way two different people would apply identically.

None of that is software. All of it is the thing software needs in order to be worth writing. A constraint solver is only as good as the constraints you hand it, and if your team disagrees about what a priority check-in is, your solver is optimizing noise.

## Build the part only you can build

The version of this that works is narrow. I did not build a replacement for the platforms we were paying for — they were genuinely good at what they did. I built the one thing they structurally could not do, and let it sit alongside them.

That is usually the right scope. The question is not "what could I build?" It is "what is true about my operation that no vendor could have known?" Build that. Buy the rest.

More on how that platform actually works in the case study on the home page. I will be writing here about the parts that do not fit in a case study — the decisions that looked obvious in hindsight and were not obvious at the time.
