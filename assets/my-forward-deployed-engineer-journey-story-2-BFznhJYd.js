const e=`---
title: "My Forward Deployed Engineer Journey #Story 2"
description: "How I handled the customer feedback"
published: 2026-10-01
topics: "FDE"
draft: false
---

During an early review, the owner told me that the application was technically working, but the workflow felt too generic. I had designed one common sequence for every client and arranged some of the information based on how Salesforce returned it. However, brokers did not conduct buyer and seller conversations in the same way.

My first step was to make sure I understood the feedback instead of immediately defending the work I had already completed. I asked the owner to walk me through one realistic buyer conversation and one seller conversation from beginning to end. That showed me that buyers needed target properties, location preferences, and nearby amenities, while sellers needed their current property information and comparable recent sales much earlier.

I acknowledged that I had validated the required features but had not validated the complete user journey. I paused further integration work, documented both workflows separately, and reorganized the application into six stages. I also added conditional behavior so the content and map changed depending on whether the client was buying or selling.

After that, I changed how I collected feedback. Instead of completing a large section before showing it to the customer, I demonstrated smaller working prototypes and confirmed each stage before continuing. This reduced rework and helped ensure that the application followed the broker’s actual conversation rather than the structure of the backend data.

The experience taught me not to treat critical feedback as a judgment of the work. I treat it as evidence that one of my assumptions needs to be examined. My responsibility is to identify that assumption, validate it with the customer, and turn the feedback into a specific improvement in both the product and my development process.
`;export{e as default};
