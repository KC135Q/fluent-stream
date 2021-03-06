# Challenge Instructions

#### The goal of this exercise is to iterate on the development and deployment of a “cloud native” service in AWS that can be invoked to check a set of IP address lists for every single attempted phone call placed on our network, as part of a larger fraud detection system. If the IP address is listed in any sources, then they should be returned.

- [ ] The service will retrieve and automatically update from https://github.com/firehol/blocklist-ipsets without any manual intervention.
- [ ] Deliverables should include everything needed to deploy (and maintain) the service in a production AWS account.
- [ ] Bonus points for high availability deployments, benchmarks, and telemetry.
- [ ] Code should be developed in Typescript or Java, and only make the assumption all developers run a macOS development environment.
- [ ] You can create an AWS account and use the free tier. However, if for some reason you need an account please let us know.
- [ ] There is no right or wrong deliverable, and no magic “correct” solution we are looking for. We are trying to simulate our real remote work development environment, so you can get an idea of how we work, and we can get the same from you. We are interested in how you communicate remotely, solicit feedback, drive discussion, think about problems, handle areas you don’t know well, and how you think about/work through design decisions.
- [ ] The skills we are assessing in this process are:
  - [ ] Async Communication
  - [ ] Research / Design
  - [ ] Coding
  - [ ] Autonomy / Ownership
  - [ ] Expectation Management
  - [ ] Customer/Product Focus
  - [ ] Attention To Detail
- [ ] Please track the effort you invest in this and keep us updated. We know this is not full time, and a significant hurdle to ask of many people - so it is useful to know how much time you have spent on it. We would expect this to take a few days of wall-clock time (ideally no more than a week), and a few hours of CPU time. As we are also very busy there will no doubt be delays on both sides as we work on this together. Please set expectations as you would in your job!
- [ ] Finally, once you have finished this and worked through it with an engineer, you’ll present the project to us in a Zoom group call.
