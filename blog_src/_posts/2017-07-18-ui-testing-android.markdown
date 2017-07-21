---
layout: post
title: "Introduction to Intrumentation Tests in Android using Espresso"
description: "An Introduction to what Intrumentation Tests is and how to use it in Android with the Espresso framework"
tags: 
- Android
- Software Testing
languages:
- Java
---

In the [previous tutorial](/blog/unit-testing-android/), the article how to write a simple Unit Test for Android. This article however deals with Instrumentation Tests and how to get started with them for Android. Like the previous article, for this article we will re-use the same simple [Calculator App](https://github.com/salman-bhai/Calculator-Demo-App/tree/ui-testing) that we built. 

<em>Instrumentation tests they are also into the Junit package, but the control of the Android API is quite total because Instrumentation Tests are instantiated in the system before any application code is run, and to test you need to open the real application(emulator or a phone connected with USB).</em>

To read more about the differences between Instrumentation Tests and Unit Tests, kindly refer [this StackOverflow answer](https://stackoverflow.com/questions/30393629/difference-between-android-instrumentation-test-and-unit-test-in-android-studio).

#### What is Intrumentation Testing?

Instrumentation tests are made to run on a Physical device or the Android emulator. In the background, the main app will be installed and then a testing app will also be installed which will control the main app, launching it and running UI tests as you hav edefined for your app. Instrumentation Tests are especially useful when you need to test code that has a dependency on a context.

#### Why is Intrumentation Testing needed?

As Android quotes it for us,
<blockquote>
<em>Using instrumented unit tests also helps to reduce the effort required to write and maintain mock code. You are still free to use a mocking framework, if you choose, to simulate any dependency relationships.</em>
</blockquote>

Instrumentation Testing is extremely important because after you have tested each and every Unit of your code via Unit Testing it is important to understand how the entire code base works when you combine all of the code together. Another important factor is the manner in which activities and fragments behave in Android. It is extremely difficult to manage these Android dependencies if you plan to use a mocking framework like Mockito along with a Unit Testing framework like Roboelectric.  

#### Espresso - UI Testing Framework for Android

<blockquote>
<em>Espresso is a UI test framework (part of the Android Testing Support Library) that allows you to create automated UI tests for your Android app. Espresso tests run on actual device or emulator (they are instrumentation based tests) and behave as if an actual user is using the app (i.e. if a particular view is off screen, the test won't be able to interact with it).</em>
</blockquote>

Espresso's simple and extensible API, automatic synchronization of test actions with the UI of the app under test, and rich failure information make it a great choice for UI testing. It allows for automated testing where all actions undertaken by the user are performed by the test itself and thus if any activity isn't loading on clicking, the test will automatically show an error for that. 

#### A Brief Tutorial on using Espresso

So to get started you can either clone the Github repository [here](https://github.com/salman-bhai/Calculator-Demo-App/tree/ui-testing) or you can create a new app of your own and get code from this repository! Make sure you're on the branch <b>ui-testing</b> else you wont be able to view the code!

You can start off by adding the Espresso dependency to the app build.gradle file. The Espresso Core library module might have a different gradle dependency for the Android Support Annotations library. To understand why this piece of code is necessary, check out this [link](https://stackoverflow.com/questions/33317555/conflict-with-dependency-com-android-supportsupport-annotations-resolved-ver) to know more about the same!

```java
    androidTestCompile('com.android.support.test.espresso:espresso-core:2.2.2', {
        exclude group: 'com.android.support', module: 'support-annotations'
    })
```

After that you can go to app/java/<project-name>(androidTest) in the Android View and create a new class named <em>MainActivityUITest.java</em> or edit the code in the existing <em>ExampleInstrumentedTest.java</em> file itself and rename the file if possible! After that you can paste the exisiting code in the file below! This code can also be found [here](https://github.com/salman-bhai/Calculator-Demo-App/blob/ui-testing/app/src/androidTest/java/com/example/salman/calculatordemoapp/MainActivityUITest.java).

```java
@RunWith(AndroidJUnit4.class)
public class MainActivityUITest {

    private String inp1;
    private String inp2;
    private String output_add;

    @Rule
    public ActivityTestRule<MainActivity> mActivityRule = new ActivityTestRule<>(
            MainActivity.class);

    @Before
    public void init() {
        // Specify a valid string.
        inp1 = "8";
        inp2 = "4";
        output_add = "12.0";
    }

    @Test
    public void checkAddition() {
        // Type text and then press the button.
        onView(withId(R.id.input1))
                .perform(typeText(inp1), closeSoftKeyboard());
        onView(withId(R.id.input2))
                .perform(typeText(inp2), closeSoftKeyboard());

        onView(withId(R.id.add)).perform(click());

        // Check that the text was changed.
        onView(withId(R.id.result))
                .check(matches(withText(output_add)));
    }
}
```

Now you can select run this Instrumented Test and select your own device that you have connected via a USB Cable or run it on the Android Emulator. Now let's try to understand what the above code does!

```java
@Rule
public ActivityTestRule<MainActivity> mActivityRule = new ActivityTestRule<>(
        MainActivity.class);

@Before
public void init() {
    // Specify a valid string.
    inp1 = "8";
    inp2 = "4";
    output_add = "12.0";
}
```
A <b>@Rule</b> is used to define a definition or an object that you want to define for the test case that you are going to test your code on. For more information about [@Rule](http://junit.org/junit4/javadoc/4.12/org/junit/Rule.html) check out the link here. <b>@Before</b> is used to initialize variables that may be used for the testcase. For more information about @Before check out this [link](http://junit.sourceforge.net/javadoc/org/junit/Before.html).

Now these two annotations are primarily used for initializing variables and the Test Activity that is used to test the Main Activity.    

```java
@Test
public void checkAddition() {
    // Type text and then press the button.
    onView(withId(R.id.input1))
            .perform(typeText(inp1), closeSoftKeyboard());
    onView(withId(R.id.input2))
            .perform(typeText(inp2), closeSoftKeyboard());

    onView(withId(R.id.add)).perform(click());

    // Check that the text was changed.
    onView(withId(R.id.result))
            .check(matches(withText(output_add)));
```

This method simulates the action of typing two numbers on the two EditText options respectively and then checking if the result text is displayed or not!

All in all this is a very simple example of how Instrumented Tests work in Android! I've attached a list of resources that are useful below. Feel free to ping me in case you have any doubts on this or want to work on a project on this! Till next time this is <b><em>salman-bhai</em></b> signing off. 

#### Resources

* [Building Instrumented Unit Tests - Android Developers](https://developer.android.com/training/testing/unit-testing/instrumented-unit-tests.html)
* [Calculator Android App](https://github.com/salman-bhai/Calculator-Demo-App/tree/ui-testing)
* [Espresso Documentation](https://google.github.io/android-testing-support-library/docs/espresso/setup/index.html)
* [Difference between Instrumentation and Unit Tests](https://stackoverflow.com/questions/30393629/difference-between-android-instrumentation-test-and-unit-test-in-android-studio) 