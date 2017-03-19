# Cajo
# Company Oriented Project 2

total hours worked : 60

# Weekly Report By Harjit

# Week 1: 17.01.2017 - 20.01.2017
1)  The project started from this week. I have got the basic website to start with. Since it is in php, I will need some time to understand and work on it. I had to setup server and database on my machine. Even the sample I got from the website need to be installed first before using. I had to figure out how to install it as there were some specified ways to install it 

2)  I have just setup the project and I have to start it from next week. This week just had 3 days and it was very short to start.

3)  Have to go through some tutorials before starting the project as I am not used to php. The website that the company asked me to get reference from is very vast.

4)  Kickoff meeting and looking through the company slides for my tasks for the project (1 hour),
    Tutorials for php, server and database (2 hours),
    Preparing all the documents before starting the project (2 hours),
    Setting up server and database (2 hours),
    Downloading the project and installing (3 hours)

# Week 2: 21.01.2017 - 27.01.2017
1)  The slide was misleading as it was written that the company has decided to use the existing website opencart and I spent all my time figuring how the website actually worked and I was confused where I actually had to implement the function that I was supposed to do. Then Juha said that I to develop it myself not referencing the website opencart. I started the development by first making the preview page for the website at first. It allows user to upload a photo to the browser and the website provides a preview of the image provided. This doesnot interact with the database yet. 

2)  Next week I will start working on the image processing for the previewed picture.

3)  There was a misunderstanding with the company that I am doing this project with. According to the presentation that they sent me it said that they are going to use the commercially available website Opencart but later when I inquired exactly what they needed it turned out that they'll use the website once I finished my part of the project.

4)  understanding the architecture of opencart (3 hours),
    Making basic architecture wiht image preview (4 hours)

# Week 3: 28.01.2017 - 03.02.2017
1)  I had to use Iagemagick to edit pictures in php. It is a free php plugin specially for image manipulation. This week there was a deadline for the demo of the other project that I am doing and one guy that I was working with couldn't continue with the project so I had to focus more on that project. Still I was able to make some improvements on this project. I have the basic portal working now where user can add photos of their choice to the website. The buttons for cropping, resizing and others are yet not working. I have written some code for the cropping functionality but it still has some errors. I will be able to look at it next week only.

2)  Next week I will start implementing the cropping and resizing functionality.

3) The other project had to be the main focus this week. There was a deadline for the demo and one guy working with me had to leave the project. In this project I had problem uploading the image into the browser at first. It was due to I was using form inputs where I could have just written a function for click of the button.

4) image preview improvements (2 hours),
   cropping functions (2 hours),
   error with the  div I used as the cropping tool and fixes (3 hours)

# Week 4: 04.02.2017 - 10.02.2017
1) Using the div element to get the cropped picture was getting really hard so I looked for another way to do it and I found JCrop. It is a library which we can import to our code and use the function for cropping the file. Now I just have to use it to replace the original picture with the cropped picture in the browser itself before sending it to the database. The Jcrop function is confisuing and the version that I had imported says it is not compatible and I couldnot find a way to resolve it so without wasting further time I thought of doing it with the earlier version. When going through the normal approach with a division, I had trouble with using php in a javascript file so it gave me a lot of errors. The JQuery libraries that I imported had to be imported in the body part of the main index file. Otherwise the external js could not find the libraries at all. Showing the cropped file on the image div in browser itself is still having issues when loading. For some reason I am not able to call the javascript for the image source in the php file. 

2) Finding a way to save the cropped file into the database.
   Then finding a way to stick it into the image source instead of downloading. 

3)  The other project had to be the main focus this week. There was a deadline for the demo and one guy working with me had to leave the project. In this project I had problem uploading the image into the browser at first. It was due to I was using form inputs where I could have just written a function for click of the button.

4) image preview improvements (2 hours),
   cropping functions (2 hours),
   error with the  div I used as the cropping tool and 	fixes(3 hours)
   
# Week 5: 11.02.2017 - 17.02.2017
1) Continued to work on the saving of image cropping method. I was able to download the cropped image but it is still can't set the cropped part that user wants to keep. It is just showing blank picture instead of the cropped picture. The division used for cropping the image is zooming the image automatically before cropping which is not entirely providing the needed result. It works fine when the browser is zoomed to 75%. I have not messed around with the css which is why I am finding it hard to get the reason for that. Also, the cropping works only when the name of the image segment is specified in the crop.php file. If I try to use the image name from the browser it shows blank picture. Although the width and height is captured, the picture is always dark. I have to find a way to connect the image div with the php code in crop.php.

2) Moving on to Image resizing functionality

3) Blank cropped picture, failing to combine with the cropped image. Error with calling js inside of php file. It doesnot recognize the javascript commands properly. The auto zooming is giving a hard time. It doesn't work properly when the browser is in 100% zoom. The cropped image is blank or black when the name is not specified.

4) combining and saving the cropped image (3 hours),
   The zoom issue with the browser (3 hours),
   specifying the image name for cropping (2.5 hours)

# Week 6: 18.02.2017 - 24.02.2017
1) This week Lab assignments in school and tests made it difficult to work. No progress in the project this week
2) Next week I am going to work on turning image into grayscale.
3) Time issues
4) No work this week.

# Week 7: 25.02.2017 - 03.03.2017
1) This week I worked on image resizing functionality. There are different options given in the browser for resizing. Example, 200x200, 300x300 and 400x400. User selects a value and image is resized according to that. First there was a problem getting value from the dropdown menu because the value that I set in the option was a string and the value that I needed for the image resizing function was an integer. There is still an issue that even if I set different values for the resizing function it always set the image to same size. Also this week I implemented the grayscale function for the image. It was not much problem or difficult but it took me quite a while because I was using a black and white image for image manipulation and the grayscale function even though it was working fine, I couldn't see it because the image was already in grayscale. This confused me and it took me a lot of time to figure it out. 

2) I am going to start working on the 3D functionality for the image manipulation next week. I will need to watch tutorials and gain prior knowledge about three.js before implementing it because the company suggested I use this library but I have no idea how it works.

3) dropdown value gain issues. The colour of the image used created an issue. image cropping issues still, not giving the desired output.
   
4) resize function intro (2 hours),
   implementation of resize method (3 hours) ,
   selected value from option getting issues (2 hours),
   grayscale image function (2 hours),
   resolving black and wsite image confusion (3 hours)

# Week 8: 04.03.2017 - 10.03.2017
1) This week I started work on the 3D image feature. I had to go through the documentation of three.js which is kind of new javascript library and I am not familiar with it yet. The tutorials gave me an idea where to start the work from. Then the documentation helped me implementing each function. First I was able to create a shape that had to be displayed on the canvas or scene as it is called in three.js. Then the shape or mesh needed a texture which I would use the image for. I first used the image on the home directory to put on the mesh. 

2) The 3D image has to be further designed to make user able to move it around. I am going to work on it next week.

3) A new area was introduced and I had to start from basic for that watching tutorials and documentations.

4) Three.js documentation (2 hours),
   youtube tutorials for three.js (3 hours),
   scene and mesh implementation (3 hours),
   image control for texture ( 1 hour)

# Week 8: 11.03.2017 - 17.03.2017
2) What are you going to do next?
3) Is there something that prevents you?
4) How many hours did you work
	
	
 

 
