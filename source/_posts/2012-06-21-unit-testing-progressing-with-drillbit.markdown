---
layout: post
title: "Unit Testing Progressing with Drillbit"
date: 2012-06-21 10:26
comments: true
categories: Drillbit
author: David Pratt
---

Our team has been working to get Drillbit running and sucessfully passing unit tests. This is in anticipation of connecting to our Continuous Integration system late this week. After a commit to our repository, TideSDK gets built on a variety of operating systems and the unit tests will be executed. This will advise the team of the status of these builds at any time and also provide downloads at the current state.

There are a total of 4619 assertions made in the tests. Currently 85 tests are failing but this is already much better that where we started originally. We continue to progress. The unit test failures are primarily in the language and process modules.

The following is a screenshot of the unit testing and current status:

![June 21 Drillbit results](http://tidesdk.github.com/images/drillbit-06212112.png)