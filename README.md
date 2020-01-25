# My Resume Website

[Direct link to deployed website](https://voggastur.github.io/user-centric-frontend-project/)



The aim of this website is to present myself to potential employers professionally and showcase my abilities as a front end developer.



## Table of Contents

1. [UX](#UX)
    
    I. [User stories](#UX2)
    
    II. [Wireframes](#UX3)

2. [Features](#Features)
3. [Features for the future](#Features2)
4. [Technologies used](#Technologies)
5. [Testing](#Testing)

    I. [Testing links functioning properly, and responsiveness for different screen sizes.](#Testing2)

    II. [Testing user stories](#Testing3)

6. [Deployment](#Deployment)
7. [Credits](#Credits)


## 1. UX <a name="UX"></a>

The primary target audience are collaborators who wish to see my portfolio, it is also targeted at employers who wish to see my available skills.


#### I. User Stories: <a name="UX2"></a>

1. As an employer who recieved a link to Johans website, I want to see the website to judge his skills.

2. As an assessor who will judge the website on the totality of looks, responsiveness and functions among other things.

3. As a collaborator who wants to see if Johan can be of use in a project together, I want to see his portfolio to see if he did similar work before.



#### II. Wireframes: <a name="UX3"></a>

1. [Wireframes.pdf](assets/wireframes/wireframes.pdf)


I changed a lot from my initial wireframes procedurally during the development, 
it took a lot of time testing better layouts and I learned the importance of a well thought out initial wireframe.

1. Initially I changed the heading into a very long hovering slidebar, later I understood it to be impractical so I made a centralised unfolding Home nav with 3 more buttons sliding out of it in 3 directions.
In the end I settled for a regular Bootstrap navbar anyway because my skills at the moment wasn't up to the task of making it fully responsive for mobile screens.
At the same time the idea of the navbar-brand developed into reality by using 2 icons of J and K and putting them next to each other in GIMP image editor and create a new favicon with the size 512x512.
I used a png for navbar-brand and a converted .ico for my favicon.ico head link.

2. The boxed layout of the wireframes was deemed to be impractical for the amount of content I wanted to fill it with. So I settled for making sections of one longer page with the content designated for Portfolio, About and Contact.

3. I decided to not use background images because of difficulty implementing strong contrasts/opacity and a fitting color scheme, I settled for using linear-gradients with mild colors to provide a smooth change between sections.

I learned so much during the development of this project, I had to put everything I learnt so far into use, plus reading up on W3C articles and youtube tutorials.

## 2. Features <a name="Features"></a>

* Bootstrap navbar

* Bootstrap grid layout

* Hover effects on all navbar list items, buttons and anchors from hover.css by Ian Lunn

* Animated splash welcome for landing section

* Slideshows with three buttons for switching to different pictures of my projects, the projects have direct links in the adjacent project descriptions.

* Bootstrap cards for displaying items of specialty in my field of programming

* Bootstrap progressbars display the top 5 rudimentary skills of my programming

* Devicons by konpa imported by link into head for listing languages of profession in my profile section



## 3. Features for the future <a name="Features2"></a>

* A centralised hover navbar with unfolding buttons that link to shorter version pages of each section on the page.

* Real portfolio items will be included in the future

* I want to create a cool fullpage animation for the landingscreen in the future, I saw many examples of this in my research but my skills are not yet up to the task of this.

* Setup the form section with backend functionality so it will work to send me messages



## 4. Technologies used <a name="Technologies"></a>

* HTML5

* CSS3

* Bootstrap Framework

* Github Deployment

* Gitpod IDE

* W3C Validator

* Autoprefixer

* Free Formatter


## 5. Testing <a name="Testing"></a>

#### I. Testing Functionality <a name="Testing2"></a>

1. I have checked that all links go where they should
2. I have tested the webpage in Chrome Dev Tools to see responsive scaling for different screen sizes.
3. I have run the HTML through [W3C HTML Validator](https://validator.w3.org) to check for errors in the code, none such observed.
4. I have run the CSS code through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to check for errors in the code, none such observed.
5. I formatted the HTML through the use of [Free Formatter](www.freeformatter.com/html-formatter.html)
6. I added vendor prefixes to my css through the help of https://autoprefixer.github.io/

#### II. User stories testing <a name="Testing3"></a>

1. As an employer I go to Johans website and want to see his skills.

    * Click the profile button in the navbar or scroll to the profile section of the page.

2. As an assessor I go to Johans website to test everything among which..

    * Click each link once to see it goes where it should.
    * Test responsiveness of the webpage and see realigned columns and that no content isn't clipped off.
    * Fill in an improper email in the form and see that it doesn't work unless you put a correct email.

3. As a collaborator I want to go to Johans website to check out his portfolio.

    * Click portfolio in navbar or scroll down to the portfolio and check each item, see different pictures included in the slideshows by clicking the bottom buttons.



## 6. Deployment <a name="Deployment"></a>

This project was developed in Gitpod.
The project has been deployed to Github Pages - [Deployed Website](https://voggastur.github.io/user-centric-frontend-project/)
The repository for this website can be found at this GitHub link: [User Centric Frontend Repository](https://github.com/Voggastur/user-centric-frontend-project)

The following process was used to deploy the project:
1. Log into GitHub.
2. Select Voggastur/user-centric-frontend-project
3. Select settings
4. Scroll down to Github Pages
5. Select Source: master branch
6. Retrieve the link to the deployed website


## 7. Credits <a name="Credits"></a>


* I used "Devicons" icons from https://konpa.github.io/devicon/ in my profile section.

* I used "Fontawesome" icons in nav, landing, profile, about and footer sections

* Hover.css by Ian Lunn was used for all my hover effects

* I downloaded the pen and paper picture for matching my form element from downloadclipart.net

* I downloaded the "man sitting in chair in front of desk" for my landing screen from downloadclipart.net

* Bootstrap templates "Carousel" and "Blog" was used to start up my work, however the connection is more abstract at this stage and not much likeness can be observed. For startup inspiration it gave me a jumpstart though.

* The slideshows were imported from https://w3bits.com/css-image-slider/ . Changes were made to accomodate the needs of my website, with properly scaled pictures, changed buttons, label attributes and input types.

* The letters J and K for my favicon.ico were found on google picture search, upon finding them I combined them and made a new .png for the navbar-brand and later converted it for my favicon.ico.

* My Skills Items link to corresponding wikipedia articles

