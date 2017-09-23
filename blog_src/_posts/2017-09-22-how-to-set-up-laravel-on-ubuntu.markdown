---
layout: post
title: "How to set up Laravel on Ubuntu"
description: "How to set up Laravel on Ubuntu 16.04 and above"
tags: 
- Laravel
- Ubuntu
languages:
- PHP
---

## What is Laravel?
Laravel is a simple PHP based framework which implements the [Model View Controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) architectural pattern to allow complete organisation of code to deploy a web app. Laravel with its simple architecture makes common tasks such as authentication, routing, sessions and caching very simple. This allows developers to code more elegantly without compromising application functionality. 

> Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, and caching.

## Why Laravel? 

Among the major reasons why I personally favour Laravel are some of these:

#### 1. Artisan 

Laravel offers a builtin tool called Artisan which allows developers to interact with the Laravel instance using a command line that creates and handles the Laravel Project Environment. Artisan basically allows developers to avoid tasks that would have to be done manually and instead performs these tasks by itself! 

#### 2. MVC Support

Another reason which makes Laravel an amazing choice is MVC Architecture which allows developers to differentiate between logic and presentation/view. MVC in Laravel has its own set of functionality and allows for better performance and easier documentation.

#### 3. Blade Templates 

Blade Templating allows developers to work with the Views efficiently rather than writing inefficient code to do simple tasks like restrict the amount of words in a particular text. The blade engine also allows developers to avoid repetitive piece of codes like header and footer where the code can be simply called by the includes folder.

## Pre-Requisite Installation

#### Warning :
This tutorial assumes you're working on a Linux environment and not any other Operating System. For other Operating Systems please look at the resources link for more information.

Now as a pre-requisite, it is preferable that you install PHP7 on your local machine. You can do that by running the following commands.

```bash
sudo apt update
sudo apt upgrade

sudo apt install php libapache2-mod-php
sudo apt install php-cli
sudo apt install php-mysql
```

The above commands install PHP7 on your system. Now to install required dependencies on your system.
```bash
sudo apt install curl php-curl php-mcrypt php-mbstring php-gettext php-gd
```

After that you can enable mods by,
```
sudo phpenmod mcrypt
sudo phpenmod mbstring
```
    
After that a PHP7 ZIP update needs to be installed for working with composer
```bash
sudo apt-get install php7.0-zip

```

## Installing Composer and Laravel via Composer

#### Installing Composer

Composer installation can be done in a single command with the following command.
```
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

The output for this will look something like this:
**Output**
```
#!/usr/bin/env php
All settings correct for using Composer
Downloading...

Composer successfully installed to: /usr/local/bin/composer
Use it: php /usr/local/bin/composer
```

To test if you've installed Composer, properly or not run the following command:
```bash
composer
```

It should give you an appropriate output which should help you understand the output value.

#### Installing Laravel via Composer

Now you can install Laravel via Composer.
```
composer global require "laravel/installer"
```

As the documentation tells us,

> Make sure to place the $HOME/.composer/vendor/bin directory (or the equivalent directory for your OS) in your $PATH so the laravel executable can be located by your system.

Make sure you configure your path properly for the same and it needs to be updated along those lines! Take a look at your **bashrc** file for understanding how it works. 

To check if you're laravel has been installed correctly or not run the following commad to check for the same.

```bash
laravel
```

#### Troubleshooting

Sometimes when you install Laravel it runs the first time you install on the terminal. But in the next Terminal session you get an error like this:

> -bash: laravel: command not found

Now to resolve this enter the following command on your termainal and add the following line at the end of the bashrc file.
```bash
nano ~/.bashrc
export PATH="~/.composer/vendor/bin:$PATH" 
```

After that refresh your terminal by entering the following command in the terminal.
```
source ~/.bashrc 
```

After that run the following command to verify if the path that you put is there or not.
```bash
echo $PATH
laravel
```

## Setting up your first project in Laravel

Setting up your first project in Laravel might invlove in some changes that you have to do in the configuration setting s of your Laravel environment.

Firstly go to your terminal and enter the following commands.
```bash
laravel new website
cd website
```

Now once you enter the project repository enter the following commands to set up your local environment.
```bash
cp .env.example .env
composer install
```

After that go to the file path config/app.php and then change the line <em>'debug' => env('APP_DEBUG', true),</em> to <em>'debug' => env('APP_DEBUG', false),</em>.

After that enter the following command to generate a valid 64 bit key to your project.
```bash
php artisan key:generate
```

Now you are all set to run your first Laravel project. Waste no time and run the project by running the following command.

```bash
php artisan serve
```

Open up the development environment in your favourite browser and start developing with Laravel. 

That's all for this blog post. In case you have any doubts please feel free to leave your comments in the Comments section below. Would love to hear your feedback on this as well! Here are a set of resources that I'm attaching in case you need further help.

## Laravel Resources
* [Model View Controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
* [Starting Laravel 5](https://laracasts.com/series/laravel-from-scratch-2017)
* [Laravel Documentation](https://laravel.com/docs/5.4/installation)