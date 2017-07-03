---
layout: post
title: "Introduction to Git and GitHub - Part I"
description: "How to start using Git for your projects"
tags: ["Git","GitHub"]
---

##### Definition

![Create GitHub Account]({{ site.baseurl }}/images/post1_img5.png)

* Git is a version control system (VCS) for tracking changes in computer files and coordinating work on those files when working on projects that involve multiple people. To check if Git is installed in your system or not, or to check the version of Git in your system type in the following command!<br>
{% highlight git %}
git --version
{% endhighlight %}
* Git is primarily used for software development, but it can be used to keep track of changes for any type of file/s. GitHub is a website which allows users to use Git and store their files online and keep a track of the changes in them as well as helping in coordinating work between different people who are connected online.<br>

* GitHub is primarily used by large as well as small IT Companies as well as upcoming startups.<br>

##### How To Get Started?

* All you have to do if you are a Linux user to install Git is to install it via the `apt-get` command.<br><br>
{% highlight git %}
sudo apt-get update
sudo apt-get install git
{% endhighlight %}

* And that is all that you need to do to get Git up and running in your system.<br><br>
* After that you have to configure Git according to your settings. This is done via the `config --global` command.<br><br>

{% highlight git %}
git config --global user.email "sbs.191197@gmail.com"
git config --global user.name "Salman Shah"
{% endhighlight %}

* After that you are all set to go!<br><br>

##### Create a GitHub Account

![Create GitHub Account]({{ site.baseurl }}/images/post1_img1.png)

* Go to the address: [GitHub](https://github.com/) and then fill in the form which is given.<br><br>

* Choose a unique user-name that you can be identified with, your email address and your unique password.<br><br>

* That is all you need to create your GitHub account.<br><br>

##### Make your first commit


![Create a New Repository]({{ site.baseurl }}/images/post1_img2.png)

* Go to the [GitHub website](https://github.com/) and create a New Repository by clicking on the green 'New Repository' button to the right of the page.<br><br> 

* After that do the following:<br><br>
	1. Add the Repository Name as `hello-world`
	2. Write the description as `First GitHub repository`.
	3. Make sure it is marked `public`.
	4. Check the `Initialize this repository with a README`
	5. Finally click on `Create Repository` button and your new repository will be created!<br><br>


![Select Link Repository to clone]({{ site.baseurl }}/images/post1_img3.png)

* Now all you need to do is click on the Green Dropdown on your repository page called `Clone or download`<br><br>

* Then copy the HTTPS or SSH link given over there via the 'Copy to Clipboard' button and then go to your Terminal.<br><br>

* Add the following commands to your terminal.

{% highlight git %}
git clone https://github.com/<your_name>/hello-world.git
cd hello-world
{% endhighlight %}

* Basically, you have to paste the HTTPS or SSH link that you've copied from the repository page and paste it after the `git clone` command.<br><br>

* Now that you have created a local instance of your repository on your computer. You can add/remove files in the repository like you normally would.<br><br>

* After making all the changes that you need to do, you can now push your changes online by the following commands.<br><br>

![Pushing Changes to GitHub Account]({{ site.baseurl }}/images/post1_img4.png)

* First save the changes that you made to the local repository.

{% highlight git %}
git add --all
{% endhighlight %}

* Then create a new commit and add a message associated with it with the following command:

{% highlight git %} 
git commit -m "Initial Commit"
{% endhighlight %}

* Lastly 'push' your commits to your online repository with the following command:

{% highlight git %}
git push origin master
{% endhighlight %}

* After this you will be asked for your login credentials which you have to enter and then your commit will be pushed!<br><br>

* Congrats you have just finished adding your first commit!<br><br>

##### Things To Remember

* This is just a basic tutorial to add files on GitHub.<br><br>

* Check out the next two articles on how to use more advanced features of Git.<br>
