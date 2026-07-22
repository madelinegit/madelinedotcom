---
title: 'Why I Build My Own Tools'
date: 2026-07-12
excerpt: 'The software market is very good at solving the average version of your problem. In a good operations team, average doesn''t cut it.'
tags: ['operations', 'product', 'tooling']
published: true
---

There is a moment in every operations job where you realize the tool you are using was designed for a company that is not yours.

I was asked to "create structure" and lead daily operations for a  team of handymen and inspectors in North Lake Tahoe, a job that is done from the office using Breezeway and Streamline. At the office, I noticed that several peoples' full time jobs involved many hours every day dancing around software limitations, and I didn't want to join in.

I was looking at two platforms all day, every day — both good, both charging a monthly fee the size of most of our admins' paychecks. Both tools tracked tasks beautifully but neither had any concept of a route, so neither could answer the only question that mattered at 8AM every morning: *in what order should these ten people visit these forty properties?*

Client success wasn't able to help, because they had no intention of adding a crucial feature for us. But why?? Route optimization was not missing from those platforms by oversight. 

A good routing API costs money per optimize, and it really adds up, so I could see the idea being discussed by one of those two SaaS platforms and intentionally rejected. 

It was also missing because solving routes well also requires knowing things about your specific geography, your specific staffing model, and your specific definition of "late" — and frankly, the vendors don't need to customize things so much in order to stay successful.

I spent several months on unglamorous work: documenting how issues got logged, standardizing task types, defining what "priority" actually meant in a way two different people would apply identically. A constraint solver is only as good as the constraints you hand it, and if your team disagrees about what a priority looks like, your solver is just noise.

After a while, I had things scoped out and it was time to automate. 

I was willing run a slightly imperfect haversine equasion in my app because math is free: a haversine solves routes with complex geometry rather than Google Maps' API's extensive knowlege of roads. This avoids fifty cent clicks unless one of our routes was super complicated and spanning across the Tahoe Basin, in which case I can call on Google's API. 

It was successful and I was able to continue automating, my entire job. 

I did not build a replacement for the platforms we were paying for — they were genuinely good at what they did. I built what  they structurally could not do, and let it sit alongside them. That is usually the right scope. Build the part only you can build.

More on how that platform actually works is in the case study on the home page. I will be writing here about the parts that do not fit in a case study — the decisions that looked obvious in hindsight and were not obvious at the time.
