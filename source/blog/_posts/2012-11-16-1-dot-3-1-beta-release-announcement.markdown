---
layout: post
title: "1.3.1-beta Release Announcement"
date: 2012-11-16 03:38
comments: true
categories: release announcement
author: David Pratt
---

We are extremely proud to announce the release of TideSDK 1.3.1-beta. This is the first community release following the transition of Titanium Desktop to TideSDK. This is also the beginning of a progression of releases in the 1.3.x series as we move through final upgrades of core libraries including WebKit. This will culminate in a 1.4.0 stable release. 

TideSDK is driven by an open, collaborative, and world-wide effort involving the skilled TideSDK Team together with open source contributors. TideSDK is a significant and substantive software project that is an affiliate project of Software in the Public Interest (SPI). With the SPI, TideSDK is in company of other major open software projects such as Debian, Drupal, ArchLinux, Jenkins, PostgreSQL.

If you can't wait to get the download, visit:<br/>
[http://tidesdk.org](http://tidesdk.org)

To review changes within the code at any time, check out:<br/>
[https://github.com/TideSDK/TideSDK/blob/master/CHANGES](https://github.com/TideSDK/TideSDK/blob/master/CHANGES)

For the full details of the release, visit: <br/>
[https://github.com/TideSDK/TideSDK/wiki/TideSDK-1.3.1-beta-release](https://github.com/TideSDK/TideSDK/wiki/TideSDK-1.3.1-beta-release)

The permanent URL on our blog for the release is at:<br/>
[http://tidesdk.org/blog/2012/11/16/1-dot-3-1-beta-release-announcement](http://tidesdk.org/blog/2012/11/16/1-dot-3-1-beta-release-announcement)

* * *

TideSDK is an amazing open source software development kit for creating multi-platform desktop apps using HTML5, CSS3, and JavaScript. With TideSDK,  you can also use common scripting languages such as Python, PHP or Ruby to harness the skills you already possess as a web developer. TideSDK is the best way to create unique desktop apps using simple web technologies. 

## The Importance of the 1.3.1 Release

The 1.3.1 release is important because it is a stepping stone to greater things to come for TideSDK. Substantial focus has resulted in liberating ourselves from several of the constraints of the legacy code. While we would have loved to have released with full library upgrades including WebKit, we’ve created a firm base from which we can proceed. The pace of releases in future are expected to be more more frequent now and we are making good progress on the upgrades.

## What's New in the TideSDK 1.3.1-beta?

- Updated to support the following platforms:
  * Windows XP
  * Windows Vista
  * Windows 7
  * Windows 8
  * Mac OSX Lion
  * Mac OSX Mountain Lion
  * Ubuntu 12.04
- Rebranded throughout
- Updated JQuery libs
- Updated Growl SDK integration for notifications in OSX
- New proxy implementation to work with transparent and authentication proxies
- Code base reorganized and cleaned up for future development
- C++ namespace changes
- Kroll bridge project is not longer separately maintained. The code is now fully integrated into TideSDK
- libkroll is now libtide
- Fixes to Drillbit tests
- Bug fixes
- Updated documentation at http://tidesdk.org including new Getting Started and language guides.
 
### Breaking Changes

- Installers will install to the following locations:
  * Windows 8: C:\ProgramData\TideSDK
  * Windows 7: C:\ProgramData\TideSDK
  * Windows Vista: C:\Documents and Settings\All Users\Application Data\TideSDK
  * Windows XP: C:\Documents and Settings\All Users\Application Data\TideSDK
  * OSX (Mountain Lion and ): ~/Library/Application\ Support/TideSDK
  * Ubuntu Linux: .tidesdk 
- A new TideBuilder App is coming soon. In the interim, a TideSDK Developer 1.4.1 has been prepared to assist  you to create, run and package your app. This is the former TiDev Community reworked and with have a new interface for its 1.5.0 release.
- Global JavaScript namespace is now Ti (changed from Titanium)
- previous Titanium.Include() method has been removed.
- Modules in manifest.txt are no longer prefaced with ti. 
ie. Ti.Codec is now codec
- Titanium.Network.online removed that was deprecated in 1.2.0-RC4. Use native methods for determining an Internet connection instead. For example:  

  {% codeblock lang:javascript %}    
  if(navigator.onLine) {
    // your code
  }
  {% endcodeblock %}

- Script evaluators and PHP, Python and Ruby language support has reverted to the previous 1.1.0 approach as illustrated in the following examples:

  * PHP embedding and inclusion:
    {% codeblock lang:javascript %}  
    <script type="text/php">
        // php code
    </script>
    <script type="text/php" src="file.php"/>
    <script type="text/php">
        include("another_file.php");
    </script>
    {% endcodeblock %}    

  * Python embedding and inclusion:
    {% codeblock lang:javascript %}
    <script type="text/python">
        // python code
    </script>
    <script type="text/python" src="file.py"/>
    <script type="text/python">
        import file
    </script>
    {% endcodeblock %}
    
  * Ruby embedding and inclusion:
    {% codeblock lang:javascript %}
    <script type="text/ruby">
        // ruby code
    </script>
    <script type="text/ruby" src="file.rb"/>
    <script type="text/ruby">
        require 'another_file.rb'
    </script>
    {% endcodeblock %}

You've been patient. Get the latest release now!</br>
[http://tidesdk.org](http://tidesdk.org)

* * *

Keep in mind the release is still in a beta status. Please do your part in thoroughly testing and evaluating the release. We will continue to provide updates with enhancements and bug fixes as we progress to the 1.4.0 stable release. Find an issue or bug in TideSDK? Want to propose a new feature in TideSDK? Feel free to file and issue at the following address:

[https://github.com/TideSDK/TideSDK/issues](https://github.com/TideSDK/TideSDK/issues)

Before filing a new issue request, please search for any duplicate issue first since the issue may have been reported already.

TideSDK is a project with substantial scope that requires significant effort to develop and maintain. Anyone with skills to contribute to documentation, help others, code, or prepare sample apps is welcome to get involved. If you can't assist with your time and find TideSDK useful in your work or business, please consider donating funds to the project to support TideSDK development and the team. Donations are tax deductible in the United States.


**Q. Why did it take so long to deliver a first release ?**<br/>
**A.** The road to the first release was challenging. TideSDK is a complex project that requires a large team including deep programming talent. When it was inherited from the previous maintainer, there were several significant issues. To put this in perspective, the commit graph displays interesting time periods:

![TideSDK Commits](/images/TideSDK-Commits.png)(TideSDK Commits)


  * **End of Lifecyle (Jan 2012):** The legacy code faces the end of its lifecycle for support and any further updates for the code. At the time of the announcement, support for the scripting languages (PHP, Python, Ruby) was in a transition. How the languages worked in the DOM was moving to a different approach that used Titanium.Include. This was only partially implemented and not supported on Windows. Thus, a Windows branch in the repository was growing apart from the master for several months. The TideSDK project inherited the code with two major unmerged branches, a master that had more than 100 failing tests, where the testing framwork could not be run on Linux, and in a state where the core WebKit library and other libraries were in serious need of attention. Candidates released by the previous maintainer had no corresponding tags in the repository.

  * **Early Transition (Feb 2012 - Jun 2012):** A Transition Group was established to attempt to map the future. The Project was named TideSDK. Due to the complexity of the code base, its future was uncertain. Originally there was a split amoung those involved at the time about whether the legacy code should continue since the resources and programming talent required to manage the code is significant. The management team discontinued its meetings and there was a period of two months where it looked like abandonware.

  * **Digging In (Jun 2012 - Sept 2012):** In June, the project had a new Project Lead and the TideSDK Team was assembled. The team included advisors from the orginal work. We spend time understanding the code and learning from its history and the orginal authors. The first efforts focused on getting the code to build properly and to build through platform upgrades. We continued to maintain Kroll, the two separate branches of the SDK including the wayward Windows branch while we focused on upgrades. Despite this, the Windows branch was running separately and completely inconsistent with the develop branch of TideSDK. We were also building WebKit on all platforms in this period in anticipation of the patching that would be required. In September, with the goal of having TideSDK open source in perpetuity, and under the administration of a non profit, our SPI was approved and we acheive 'Affliate Project' status.

  * **Realization (Sept 2012):** The lapse in activity in September in the graph corresponse with tim cope with the realization that we could not move forward without bringing the branches together - particularly Windows. In general terms this was a mess and with this possibility of an unhappy ending. Despite this, we attempted to merge and consolidate into a single repository and believed we could get to a beta by the end of the month. There were 2 repositories with several branches each to bring together but the challenge was Windows. We brought Kroll into the SDK at this time. Despite this, we faced numerous test failures, and code that needed to be untangled due to contrasting implementations that needed to be reconciled. In this transition, we were building Windows but it stopped running and it needed serious attention. We stopped to pause.

  * **Rewind and Fast Forward (Oct 2012 - Nov 2012):** David Pratt decided to make an experimental branch and to move back in time in the sources to determine a way forward by selectively applying commits and working through the period where the previous maintainer brought the unwanted changes (to avert the mess that lay ahead). This took us back to the 1.1.0 era to about Dec 2010. We began replaying commits that were needed and non-destructive. Everything was running and working on all platforms together with our previous work. Commits were replayed for an approximately two year period to bring the code up to date. We finalized our c++ namespace changes, fixed tests, and updated the JavaScript namespace. We applied our new proxy and notifications implementations. Kroll was folded into the code base, we reorganized the project structurally and cleaned things up, fixed bugs and more. Phew!

  * **Preparing 1.3.0-beta (Nov 12):** After the roller coaster ride of moving back and forth in time and working with our experimental branches, we now had code that was working well, running on all platforms and up to date. We had our new work in the project and our tests were looking great! Finally, we were at a stage where the project had reached a level of stablity on all platforms and we had something we can build on and move ahead with our library upgrades. A bit of a nitrogen boost, and we could finally roll our TideSDK beta release and get it out to users.

**Q. Why are you starting with 1.3.1?**<br/>
**A.** We had a 1.3.0 tag and discovered a small bundling issue on Linux that escaped our radar and had to be resolved. This bug was manifested in the code from a long while back but was undetected. We resolved the issue, tagged and are now at 1.3.1

**Q. Can I use Python 3 with TideSDK?**<br/>
**A.** TideSDK gets its support from the system Python. This is Python 2.7. We don’t expect this to change in the near future. Scons, the build system we use also runs on Python 2.x. It is core build software used on several major projects. It may eventually be ported to Python 3 but not now.

**Q. Does TideSDK have an IDE? What about Titanium Studio?**<br/>
**A.** No it doesn't. TideSDK is really a bundle of functionality with an API. You need an editor at the very least to use it. Despite this, there are a couple of tools to help. We are introducing the TideSDK-Developer App to help support developers to create, run, and building their projects locally. TideSDK-Developer is code that has been repurposed from the previous "TiDev Community". Keep in mind though that this app is only a helper. Minimally, you need no more than a text editor, the SDK and interact with the SDK using the tidebuilder CLI. Some folks may be wondering about support with Titanium Studio. An update to the plugin for desktop is required for it to work with TideSDK. We will inform the maintainer of Titanium Studio so they can upgrade their plugin to facilitate desktop development using TideSDK. 

**Q. Is the TideBuilder App part of the release?**<br/>
**A.** TideBuilder is the up-and-coming app that we have been planning and preparing to create, run and bundle TideSDK apps. It is not part of this release. Its currently under development we expect to have it available in the future at or around the 1.4.0 release.

**Q. I thought 1.3.0 would include all new libraries?**<br/>
**A.** Due to the challenging issues we faced with the code base and significant time consumed, we thought it best to release earlier with updated platform support while we work to bring the libraries up to date. A series of 1.3.x minor releases will occur now at a good speed culminating in 1.4.0 stable release. From our perspective, 1.4.0 is the coveted release.

**Q. Why has WebKit not yet been updated?**<br/>
**A.** WebKit is the core browser engine used in TideSDK. We have three ports of WebKit plus Apple’s WebKit on OSX to deal with. WebKit itself is huge base of code and requires significant time and resources. Generally, it is a 4 hours and GB's of disk for a single build. We've actually been building WebKit for a while. We use a custom WebKit to include script evaluators and integration with libtide for the object bridge for scripting language support. Unfortunately, the code base was already in need of significant attention, our WebKit patches needed to be isolated and evaluated to due the age of the existing WebKit we inherited. To make it short, we needed to have a solid core in the SDK while we were incrementally working to assess the WebKit patches.

**Q. You provided release dates previously. We rely on code from the TideSDK project. Can we rely on these dates in future?**<br/>
**A.** We’ve really done our best under trying circumstances to deliver on dates we set out. Everyone in software has had the experience of being later that anticipated at least once. We’re adopting a different approach going forward and will be communicating development milestones (and our success acheiving these). We will only provide dates when we are absolutely certain we deliver to the community on such dates.

**Q. We have apps that we want to base on the latest HTML5 standards. Will TideSDK be able to accommodate this?**<br/>
**A.** Our highest priority is to provide library upgrades. We are working on upgrading to the latest webkit which will allow all TideSDK Apps to have full HTML5 support. Keep in mind while WebKit will be fully up to date, most browsers contain proprietary code to provide some functionality.