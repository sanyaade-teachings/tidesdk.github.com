---
layout: post
title: "A Brief Introduction to TideSDK"
date: 2012-08-30 01:47
comments: true
categories:
author: David Pratt
published: false
---
[TideSDK](http://tidesdk.org), formerly Titanium Desktop, is an open source software development kit for creating multi-platform desktop apps using HTML5, CSS3 and JavaScript. The sources are orginally attributed to Appcelerator and under the Apache 2 Licence. It became a community led effort in early 2012. The project is hosted on [Github][2].

TideSDK allows you to use your web development skills to create desktop apps. I also provides wide range of privileged APIs including the following:

* Filesystem
* Databases (incuding SQLite and LocalStorage)
* Processes
* System tray
* Media
* Menus
* Windows
* Networking (including the creation of clients and servers)
* Icon (on the task bar) and badges on it
* System Tray
* OS notifications

Comprehensive documentation of the APIs is available to support developers. 

Developer's can use or extend the functionality of and app using mature libraries in Python, PHP or Ruby. TideSDK has a bridge in the JavaScript runtime to these languages. This allows JavaScript (functions or events) to directly call into those runtimes. For example JavaScript actually sees directly into the Python namespace and can directly call any Python function (assuming compatible argument types).

TideSDK's object bridge was originally called kroll. It has more recently been renamed the tide module. It provides a library called libtide that is compiled with with WebKit in the SDK. Scripting languages may be used through the inclusion of python, php or ruby files or by inserting code within script tags in the DOM in HTML.

While Appcelerator originally provided open source Titanium Developer to create projects, it later introduced closed source Titanium Studio, an IDE on top of Aptana. It currently remains possible to develop apps in Titanium Studio but a plugin may be required in future.

The TideSDK team is currently developing a TideSDK Builder app. It is meant to facilitate creating, running and packaging TideSDK apps. TideSDK Builder will feature scaffolds to generate boiler plate code to enable developers to get going quickly. Scaffolds will provide a collection of files to instaniate a project with libraries for specific patterns of development ie. Backbone MVC. Developers will be able to create, import and share scaffolds.

It is important to note that TideSDK can be used minimally without any special app or IDE for support. It is possible to interact with the SDK directly through the terminal to run and bundle while using no more than a basic text editor to write application code.

A TideSDK project consists of some boilerplate code with a Resources folder that contains the core project files. The following illustrate the stucture of a simple hello world app that will run on all supported plaforms:

	├── CHANGELOG.txt
	├── LICENSE.txt
	├── README.md
	├── Resources
	│   ├── app.js
	│   ├── default_app_logo.png
	│   └── index.html
	├── manifest
	└── tiapp.xml

The manifest contains information about the runtime modules used by the project. tiapp.xml provides configuration and default_app_logo.png is the image that will appear in the dock, system tray or in the windows of your app.

The following is the contents of the app.js file for the hello world example (as it will appear in TideSDK 1.3.0). Previous versions will have used the Titanium namespace which has been discontinued.

	// create and set menu
	var menu = Ti.UI.createMenu(),
	fileItem = Ti.UI.createMenuItem('File'),
	exitItem = fileItem.addItem('Exit', function() {
	  if (confirm('Are you sure you want to quit?')) {
		Ti.App.exit();
	  }
	});
    
	menu.appendItem(fileItem);
	Ti.UI.setMenu(menu);

In less than 10 lines of code, this illustrates the API fo the creation of a menu, adding a 'File' item to it, and adding an 'Exit' item to the menu heirarchy. We simply append our fileitem to the menu. A simple callback method is used  to pop open a confirm dialog so the user can confirm they wish to quit the app. If the user confirms, the app will exit.

Here is the HTML for the app that displays the content using html and calls the script above.

	<!DOCTYPE html>
	<html>
	<head>
	  <title>Hello World</title>
	  <style type="text/css">
		body {background: #fff;}
	  </style>
	</head>
	<body>
	  <h1>Hello World</h1>
	  <script type="text/javascript" src="app.js"></script> 
	</body>
	</html>

A packaging service was once offered by Appclerator to allow users to develop on a single platform and transmit a packaging job to package for various operating systems. The TideSDK team is looking to replace this capability in a different and better way. Until this solution is available, you can package your apps locally. Note that you can only bundle and package for the operating system that you are currently running. Virtual machines can easily be created for packaging on operating systems that are different than your existing host.

TideSDK will also build the installer for you. To package an app, you can call a command in the terminal. TideSDK Builder will provide capabilties to package through a user interface once it is released.

Thousands of developers have used the former Titanium Desktop (now rebranded TideSDK) to develop deskop applications. Perhaps one of the most recognized desktop applications using this technology is Wunderlist:

[http://www.6wunderkinder.com/wunderlist](http://www.6wunderkinder.com/wunderlist)

The roadmap for TideSDK includes the implementation of CommonJS for 1.4 which aims to provide developers with an option for a more modular development experience using JavaScript and for additional improvements in reliability and stability.

  [1]: http://www.tidesdk.org/
  [2]: https://github.com/TideSDK