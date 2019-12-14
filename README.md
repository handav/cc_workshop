# Subjective Data and Creative Taxonomies


Hannah Davis

ahandvanish@gmail.com

@ahandvanish


### Schedule 

Saturday rough schedule:

10-10:15 Introductions 

10:15-11:15 Presentation: intro to subjective data(sets), bias, and creative taxonomies

11:15-11:30 Creative Taxonomies Exercise 1: tagging data, exploring emotions

12:40-1:30 Lunch

1:50-2:50 Creative Taxonomies Exercise 2: creating your own taxonomies

2:50-3:30 Presentation: intro to machine learning, different types of models, etc

3:30-4 Looking at the archive, downloading your own images with Python

4-5 Training, saving, and loading a model (with teachable machines and p5.js), talk about ml5.js and p5.js


Tomorrow (Sunday):

11-3 (break for lunch from 1-2): Free work period

3-5: Exhibition to display a trained model, creative taxonomy, or any other insight you learned or found! 


## Links

### For classification exercises

First exercise: https://forms.gle/SPvNLTcAZE2XQ2vc9

Second exercise: https://docs.google.com/document/d/12b9no0CeNkWKt1_V9pPJvb83FKDvOyFpYUmxGhPwyaI/edit?usp=sharing

Second exercise taxonomies go here: https://docs.google.com/document/d/1BQmAomSvlVoeE5Rtl9HhQ-XhfvD2Yqpixe7Gw3eQ9hc/edit?usp=sharing


### For the archive and working with images

Image dataset: https://hetutrechtsarchief.nl/beeldmateriaal
This is a collection of photos, illustrations, maps etc. mostly related to Utrecht.

CSV of the metadata for 52,722 images with Public Domain 1.0 or CC0 licenses: https://hualab.nl/dumps/ 

URL to query and download a CSV of images by keyword: https://druid.datalegend.net/HetUtrechtsArchief/beeldbank/queries/Search/2


## Downloading your own photos by keyword

1. Go to the query page: https://druid.datalegend.net/HetUtrechtsArchief/beeldbank/queries/Search/2
2. Replace "Schutstraat" with your keyword.
3. Press the download arrow to download a csv. 
4. In this folder, make a folder to hold your image class (it's a good idea to make it the same as your keyword)
5. In download_query_images.py, change folder_to_save_to to the name of your new folder. 
6. Note: if you're downloading multiple queries, it's a good idea to add the keyword to the end of your queryResults.csv as well (i.e. queryResults_cats.csv).

Licenses should be Public Domain 1.0 or CC0.

If you want different sized images, you can replace the 'main_url' variable in download_query_images.py with these URLs:

SMALL: https://proxy.archieven.nl/thumb/39/

MEDIUM: https://hualab.nl/beeldbank/640x480/

LARGE: https://proxy.archieven.nl/download/39/

## Training a model

https://teachablemachine.withgoogle.com/

https://teachablemachine.withgoogle.com/train


## p5.js and ml5.js

https://p5js.org/get-started/

https://ml5js.org/


### Running your sketch and model

Open terminal and make sure you are in the folder where your sketch.js is.  

An easy way to start a server is with python. If you are have python 2:
```
python -m SimpleHTTPServer
```
If you are have python 3:
```
python -m http.server
```

If you don't know how to start a server, check [this](https://github.com/processing/p5.js/wiki/Local-server) guide.

#### Alternative server option

An alternate option for both Python 2 and 3, which does automatic reloading when you make a change:

First, install livereload:

pip install livereload

then, to run the server:

livereload

Then, in the browser of your choice (we'll be using Chrome), navigate to http://localhost:8000/ in your url bar.







