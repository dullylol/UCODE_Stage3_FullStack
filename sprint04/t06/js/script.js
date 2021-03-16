let count = 0
let observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.0) {
                img = entry.target;
                if (img.getAttribute('src') == 'assets/images/doomguy.jpeg') {
                    count++
                    console.log(count)
                    temp = img.getAttribute('data-src')
                    img.setAttribute('src', temp);

                    document.getElementById("counter").innerHTML = count + " images loaded from 20"
                    if (count == 20) {
                        document.getElementById("counter").style.background = "lightgreen"
                        setTimeout(() => {
                            document.getElementById("counter").style.visibility = false
                            document.getElementById("counter").style.display = "none"
                        }, 3000)
                    }

                }
            }
        });
    },
    
)
for (let img of document.getElementsByTagName('img')) {
    observer.observe(img);
}