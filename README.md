# Flat Color Generator
Uses JavaScript to generate sets of flat colors, with RGB and hex values available for the user. Sets can be random or set based on a specific hue value. <a href="http://maarouf.me/flat-color-generator/">See it live here.</a>
## Why?
Flat colors, as broad a term as that is, have become widely used in UI design, but at the same time, the only way to get them without manually picking them out is using static lists/palettes in image format (which you then have to color-pick, etc). It might be hidden somewhere (else), but I haven't found anything that actually generates flat colors not from a static list but using an algorithm (giving the user a lot more options in the process).

## How?
There isn't (I couldn't find) a concrete theory on what flat colors are at heart. So I found the biggest data set/list of flat colors on a website called <a href="http://flatcolors.net">flatcolors.net</a>, converted them to HSV, then analyzed the relationship between the three values. For all hue values, there always tends to be a shift/difference between S & V. After some trial and error (because the shift, in the data, was inconsistent at times), the difference that worked best was 10. 
Of course, that algorithm isn't perfect, and needs improving, but for now, it works well enough/as well as expected.
