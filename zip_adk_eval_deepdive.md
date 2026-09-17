# 📝 Notes

May 18, 2026

## Zip x Google AI, ADK & Eval Deep Dive

Invited [magdaline.frank@zip.co](mailto:magdaline.frank@zip.co) [Phoebe Gunter](mailto:phoebeg@google.com) [craig.ramey@zip.co](mailto:craig.ramey@zip.co) [Dan Fernandez Cao](mailto:dfernandezcao@google.com) [Pedro Correia](mailto:pcorreia@google.com) [brittany.reaves@zip.co](mailto:brittany.reaves@zip.co) [derek.briske@zip.co](mailto:derek.briske@zip.co) [todd.schonhardt@zip.co](mailto:todd.schonhardt@zip.co) ~~[Cassandra McGill](mailto:cassandrarose@google.com)~~

Attachments [Zip x Google AI, ADK & Eval Deep Dive](https://calendar.google.com/calendar/event?eid=NDc0bTZzcDhtNjE3MjNzZ3Q3c2s0OG05MmUgcGhvZWJlZ0Bnb29nbGUuY29t)

Meeting records [Transcript](https://docs.google.com/document/d/1nmyLx1c_IvatX5l5uEPP8KJlWu2nEfY4CpCRAqy0vmw/edit?usp=drive_web&tab=t.a9slvzcrj97n) [Recording](https://drive.google.com/file/d/12lqnKG7obEQCo53rtPIO_Z0-F-r991oA/view?usp=drive_web&resourcekey=0-QoaJat5KSP87dl-LHr1FOQ) 

### Summary

The team explored multi-agent governance frameworks and security strategies via Google Cloud agentic platform capabilities.

**Agentic Frameworks and Vision**  
The session established a vision for multi-agent workflows utilizing the Agent Development Kit. Participants reviewed model capabilities including Gemini 3 with its 1 million context window.

**Governance and Security Architecture**  
Governance strategies were introduced through a centralized Agent Registry and gateway policies. Security measures now include Model Armor for jailbreak detection and PII desensitization across workflows.

**Deployment and Performance Options**  
Discussions covered deployment paths including Provisioned Throughput for guaranteed capacity. The team confirmed support for integrating third-party frameworks like LangGraph into the governed Agent Runtime.

*Rate this Summary:* [Helpful](https://google.qualtrics.com/jfe/form/SV_4YkxrBAaiTVqYCi?isGoogler=true&isHelpful=true) or [Not Helpful](https://google.qualtrics.com/jfe/form/SV_4YkxrBAaiTVqYCi?isGoogler=true&isHelpful=false)

### Next steps

- [ ] \[Phoebe Gunter\] Locate Demo Materials: Identify and resolve the missing materials for the presentation demo.

- [ ] \[Pedro Correia\] Share Slides: Provide the presentation deck used during the meeting.

- [ ] \[Pedro Correia\] Send Announcements: Deliver updates regarding the upcoming developer options and events.

- [ ] \[Pedro Correia\] Confirm Skill Metadata: Investigate the metadata and observability of agent skill usage and report the findings back to Craig Ramey.

- [ ] \[Pedro Correia\] Send Code Details: Provide the documentation and code samples for the multi-agent framework to the team.

- [ ] \[Dan Fernandez Cao\] Share Meeting Materials: Distribute the recording and transcript from the session to the attendees.

- [x] \[Pedro Correia\] Schedule Deep Dive: Organize a follow-up session to explore agent architectures, including monolith and agent-to-agent structures.

- [ ] \[Pedro Correia\] Investigate Langraph Integration: Assess if Langraph agents can be registered in the agent registry and utilized within the A2A system.

- [x] \[Craig Ramey\] Provide Agent List: Submit a list of already built agents to the team to check for A2A integration feasibility.

- [ ] \[Dan Fernandez Cao\] Share Presentation Decks: Send the meeting materials and slides to the participants.

### Details

* **Meeting Introductions and Logistics**: The meeting began with introductions from Dan Fernandez Cao, Phoebe Gunter, Craig Ramey, Brittany Reaves, Magdaline Frank, and Pedro Correia. Pedro Correia, an AI customer engineer, was introduced as the lead for the session, with a focus on AI workloads and Google Cloud’s agentic capabilities ([00:01:59](#00:01:59)). The team established that the meeting would be recorded, and they planned to discuss agent frameworks, governance, and security ([00:01:16](#00:01:16)) ([00:02:49](#00:02:49)).

* **Context and Project Objectives**: Phoebe Gunter set the context for the meeting, noting that the team at Zip is currently utilizing various agent frameworks and platforms. The primary objective of the session was to explore potential governance, security, and control measures for managing a multi-agent system within a single platform ([00:02:49](#00:02:49)).

* **Google's Vision for Agentic Workflows**: Pedro Correia outlined Google's vision for a multi-agent, multi-tool, and multi-API world. The goal is to provide a comprehensive toolkit for governing these complex systems, moving beyond simple agent construction to focus on managing agent interaction and interoperability ([00:04:38](#00:04:38)).

* **Gemini Model Capabilities**: Pedro Correia discussed the advancements in Gemini 3 models, which are now being used for over 50% of new product development, particularly for coding tasks ([00:05:36](#00:05:36)). These models feature a 1 million context window, which is useful for processing long documents, 500,000 lines of code, or one hour of video without needing extensive pre-processing ([00:06:59](#00:06:59)). The models are designed for thinking, planning, and executing, with capabilities available across Gemini Enterprise, APIs, and Google Cloud Customer Experience (GCCX) ([00:05:36](#00:05:36)).

* **Model Garden and Benchmarking**: Google offers a choice of over 200 models within their Model Garden, including Google foundational models, open-source models like Gemma, and partner models. Pedro Correia noted that while benchmarking is volatile, Gemini 3.1 Pro has shown competitive performance against industry peers, offering upgraded reasoning and coding capabilities ([00:09:24](#00:09:24)).

* **Agent Construction and the ADK Framework**: Pedro Correia explained that while low-code/no-code options exist for business users, the team uses the Agent Development Kit (ADK) for building high-code enterprise agents ([00:10:37](#00:10:37)) ([00:12:41](#00:12:41)). ADK supports sequential, parallel, and looping agent patterns, allowing for complex and predictable behaviors in agent workflows ([00:11:42](#00:11:42)).

* **Advanced Agent Patterns**: Pedro Correia described evolving architectural patterns, including Agent-to-Agent (A2A), where child agents become reusable micro-agents. Other patterns include Agent-to-Payments (A2P) and Agent-to-UI (A2UI), which allows agents to generate forms for user interaction, such as vacation requests ([00:14:48](#00:14:48)). The team is also working on a graph-based approach in ADK version 2.0 to define complex, dynamic agent interactions ([00:15:53](#00:15:53)).

* **Agent Lifecycle and CLI Deployment**: The Gemini CLI serves as a development harness, allowing developers to create, test, and iterate on agents in a local environment before publishing them to the Agent Runtime. This process is designed to streamline the lifecycle of agent deployment and ensure predictability ([00:17:01](#00:17:01)).

* **Model Routing and Usage**: Regarding model selection based on query complexity, Pedro Correia clarified that the Gemini CLI currently relies on manual selection between models like Pro and Flash. While some industry patterns involve automatic routing between model types, Google’s platform does not currently automate this choice, though they do use model variation in some end-user experiences to balance cost and response time ([00:19:17](#00:19:17)).

* **The Challenge of Agent Governance**: Pedro Correia highlighted the risks of uncontrolled agent proliferation, such as unauthorized data exfiltration and security breaches. He introduced the concepts of agent identity, which moves away from standard service accounts toward non-persistent, cryptographic identities, and centralized agent registration to provide visibility and control ([00:21:29](#00:21:29)).

* **Agent Registry Functionality**: The Agent Registry acts as a centralized repository where agents can be searched by name or skill, enabling discovery by other agents and administrators ([00:22:41](#00:22:41)). This registry is integrated with the Agent Runtime, where security constraints and evaluation metrics can be applied, and supports exporting logs to BigQuery via open telemetry standards ([00:23:49](#00:23:49)).

* **Security Policies and Gateways**: Agent Gateways manage the interactions between clients, agents, and tools (such as Model Context Protocol servers), allowing for policy enforcement like read-only access or blocking unauthorized paths. This system is designed to provide granular control over which agents can communicate with other agents or enterprise systems ([00:24:58](#00:24:58)) ([00:31:55](#00:31:55)).

* **Identity and Access Management**: Magdaline Frank asked about user-level versus agent-level security, and Pedro Correia confirmed that both are used ([00:26:21](#00:26:21)). Gemini Enterprise checks user licensing and group-based access to agents, while at the data layer, the agent carries the user's identity forward, ensuring that the tool-calling process respects the original user's Identity and Access Management permissions ([00:27:25](#00:27:25)).

* **Integration of MCP Servers**: The registry allows for the registration of third-party or custom Model Context Protocol servers, providing a "one-stop shop" for managing tool access ([00:29:27](#00:29:27)). Google has transitioned their own products, such as BigQuery and Postgres databases, to be MCP-based, enabling one-click deployment for agent tools ([00:30:46](#00:30:46)).

* **Model Armor for Safety**: Pedro Correia introduced Model Armor, a security component that integrates with Gemini Enterprise and agent workflows. Model Armor provides jailbreak detection and can desensitize Personally Identifiable Information (PII) before it appears in logs or user responses, ensuring compliance and brand safety ([00:37:15](#00:37:15)).

* **Agent Evaluation and Observability**: The Agent Runtime supports both online evaluation, which samples agent interactions for safety and quality metrics, and offline evaluation, where developers can run custom test suites using a code-based approach ([00:48:31](#00:48:31)). Pedro Correia demonstrated an evaluation pipeline that assesses metrics like customer care quality and authenticity against a custom rubric ([00:51:05](#00:51:05)).

* **Framework Compatibility and Integration**: Phoebe Gunter clarified that the Agent Runtime supports third-party frameworks, including LangGraph, LangChain, LlamaIndex, and CrewAI, which can be deployed and then registered in the Agent Registry ([00:54:33](#00:54:33)). Pedro Correia agreed to take an action item to confirm the specific A2A support for LangGraph agents ([00:47:35](#00:47:35)).

* **API Transcoding with Apogee**: Pedro Correia mentioned that Apogee allows for transcoding existing REST APIs into MCP servers, which can then be integrated into the governed agent environment ([00:56:58](#00:56:58)).

* **Latency and Usage Costs**: Addressing a question from Craig Ramey regarding performance guarantees and pricing, Pedro Correia explained that the on-demand model utilizes a shared pool of resources, which may result in 429 (resource exhausted) errors during high-demand periods. Dan Fernandez Cao and Pedro Correia noted that further discussions regarding dedicated deployments could be had if specific latency requirements exist ([00:57:55](#00:57:55)).

* **Availability Options and Performance Guarantees**: Pedro Correia outlines the available paths for model deployment, specifically highlighting "Provisioned Throughput" for 24/7 capacity. Craig Ramey asks whether shared models suffer from latency or receive 429 status code errors during high demand ([00:59:00](#00:59:00)). Pedro Correia explains that "Provisioned Throughput" provides guaranteed capacity and latency, while the on-demand pool operates without throttling, meaning models are either available or unavailable rather than experiencing response delays ([00:59:56](#00:59:56)).

* **Priority Access and Third-Party Model Support**: Dan Fernandez Cao describes "Priority Pay-Go" as a paid option that provides faster, prioritized access similar to a theme park fast pass ([00:59:56](#00:59:56)). Additionally, they note that "Provisioned Throughput" is available for models within the Model Garden, as well as for Anthropic models, which run on their Tensor Processing Units ([01:00:48](#01:00:48)).

* **Model Armor Security and Compliance**: Dan Fernandez Cao explains that the "Model Armor" security layer is natively wrapped around all models used on the Gemini enterprise platform, including both open-source and Anthropic models. This integration ensures an additional layer of security and compliance for users ([01:00:48](#01:00:48)).

* **Meeting Materials and Next Steps**: Magdaline Frank requests the sharing of the presentation materials, which Dan Fernandez Cao confirms they will provide ([01:00:48](#01:00:48)). The participants conclude the meeting, noting they will debrief internally, and Pedro Correia confirms that they will send the decks and follow up on the discussed items ([01:01:38](#01:01:38)).

*You should review Gemini's notes to make sure they're accurate. [Get tips and learn how Gemini takes notes](https://support.google.com/meet/answer/14754931)*

*How is the quality of **these specific notes?** [Take a short survey](http://go/tnfm-feedback-form?confid=DAFF88dnlbHo9YnnjnBCDxIPOAIIigIgABgBCA&detailid=standard&screenshot=false) to rate their helpfulness, and submit any bugs via [buganizer](https://b.corp.google.com/issues/new?component=1419801&template=1877548&1362289=DAFF88dnlbHo9YnnjnBCDxIPOAIIigIgABgBCA&1464251=standard).*

# 📖 Transcript

May 18, 2026

## Zip x Google AI, ADK & Eval Deep Dive \- Transcript

### 00:00:04

**Dan Fernandez Cao:** right and

**Phoebe Gunter:** Um, I'm good. You have nothing like I just I can't find all the material for the

**Dan Fernandez Cao:** early?

**Phoebe Gunter:** demo. Like I feel like there's something missing. I'll have to figure it out. I Good.

**Craig Ramey:** Hello. How are you? Good thing.

**Phoebe Gunter:** How are you? Hi Britney.

**Brittany Reaves:** Hello. How's everyone doing?

**Dan Fernandez Cao:** Okay, thank you.

**Phoebe Gunter:** Doing well.

**Dan Fernandez Cao:** to see a bit up bright and early ready for a a busy

**Phoebe Gunter:** I think um I don't know. Are you all Craig and Britney?

**Dan Fernandez Cao:** day.

**Phoebe Gunter:** Are you all in the US or are you guys in Australia?

**Craig Ramey:** I'm in the US. This is actually the end of

**Phoebe Gunter:** Yes.

**Brittany Reaves:** Yeah, I'm also US-based,

**Phoebe Gunter:** Yeah.

**Brittany Reaves:** though.

**Craig Ramey:** my

**Brittany Reaves:** I'm on the West Coast, so it's still it's like 2:30 p.m. for me, so it's still early

**Phoebe Gunter:** Okay.

### 00:01:16

**Phoebe Gunter:** Yeah.

**Dan Fernandez Cao:** as I said last

**Brittany Reaves:** afternoon.

**Phoebe Gunter:** Not too bad. Yeah, this time of year I think is the worst for the overlapping of time zones.

**Magdaline Frank:** Hello.

**Dan Fernandez Cao:** time.

**Phoebe Gunter:** So, thank you for I know it's end of day for you all. Hi, Meline.

**Magdaline Frank:** I know some folks are going to be joining late, Phoebe, but we can get started. And if you don't mind, I think you're already recording this.

**Phoebe Gunter:** Okay.

**Magdaline Frank:** So if you could share the transcript and the recording with us post the meeting be

**Phoebe Gunter:** Yeah,

**Dan Fernandez Cao:** Yeah, I can record the meeting itself if that helps.

**Phoebe Gunter:** we're actually Oh.

**Dan Fernandez Cao:** Um,

**Phoebe Gunter:** Oh,

**Dan Fernandez Cao:** I do

**Phoebe Gunter:** Pedro's here. I was like,

**Magdaline Frank:** helpful.

**Phoebe Gunter:** "We're waiting on Pedro, but you're

**Pedro Correia:** Sorry, I was uh I I managed to do the hardest thing,

**Dan Fernandez Cao:** picture.

**Phoebe Gunter:** here.

**Pedro Correia:** which is getting up sick to do the session, but then I had computer problems.

### 00:01:59

**Pedro Correia:** So, sorry for being uh 3 minutes late. Magdalene Craig in Britany. Good uh afternoon to you.

**Magdaline Frank:** Hey, nice to meet

**Pedro Correia:** Yes.

**Dan Fernandez Cao:** Do you want just do a quick intro, Pedro? I don't know if you've met the team before.

**Magdaline Frank:** you.

**Pedro Correia:** No, I haven't. Um but yeah, look, u you probably know Dan and Phoebe. Um, my name is Pedro. I'm an AI customer engineer uh working with with uh with these two people here in the

**Dan Fernandez Cao:** So where you have Phoebe is more of a general Google Cloud uh specialist.

**Pedro Correia:** call.

**Dan Fernandez Cao:** Pedro is more focused on our AI workloads. So he and I work quite closely together um with our yeah tech startup accounts. So he's going to leave the session today to take you through um the AI agents and the capabilities we discussed in the last session and then we'll be able to carry on that that kind of cadence going forward and partnering with you. Um cool.

### 00:02:49

**Dan Fernandez Cao:** I will start Oh, thanks so much to it. Cool. We will start recording it. I will hand the mic to Pedro and then uh any questions or anything else you wanted to cover from today, please let us know. But we'll just take you through the agenda and um we can go from there if that's okay.

**Phoebe Gunter:** And yeah, and I might just um level set quickly before Pedro you get into the content just for those kind of watching the recording. I know all of us were on the last call, but just in case anyone watches this that wasn't um I think the highlevel overview is you all at Zip have done quite a lot on the agents and you're using different agent frameworks and different agent platforms today and you're looking at kind of what governance is out there potentially in potentially one single platform um for you all to manage your agents across your organization and get a bit of that security and control around. Um, I think that was one of the biggest outcomes of the last meeting we had.

### 00:03:46

**Phoebe Gunter:** And so, yeah, Pedro's just going to go through a bit more of our probably while we do have like low code, no code agent builder functionality, Pedro's going to go through a bit more of our um, I would say tools, agentic tools to help manage more complex multi- aent systems with governance, security, etc. So, that just a bit of context um, for everyone. And with that, yeah, Pedro, finally, I'll let you

**Pedro Correia:** and thank you Phoebe and um just everybody in the call um feel free to stop me whenever you have questions. I did put in a lot of slides which I'm we're happy to share with you, but I'm happy to take a steer on whether you you you want to see more of the content that we're going to be talking about or you're comfortable with this. So, uh please stop me at any time um if you if you feel like this is um something you've you've got covered. Okay. Can you see the screen?

**Dan Fernandez Cao:** just coming

**Pedro Correia:** Okay.

**Dan Fernandez Cao:** through.

### 00:04:38

**Magdaline Frank:** Yep.

**Pedro Correia:** And we can also go into the platform um and sort of walk you through um some of these things. But um all right, so we're going to walk you through the models. I think this is you're familiar with this and um this was in the proposal we sent before, but if you if you want me to talk to them, happy to do that. And then we're going to talk about um the types of agents we have and and the tooling that we have around that. And then I think this is where you want to spend most of the time which is governing agents um when you're adopting multiple agents, multiple MCPs. So we've um we just had a flagship event um a couple of a couple of weeks back and we had a lot of toolkit um for this component. um you'll see that our vision is that we think this going to be a multi- aent, multi-tool, multi-API sort of world and we're sort of bringing the tools to to help you govern that. And then finally, I I I'll touch upon evaluation.

### 00:05:36

**Pedro Correia:** Um if at any time you prefer to see the platform or the console, I'm happy to do that as well. So, let's just get started. Um so obviously we have the Gemini 3 models um which I'm sure we it's going to be outdated in two or three weeks time. We always keep updating these models but um instead of reasoning um and multimodality we still believe that multimodality is is is crucial for agents cap and and the ability to sort of understand the world around them. um we've made some advancements in terms of the way they use tool and the way they they plan but also the way um these models are used for coding um and I think something like north of 50% uh Phoebe this I we were in a conference where we threw this number north of 50% of our new products is developed with with Gemini 3 and and um sort of our coding capabilities so what you have is is a leap in terms of intelligence between these models uh between the different versions of the models and we're at 3.1 uh now and and that's made available in multiple places that's made available in Gemini enterprise which is our um enterprise search and aentic sort of um glass pane for for all of your internal employees.

### 00:06:59

**Pedro Correia:** Uh we make that available in our APIs for you to build your products and we make that available in customerf facing agents through our GECX. So when these models now get rolled out from deep mind, they have a clear path to to production and they're sort of made available everywhere um for you to consume. Um yeah, so one million context window that's still quite useful for really long understanding long documents and multiple data sources. This is the sort of thing that powers Notebook LM which is which is um quite known and is is one of the things that's on Gemini Enterprise. Um so the ability to sort of understand functions and and orchestrate workflows is is also increased and that's that's where we use our we use that capability in our gentic component. Um and then finally this is just a an overview of where we use this but again we are using uh this model to build our products and some of our customers are are using uh Gemini 3 models to build products as well. And the key differential architectures is the the the window that we spoke about.

### 00:08:12

**Pedro Correia:** Um 500,000 lines of code, 200 podcast transcripts, one hour of video. Um and and that's that's sort of key to not be bound by having to parse the content that you're trying to understand. Um and sort of do that pre-processing before you actually do the the inference with these models. Uh the other is is this is something we have in very clear in our products where you see the model is thinking, planning and then executing. There's different models being used in the background for that and and the the model itself and the agent that runs these models knows when to use different thinking levels. But again, there's there's that um autopilot mode where in some of the experiences, you just let the agent decide which model is the best and we we train for that. But there's also the ability to create something where you decide which thinking budget to allocate to the different tasks. Um so um both both both both ability to sort of um change uh use this and um and yeah um I think that's sort of the main the main key points there.

### 00:09:24

**Pedro Correia:** there's there's benchmarking and benchmarking gets outdated quickly but um in some of the few tests when we launched uh three uh we were seeing Gemini 3.1 Pro sort of leap um in front of Sonnet and Optus but obviously they're very capable models this is just for a bit of industry flex um but yeah the a path there is upgraded reasoning um and the coding as well and of course I think this was part of the initial deck that we sent out but we have 200 plus models for you to choose from in model garden. So obviously we have Google foundational model and this sort of up here um you know Gemini we've been talking image generation nano banana pro vo all of these multi- media gen models but also embedding models we have all of these things but but then you can also use our partner uh models open source models um and like Gemma so you can define and use and evaluate how different um tasks are performed with one model versus the other. So um definitely something um that is a differentiator.

### 00:10:37

**Pedro Correia:** You can choose any model here. So um agents they come in two flavors. You have um I used the cooking recipe recently. You have the people that follow the recipes which is sort of me and then you have people that have the ability to build everything from scratch um and get the sauce just right instead of getting it out of the counter. Um but um I mean this is not news to you if you're playing around with some some of the frameworks but obviously the high code we have our own which is a ADK but we also have in our runtime in our agent runtime the ability to run um agents built with other frameworks. So um I I I you tell me if this is too basic. Um I mean if you're exploring with agents you probably know this already but we had version one of ADK come out. Um and simply it's just the ability to attach a large language model to give reasoning um tool usage and then some definitions of the things that you want to do.

### 00:11:42

**Pedro Correia:** So you can do a sequential sort of set of tasks that get together. You can do it in parallel and you can repeat a task until a certain um task is achieved. So it might be you know write uh an article until that article meets the threshold of quality that we have um or create a report until the report fills out everything that we want. And then there's there's the ability to create custom pieces of code that interact with that base agent. Um so that's that's an example of sequential angel agent um where you sort of have some predictability. Um

**Magdaline Frank:** I think uh some of this is very helpful and I think one we probably are more interested in is the I

**Pedro Correia:** yeah.

**Magdaline Frank:** code because of my understanding last time we discussed is

**Pedro Correia:** Yeah.

**Magdaline Frank:** when we try build something and deploy at a enterprise level it helps to start with an I code to move building Not the low code agent

**Phoebe Gunter:** Yeah, more of those because we did go through like a high level the Gemini Enterprise agent

### 00:12:41

**Magdaline Frank:** business.

**Pedro Correia:** Yeah.

**Phoebe Gunter:** platform pedagra on the last call. So this is just yeah a bit more of the governance and security around maybe like the high code agents. um something that's probably a bit more fit for purpose for Zip where they are in their agent journey, which is a bit more

**Pedro Correia:** Yeah. and and and we can always go back to Gemini Enterprise and show you the the low code agents.

**Phoebe Gunter:** mature.

**Pedro Correia:** Those are useful for uh business users that don't have any skills in in sort of coding, but ADK is the framework that we use for the ICode agents to really build um integrations with MTP tools to build complex workflows. And these are some of the basic building blocks. Um so, you know, you can mix and match a sequential agent that has a loop at the end.

**Magdaline Frank:** Yeah.

**Pedro Correia:** uh you can you can build quite complex sort of behaviors. Um and we already have multiple customers using these three constructs, the parallel, the sequential and then the the looping agent.

### 00:13:43

**Pedro Correia:** And you can you can create them all in one together. So a good practice to sort of have some structure. You can just create an agent, give it a model and give multiple instructions and then hope for the best. But obviously you're not in the business of of hoping for the best. You're in the business of making stuff predictable. So, um I'll skip the the custom agent component, but this is how you build agents uh with the ADK2 version. Um sorry, the ADK 1.0 version. It's essentially like a monolith of agents. You have an agent that has some instructions and then sub agents that are specialized and they have access to tools. Um but um we found obviously this doesn't really scale if your child agent is somebody that um has access to is an agent that has access to HR uh systems or to any other mission critical system that it needs to be reused for other agents then you're sort of building code multiple times. So um we've created ADK as a first step but now we're going A2A.

### 00:14:48

**Pedro Correia:** So we're we're transforming this child agent into a remote agent that sits as a micro agent if you like to to to use the microservices uh analysis and then all the other agents can reuse it. Um so that's a little bit of composibility that we have with agent to agent component but you know we're extending that to also have agent to payments uh which is something that we've explored. Uh I I believe A2A we've donated to the Linux Foundation. So it's an open source sort of concept that we've we've donated to the Linux Foundation. A2P plays a role in some of our offerings. Um and and then we have um the unified commerce protocol which is something that we're taking to our retailers. Um the other one that I didn't put here is the ability to have UI inputs for agents. So it's called A2 UI. So it's sort of like a form. If I want to fill out my vacation request and I select, you know, I want month of June, I want a week in June, the type of vacation is annual leave, and then submit that request.

### 00:15:53

**Pedro Correia:** It essentially builds the UI based off of that. So, this gives uh agents um a little bit more of of of a different medium than just the text. Um and and these are all things that um we're building on top of ADK. Uh we are updating it. So, version 2.0 is already um in beta and we have some developers playing around with it but um we're just sort of taking it to the next level in terms of having more of a graph approach to that sequential you know loop um a graph approach of defining the the interactions that the agent's going to have um supporting the coordination of of different agents and then the ability to have dynamic workflows. Um so so so this is sort of taking things to the next step and obviously agent skills very much like um other agenting frameworks we're bringing that into the mix. So you're going to have uh lots to play with. So agents that can talk to different agents that have different tools access to different MCP servers um and that will have different skills to specialize them.

### 00:17:01

**Pedro Correia:** So um really getting granular with the u ability of the agents and also what do you use them for, how you reuse them. Um we've just launched agent CLI and I've been I've been using this in Anger. It's essentially tied to our Gemini CLI component uh which is just our terminal based um model very much like like cloud code. Um and then essentially it it lets me create an agent um iterate on it. I obviously then do some some some coding but it allows it's the sort of harness for creating agents the right way and then I can go from my local environment test it um evaluate it in my local environment publish it to our runtime which is called agent runtime. We've changed it. We've changed the name, but it's a runtime. And then I can test it there. And once I'm happy there, I can register um that agent in a Gemini Enterprise instance. So, it depends on what you're doing with the agent. If it's going into a Gemini Enterprise, you can register it.

### 00:18:07

**Pedro Correia:** If it's just living in that agent runtime, um it's there. And it really speeds up the process. you know, it it just simplifies um and brings predictability to the um life cycle deployment for for for agents. Any questions there? And obviously this is this is this is free obviously it's um it's tied to the amount of tokens you consume um in in the terminal um we can talk about commercials but essentially Gemini Enterprise will give you a portion of tokens that you can use to to build um but um yeah I think I think we're we're still doing some progress in terms of our developer options and um we have a a major event coming through in in this week actually. So, um, we might shoot some announcements over to you in terms of of that. Okay.

**Magdaline Frank:** Um I did have one question Pedro the install skills into the Gemini CLI your coding agents uses them to make the right decisions. Is there like a specific routing on models based on like you know the complexity of the query and the usage?

### 00:19:17

**Magdaline Frank:** Use the right models based on

**Pedro Correia:** Yes. Uh, good point. So on Gemini CLI today,

**Magdaline Frank:** costs

**Pedro Correia:** um, what we have is the ability for the user to choose which model they're using. If I'm planning a feature launch, I'll I'll I'll go into the pro model. Then I have all of of all all all of this. And then when I'm building the the different releases, I use Flash. So a more costsensitive um model. But that today in Gemini CLI it's all within the Google models um you know and that might change in in in the in the future. Obviously there's some patterns in the industry where people are doing the implementation task with an open source model um or another model but we don't have an automatic uh way of of choosing that as of today. Um that's on the developer side. Uh on the usage of of the end user definitely um you know we have an auto that

**Magdaline Frank:** Got

**Pedro Correia:** sort of will vary between a planning sort of more capable model like pro and then switch to fast to increase the response time.

### 00:20:27

**Magdaline Frank:** it.

**Pedro Correia:** Cool.

**Magdaline Frank:** Okay.

**Pedro Correia:** Um you going to say something? No.

**Phoebe Gunter:** Nope. This is a section I wanted to get to. So, I think this is great.

**Pedro Correia:** All right. Um, so, uh, I'll skip this. We'll come back to this. This is what you're probably looking at. All all the vendors are coming to you and say, "We have an agent or we have an MCP tool." Um, and you you're probably giving your developers and your IT team the ability to sort of explore these. Um, but quite quickly, you're going to have multiple models up top, different personas, different systems to integrate, and a mesh of agents. uh that's going to be hard to manage. So obviously you're going to have multiple agents coming through whether you build them or you adopt them. You're going to have multiple MCP servers in different flavors. Um you know you can you can build your own for your own APIs and then you're going to sort of have this um decision process of which models am I using and when am I using it?

### 00:21:29

**Pedro Correia:** Yeah, you just gave an example there of of um doing optimization in terms of models. So you know our idea is is to simplify this. You know agents are not deterministic. You cannot govern them by a deterministic sort of tooling. Um it'll be it'll be a nightmare to do that. And there's there's a lot of risks that exfiltration security breaches. So from each prompt there there's a lot of uh potential outcomes. Not all of them are are positive. Um so we need to answer questions like what are the agents that are running? what access do they have to our enterprise tools and who's responsible for them. So for that we're going to bring sort of visibility access on and ownership and uh ultimately attribution let's just get into the details and then the other questions is how do I restrict agents uh for specific user how do they comply with regulatory and for that we have uh some changes announced identity life cycle management and compliance so uh I'm just going to go into the diagram I love a diagram Not sure if you're you're a visual person like me, but you have an agent.

### 00:22:41

**Pedro Correia:** You have an agent identity. We're making a change there to a cryptographic sort of um non persistent identity that is different from service accounts that will allow you to trace an agent's identity throughout the invocation um life life cycle, you know. So the tools that that they're using is that the right person. So is that the the right level of access? Um they have memory and sessions and they use models. Um we are bringing a place for you to register agents. So agents have a a a card what they do what are their capabilities and then they're they're sort of registered in a centralized repository and you can search for them. You can search for them based on name. You can search for them based on skills. um so that other agents can find your um agents. Um so this is sort of the core of agent to agent. Uh you have a smaller agent tasked with uh doing a specific task. It goes into the central repository and then like a coordinator that actually uses multiple of these agents can sort of search for them and interact with them.

### 00:23:49

**Pedro Correia:** So that registry has um is attached to multiple agents that are in a thing called agent runtime which has the ability for you to test, evaluate, trace um and sort of log and and and sort of put some security constraints. So those are two things that are sort of core to what we're doing. All of this goes into um our logging system through open telemetry standards. Um so you can export this into BigQuery. It is optional if you choose um in certain tools if you choose the prompt and response to be logged. Um so there's a couple of of options uh you can have it not logged uh for example for Gemini Enterprise um or you can have it logged where you have the that detailed and you can have a third option which is you have it logged but with desensitized information out. So um any PII information can be sort of uh removed to the logs and and this is all configurable by you with a thing called model arm which we'll talk later. Uh and obviously you're going to have um different ways to interact with your agents.

### 00:24:58

**Pedro Correia:** It might be a cloud run component in a UI that you have. Um it might be Gemini Enterprise. It might be uh different chat bots. they're going to go and sort of pick up an agent which might use other agents in the registry and that agent will use other agents tools, models and APIs. Um, so what we're bringing here is the ability to decide which customers can interact with which agents and you can put policies here in place depending on the conditions. Um, and you you can have these policies be uh just a notification or you can have them be enforced. So it will stop the interaction when an unauthorized path is detected. So that's uh gate gatekeeping number one again which customers can use which agents and then um different what are the agents to agents and agent to tools interactions like what agents can talk to which agents and what tools can they use and within those tools and we're broadly talking about MCP servers you can say agent X can use MCP tool Y but only as a read and then another agent can use that MCP tool as read and write depending on what makes sense.

### 00:26:21

**Pedro Correia:** So gateway is really the the the step where you make sure that interactions are as they should and um by contrast today you're relying on the developer to make sure that this is right and I'm sure your developers are are making sure that this is right but as you increase the agents as you speed up the amount of agents that you produce this will be crucial um and then AI security we'll talk about that access authorization and how credentials flow between the end user to these tools and to these agents is something that um is is provided there as well. I think that's a lot. I I wanted to pause there and ask if you have any questions.

**Magdaline Frank:** So the access and the security is all at a agent level not at a user level. Am I right Pedro?

**Pedro Correia:** Yeah. So, um at the user level, so let's pick up Gemini Enterprise which I know you guys went through. um you have some user level access and some IM permissions. So what do you have there?

### 00:27:25

**Pedro Correia:** You have um does Pedro have access to the tool? Does he have a license? and if so he can get in and see the the user interface. There's a second level which is what agents does Pedro have access to or Pedro's group, right? You can do this with groups as well. Um and then I might have access to an agent that you shared with me. Um and that that's that's sort of checked by an administrator, you know, like yes, this low code agent can be shared to Pedro and Pedro has access to these low code agents and also these high code agents. So there's access to agents within Gemini Enterprise. Um and then obviously on the other components on cloudr run you're sort of responsible by the who has access to those surfaces. So for example if it's an internal portal if it's a customerf facing portal you're going to have some um IM settings there and some you ow that can then you know be sort of passed on to this. So let me give you an example on Gemini Enterprise.

### 00:28:28

**Pedro Correia:** Let's say you have an agent that will go to an operational database um or an analytical database and will retrieve um transactions that I'm responsible for. So there's IM permissions at the data source. The way this happens is like an agent sort of runs it has its own identity. It can access the MCP tool that will go into the analytical tool but then it also carries my identity. So that identity goes all the way into the tool calling and then it will do a select statement um and it will only show the rows that I have access because my my identity was carried on all the way up until the tool invocation and then I only have access to the rows that I have access. Um so if anything if you don't have the right IM permissions at the data source then obviously I can extract a bit more but that's that would be possible today today as well. Um did I answer that? I think so.

**Magdaline Frank:** You did.

**Pedro Correia:** Yeah.

**Magdaline Frank:** That was

### 00:29:27

**Pedro Correia:** So yeah, so we we do have controls at the agent and then that the credentials and the oat sort of gets

**Magdaline Frank:** helpful.

**Pedro Correia:** carried on so that we u make sure that the tool calling has the user identity um for the context. So yeah. Right. Um and then you know we we have a couple things here. I'm just going to walk you through the agent registry. Um some of the the tools agent development I think we I touched upon these uh making sure that you have a a runtime that works for everybody uh governance audit auditability and that's sort of how it looks. Um so use case number one is to make sure that sorry guys just give me a second. Um, okay, I'm back. So, um, use case number one is to make sure that you have composibility and reusability of the agents. And we spoke we spoke at length about this. Um but yeah, in that in this agent registry, you're also able to uh register your own MCP servers, thirdparty MCP servers.

### 00:30:46

**Pedro Correia:** So that's a centralized place for your agents and for your MCP tools. Um and I know you you don't do much with us, but um in terms of Google Cloud, but all of our products now are MCP based. So our data stores um there that you you can have an MCP that gets enabled for for a tool and that's a one-click deployment you don't need to do anything um so you know if you have an analytical data um you can have a big query uh MCP tool if you have a Postgress database you can have a Postgress um MCP tool enabled for your um agents. Okay. Um, and then this we can go and and do a deep dive in the code if you'd like, but essentially um this is how you register a a a a user where you find a registry, you get the tools and then you register the uh the component and then you can look it up by a specific endpoint which is known after you've deployed it or you can do the lookup based on skills and essentially get a list of agents that can help you.

### 00:31:55

**Pedro Correia:** I think I haven't found this this this would be very dynamic if you don't know the agent to agent patterns within your um organization but it might be for if you're doing sort of B2B uh integrations it might might work well um use case number three um having different uh agent tool um curation access control and then auditability I think this is a big one like you when you want to see a specific agent that has been interacting with the tool then you're just looking at that path of of the interaction rather than multiple monoliths of agents that all have interaction points there. Um so uh the other piece is agent gateway. uh couple of of components here. You know, you have the ability to do the authentication, but it allows you to do connection between an agent, other agents, MCP servers, enterprise APIs, which probably you're going to do um you're going to do via an MCP server. Uh and then you can also integrate with some of our our our own APIs. Um okay and then this is also extensible to ISV agents.

### 00:33:12

**Pedro Correia:** The idea is that you will be able to do policies on all the agencies that you can deploy in in GCP. Not only the ones you create but also thirdarty agents that you you bring into the fold. A managed Slack MCP server for example that you do. All of that will be will be there. Um, okay. And this is another way of of showing a gateway. I think that first one does a pretty good job at at explaining what we're doing. I think the important bit here is client to agent, but also agent to tools and agent to agent

**Dan Fernandez Cao:** And in our last conversation, it felt like that was a bit of a challenge right now.

**Pedro Correia:** control.

**Dan Fernandez Cao:** Does it where you had a lot of agents for all and a lot of things going on and it was that kind of wrangling uh the chaos a little bit um that was the challenge. Is that fair to say?

**Magdaline Frank:** Yep. Oh yes.

**Dan Fernandez Cao:** And is there any feedback or thoughts around that kind of framework?

### 00:34:04

**Pedro Correia:** Okay.

**Magdaline Frank:** The way we are is the definitely the agent registry stands out for us having that one-stop shop to understanding the different agents and you know have making sure that all these agents are governed have an identity and what does their access look like that'll be critical for us as we think through this and AI observability and you know that's something we definitely need to work through given that we are a fintech and more than ever for us we need we are constrained by a whole lot of regulations as

**Dan Fernandez Cao:** Okay, cool. You just don't need Pedro.

**Pedro Correia:** Yes, you don't need to hear all of my No,

**Dan Fernandez Cao:** Sorry, I didn't know if you're

**Pedro Correia:** no, you don't need to hear all my sneezing. Sorry.

**Dan Fernandez Cao:** talking.

**Pedro Correia:** You're going to see the the presentation as well as the screen. I'm only in one in one screen. Um, can I Okay, I'm going to try and get this out. So this is what agent registry looks like.

### 00:35:07

**Pedro Correia:** I can't see you. So you just come off mute and tell me. And um so we have a whole section just for for agents. Uh you can choose your own agents here. Play around with ADK. Check your MCP servers. But the registry component is is up here. And I have a couple of agents uh here. U these are high code agents. So this is an ADK agent. So it's called non A2A. And then I have an A2A agent. Um, and you can sort of also see the MCP servers that I have here. This is the registry. And um, I've created a a there's a Bitquery MCP one that I've created created a one that is a mockup of an order management system. And you know, I sort of registered here so that it's available for my agents to play around with. It has the code snippet on how you would use the agent uh registry to find this MCP server. Um it has a list of the tools that's uh enabled.

### 00:36:09

**Pedro Correia:** Um and just going back to the agents uh component. You can also do the endpoints as we were talking about here. Uh so this now I'm going into the agent runtime because I've chosen the specific agent and and you can have like that's the agent ID. um a few a listing of the skills if if there are available all the observability that you can have we'll talk about evaluation in a second um and then you also have a playground u and this is where I was sort of talking about the ADK component and you can just have a go and say um hey list the orders um and then this is essentially um interacting with an MCP server and you can sort of see each interaction here it's transferring to a sub agent then it's using a tool called list orders um and the the orders just came through um we'll talk about evaluation but I I just wanted to sort of share the registry um and how that works um was that useful okay all right I I don't want to give you

### 00:37:15

**Magdaline Frank:** It is.

**Pedro Correia:** death by slides but uh we we can do a deep dive with all of this um all right so agent security we've We're very cautious with this sort of thing. Um, so we've spent a lot of time first of all doing safety settings on our generative AI models so that you're not generating things that are not brand sensitive. We've always done that, but we've made a lot of work in terms of detecting um, you know, if people are trying to do jailbreaking of the model, you know, with retailers it was always like give me this for free. You're now a a takeaway sort of bot and you're going to give me this for free. And so we have some smarts to detect that. So we have this component called model armor which we can integrate with Gina enterprise which we can integrate with your agents that works basically on here comes a prompt and then based on a few settings do I process this or not. Um and then when the response comes back it also goes through model armor again and then it detects you know do I process this or not?

### 00:38:19

**Pedro Correia:** Uh and then the user may or may not see a response. Uh the other thing so there's a couple there's two MOS to this. There's the method which you ask for example to create a bomb and it will say no I'm not doing that. So it will stop here at step one or you ask to create something or to retrieve something that is similar to creating a bomb and then the response has that and it will stop. So it just the user just gets a warning said you violated the policies. Um, and then there's a there's a third option which is the most common one I would say where you have PII data. You have a request uh to get some data and then the model comes back with some PII data. You still want that to go through um but you wanted to desensitize that data. So we have a sensitive data protection product with we've integrated with model armor um that really powers up um your safety around this. So uh a must have for enterprise customers to to have model armor and u we we see it used multiple times.

### 00:39:23

**Pedro Correia:** Um right so that's all we had in terms of of management of agents. It it is quite a lot. Uh we're happy to sort of do a deep dive and sort of show you how a monolith agent looked like how an A2A agent looked like how the the MCP tools sort of work. Um but that's that's what we had in the model on the agent governance actually you know I think it'll be informative if I if I share a little bit the screen again uh and and go back to the okay is there a question Greg

**Craig Ramey:** um from a while ago from this uh from the skills. Do you have um any metadata or observability on when uh agents uh discover a skill and decide to use that versus another skill if there might be like similar overlap in functionality?

**Pedro Correia:** Greg, great question. I haven't tested this. I am um there's a saying in my language, you got to see it to believe it. I'm sure this this is common. Um um but uh I I I'm going to test it, Craig, and I'm going to see what happens.

### 00:40:27

**Pedro Correia:** I'm sure in terms of ADK, we log sort of tool calling. So I'd expect it to log skill usage um and when they get triggered. Um but um let me get back to you on that to confirm. I think my answer right now would be yes, but I want to see it in the console to to

**Craig Ramey:** Yeah.

**Pedro Correia:** confirm.

**Craig Ramey:** Specifically why it discovered the skill and why it chose it over something. Yeah.

**Pedro Correia:** Yeah. So what we have a similar approach is on GE on our command line interface on Gemini CLI it will say okay I have a bunch of skills I found this to be the trigger word of the skill therefore I'm going to use it um so I'm I'm expecting a similar behavior here but let me confirm all right um so um just before we we have some time we have until 30 so Um, cool. All right. So, in terms of agents, um, you know that this specific agent that I have here, the retail one, um, I have it registered in my Gemini Enterprise component.

### 00:41:36

**Pedro Correia:** So, if we go here, this is the admin view of um of Gemini Enterprise. Uh it has your identity set up the data sources. Um this is one of the apps that we we're using and so this is the URL. Um if we go here to agents um this is where you're also going to have a level of governance uh in terms of who has what. Uh so there's Google made agents. These are out of the box agents that are surfaced in Gemini Enterprise. Um and then these are the high code agents that you've deployed there. You can see the the retail agent uh there. Um you know the way you you you just add an agent. You can say a custom agent via agent runtime. Um you can do an A2A agent once from marketplace and you can add once from dialog flow uh which is our customerf facing experience. But um you just click here and you um you put in the agent name description and the agent r engine reasoning um component.

### 00:42:49

**Pedro Correia:** It's just a path for the agent that we saw before uh Google one. And then here on on all you see these uh my agents they they're sort of saying employee made these are the high the low code agents. Um so they sort of live only in in Gemini Enterprise and you know timeline creator which is an agent that an employee uh made um they decided to share with somebody and the the admin can sort of come here and say yes I enable this to be shared um with a specific user. So you can have this lockdown but we're also rolling it out now so that people can just share low code agents. Um and then when you have that agent registered there, um this is what the experience looks like. I have uh the Google um agents that we saw previously. These are the ones that we deployed with the high code component and these are some of the low code agents uh that we have here. So if we go here and say hey uh list the orders it, you know, it's it's sort of talking to that agent runtime.

### 00:44:04

**Pedro Correia:** It will go through the gateway, the security, all of the options that we have uh and it will retrieve uh some information uh in terms of of what you'd like to do. Um so that's that's how the integration works. um end to end

**Magdaline Frank:** This is very helpful Pedro. One question I had was how does a multi-

**Pedro Correia:** um

**Magdaline Frank:** aent framework look like in this? So if we build multiple reusable agents, one for data analysis and then reporting and then like

**Pedro Correia:** yeah um so from a from a a testing perspective I'm just going to share

**Magdaline Frank:** emails

**Pedro Correia:** the code really quickly um you know I have here two agents and we can send you I can send you the details But um uh essentially this is a flat agent. So in terms of architecture um what we have here is an agent. Hopefully you can see that. What we have here is an agent uh that has some instructions. It uses a model to power it and then it has different MCP tools.

### 00:45:11

**Pedro Correia:** This is all within the same project. I've defined my A2A agent. This is actually using the MCP server that I created. And then your root agent is essentially it also has some instructions. Um and then the tools are one function, another function and then it has a sub agent. So the problem with this is that this MS agent is useful across multiple agents. So a better way of doing this is to actually use um the A2A component. So I have here the MS handler agent and this is a specific agent whose sole job is to uh communicate with the MCB tool. It's the same set of code that we had before but it stands alone. Um, it uses a model, it has a name, and then essentially this is the component that just makes the agent A2A. Sorry, the code suggestion is kicking in, but it's okay. Just make this root agent an A2A agent. And then we deploy this to um we deploy this to the registry. And then you have that agent here.

### 00:46:32

**Pedro Correia:** So that's my MS agent. Um it says O A2A there and it has it's now discoverable. Now I can build multiple agents on top on top of this one. Um yeah

**Craig Ramey:** Um,

**Pedro Correia:** question.

**Craig Ramey:** is there any way to add an agent built not with the ADK to the agent registry or is this only uh with anything built with the ADK?

**Pedro Correia:** Yeah, that's a good question. So you can build uh you can use agent designer. Okay. So or if you're building an agent, an A2A agent, you can use agent designer and just use natural language to create one of these agents. Um I think we actually offer it here.

**Phoebe Gunter:** I'm assuming you're meaning for like previously built agents that you guys have already built on other

**Pedro Correia:** Um,

**Craig Ramey:** Yes, we have something with semantic car or Lcraft or some other agents outside of but we want this to source of truth of our

**Phoebe Gunter:** platforms.

**Pedro Correia:** okay.

**Craig Ramey:** agent registry.

**Pedro Correia:** I I I believe that we can do that if we because the runtime supports different frameworks, the agent runtime.

### 00:47:35

**Pedro Correia:** Um, and then we can we can make that customer A2A. Um but um what maybe it would be better Craig if you send us a list of the ones that you've already built and then we can check um if we've successfully integrated these as A2A. It's essentially a wrapper.

**Craig Ramey:** So like if you Yeah. Like so we have like a multi-

**Pedro Correia:** Sorry.

**Craig Ramey:** agent like Langraph uh system. So like if we would like to add if if we're going to use this as the registry like how would I be able to add that to the registry?

**Pedro Correia:** And it's just langraph right Craig?

**Craig Ramey:** Yeah.

**Pedro Correia:** Okay. All right. Um let's take that as an action item. In addition to the skills identification, we'll have a look on how this looks with langraph. Okay. Uh 10 minutes for the other piece. Okay. Let me find my Okay, here I am. We were model armor. So in terms of evaluation, uh we we're doing a few things right now.

### 00:48:31

**Pedro Correia:** You can do evaluation of agents according to specific goals. Um, and you know that can be a calculation of of sorts. You can use some out of the box uh metrics that we have there. We're going to have agent simulation. So, this is the ability to have an environment where you can mock up an a tool call um an another agent being called. So this is still um I think it's more of a vision right now than something we can put in front of you, but it's the sort of sandbox for agents so that you can test everything out um before you actually take it to production. Agent observability, we talked about this. Everything goes into our logging products um you can put in um in in Bitquery to analyze and then um coming in the future, we're also going to have agent optimizer. But uh what are the things that you can use today? uh obviously obviously observability and the hotel sort of principles in terms of logging that's all flowing there you can see how long did a a tool call last what's the handover between agents you have the the traceability and all of that um the other is um the online evaluations so you can set up so a process upon which an agent is sampled so some of the interactions with an agent are sample they can go up to 100%

### 00:49:55

**Pedro Correia:** it might be lower and then you sort of say I want you to measure the safety interactions I want you to measure how uh well the tools are being used is there any issues with the tools being used um the final response quality uh so you can you can sort of have these running uh and then you can at any time see if that's dropped improved um and then if you if you need a little bit of hill climbing on that specific uh agent So online evaluation is something you can set up and is available within the agent runtime. There's a lot of names but the container where the agent runs and the other one is is offline evaluations uh which which I can I can share how you do this and you can create your own custom metrics. You have pair-wise and pointwise evaluations. Um so the point wise being you know rate how good this was between one to five and then you're using a large language model to do that. Um so you can have both um we uh we currently uh it says here UI for offline evaluations coming shortly after next.

### 00:51:05

**Pedro Correia:** Um it hasn't come yet. So right now it's just a piece of code that you run with um a couple of sample cases and then it sort of does it all for you. Uh and this is an example of your standard metrics uh final response quality, tool use quality, how much does it elucinate and if it's sort of hitting the safety uh settings. So these are out of the box. You essentially just create a uh evaluation pipeline. Uh you say this is the agent that I want you to to do. These are the the things that I want you to test. Uh the agent info sort of the tools um that it uses so that it knows how to evaluate it. And then you know in this agent data set you might have the three 1050 starter prompts that you want and then it will take a session all the way to the end rating each interaction. Uh the other is is the ability of having custom metrics. So for some reason uh my retail agent one of the sub aents talks Victorian English.

### 00:52:05

**Pedro Correia:** So I have a metric. Okay that's not the one I've put in here. I have a metric which is like how good you are with customer engagement. So um one to five measure of how respectful the agent has been to the end customer. Um and then the criteria that you want the large language model to evaluate. Is it respectful? Does it complete completely answer the questions? And then the rating rubric which I've simplified but one is like really bad, five is really good. Um and then this this is just a metric that you run in the evaluation. Um and then the output is uh for the different uh interactions that you want. It will rate and say pass or fail and give you an overview. Uh let me share something that I ran previously. Okay. So, um it gives you an overview of all how the metrics fared and you know these are the these top four are the standard ones and then I added a customer care rating and a Victorian English authenticity because one of the sub agents talks like that.

### 00:53:24

**Pedro Correia:** It's just a silly metric but essentially gives you the score of one to five and the standard deviation of that. So I'll look at this and I'll know exactly that I need to do a better job here. Um the groundness is is really bad. So I need to improve this. And then for the 12 use cases that I put here, you know, it's it sort of has this is the initial prompt that you've put in the test. And and then this is the the response from the agent. uh but but it also shows the entire conversation trace, what tools did it use, uh what it came back with, and then a drill down on the evaluation metrics, uh and how why it received that score. Um so it's saying, yeah, Victorian English 5.0, but then customer care rating, it was 1.0 because the AI recommends a fictional product with fake links and image. Uh which is true because it is a demo. So um that's that's that's what we have um right now. That is done via um that is done via the anode that you run.

### 00:54:33

**Pedro Correia:** There's a notebook that we have in the UI that simplifies this. It's super easy to to get up and running. Um, but yeah, the engine is there to test um and and create your own metrics. Um and uh yeah, do you have any additional questions?

**Magdaline Frank:** not from me. Really appreciate it. This was a very very helpful session for us. Probably need um some time debrief on our end. Uh specifically the agent registry and the armor. That was definitely something that we need to really uh double click on as well on our end and try to understand more

**Phoebe Gunter:** Yep. I I can confirm it's a bit like I was trying to find the public documentation

**Magdaline Frank:** about

**Phoebe Gunter:** um but it's a bit of a not circular but um the support for langraph. So we support not just obviously ADK but langraph lang chain lang chain lambda index crew AI ag2 um and then other python frameworks it doesn't I'll try to find the exact documentation that it says it explicitly but it essentially it's not that like the agent registry doesn't say oh we support these but the agent platform does and so you can take any of those supported agents that you've built somewhere else with any of those frameworks deploy it onto like the agent run times and then if it's deployable if it's any of those frameworks that's deployable on the agent

### 00:55:55

**Phoebe Gunter:** runtime then it can register with agent registry right so it's um yeah basically like the agent platform does support those third party um for any of the like basically the Python frameworks um

**Pedro Correia:** Yeah. Yeah. Phoebe,

**Phoebe Gunter:** yeah

**Pedro Correia:** I was I was just going to add to that. I know for sure you can pick up a langraph um agent, put it in the runtime and for example, put it into um Gemini Enterprise. Um but it's just like the proof is in the pudding.

**Phoebe Gunter:** Yep.

**Pedro Correia:** I I think the specific question is just the A2A support which I will have a look.

**Phoebe Gunter:** But but specifically for agent registry,

**Pedro Correia:** Um,

**Phoebe Gunter:** once it's deployed on agent runtime, I think that was Craig's question is like once it's deployed on agent runtime, it will show up in agent registry.

**Pedro Correia:** yes. Yes.

**Phoebe Gunter:** So the by kind of hopping yes it it is support those are supported in agent registry. It wouldn't be I I think if your question Craig is like can we have it running on a third party system and then show up in agent registry that's probably I I I don't we we'd have to probably come back to you on that

### 00:56:58

**Dan Fernandez Cao:** Yeah,

**Phoebe Gunter:** or see what that looks like.

**Dan Fernandez Cao:** I think it needs to be on our platform to be able

**Phoebe Gunter:** It would have Yeah.

**Pedro Correia:** Yeah,

**Dan Fernandez Cao:** to

**Pedro Correia:** look, overall our approach is um on the governance side of things. Um obviously you can choose different models to power these things. Uh you can evaluate between different models and how they they interact with your agents. You can use different frameworks u and you can surface them in in different places. Um, we we're always happy to do more of a deep dive, but I I try to rush through everything. One thing that I it might be relevant for you. I'm sure you have a lot of REST APIs. We have a product that allows you to do what's called transcoding from a REST API to an MCP server, which then can be integrated into this full sort of conversation, which is Apogee. APOG also allows you to do a sort of model what an LLM like does sort of model routing um in the back end.

### 00:57:55

**Pedro Correia:** So um that's that's one thing we didn't discuss today but it's also part of this agent governance component as

**Magdaline Frank:** Okay. You call it the can you're

**Pedro Correia:** well.

**Craig Ramey:** Sorry, I have one more question. Um, for uh LMS that we deploy,

**Magdaline Frank:** request

**Craig Ramey:** um, is there a guarantee of the P99 for the latency request to them? Um, specifically on the platform or and do you have to pre um do you get charged on demand for it usage or is it like a do do we have um specific deployments that we have dedicated to ours?

**Pedro Correia:** Yeah. Uh, great question. So, uh, the way we serve our models, um, Dan D then can help me here, but one is the ondemand component, which is a shared pool of resources. So, essentially, you make a request and it's served um based on on um our global availability. If you're okay with global processing, so it finds uh an endpoint and where there's availability and it will process that. If it gets busy, you start getting 429s which is resource exhausted.

### 00:59:00

**Pedro Correia:** Um so when that comes there's another model which is a priority on demand if I'm not mistaken. I think there's a different name and you can always go to provision throughput which is I want this model available in this amount of capacity uh 247\. So those are those are the paths that you go. Um I think we can do provision throughput for obviously Gemini models but also um for some of our third party

**Dan Fernandez Cao:** Yeah, I just got a quick slide on that just to help if that helps.

**Phoebe Gunter:** So just to confirm,

**Pedro Correia:** models.

**Dan Fernandez Cao:** Sorry.

**Phoebe Gunter:** were you asking for model um like kind of availability in SLA Craig or

**Dan Fernandez Cao:** Okay.

**Phoebe Gunter:** like agents like running on say agent runtime?

**Craig Ramey:** Yeah. So I guess if if you don't if you don't have provision models um and you're using like the glo like the shared ones uh do like does latency increase or do you just get start getting 429s when it's not available because very

**Pedro Correia:** Oh, if there's some throttling.

### 00:59:56

**Pedro Correia:** Um, yeah, we do have a provision model, Greg. It's, you know, it's you sort of get capacity and then latency is sort of guaranteed. And, uh, I don't think we do on the on demand pool. I don't think we do throttling. So, we don't delay response. It's either available or not. Um, I think it's that was your question as

**Craig Ramey:** Yeah, thank

**Dan Fernandez Cao:** but yeah, there's there's different ways to slice and dice it as Pedro said. Um, so we have the context for like priority pay go as well. So, if you want to make sure that you're kind of getting like the I guess at the fast pass like at the theme park, then you can pay that little bit extra and we'll make sure that you're you're kind of getting access to that or then you have the full provision throughput guarantee capacity um for your use case that you're able to carve off and we can do that for um so we we showed we sort of spoke about the model garden as well.

### 01:00:48

**Dan Fernandez Cao:** So when we have um those open source models, we can also support that that uh process for those um model garden models uh and then also things like anthropic models as well. We can also you know support with provision throughput there. So if you've got some key use cases um we partner with anthropic very closely and that runs all our TPUs and we can give you some PT for that as well. And also the model um the model armor bit that Pedro mentioned that also is wrapped around everything that comes from that uh model garden. So if it's an open source model or an anthropic model that you're using on um Gemini enterprise app platform um then you're going to get that model armor protection as part of that um natively as well. So that helps again just an extra layer of security and compliance.

**Magdaline Frank:** Good to know. Oh, I'm I'm sure you're going to share these materials with us as well, isn't

**Dan Fernandez Cao:** Yep. So we can share the decks with you.

### 01:01:38

**Magdaline Frank:** it?

**Dan Fernandez Cao:** Um but I hope that covered off kind of some of the topics that you wanted to cover today.

**Pedro Correia:** Yeah.

**Magdaline Frank:** It did.

**Dan Fernandez Cao:** Was there anything we we didn't cover off that you were key to?

**Magdaline Frank:** It did.

**Dan Fernandez Cao:** Appreciate we had time, but any other key topics that you wanted to cover that we can do a followup

**Magdaline Frank:** Not at this moment.

**Dan Fernandez Cao:** on.

**Magdaline Frank:** I think we probably need some more time to debrief on our end. Uh but this has been a very very helpful session for us.

**Pedro Correia:** All right, we'll follow up on those action items.

**Magdaline Frank:** Thank you so much.

**Phoebe Gunter:** Awesome.

**Pedro Correia:** Send you the deck. It's been a pleasure talking to

**Magdaline Frank:** Yeah.

**Pedro Correia:** you.

**Magdaline Frank:** Thank you so much. Appreciate it.

**Dan Fernandez Cao:** No problem. For any other questions,

**Craig Ramey:** Thank you very much.

**Phoebe Gunter:** Awesome.

**Dan Fernandez Cao:** please let us know.

**Pedro Correia:** Bye.

**Dan Fernandez Cao:** Thank you.

**Phoebe Gunter:** Yep.

**Dan Fernandez Cao:** Great.

### Transcription ended after 01:02:26

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*