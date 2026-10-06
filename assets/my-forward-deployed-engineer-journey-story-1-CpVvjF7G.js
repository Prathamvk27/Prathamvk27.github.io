const e=`---
title: "My Forward Deployed Engineer Journey #Story 1"
description: How customer feedback changed my approach to requirements discovery and product development.
published: 2026-09-30
topics: FDE
role: Forward Deployed Engineer
company: Automation Interns
workPeriod: August 2026 - Present
location: Arizona
---

At Automation Interns, I was building a web application for a real estate agency that wanted to replace its manual Adobe InDesign process. The idea was to let brokers create property documents while they were speaking with clients instead of spending time assembling them after the meeting.

I had spoken with the owner and understood the high-level requirements, so I began building a common workflow for both buyers and sellers. During an early product review, however, the owner told me that the workflow felt too generic and did not reflect how brokers actually conducted those two conversations.

For example, a buyer wants to discuss target properties, location preferences, and nearby amenities. A seller is more concerned with their current property, comparable sales, and pricing. I had also organized some information based on how Salesforce returned the data, rather than when the broker needed it during the conversation.

The feedback was difficult to hear because I had already completed part of the workflow and Salesforce integration. But once I stepped back, I realized he was right. I had validated the list of features, but I had not validated the complete user journey. That was a gap in my requirements discovery, and I took responsibility for it.

I paused further development and asked the owner to walk me through separate buyer and seller conversations from beginning to end. I documented what information the broker needed at each stage and then reorganized the application into six stages that followed the natural flow of the conversation.

I introduced conditional behavior based on whether the client was buying or selling. For buyers, the map showed relevant properties and nearby amenities. For sellers, it focused on comparable recent sales. I also added a transformation layer between Salesforce and the application so the user experience was driven by the broker’s workflow rather than by the CRM’s internal data structure.

After that, I changed my development process as well. Instead of building a large section and then requesting feedback, I showed the owner smaller working versions and validated each stage before moving to the next integration.

The agency eventually adopted the application, and the owner reported that brokers were able to handle roughly 40% more client calls because they could build the document during the conversation instead of afterward. I treat that as customer-reported feedback rather than an independently measured metric.

The biggest lesson for me was that gathering requirements is not just confirming which features a customer wants. I need to understand who performs the workflow, the order in which they make decisions, and how different user scenarios change that workflow. Since then, I have tried to validate those assumptions with a lightweight prototype before investing heavily in implementation.
`;export{e as default};
