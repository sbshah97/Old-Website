---
layout: post
title: "Introduction to Unit Testing in Android"
description: "An Introduction to what Unit Testing is and how to use it in Android"
tags: 
- Android
- Unit Testing
---

Hi! This is a small tutorial and article on Unit Testing and why to use it in everyday development. I've made a small tutorial on how you can get started with Roboelectric. You can check out the Github repository [here](https://github.com/salman-bhai/Calculator-Demo-App). Feel free to leave your comments at the bottom of the page! 

#### What is Unit Testing?
<blockquote>
<em>Unit Testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. Unit testing can be done manually but is often automated.</em>
</blockquote>

As with the above definition, Unit Testing allows developers to eradicate bugs and find them easily once they are done coding. A lot of developers have the habit of writing Unit Tests even before they have started to code their application! The major objective in Unit Testing is to isolate a unit and validate its correctness.

Unit Testing allows developers to vaidate their code with a set of inputs and outputs that they've pre-defined in the code and check if the __expected output__ matches with the __actual output__. Each major language has its own set of testing frameworks and libraries and no matter which **major** language you choose to code there will always be a corresponding testing fraework for that language!

#### Why use Unit Testing?

There is a certain myth that Unit Tests slow the process of development as you have to do the work of writing both Unit Tests and coidng your application. Then why use Unit Testing if the application can be tested manually later? 

This claim however can be contradicted by the fact that Unit Tests allow Developers especially the ones who develop their applications iteratively (including me!), to waste less time on unaccounted bugs once the application is in Beta mode. A lot of time developers spend a lot of time correcting their code after it has been deployed and this can be easily reduced(not completely avoided) using Unit Tests.

#### RoboElectric - Using Unit Testing for Android

Robolectric cannot not test the interaction of Android components with i, i.e. Robolectric does not require additional mocking frameworks. However it is advisable to use mocking fraemworks like __Mockito__ if your code has interaction with 

Android has a huge set of libraries that can be used for Unit Testing. On a side note check out this [link](https://blog.devknox.io/10-android-libraries-developer-must-know/) to know more about some amazing libraries found for Android. 

The official documentation for Roboelectric can be found [here](http://robolectric.org/). JUnit is one popular testing framework used as well but Roboelectric according is more adept at handling Unit Test cases specifically for Android. 

#### A Brief Tutorial on using Roboelectric

So to get started you can either clone the Github repository [here](https://github.com/salman-bhai/Calculator-Demo-App) or you can create a new app of your own and get code from this repository!

You can start off by adding the ROboelectric dependency to your **app:build.gradle** [file](https://github.com/salman-bhai/Calculator-Demo-App/blob/v1.0/app/build.gradle)

```java
dependencies {
    ...
    // Add Roboelectric 
    testCompile "org.robolectric:robolectric:3.3.2"
}
```

After that you can go to the Unit Tests directory and create a new file named <b>MainActivityUnitTest.java</b> and add the following code to it. Your tests should be stored in the src/test directory.

```java
package com.example.salman.calculatordemoapp;

import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import org.apache.tools.ant.Main;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.robolectric.Robolectric;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.annotation.Config;
import org.robolectric.shadows.ShadowTextView;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.*;

@RunWith(RobolectricTestRunner.class)
@Config(constants = BuildConfig.class)
public class MainActivityUnitTest {
    private MainActivity activity;

    @Before
    public void setUp() throws Exception {
        activity = Robolectric.buildActivity(MainActivity.class)
                .create()
                .resume()
                .get();
    }

    @Test
    public void shouldNotBeNull() throws Exception {
        assertNotNull(activity);
    }
```

Congrats, you've run your first Unit Test and this is irrespective of writing any code in your Main Activity. Now let's try to understand what we've done here!

```java
@RunWith(RobolectricTestRunner.class)
@Config(constants = BuildConfig.class)
```

The class containing your Robolectric test must be annotate with the @RunWith(RobolectricGradleTestRunner.class) test runner. This is what is called a Runner in Java. For more information about a Runner, check out this [link](http://junit.sourceforge.net/javadoc/org/junit/runner/Runner.html). It must also use the @Config() to point to your BuildConfig.class class. For more information about the BuildConfig Class check out this [link](http://www.digipom.com/be-careful-with-buildconfig-debug/).

```java
@Before
public void setUp() throws Exception {
    activity = Robolectric.buildActivity(MainActivity.class)
            .create()
            .resume()
            .get();
}
```
Next up let's talk about this piece of code where the annotation @Before is used. __When writing tests, it is common to find that several tests need similar objects created before they can run. Annotating a public void method with @Before causes that method to be run before the Test method.__ The rest of the cod eis about setting up a Roboelectric Activity of the MainActivity class. 

```java
@Test
public void shouldNotBeNull() throws Exception {
    assertNotNull(activity);
}
```

It is mandatory to annotate every piece of Java code with a `@Test` annotation. This particular Unit Test only allows you to check if the Activity does not return a null object or not! 

All in all that's all for this tutorial. I've attached a list of resources that are useful below. Feel free to ping me in case you have any doubts on this or want to work on a project on this! Till next time this is __salman-bhai__ signing off. 

#### Resources

* [Unit Testing - Android Developers](https://developer.android.com/training/testing/unit-testing/local-unit-tests.html)
* [Getting Started - Roboelectric](http://robolectric.org/getting-started/)
* [Getting Started - JUnit](https://github.com/junit-team/junit4/wiki/getting-started)
* [Getting Started - Mockito](http://site.mockito.org/)
* [GitHub - Calculator Demo App](https://github.com/salman-bhai/Calculator-Demo-App)