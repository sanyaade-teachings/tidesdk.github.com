---
layout: post
title: "Jenkins Continuous Integration (CI) System Launched"
date: 2012-06-25 11:07
comments: true
categories: continuous integration
author: David Pratt
---

Our team has been working hard to build the software inherited from Appcelerator across all supported operating systems. More than clean builds, we are looking for the execution of automated tests as well as the artefacts from each build.

Building TideSDK is extremely time consuming. Our developers must be also be in tune with impacts of commits to the repository on the code base across operating systems. We tweeted not so long ago that Matt [https://github.com/matthewh](https://github.com/matthewh) has recently helped the project with server capacity for our Continuous integration (CI) system. He has also been working to get Jenkins set up and configured.

We were pleased to have our first passing build on MacOSX 10.6.8 on Jenkins, June 24. This was an important milestone for us.

![Jenkins CI](http://tidesdk.github.com/images/jenkins-ci.png)

Virtual machines are now being setup for MacOSX 10.7.3, Windows 7 and for Linux. We plan to support Ubuntu and Fedora to start. This may be expanded.

One of the great features of continuous builds is the artefacts obtained followin each build. Our users will benefit from Nightly Builds that we will be making available to tha the current state of our software can be evaluated. Look for a *Nightly builds* link on our website at [http://www.tidesdk.org](http://www.tidesdk.org) shortly.

Find out more about TideSDK by joining our [mailing list](https://groups.google.com/forum/#!forum/tidesdk) at or drop by our irc at #tidesdk on freenode.