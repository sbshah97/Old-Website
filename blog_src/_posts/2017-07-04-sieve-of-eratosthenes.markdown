---
layout: post
title: "Sieve of Eratosthenes"
description: "How to use Sieve of Eratosthenes to find Prime Numbers"
tags: 
- Algorithms
- Data Structures
---

#### Introduction

The Sieve of Eratosthenes is an ancient technique to find Prime Numbers. It may be used to find primes in arithmetic progressions. 

#### Concept 

The Sieve of Eratosthenes is one of the more efficient ways to find Prime Numbers given prime numbers are below a range of 10 million.

![Sieve of Eratosthenes](/images/sieve-of-eratosthenes/sieve.gif)

A simple idea is to generate a list of numbers in a list or an array. Then each number which is a multiple of a prime number is eliminated turn by turn starting with 2. Sieve of Eratosthenes is a simple algorithm which eliminates the numbers based on the principle that a multiple of a number is not a prime number.

The above GIF shows how the numbers are eliminated each and every number turn by turn.

#### Algorithm

Simple Algorithm to implement Sieve of Eratosthenes thereby printing a list of Prime Numbers till the number n. 

```c++
void sieve(int n) {
	int prime[n+1];
	for(int i = 2; i <= n; i ++)
		prime[i] = i;

	for(int i = 2; i*i <= n; i ++)
		for(int j = i*i; j <= n; j += i)
			prime[j] = 0;

	for(int i = 2; i <= n; i ++) 
		if(prime[i] != 0)
			printf("%d ",prime[i]);
}
```

That's all for today! Kindly post any doubts that you'd have in the comments below!