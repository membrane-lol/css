
## TLDR

membrane.lol <3 CSS. Guide for **colabs** and u all'.


### Use it

Dropping `src/css/fixes.css` onto your project will set you up for **rolling your own** adventure or **system** nicely. 

You may also go for [CVA](https://cva.style/docs), as demo does. This brings **portability** to styles: membrane.lol use both `lit-standalone` and `react` to power front ends, **CVA** is the glue. 

ofc, it allows to express variants and plays nice with **typescript** but portability is the big win imo.

### Tips

If you have **2 interface elements** grouped reach first for **flex-wrap:wrap** as it will accomodate naturally variable content. Sublime 4 CSS LOC for grouping two elements dancing with each other. Gracias (Ahmat)[https://ishadeed.com/] for your priceless work 💐 . 

End media query as the way to make content responsive. You are now an **intrinsic sized grids** evangelist. 

**Aspect-ratio should top of mind** as it works everywhere: form elements, icon buttons, cards and, ofc, media. 
 
Diy: look at a group of interface elements as an **item** and assign **start and end slots** to it. Spicy with inputs and lists. 

Embrace **margin-direction:auto** in **flex** context and liberate yourself from using half of the non-critical flexbox rules available. 


### Inspo

> Our requirements are more modest but at the same time more responsible:
> buildings, furniture, drinking glasses may well be consumer items that
> we can destroy without regret after they have served for some short or
> long period, but while we use them we expect them to fullfill their role and serve us perfectly, so perfectly that we can also derive aesthetic
> enjoyment from observing them in use.

Erik Gunnar Asplund on **Swedish Grace**





