---
layout: post
title: "TideSDK Project Update"
date: 2012-09-29 14:23
comments: true
categories: tidesdk status nodejs npm
author: David May
---

It’s been a long time coming, but to ensure that you know that we are very active, we thought we dust off the blog and give you a brief update on the state of affairs regarding the project.

Before we do, we want to send out a huge thanks to the community and their support. It’s been great to see the increased [twitter](https://twitter.com/i/#!/search/?q=tidesdk) and [mailing list](https://groups.google.com/forum/?fromgroups#!forum/tidesdk) activity. We love hearing from TideSDK’s users, old and new, and appreciate any feedback to help us make TideSDK more useful and easier to use. 

Over the last month, TideSDK has been downloaded over 4,800 times, we’ve doubled our twitter following and have gotten great questions and engagement on our mailing list. We also appreciate those that have dropped by our [IRC channel](irc://chat.freenode.net#tidesdk) to ask questions or offer support.

![TideSDK stats](/images/tidesdk-posts.png) *(partial snapshot of recent buzz around "tidesdk" via [Social Buzz](http://www.social-searcher.com/?ie=UTF-8&oe=UTF-8&gplng=&twloc=&fbctr=&q5mul=&q5min=&q5xct=&ntw=&psttyp=&embd=&fblike=&twretwt=&gpplsone=&gpreshr=&q5=tidesdk))*

![Software in the Public Interest](/images/spi-logo.png) Further, we want to thank [Software in the Public Interest](http://www.spi-inc.org/) (SPI) and its board members for taking us under their wings, as you may know by way of our twitter and mailing list updates. From the onset of the project, it has been in the plans to turn TideSDK into a non-profit organization. The reasons are straight forward - we want to ensure TideSDK’s long-term viability and support by enabling the additional support channels that SPI provides.


![Stack Overlow](/images/so-logo.png) Through the efforts of our fearless project lead, David Pratt (fairwinds), we were also able to secure our own [Stack Overflow tag](http://stackoverflow.com/questions/tagged/tidesdk) to help users quickly surface relevant questions and solutions regarding the project. We are trying to address questions as they come up, but hope that the community at-large will be able to chip in with tips, tricks and questions alike.

This brings us to the current state of things and some more juicy bits. Part of the reason the blog got a bit dusty is that our team members have been working feverishly on the next release (v1.3.0) and have been largely limited to 140 character activity aside from the occasional mailing list entry. We are aiming for a release in a couple of days, but here's how we anticipate the next releases will pan out:

<table>
	<thead>
		<tr>
			<th width="10%">Version</th>
			<th width="15%">Status</th>
			<th width="75%">Main Features</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1.3.0</td>
			<td>Completed</td>
			<td>&bull; Modern OS Support (Ubuntu 12.x, Lion, Mountain Lion, Windows 8)<br />&bull; Moving away from legacy code
			</td>
		</tr>
		<tr>
			<td>1.3.1</td>
			<td>Completed</td>
			<td>&bull; Proxy fix: For the Windows port of TideSDK, proxy settings (on IE settings) are auto­detected by the SDK but are not used properly when executing an HTTP request.
			</td>
		</tr>
		<tr>
			<td>1.4.0</td>
			<td>In Progress</td>
			<td>&bull; Updated language packages (PHP, Python, Ruby)<br />&bull; Upgraded webkit lib to enable access to latest HTML5, CSS3 and WebGL features<br />&bull; TideBuilder, a replacement for Titanium Developer, to help you easily set up and package TideSDK projects
			</td>
		</tr>
		<tr>
			<td colspan="3">
			</td>
		</tr>
	</tbody>
</table>

The goal is to put out a well tested, stable and up-to-date SDK that will enable you to tap into the advances in the different technologies and help you easily create cross platform apps with the skills you already have.

Beyond the 1.4.0 release we have exciting ideas for TideSDK, some of them involving NodeJS and NPM. You’ll hear more about that as we flesh out the details.

We have a great, global team in place right now, but are always looking for help. If you want to beta test the next release and help us identify bugs, are great at writing tutorials, or have C++ or other language knowledge, we’d be excited to talk to you.

If any company is interested in sponsoring or able/willing to donate any hardware to this non-profit project, please don’t hesitate to contact us at [info@tidesdk.org](mailto:info@tidesdk.org).

Lastly, we just want to reiterate some of the ways you can keep in touch with us - we hope to hear from you:

* [Twitter](https://twitter.com/tidesdk)
* [Mailing List](https://groups.google.com/forum/?fromgroups#!forum/tidesdk)
* [IRC](irc://chat.freenode.net#tidesdk)
* [Stack Overflow](http://stackoverflow.com/questions/tagged/tidesdk)
* Blog (you're looking at it)

David Pratt (fairwinds) has also [posted a more detailed update](https://groups.google.com/d/topic/tidesdk/HhqR3Ba66xk/discussion) on the mailing list, make sure to check it out and comment if you want additional information.

Thanks,
TideSDK Team