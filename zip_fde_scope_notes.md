# **✍️ Quick notes**

## **Zip x GCP Discuss FDE Scope** 

Aug 26, 2026  
[eric.blassberg@zip.co](mailto:eric.blassberg@zip.co) [Phoebe Gunter](mailto:phoebeg@google.com) [chris.nelms@zip.co](mailto:chris.nelms@zip.co) [Pedro Correia](mailto:pcorreia@google.com) [rory.herriman@zip.co](mailto:rory.herriman@zip.co)

Strategy session outlined establishing agentic software factories with Google infrastructure for replacing core lending systems and operations.

## **AI Factory Architecture and Vision**

* Chris defined the software factory as a permanent capability using senior engineers and AI agents to draft and verify software.  
* Targeted architecture involves an anti-gravity harness on GKE with a consolidated inference channel via Vertex.  
* Strategy aims to migrate products from the current Microsoft Azure environment to GCP.  
* A unified data layer using Snowflake and Data Bricks will support pipeline verification and back-testing.

## **Project Roadmap and Milestones**

* Project initiation is scheduled for September 1st.  
* Factory development timeline is estimated at 8-12 weeks.  
* Targeting full LMS re-platforming, vetting, and completion by next September.  
* Shadow gating and validation processes are projected to require 2-3 months.

## **Partnership and Execution Strategy**

* Program is partner-led, with Quantium managing platform building and LMS migration.  
* Google Field Deployed Engineers will validate initial patterns to define the statement of work.  
* Operational knowledge transfer targets a team of 14 internal senior engineers over 9 months.  
* NDA is executed and project briefings have been shared with Quantium.

## **Next steps**

- [ ] \[Someone in Deewhy (au-syd-pir)\] Validate Resource: Validate resource availability and delivery timeline for the field deployed engineer. Determine if the factory development can be completed within the 8 to 12 week period.  
- [ ] \[Someone in Deewhy (au-syd-pir)\] Review Architecture: Present the discussed high level architecture and design patterns to the internal team. Confirm the factory requirements and shadow gating limitations.  
- [ ] \[Someone in Deewhy (au-syd-pir)\] Define Work Scope: Draft a statement of work for the field deployed engineer engagement. Agree on project scope and timeline with the customer.  
- [ ] \[Someone in Deewhy (au-syd-pir), Phoebe Gunter\] Manage Engagement: Progress the field deployed engineer engagement and the internal high level design. Ensure alignment of factory components with project objectives.  
- [ ] \[Phoebe Gunter\] Evaluate Funding: Support the evaluation of funding mechanisms for the Quantium partnership. Coordinate parallel efforts to expedite the legal and approval processes.

**Want to see more?** [View the full notes]()  
Tip: You can always access your full notes from the left sidebar.

*You should review Gemini's notes to make sure they're accurate. [Get tips and learn how Gemini takes notes](https://support.google.com/meet/answer/14754931)*  
*How is the quality of **these specific notes?** [Take a short survey](https://google.qualtrics.com/jfe/form/SV_5bXzKQfylMIhSXc?confid=nyCH2Mtf9Wq_HWGCW0HRDxIVOBEQAjIGCIoCIAAYAQg&entryPoint=footerQuickNotes&isGoogler=True) to rate their helpfulness, and submit any bugs via [buganizer](https://b.corp.google.com/issues/new?component=1419801&template=1877548&1362289=nyCH2Mtf9Wq_HWGCW0HRDxIVOBEQAjIGCIoCIAAYAQg).*

# **📝 Full notes**

Aug 26, 2026

## **Zip x GCP Discuss FDE Scope** 

Invited [eric.blassberg@zip.co](mailto:eric.blassberg@zip.co) [Phoebe Gunter](mailto:phoebeg@google.com) [chris.nelms@zip.co](mailto:chris.nelms@zip.co) [Pedro Correia](mailto:pcorreia@google.com) [rory.herriman@zip.co](mailto:rory.herriman@zip.co)

Attachments [Zip x GCP Discuss FDE Scope ](https://calendar.google.com/calendar/event?eid=MmM5bm04OHF1aWYybTg5N2p1bTQ2cWwyOGcgcGhvZWJlZ0Bnb29nbGUuY29t)

Meeting records [Transcript](https://docs.google.com/document/d/1kLUxiohdJlkChKfaTbNUbK_l6RXJHLTxZwvGcn8WFiM/edit?usp=drive_web&resourcekey=0-mhQw6jXcAcLp4XZxRbeo8g&tab=t.3gnxxze3ap2e) 

### **Summary**

Strategy session outlined establishing agentic software factories with Google infrastructure for replacing core lending systems and operations.

**Software Factory Vision Established**  
The organization adopts an agentic development model using Google Kubernetes Engine to manage new product builds. This shift modernizes development while moving away from existing Microsoft Azure dependencies.

**Implementation Strategy And Timeline**  
Factory construction spans 12 weeks, followed by a 12-month cycle for system recreation. Initial efforts leverage partner resources before transitioning operational control to internal teams within 1 year.

**Partnership Funding Strategy**  
Direct engagement with partners will proceed immediately to avoid schedule bottlenecks. Larger funding mechanisms for this initiative will be managed in parallel via Google consumption commitments.

### **Decisions**

## Aligned

* **Engagement and delivery strategy defined** The project will utilize a sequential engagement model where the Google Field Deployment Engineer (FDE) establishes the initial architecture and validates components, serving as the scope for Quantium resources to execute the migration and production work.

* **Project development and testing timeline established** The project timeline is set to begin on September 1st, featuring an 8 to 12-week build phase for the factory, followed by a 12-month period for shadow gating and testing.

* **Ongoing Google support model confirmed** Google will maintain continuous engagement beyond the initial FDE phase, with the resource profile adapting to provide ongoing support for factory evolution and Lending Management System (LMS) requirements.

We've **updated the Decisions section** using your feedback.

Let us know what you think: [Helpful](https://google.qualtrics.com/jfe/form/SV_5bXzKQfylMIhSXc?isHelpful=True&entryPoint=decisions&confid=nyCH2Mtf9Wq_HWGCW0HRDxIVOBEQAjIGCIoCIAAYAQg&isGoogler=True) or [Not Helpful](https://google.qualtrics.com/jfe/form/SV_5bXzKQfylMIhSXc?isHelpful=False&entryPoint=decisions&confid=nyCH2Mtf9Wq_HWGCW0HRDxIVOBEQAjIGCIoCIAAYAQg&isGoogler=True)

### **Next steps**

- [ ] \[Someone in Deewhy (au-syd-pir)\] Validate Resource: Validate resource availability and delivery timeline for the field deployed engineer. Determine if the factory development can be completed within the 8 to 12 week period.

- [ ] \[Someone in Deewhy (au-syd-pir)\] Review Architecture: Present the discussed high level architecture and design patterns to the internal team. Confirm the factory requirements and shadow gating limitations.

- [ ] \[Someone in Deewhy (au-syd-pir)\] Define Work Scope: Draft a statement of work for the field deployed engineer engagement. Agree on project scope and timeline with the customer.

- [ ] \[Someone in Deewhy (au-syd-pir), Phoebe Gunter\] Manage Engagement: Progress the field deployed engineer engagement and the internal high level design. Ensure alignment of factory components with project objectives.

- [ ] \[Phoebe Gunter\] Evaluate Funding: Support the evaluation of funding mechanisms for the Quantium partnership. Coordinate parallel efforts to expedite the legal and approval processes.

### **Details**

* **Software Factory Vision and Infrastructure Architecture**: Chris Nelms introduced the software factory concept as a permanent agentic capability for Zip's regulated United States consumer lending operations, where senior engineers direct artificial intelligence agent fleets to draft, test, and check software while humans hold all consequential gates. They explained that Zip will own upper waterline components including methodology, specs, evaluation assets, control plans, and verification, while building lower waterline components on Google Kubernetes Engine and Vertex artificial intelligence using a single Anti-Gravity harness, shifting away from individual tool purchases and Microsoft Azure. Someone in Deewhy (au-syd-pir) asked for clarification on factory roles and Azure usage, noting that they needed to understand how the current United States infrastructure operates entirely on Microsoft Azure as a .NET shop alongside a recently established Google Cloud Platform relationship for internal agents.

* **Agentic Factory Lifecycle and Azure Renewal Alignment**: Chris Nelms explained that the agentic factory operates on three core principles—human specified, human supervised, and human verified—utilizing Google assets throughout the process. They noted that the project's completion aligns with Zip's Azure renewal, aiming to retire an early three-year, one-million-dollar consumption commit within the next six months and position Google Cloud Platform as the landing zone for all net new durable products. Outlining the artificial intelligence development life cycle, they compared the factory to a car manufacturing assembly line where human ideas are turned into specs by agent fleets, verified, built, visually verified, and subjected to shadow testing before reaching the core business.

* **Factory Agnostic Design and Loan Management System Recoding**: someone in Deewhy (au-syd-pir) questioned whether specific migration patterns like data analytics pipelines or core system migrations were being implemented, to which Chris Nelms clarified that they are building a net new Loan Management System rather than migrating existing pipelines. They stated that the factory must be agnostic to the durable asset it builds, allowing modular updates to assembly lines and patterns as new architectural decisions replace past choices like event sourcing. Someone in Deewhy (au-syd-pir) noted that initial Field Deployment Engineer work will likely require choosing a specific pattern to test and validate viability before the factory achieves full flexibility.

* **Factory Build Timeline and Field Deployment Engineer Engagement**: someone in Deewhy (au-syd-pir) and Chris Nelms discussed the operational structure for the upcoming weeks where a Google Field Deployment Engineer will help create the factory architecture and initial Loan Management System replatforming. Chris Nelms confirmed that while an architect for the Loan Management System is being hired, an architect for the factory itself still needs to be designated, though internal engineering teams possess established design principles. Someone in Deewhy (au-syd-pir) highlighted that the Google Field Deployment Engineer engagement requires a time-boxed statement of work with a defined body of work, high-level architecture, and agreed timeline.

* **Partner Integration and Overall Project Timeline**: someone in Deewhy (au-syd-pir) and Phoebe Gunter explained that the Google Field Deployment Engineer acts as a spearhead to prove out patterns, working alongside partner resources like Quantium who will execute the migration and maintain the factory. Chris Nelms outlined the project timeline starting September first, expecting the factory build to take eight to twelve weeks, followed by a twelve-month period for Loan Management System recreation and shadow testing, including two to three months of actual shadow gating, with the goal of handing the tested system back to the core business by next September.

* **Shadow Gating and Data Synchronization**: someone in Deewhy (au-syd-pir) expressed concerns about the heavy effort required for data synchronization and core engine simulation during parallel shadow runs. Chris Nelms responded that Zip utilizes a unified data layer based on Snowflake and Databricks to feed prior-day data for verification, alongside a multi-cluster Kubernetes setup to load-balance traffic between Azure and Google Kubernetes Engine for small sample validation, identifying the factory itself as the primary go-get rather than shadow gating data mechanics.

* **Partner Ramp-Down and Team Convergence**: Chris Nelms described the partner-led approach at the beginning due to talent ramping constraints, with the goal of transferring knowledge over nine months to 14 senior engineers at Zip so they can independently manage and operate the factory in perpetuity by month twelve. Eric Blassberg emphasized a desire for all three entities—Google, Quantium, and Zip resources—to converge simultaneously rather than sequentially to maximize leverage. Someone in Deewhy (au-syd-pir) clarified that Google's engagement will continue in an advisory capacity regarding new models and platform updates rather than maintaining an active Field Deployment Engineer throughout.

* **Next Steps, Documentation, and Financial Risk Empathy**: someone in Deewhy (au-syd-pir) agreed to review internal resource availability for the Field Deployment Engineer timeline and confirmed access to existing Slack channels and reference documentation. Reflecting on regulated financial environments, someone in Deewhy (au-syd-pir) and Chris Nelms shared mutual concerns regarding the high-stakes nature of shadow gating money movement and general ledgers. Eric Blassberg confirmed that a non-disclosure agreement is in place with Quantium and briefs have been shared with Steve.

* **Quantium Partnership Timing and Funding Strategy**: Chris Nelms inquired about the timing and approval process for moving forward with Quantium as a partnership, noting potential requirements for Google funding reviews. Phoebe Gunter advised a two-pronged approach, noting that they recommended Zip engage Quantium directly for initial work to bypass aggressive timeline bottlenecks, while working in parallel with Google on larger funding mechanisms similar to previous consumption commitments.

*You should review Gemini's notes to make sure they're accurate. [Get tips and learn how Gemini takes notes](https://support.google.com/meet/answer/14754931)*

*How is the quality of **these specific notes?** [Take a short survey](https://google.qualtrics.com/jfe/form/SV_5bXzKQfylMIhSXc?confid=nyCH2Mtf9Wq_HWGCW0HRDxIVOBEQAjIGCIoCIAAYAQg&detailLevel=standard&hasImages=False&entryPoint=footerMain&isGoogler=True) to rate their helpfulness, and submit any bugs via [buganizer](https://b.corp.google.com/issues/new?component=1419801&template=1877548&1362289=nyCH2Mtf9Wq_HWGCW0HRDxIVOBEQAjIGCIoCIAAYAQg&1464251=standard).*

# **📖 Transcript**

Aug 26, 2026

## **Zip x GCP Discuss FDE Scope  \- Transcript**

### **00:00:00**

**Chris Nelms:** a small team of senior engineers where we will direct fleets of AI agents that will draft test check software but with people holding every consequential gate so for us it's not just a project that we're building it's a capability and the project ends when this compounds right so the design in my mind has a hard waterline above it said things that are a capability our methodology, our specs, our evaluation assets, our control plan, our verification, those are owned by us, we continue to maintain those. But below the water line is what we're looking to buy and to build on. That's that's where you come in. Uh, and it's where I think Google can play and have a bigger seat than just the project. For us, the way that I'm thinking about it is I'm thinking about anti-gravity as the single harness that will be inside of a regulated US consumer lending factory. Uh, which is a what we're looking to build as our first proof point from the agentic factory.

### **00:00:59**

**Chris Nelms:** The the part for you all to own is the not own the part for you all to go after to go get for you is the factory. The construct of the of the LMS, our loan management system that's going to be built on the factory. But the the win here is the factory. Um so for me um couple things that I'm the way that I'm approaching it is for the for deployed engineer. I'm trying to get an understanding of what that looks like with what we're building. I'm trying to get an understanding of what options are available to us and how we use this because if if if done correctly the way that I am hoping to approach it is anti-gravity is the single harness uh and then that substrate is built on GKE and then we use one consolidated inference channel through vertex uh right now we're using uh claude uh we're using u cursor codeex name it we've got it Right. But we're buying individually through people uh through partners uh directly. The way that we're approaching this project is I want to buy the models.

### **00:02:18**

**Chris Nelms:** That's the commodity, but I want to build the capability. Hopefully that gives the framing to you.

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** Any questions in that?

**Deewhy (au-syd-pir):** Um, sorry. What's the role? So, the the factory has GKE the models. Um, and then you said something else.

**Chris Nelms:** Yeah. So, so for me I'm thinking uh anti-gravity vertex GKE. Uh essentially just just a little bit about Zip today.

**Deewhy (au-syd-pir):** Right.

**Chris Nelms:** We we have our entire platform our product that we uh you know that customers can purchase things through um and that we lend to customers on.

**Deewhy (au-syd-pir):** This

**Chris Nelms:** I saw. all 100% hosted in Microsoft Azure. Now we have a a an AWS relationship but that's the Australia

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** based company that's not in scope here. So for the US everything 100% Azure.NET shop. Uh we have recently worked with Phoebe and team to get a a cheap and also a GCP relationship for our internal agents that we're building on uh internally.

**Deewhy (au-syd-pir):** Yeah.

### **00:03:26**

**Chris Nelms:** That's a Yeah,

**Deewhy (au-syd-pir):** That's as part of that.

**Chris Nelms:** that's a that's a separate conversation. Uh what what I'm looking to do is I'm looking to

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** uh move into the house next door that that we're building that's going to be built. And so part of this agentic factory that I'm talking about uh it it runs on three core opportunities. Uh human specified, human supervised and human verified. But within that the things that those humans consume all Google assets, right? That is if done correctly that will change the construct of our Azure relationship and what we bring over. Also, the timing of this project uh and its completion lines up with our Azure renewal. Uh we retired a one million dollar commit to consume over three years with them. uh that's going to be done and over probably within the next six months. So we'll retire that early. My hope is by that time we have shown the progress in the factory and the factory being the landing zone of how we build all net new debt net new durable products and assets for the future on GCP.

### **00:04:42**

**Deewhy (au-syd-pir):** got it. Um that that thank you. That's helpful. Um when you when you say GKE in the factory, what are you thinking? Is it is it the compute to sort of power the factory itself?

**Chris Nelms:** it. So it's it's all of it. So I it for me there is no specification on how this is built other than a couple of frameworks. There's in in my mind it's the spectrum in design, right? So AWS has a has a a profile on spectrum and design that uh they open source. There's also specflow but essentially the the way I'm approaching it and probably easiest way to explain it is from an AI DLC lens. I'm looking for a human at the start that has an idea of a net new product. We'll give that to the fleet of agents. The agents will build out the spec. It will do it through code context through uh our knowledge base uh regression testing all the things all the inputs that you would need to build the spec that is then handed back to the human.

### **00:05:50**

**Chris Nelms:** The human will uh uh verify everything that it said and then it will say okay this is good to ship. Then we have that fleet of agents that I said will go through and build the assets and then on the back side of that we have a visual verification u engineering department that will say did this meet the spec is this what we intended it uh for to build uh and then if that's the case then we move forward to a shadowgate shadow testing where it's handed off to another uh another group that will do the shadow testing make sure it fits for core regression testing uh unit testing all that stuff checks out it's validated And then that is handed back to our core business. So I I think the probably the best analogy, easiest analogy to think about is a car manufacturer car manufacturing assembly line.

**Deewhy (au-syd-pir):** Mhm.

**Chris Nelms:** We we want we are building the assembly line for what we build here at Zip. Nothing

**Deewhy (au-syd-pir):** Chris, let me just ask a few questions there. So, um first of all, um there isn't the migration is the end result.

### **00:06:45**

**Chris Nelms:** right

**Deewhy (au-syd-pir):** the factory if looking in isolation is just I receive specs, I receive a request and design and then I leverage my internal knowledge to spit out a spec which is then approved and rolled out and tested. Um uh what what

**Chris Nelms:** in its simple in the simplest form.

**Deewhy (au-syd-pir):** patterns are we implementing?

**Chris Nelms:** Yes.

**Deewhy (au-syd-pir):** Let me let me just sort of give you what I'm where I'm coming from. If I have something written inn net and I want it to written in go but also I have a certain architecture in Azure that's no here nor there where you're saying is that new but there's there's some principles there um are we going to implement sort of patterns in this factory that it's like move uh a customerf facing um a customerf facing user your user experience move the integrations with the partner are you going to move different pieces of software or different patterns in that

**Chris Nelms:** not in the factory but in so all that's up for debate

**Deewhy (au-syd-pir):** factory.

**Chris Nelms:** on what that looks like.

### **00:08:00**

**Chris Nelms:** uh we are in the process of working through I have a loose idea of the construct of the architecture of the platform that we're running it on the internal pieces of do we use go do we use net do we use what other like python it doesn't really matter at that point uh the part that matters for me is when we go to the shadowgate and testing that has to be handed back to our core group to run, maintain, and manage. So, if it's in if it's in GCP,

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** then we have to switch up our profile, the people that we have internally, that's okay. Uh but as long as we're not doing something absolutely crazy like it's going to be built in Rust, you know,

**Deewhy (au-syd-pir):** Heat.

**Chris Nelms:** uh for for me, uh Python, Go.NET, they're they're all tools, right? and

**Deewhy (au-syd-pir):** Sorry,

**Chris Nelms:** and

**Deewhy (au-syd-pir):** my my question is a little bit broader than that. Uh um I don't want to get into the specifics. My question is are you migrating a data analytics pipeline?

### **00:09:09**

**Deewhy (au-syd-pir):** Are you migrating the core system that what what is the pattern of the code that

**Chris Nelms:** no.

**Deewhy (au-syd-pir):** you're building uh always the same? So for example, if I'm creating agents in GCP, I have a set of skills that make it really good on how to create agents in GCP. But then if I'm creating a front end and a back end, that's a different pattern and a different set of skills. So my question is more when we're going to come in and build, are we going to build for an archetype if you'd like uh or is it going to be uh

**Chris Nelms:** It it should be multiple. Uh for me,

**Deewhy (au-syd-pir):** multiple

**Chris Nelms:** the factory needs to be agnostic in the type of durable asset that it's building. Understanding that there are patterns and non-negotiables that we want to put in the process. But the the the goal of this is I the reason why we're building net new the factory and also rebuilding the LMS is because right now the decisions that we've made over the past four years we're basically taking a rocket ship to the grocery store.

### **00:10:17**

**Chris Nelms:** If I had to do it over again, I wouldn't use events uh event sourcing in our entire pattern. I wouldn't choose uh our front end the way that it is how we how how our front-end billing system integrates with our back-end databases. So all of that uh all those patterns will eventually come out and be designed from our AI architect that we'll have in house. But loosely uh loosely stubbed in right now is the goal is for it to be agnostic in what it delivers. uh it needs to be the assembly line.

**Deewhy (au-syd-pir):** Okay. Yeah. Yeah.

**Chris Nelms:** So,

**Deewhy (au-syd-pir):** Uh I mean we design it so that it it it it's modular. Um I think we're going to need skills as we progress. So let's say your architecture team says you know we the way we now do integrations between UI

**Chris Nelms:** sure.

**Deewhy (au-syd-pir):** and backend is this pattern. So you need to have these things in place these principles need to be there in design. You add that to the factory and all of a sudden you have an assembly line that can do a new

### **00:11:22**

**Chris Nelms:** Correct.

**Deewhy (au-syd-pir):** trick and then tomorrow you're building new agents put in a bunch of skills that can do that. What what I what I want to get to is the four weeks where the FDE is doing. We probably need to choose one pattern to test it out and and to make it viable.

**Chris Nelms:** Sure.

**Deewhy (au-syd-pir):** So um we designed it with the concept of being flexible. I get it. It should be it should work with

**Chris Nelms:** And and look,

**Deewhy (au-syd-pir):** everything.

**Chris Nelms:** that's that's where I I will also um would enjoy some examples here because the and not to oversimplify it, but exactly what you the factory has multiple assembly lines. When it's time to build a new thing, we switch out the the die or the part of the manufacturing process that makes the thing. The assembly line stays the same. So, in my mind, that is where we update an agent. We have an agent build for that specific product that that's out there. We feed it the context.

### **00:12:18**

**Chris Nelms:** Like that pattern exists in the spectrum and design world. That's what I'm going after. Uh but if we have to pick one, I'm okay with our our our delivery of what we're doing with the factory is going to be our LMS. So with that in mind, we're trying to build those things in parallel that whatever whatever design that we pick

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** there should line up with the construct of the LMS.

**Deewhy (au-syd-pir):** Yeah. Um I I get it. I'm just thinking like these four weeks where the FDE comes in, creates the factory um and creates the architecture to say this is how Zip is going to roll out and uh replplatform or recode all of their LMS. Uh, and then you're going to have your architect somewhere join down the line and we're going to have them sort of create the specs and the rules of the assembly and then the assembly line just works.

**Chris Nelms:** Correct. Correct.

**Deewhy (au-syd-pir):** That's intention uh

**Chris Nelms:** I I need I need help with the assembly line and the flexibility to change out the stations in the assembly

### **00:13:13**

**Deewhy (au-syd-pir):** on Exactly. I I that's the way I saw it.

**Chris Nelms:** line.

**Deewhy (au-syd-pir):** I just wanted to make sure um that you know because because you want something to spit out with quality. You know,

**Chris Nelms:** Correct.

**Deewhy (au-syd-pir):** you can put in anti-gravity something that creates a core and an operational database and a front end, but you need the principles. You need the the sort of design patterns that you have as a team. So on that the architecture role that's being hired or you you have somebody already in

**Chris Nelms:** that is that is being hired.

**Deewhy (au-syd-pir):** mind but but

**Chris Nelms:** So, we have an architect for the LMS, but we don't have an architect for the um uh for the

**Deewhy (au-syd-pir):** the like like Okay.

**Chris Nelms:** factory.

**Deewhy (au-syd-pir):** But you do have an architecture team that has principles in place on how you maintain code or how you design things.

**Chris Nelms:** Correct.

**Deewhy (au-syd-pir):** So there's a lot of principles that exist.

**Chris Nelms:** Correct.

**Deewhy (au-syd-pir):** You're gonna have one person for the continuous improvement of the factory itself.

### **00:14:08**

**Deewhy (au-syd-pir):** Uh okay.

**Chris Nelms:** Yes.

**Deewhy (au-syd-pir):** Um on the house

**Chris Nelms:** And just and and just to clarify the four weeks,

**Deewhy (au-syd-pir):** next

**Chris Nelms:** is that what the uh FDE would be for timeline or

**Deewhy (au-syd-pir):** uh I I think this might be just some internal things that Phoebe and I might have done in terms of estimates.

**Chris Nelms:** Okay.

**Deewhy (au-syd-pir):** Um I think I think just on the FDE role before we progress u obviously FTEES uh if you if you're familiar they sort of come in and they do a very

**Chris Nelms:** Sure.

**Deewhy (au-syd-pir):** specific thing so we need a sort of a king to a statement of work on how the factory is going to be what they need to deliver and when it's done so it's need time it need it needs to be time boxed so that those are the Google FDE so the process that we have to do on our end is to have a high

**Chris Nelms:** Okay.

**Deewhy (au-syd-pir):** level architecture a definition of the body of work and agree with you on the timeline which

**Chris Nelms:** Sure.

### **00:14:58**

**Deewhy (au-syd-pir):** which you already have some restraints. Um

**Chris Nelms:** And and how does that how does that work in tandem? If we were to choose Quantium,

**Deewhy (au-syd-pir):** yeah.

**Chris Nelms:** do they work with the Quantium partnership? Because I know the FDE can only take us to, you know, development, right? And then Quantium would be what takes us into production.

**Deewhy (au-syd-pir):** Yes.

**Chris Nelms:** Okay.

**Deewhy (au-syd-pir):** I think the migration itself the way I saw it and again take it with this is my understanding. The way I saw it is like we come in, we work with you now me and Phoebe, we get a high level architecture, scope out the work for uh this re Google resource, we start the work and then you're going to have the quantum fds on board to take the migration, right? So they're going to be executing the the the migration and maintaining the factory is my understanding. So we come in, we deliver that initial uh sort of point of view on how it should be done.

**Chris Nelms:** Yeah.

### **00:15:52**

**Deewhy (au-syd-pir):** And when I say deliver,

**Phoebe Gunter:** Yeah.

**Deewhy (au-syd-pir):** it's code that actually gets rolled out to you and that we test and that fits the pattern. And then we're going to get quantum resources in parallel after whenever that's that's timely.

**Chris Nelms:** Got it. And we so we are looking at the from the partnership standpoint as we hire for the

**Phoebe Gunter:** Yeah.

**Chris Nelms:** AI architect for the factory. Our goal is to also have that knowledge and expertise come from the partner in that interim period. So if if chosen that would be quantium in that that regard would be our our

**Deewhy (au-syd-pir):** Yeah.

**Phoebe Gunter:** Yep. I'm I might just add here and thanks Pedro.

**Chris Nelms:** ask

**Phoebe Gunter:** Sorry, apologies.

**Deewhy (au-syd-pir):** Uh

**Phoebe Gunter:** I've just been in transit this morning. But um the Yeah. So Chris, it's definitely we look at it kind of like a the like a head of a spear really like the FTE can help us kind of prove out different like the different patterns and different things.

### **00:16:46**

**Phoebe Gunter:** So that's where it's like we just need to be very clear with the scope as Pedro mentioned and then we can go internally and make the ask for the appropriate amount of time for that. Um and then they definitely the the idea really is here we're kind of helping put a team together.

**Deewhy (au-syd-pir):** Yeah.

**Phoebe Gunter:** So it's not just going to be every person or you know kind of group working individually. It'll be the FTE really kind of validating some of the different components of this and putting that into the uh scope for Quantium and then their team executing and ultimately doing knowledge transfer and your team taking it over. So that's how at least we're planning to put this all together.

**Deewhy (au-syd-pir):** Yeah. Um, it's also a bit new for us, Chris. The like the the FDS with the part the partner and our FDS we're sort of navigating this, but I'm sure we can the way it works is that we can we can work together. So, um, and obviously your partner is an extension of your team.

### **00:17:44**

**Deewhy (au-syd-pir):** So for us doesn't really make a difference. Um in terms of timelines there's a December um sort of gate and then you're going to be entering the shadow gating after that. Is that Is that my is that my is my understanding correct?

**Chris Nelms:** So we are starting September 1st. We are hoping to build out the factory between 8 and 12

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** weeks. And then in parallel, we're also working from the LMS side to do the needful to make sure that we when the factory

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** is built and ready, we can start running things through it. Uh but we expect it to take around 12 months for the shadow gate and testing from September.

**Deewhy (au-syd-pir):** from September. So that's development of the factory, migration or or recreation of the LMS and then a period of testing out of those 12 months. It's not 12 months of

**Chris Nelms:** No,

**Eric Blassberg:** No,

**Deewhy (au-syd-pir):** shadowgating.

**Chris Nelms:** no,

**Eric Blassberg:** three months.

**Chris Nelms:** no.

**Eric Blassberg:** Three months. Two to three months of

### **00:18:53**

**Chris Nelms:** Yeah.

**Deewhy (au-syd-pir):** Okay.

**Eric Blassberg:** shadow.

**Chris Nelms:** So, ultimately we my goal and I believe that's what we've got in a plan by next September. We are handing back the LMS to the core business that has been tested, vetted, and built from the

**Deewhy (au-syd-pir):** Okay. Um,

**Chris Nelms:** factory.

**Deewhy (au-syd-pir):** ju just one question on the shadow gating. One of the things that I was a little bit concerned when I looked is normally when you have these parallel runs, there's an enormous amount of like effort to do one of two things. the simulation of the core engine to be reflective of of what you have today which is a separate team normally or um the data pipelines to make things are in sync to make sure things are in sync. So we can spit out code and we can roll it out to infrastructure. But my question to you is the data component. How are we going to make that match in a parallel run or in a shadow gating

**Chris Nelms:** Yeah. So, we we do have a unified data layer here at Zip.

### **00:19:56**

**Deewhy (au-syd-pir):** scenario?

**Chris Nelms:** Uh it's based off of Snow Blake and Data Bricks. So, we can build pipelines that feed data from the prior day into the new thing to do the verification and back testing. Then we also have a multicates cluster where we could potentially load balance uh traffic coming in to the app and to Azure and then going to uh

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** GKE and then having it run over there and we can do a small sample of traffic val uh validate verify and then have a plan to roll out. Uh I would worry less about that because that is the shadow gate. While it's super important and probably the biggest risk for us uh in my mind, the the go-get is the

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** factory.

**Deewhy (au-syd-pir):** Yeah. And it's I I because you the the way you've positioned it is factory m there's a migration of the components or recreation and then there's a quality assessment team and then there's a shadow gating team and as long as the as a coach's working there's going to be resources quantium zip that will will do the shadow gating

### **00:21:10**

**Chris Nelms:** Yeah. And and and look, maybe just a little bit about our program,

**Deewhy (au-syd-pir):** component.

**Chris Nelms:** the way that we're designing it, we are heavily partner-led at the beginning because ramping up and getting the right talent is going to take time. Not even though it's a year time for us, still not a luxury of a lot of time.

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** So the goal is to get started with Google and with partners potentially Quantium and then we start ramping up our people that we're hiring in and eventually at and one of the requirements is we have to be able to own and operate the factory change out the specs that you mentioned be able to uh you know update knowledge the patterns the architecture the the non-negotiables right so all that knowledge and trade uh trade and handoff eventually will be owned by 14 people senior engineers here at ZIP is what we've is what we've gated but that's going to happen over the next I think nine months with the goal of by 12 months partner has already ramped down and handed that knowledge off to zip team to m manage and

### **00:22:13**

**Deewhy (au-syd-pir):** Sure.

**Chris Nelms:** maintain going perpetuity

**Deewhy (au-syd-pir):** So the FD if building earlier than quantium the Google FD that is uh would build the spec the factory and then sort of hand over it to quant combination of quantum and the zip resources and then obviously

**Chris Nelms:** um look I'm I'm open to that.

**Deewhy (au-syd-pir):** then

**Chris Nelms:** I if you say uh the f if you say the FTE and I have a team from Quantium that can also manage the AI factory part to make sure that we get it correct from the gate. 100% would love to do that. Quantium is is the way that we're viewing the partnership is whomever we choose will work for us on the part on the on the platform building of the factory but also carry us through the LMS work to the end. So it's it's for for the partner it's a go-get for both.

**Deewhy (au-syd-pir):** Yep.

**Chris Nelms:** And look, I'd love to have you on the LMS side,

**Deewhy (au-syd-pir):** Okay.

**Chris Nelms:** but I I know that's a long ask to to have you all engaged.

### **00:23:21**

**Chris Nelms:** So,

**Deewhy (au-syd-pir):** Do what?

**Chris Nelms:** the biggest thing I would love to have you all engaged in the LMS,

**Deewhy (au-syd-pir):** Sorry.

**Chris Nelms:** but I understand that's a, you know, 12-month engagement, and that's a a much bigger ask than helping us with the build on GCP and help us with Quantium and the software factory

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** versus, hey, now help us with the LMS for the next

**Eric Blassberg:** Yeah.

**Chris Nelms:** year.

**Eric Blassberg:** Yeah. And I guess P Pedro,

**Deewhy (au-syd-pir):** Yes.

**Eric Blassberg:** just to make sure I'm understanding, like I guess we're we're what I'm kind of hearing is like a serial approach with an FT FTE and Then Quantium comes in and Zip comes in. I think at least the way I was thinking about it, I think Chris too is we we'd like all three at once. You know, we we want we're going to start assigning our resources, including the architect that Chris mentioned and and others like now. And we we want to find a partner. We're going to be making a decision on a partner like in short order.

### **00:24:26**

**Eric Blassberg:** And so we we'd like the three to converge at the same time for for maximum, you know,

**Deewhy (au-syd-pir):** Yeah. So, Eric,

**Eric Blassberg:** leverage

**Deewhy (au-syd-pir):** I think maybe maybe I wasn't clear, but I think we continue to engage with you. There's things that you might need from a platform or AI perspective that continue to be required. It might not be an FD. It might be me or Phoebe or anybody else from Google where you say, you know, there's a new model and then we talk about how that model uh can um affect the factory. There's a new component in agent platform that you should incorporate in the registry, we do that. There's a question from Quantium on how to solve a problem, we can assist. But the FTE they come in they sort of deliver something that is get us off and going and then they exit. It doesn't mean that we don't get additional FDEs. Um but that that's that's what I was thinking. It's not we we don't deliver the factory and then we're off and you call us when it's September time to cut off the ribbon.

### **00:25:33**

**Deewhy (au-syd-pir):** No. Um we sort of we we maintain the engagement.

**Chris Nelms:** Sure.

**Deewhy (au-syd-pir):** The shape of the resources change. Um I think Chris I think I have enough to sort of play back to my team the high level architecture and I've been thinking about how we can do it. I'm sure you already have ideas as well. Um but um but this is this is what I suggest is uh let us go back see when we can get a resource. Um the 8 to 12 weeks is something that Phoebe had shared. Apologies for the four weeks. It is early here.

**Chris Nelms:** No worries.

**Deewhy (au-syd-pir):** Um so

**Chris Nelms:** We just wanted we just want to make sure we were good. If you can deliver in four weeks, then absolutely. That's

**Deewhy (au-syd-pir):** No, I don't have a technical opinion.

**Chris Nelms:** it.

**Deewhy (au-syd-pir):** Don't quote me on that. I need to check how much this would take. Um, so I I need to do some work on my end.

**Chris Nelms:** And

### **00:26:23**

**Deewhy (au-syd-pir):** Uh, I know Phoebe has already done a bit. Um, and we'll we'll get back to you. I might have some questions. I know we're connected on Slack, so I might have some questions offline. And are you okay just connecting again if need be?

**Chris Nelms:** Yeah, absolutely. And uh we can add you to our Slack in PB if you haven't um shared with Pedro

**Phoebe Gunter:** Yep.

**Chris Nelms:** the the doubleclick document I sent with the anatomy of a factory run

**Phoebe Gunter:** Yep.

**Chris Nelms:** reference stack.

**Phoebe Gunter:** He has it all. So, yep.

**Deewhy (au-syd-pir):** Yeah.

**Phoebe Gunter:** I have it all in a drive and um he has access to it.

**Chris Nelms:** Yeah.

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** Okay.

**Phoebe Gunter:** And Pedro, I also think you're on our Slack channel already. So I think we're Yep.

**Deewhy (au-syd-pir):** I am. I am.

**Chris Nelms:** Yeah,

**Deewhy (au-syd-pir):** There.

**Chris Nelms:** That double click I think is probably the most helpful be in my mind because it it gives you an idea of of

### **00:26:58**

**Phoebe Gunter:** Yeah.

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** kind of how I'm approaching it and what we're what we're thinking about doing.

**Phoebe Gunter:** Is

**Chris Nelms:** The the construct will be the same.

**Phoebe Gunter:** it

**Chris Nelms:** I'm okay shifting parts around if if the picture needs to look different. Uh but that was my first pass at uh how I've seen other companies do it.

**Deewhy (au-syd-pir):** Yeah. And it's it sort of aligns up when Phoebe told me on the hallway and then I I sort of

**Chris Nelms:** So

**Deewhy (au-syd-pir):** started picturing in my mind and seeing how other customers do it and how I do it. Um I I immediately saw there was a connection with what you had. But uh but yeah, I I I needed the shadow gate like that was I was I was not comfortable with that and I wanted to understand the patterns component and those two things are are are what I needed to take from

**Chris Nelms:** yeah, makes sense. And look,

**Deewhy (au-syd-pir):** today.

**Chris Nelms:** the shadow gate just scares the crap out of me.

### **00:27:54**

**Chris Nelms:** U just look

**Deewhy (au-syd-pir):** I I used to be I used to be working in banking uh for for a consulting company.

**Chris Nelms:** it.

**Deewhy (au-syd-pir):** So my question of course um was and insurance course was sort of my forte. So I I've been scarred.

**Chris Nelms:** Yeah. Look, I I I'm a recovering banker myself,

**Phoebe Gunter:** Okay.

**Chris Nelms:** so I empathize with you. Uh my time spent there absolutely uh never want to go back. But but that look,

**Phoebe Gunter:** f\*\*\*.

**Chris Nelms:** that's at the end of the day, everything has to line up. We're dealing with money, general ledgers, money movement,

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** everything has to to match. Uh, which is also with that in mind, building the core outside. If we were building if we were rebuilding our current core by adding on to it or adding agents to the pipeline, it'd be a little a little less uh intense, but we're building a net new.

**Deewhy (au-syd-pir):** Yeah.

**Chris Nelms:** And the reason why we're doing that is because we made choices along the way that uh we did at the time based on the limited technology we had and the limited understanding that we may have had in underwriting.

### **00:28:58**

**Chris Nelms:** Right. So

**Deewhy (au-syd-pir):** and yeah and I think it's a good opportunity with with accelerators in the software development life cycle. Okay, Eric Chris,

**Chris Nelms:** all right.

**Deewhy (au-syd-pir):** thank you so much for your time.

**Chris Nelms:** Thanks. Appreciate your time.

**Eric Blassberg:** Yep. Thank you. And fe Phoebe, I'm sure you saw, but we do have the NDA in place now.

**Phoebe Gunter:** Y with

**Eric Blassberg:** And I've shared with Quantium,

**Phoebe Gunter:** Quantium.

**Eric Blassberg:** and I shared the brief and the double click with uh

**Phoebe Gunter:** Okay,

**Chris Nelms:** All

**Eric Blassberg:** Steve.

**Phoebe Gunter:** awesome. Um, sounds good. Yeah, let me know if there's any like next steps from that we can help with or anything. Um, yeah, let us know.

**Deewhy (au-syd-pir):** and we'll progress with with the FDE engagement and sort of high level internal design for

**Chris Nelms:** right,

**Deewhy (au-syd-pir):** us.

**Chris Nelms:** sounds good.

**Deewhy (au-syd-pir):** Thank you.

**Phoebe Gunter:** Yeah.

**Chris Nelms:** Maybe real quick,

**Eric Blassberg:** Thank you so

**Chris Nelms:** maybe if you have two seconds.

### **00:29:42**

**Phoebe Gunter:** Yeah, I have two seconds.

**Eric Blassberg:** much.

**Chris Nelms:** Um,

**Phoebe Gunter:** Yeah.

**Deewhy (au-syd-pir):** Okay,

**Chris Nelms:** the quantum Thanks,

**Deewhy (au-syd-pir):** I'll leave you

**Chris Nelms:** Pedro.

**Phoebe Gunter:** Thanks,

**Chris Nelms:** Uh,

**Phoebe Gunter:** Pedro.

**Chris Nelms:** the qu the quantium engagement potential engagement partnership.

**Phoebe Gunter:** Uhhuh.

**Chris Nelms:** Uh, if we were to say that we wanted to move forward with Quantium, how long does that normally take? Does it come on likeium paper? Does Google have to weigh in on the partnership amount? Like what does that look like in terms of timing so we can try to get an understanding of that to to

**Phoebe Gunter:** Yeah.

**Chris Nelms:** solicit

**Phoebe Gunter:** What to just um obviously I'm be super frank with you and I'm about to go through a tunnel so if I lose you all um but I I should have connectivity. It normally doesn't cut out in this tunnel, but um just uh so what I'd recommend, first of all, you can go direct with them or you can well it's going to be direct regardless. Even if there's Google funding involved, you still sign the paperwork um the so with Quantium.

### **00:30:38**

**Chris Nelms:** Okay.

**Phoebe Gunter:** what I would recommend to get because again you guys have very ambitious time like not ambitious but like very aggressive timelines which is not bad but obviously paperwork and funding aren't always the quickest. So I would probably recommend kind of a two-prong approach. I would try to see if there's a way that you all can do an initial engagement with Pontium to like get this going and then we can also work in parallel to do something larger to get the funding and then because that's just going to take that just takes time like you saw even with the 1.5

**Chris Nelms:** Sure.

**Phoebe Gunter:** million um and that's the same type of funding mechanisms that it's not identical but it's similar to what we would need to do to fund any percentage of the um quantium stuff.

**Chris Nelms:** Got it. Okay.

**Phoebe Gunter:** So they have to have the so our team like has someone on the Google side has to review it and say yes we agree to fund this. The funding like it has to go through all the approvals the funding has to be released except well the funding actually is released once the S. W signed u or sorry completed but it is a it's not going to be overnight and I know you guys are looking to move probably a bit quicker than

**Chris Nelms:** got it.

**Phoebe Gunter:** that whole

**Chris Nelms:** So, so if we look at the framing of the all the like legal is and work through

**Phoebe Gunter:** process.

**Chris Nelms:** those and then we work through the so you're saying work through part of it now. Okay. Uh question for you. Could you stop transcription for a second?

### **Transcription ended after 00:32:27**

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*