2021 MDDN342 Assignment 2: Parameterised Space

-Final Version- 

-BlueBlue Milky Way

This is my final version of this project. 

I did some experiments on this project about rain part, point part and curve part. 

The first challenge for me is the rain part. I spend lots of time solving how to make each column and row of rains are randomly. I tried to use getNoiseValue function to instead of random function, but it always makes every rain randomly moving at the same time or moving randomly at the same direction. I hope these elements look more random. 

Then for the point part. I make two levels of points. One is small circles without filling in and the other one is filled points. To make these points look better and have animation, I set brightness value of points. One is from dark to light and the other one is from light to dark. There is also a challenge for me to let points randomly appear on the canvas. I tried to use random function to get each random point. However, the random function will affect each point randomly many times per second. Then I use the method from noise grid example showed in class to solve this problem. (https://bl.ocks.org/dribnet/ca951a2bd5bf2ec5807ae050b08b4d97/2f01c29a47c0b7dd3b837bafd3ebb35ba51bd99d.) The only problem is that the points will be in a line sometimes. The random function will have a better result than the getNoiseValue function. 

The last curve part, I used the bazierVertex function to make curve to achieve my thought. But it also limits the animation that lets curve moving from left to right. (Not just shifting, this effect I can use translate function to get). I give up this effect and just give a shake effect. 

And for the background of my project. I tried to use getNoiseValue function to get version_2 result. But I prefer to use color gradient effect to get background color. The method of color gradient that I learned from https://p5js.org/examples/color-linear-gradient.html. 

In the final version, I also add rotate circles and one more dark blue curve behind the main one. I hope this gif can look vivid and interesting. For used as a zoom background, I hope my animation can let user feel quiet and peace. 