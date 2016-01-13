# Flat Color Generator
Uses JavaScript to generate sets of flat colors, with RGB and hex values available for the user. Sets can be random or set based on a specific hue value. <a href="http://maarouf.me/flat-color-generator/">See it live here.</a>
## Why?
Flat colors, as broad a term as that is, have become widely used in UI design, but at the same time, the only way to get them without manually picking them out is using static lists/palettes in image format (which you then have to color-pick, etc). It might be hidden somewhere (else), but I haven't found anything that actually generates flat colors not from a static list but using an algorithm (giving the user a lot more options in the process).

## How?
There isn't (I couldn't find) a concrete theory on what flat colors are at heart. So I found the biggest data set/list of flat colors on a website called <a href="http://flatcolors.net">flatcolors.net</a>, converted them to HSV, then analyzed the relationship between the three values. For all hue values, there always tends to be a shift/difference between S & V. After some trial and error (because the shift, in the data, was inconsistent at times), the difference that worked best was 10. 
Of course, that algorithm isn't perfect, and needs improving, but for now, it works well enough/as well as expected.

## Use it:
Download `js/flatcolor.js`, put it somewhere in your working directory and reference it in your html page:
```html
<script src="js/flatcolor.js"></script>
```
(Obviously replace `"js/flatcolor.js"` with your path to the file)
You can now create a new flatColor anywhere like this:
```javascript
var x = new flatColor();
```
or, if you want to create a random color from a certain hue value/degree (0->360):
```javascript
var deg = 45; //insert your degree here or fetch it from some element
var x = new flatColor(deg);
```
Now you have a new flatColor `x` with the following attributes:
```javascript
x.h //hue - number
x.s //saturation - number
x.v //value - number
x.r //red - number
x.g //green - number
x.b //blue - number
x.hex //hex - String, lowercase, starts with a '#'
```
You can use it to color something, using something like this:
```javascript
$('#whatIWantToColor').css('color', 'rgb(' + x.r + ',' + x.g + ',' + x.b +')');
```
