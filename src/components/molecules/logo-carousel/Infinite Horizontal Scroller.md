


## Scroller.js

```javascript
const scroller = document.querySelector(".scroller");

if(!window.matchMedia("(prefer-reduced-motion: reduce)").matches) {
    addAnimation();
}


function addAnimation(){
    scroller.forEach((scroller)=>{
        scroller.setAttribute("data-animated", true)

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item=>{
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        })
    });
}

```

## HTML Structure

```html
<div className="scroller" ref={scrollerRef}>
      <div className="tag-list scroller__inner">
        <CrewLogo src={titok} />
        <CrewLogo src={twitter} />
        <CrewLogo src={gmail} />
        <CrewLogo src={youtube} />
      </div>
    </div>
```