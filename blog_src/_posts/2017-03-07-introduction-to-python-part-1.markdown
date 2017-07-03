---
layout: post
title: "Introduction to Python - Part I"
description: "How to get started with Python 3 for Programming"
tags: ["Python","OO Programming"]
---

* Welcome to Part - I of the Tutorial Series Introduction to Python. This following series of tutorials  primarily deal about getting programmers with no programming experience to start using Python in their systems and showcase the power of Python across multiple domains and fields in Computer Science.
* The aim at the end of these blog posts is to get readers acquainted with Python and to be able to use Python for any programming task that is needed across all domains.
* This post is primarily divided into four parts:
<ol>
	<li><b>About Python</b>: History of Python.</li>
	<li><b>Why Python</b>: Reasons for rise of Python.</li>
	<li><b>Installation</b>: How to install in Ubuntu Systems.</li>
	<li><b>Hello World in Python</b>: How to get started using Python.</li>    
</ol>

#### About Python 
* Python is a general-purpose interactive, object-oriented, high-level yet at the same time interpreted programming language created in the period 1985-1990 by Guido van Rossum.
* Python source code like one of the famous languages of the time Perl, is also available under the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html).
* Python along with Ruby is basically designed for software programmers who need to learn programming from scratch or from start a language that focusses less on syntax and more on implementation  

#### Why Python?
* Python is easy to read and understand, so it is often recommended as a starter langauge. Often it is used to teach people who have no programming experience whatsoever about programming. 
* Python is basically used in situations where the speed of the program does not matter. In general, Python is used for rapid prototyping as also making software on a faster basis. 
* Python has loads of application and almost every industry uses Python in some manner or the other! Python in enterprise can be used in scripting, systems monitoring, logging tools, security scripts, etc. It can do also be used for web development, server side development(Flask, Sanic, Django) as also for gaming.


#### Installation

* Python is installed by default on Ubuntu systems with Python 2.7 being the default version. Python 3.6 is currently installed by default in Ubuntu systems from Ubuntu 16.10 but for older versions of Ubuntu you can download the PPA using `apt-get`. <br><br>

* The following instructions can be used to download the PPA for Python 3.6.
{% highlight bash %}
sudo add-apt-repository ppa:jonathonf/python-3.6
sudo apt-get update
sudo apt-get install python3.6
{% endhighlight %}   

* To check which python version you are currently using you can type in the following command:
{% highlight bash %}
python --version
{% endhighlight %}

<h5 style="text-align:left;">Note:</h5>
* In case you want to write your python programs in Python3 and follow along with this tutorial series(all programs in this tutorial series are in Python3), you can type in `python3` while running your Python programs instead of just `python`.
* For example to check the Python version, you can type in the following commands:
{% highlight bash %}
python3 --version
{% endhighlight %}
* You will see that you would be getting the Python version as Python 3.x .

#### Hello World in Python

* For people familiar with Imperative languages like C or Object Oriented languages like C++ or Java, a simple program like Hello World takes multiple lines of code. For example, a Hello World program in Java would look something like this.
{% highlight java %}
class HelloWorldApp { 
	public static void main(String[] args) { 
		System.out.println("Hello World!"); 
		} 
	}
}
{% endhighlight %}  

* However the same program in Python can be run from the Interactive Python Interpreter by typing the following commands in the terminal:
![Hello World in Python]({{ site.baseurl }}/images/post4_img1.png)
* That is all it takes to write a simple python program. Just one line is enough to write a simple Python program given the high level of abstraction that Python provides.

* Python can also be written in your favourite text editor and save the name of the file as `hello-world.py`. Just open up your text editor and type in the following program.
{% highlight python3 %}
#!/usr/bin/python

print("Hello World")
{% endhighlight %}

* Now open up your terminal and type in the follwing command to run the program.
{% highlight bash %}
python3 hello-world.py
{% endhighlight %}
* Voila! You'll find your program running smoothly and without a glitch. Make sure you do this properly and in case you are getting an error make sure you copied all the instructions properly!

#### Conclusion
* Thus we set up Python into our systems and even printed out a Hello World program using Python! In the next tutorial we'll look at how to use Flow Control and Loops in Python.