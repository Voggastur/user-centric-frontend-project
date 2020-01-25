[https://voggastur.github.io/user-centric-frontend-project/](#My-Resume-Website)

[logo]: assets/images/favicon.ico "My Logotype"

The aim of this website is to present myself to potential employers professionally and showcase my abilities as a front end developer.
The website itself will be pretty basic at this stage but will include more over time as my abilities grow.

UX User stories;

An employer clicks my link from my application email and visits my webpage. The employer wants to see what I can do and the coding languages I can use.
He wants to employ someone who doesn't need supervision all the time, and work independently and understand the concept of CSS layouts.
He is looking for someone who can make webpages, someone who knows HTML, CSS and Javascript and ideally some backend language too.
On visiting my page he will see my name and know he's come to the right place, and will scroll down to be presented by my portfolio to see similar work I have done before. 
He will notice I have made amendments to a big corporate website, but not built it from scratch. So he will be wary, but he will see in my other portfolio items I have 
some other skills too, which hopefully impresses him.
After scrolling past the portfolio section he will see my profile, including my picture, and the totality of the skills and languages I know, graded by my ability in progressbars.
Near the end he will see a short "about me" section to understand I'm a regular guy with regular interests, nothing weird here.
And in the end he will see the contact section where he can pass me a note through the form element, or one of the social links in the footer.
He will see that one of my social-links represents Twitter, and as that is a comfort-zone for this particular employer because he spends alot of his time there unlike the other apps,
he will enter Twitter through the link and send me a message, asking for further information.


[assets/wireframes/wireframes.pdf](##Wireframes)

Project wireframes are in the assets/wireframes folder.

I changed a lot from my initial wireframes procedurally during the development, 
it took a lot of time testing better layouts and I learned the importance of a well thought out initial wireframe.

1. Initially I changed the heading into a regular bootstrap nav, then I worked with a very long custom hovering slidebar, later I understood it to be impractical for hovers so I made a centralised unfolding Home nav with 3 more buttons sliding right-bottom-left of a centralised Home button.
In the end I settled for a regular Bootstrap navbar anyway because my skills at the moment wasn't up to the task of making it fully responsive for mobile screens.
At the same time the idea of the navbar-brand developed into reality by using 2 icons of J and K and putting them next to each other in GIMP image editor and create a new favicon with the size 512x512.
I used a png for navbar-brand and a converted .ico for my favicon.ico head link.

2. The boxed layout of the wireframes was deemed to be impractical for the amount of content I wanted to fill it with. So I settled for making sections of one longer page with the content designated for Portfolio, About and Contact.

3. I decided to not use background images because of bad contrasts and difficulty picking a color scheme, I settled for using linear-gradients with mild colors to provide a smooth change between sections

![wireframes](assets/wireframes/wireframes.pdf)


## Features

* Bootstrap navbar with navbar-brand

* Hover effects on all navbar list items, buttons and anchors from hover.css by Ian Lunn

* Animated splash welcome for landing section

* Slideshows with three buttons for switching to different pictures of my projects, the projects have direct links in the adjacent project descriptions.

* Bootstrap cards for displaying items of specialty in my field of programming

* Bootstrap progressbars display the top 5 rudimentary skills of my programming

* Devicons by konpa imported by link into head for listing languages of professionality in my profile section



## Testing

I have double-checked that all links are working and run all HTML and CSS through the W3C validation service with a perfect grade.
I have gone through each Responsive screen size in Chrome dev tools to see that the column breakpoints are working as intended and content isn't clipped off.


## Deployment

The project has been deployed to Github Pages - ![##My-Resume-Website](https://voggastur.github.io/user-centric-frontend-project/)

## Credits

* I used "Devicons" icons from https://konpa.github.io/devicon/ in my profile section.

* I used "Fontawesome" icons in nav, landing, profile, about and footer sections

* Hover.css by Ian Lunn was used for all my hover effects

* I downloaded the pen and paper picture for matching my form element from downloadclipart.net

* I downloaded the "man sitting in chair in front of desk" for my landing screen from downloadclipart.net

* Bootstrap templates "Carousel" and "Blog" was used to start up my work, however the connection is more abstract at this stage and no likeness can be observed. For startup inspiration it gave me a jumpstart though.

* The slideshows were imported from https://w3bits.com/css-image-slider/ . Changes were made to accomodate the needs of my website, with properly scaled pictures, changed buttons, label attributes and input types.

* The letters J and K for my favicon.ico were found on google picture search, upon finding them I combined them and made a new .png for the navbar-brand and later converted it for my favicon.ico.

*






