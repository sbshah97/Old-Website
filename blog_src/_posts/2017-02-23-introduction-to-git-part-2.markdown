---
layout: post
title: "Introduction to Git and GitHub - Part II"
description: "Introduction to Branches in Git"
tags: ["Git","GitHub"]
---

* A lot of times it is difficult to coordinate changes in a project while using Version Control especially when there are more than one contributors in a particular repository! At such times it is important to use a particular feature of Git called **branch** <br><br>

##### What are branches and how to use them?

![git branch commands]({{ site.baseurl }}/images/post2_img1.png)

* Branches are a feature of Git used when multiple collaborators are working on the same project, but want to work on different parts of the project.<br><br>
* This is where the concept of branches in Git is particularly useful. A branch is like a copy of the original code which runs parlallely with other branches in the code repository! The default branch in a GitHub repository is called __master__. To create a new branch you need to execute the following command:

{% highlight git %}
git checkout -b <branch_name>
Switched to a new branch 'salman'
{% endhighlight %}

* In case you are looking to switch back to your __master__ branch on your local repository, type in the following commands to get back again:
{% highlight git %}
git checkout master
git checkout <branch_name>
{% endhighlight %}

* If you are looking to delete a branch first make sure you aren't currently on that branch! Use `git checkout` to move to another branch and then use the following commands to delete the branch.
{% highlight git %}
git branch -d <branch_name>
{% endhighlight %}

* In case your branch is not being deleted because you have certain unmerged changes and you really want to delete them without merging your changes, you can use the following instructions!
{% highlight git %}
git branch -D <branch_name>
{% endhighlight %}
<br>

##### How to sync your branch with the Master branch
* If you are looking to sync your branch with your master, as in update the online changes that someone else has made to the __master__ branch to your branch, type in the following commands:
{% highlight git %}
git pull origin master
{% endhighlight %}

* P.S. This can be extended to all branches and isn't restricted to the __master__ branch alone!<br>

{% highlight git %}
git pull origin <branch_name>
{% endhighlight %}
<br>

##### How to push branches on GitHub

![Create GitHub Account]({{ site.baseurl }}/images/post2_img2.png)

* Once you have your local changes made and committed, it is essential for you to push them on GitHub so that ohers can review them as well! To do this you can simply push your branch on to GitHub just like you would push the master branch to GitHub!<br>
* After you're done working on them use the following commands to push your new branch on to GitHub.

{% highlight git %}
git add --all
git commit -m "<your_message>"
git push origin <branch_name>
{% endhighlight %}
<br>

* Check out the next tutorial to see how to resolve Merge Conflicts as and when you encounter them using Git.