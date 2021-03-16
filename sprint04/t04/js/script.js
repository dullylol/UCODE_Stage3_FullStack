function buttonJohnWick() {
    let titleBlock = document.getElementById("title")
    let actorBlock = document.getElementById("actors")
    let text = document.getElementById("text")
    let image = document.getElementById("image")

    let title = titleBlock.children
    let actors = actorBlock.children

    document.getElementById("john_wick").className = "active"
    document.getElementById("avengers").className = "disactive"
    document.getElementById("inception").className = "disactive"

    title[0].innerHTML =   "John Wick"
    title[1].innerHTML =   "October 24, 2014"

    text.innerHTML =    "John Wick is an American neo-noir action-thriller media \
                        franchise created by screenwriter Derek Kolstad and owned by Summit Entertainment. \
                        Keanu Reeves plays John Wick, a retired hitman seeking vengeance for \
                        the killing of the dog given to him by his recently deceased wife, \
                        and for stealing his car. The franchise began with the release of \
                        John Wick in 2014 followed by two sequels, John Wick: Chapter 2 on \
                        February 11, 2017, and John Wick: Chapter 3 – Parabellum on May 17, \
                        2019. All three films were considered critical and commercial successes, \
                        accumulating a collective gross of more than $587 million worldwide. \
                        A fourth installment, John Wick: Chapter 4, is in pre-production and \
                        has a release date of May 27, 2022. A fifth installment is \
                        also in development, and it will be shot back-to-back with the fourth film in 2021."

    actors[0].innerHTML = "Keanu Reeves"
    actors[1].innerHTML = "Michael Nyqvist"
    actors[2].innerHTML = "Alfie Allen"
    actors[3].innerHTML = "Willem Dafoe"
    actors[4].innerHTML = "Dean Winters"

    image.children[0].setAttribute("src", "assets/images/john_wick.jpeg")
}

function buttonAvengers() {
    let titleBlock = document.getElementById("title")
    let actorBlock = document.getElementById("actors")
    let text = document.getElementById("text")
    let image = document.getElementById("image")

    let title = titleBlock.children
    let actors = actorBlock.children

    document.getElementById("john_wick").className = "disactive"
    document.getElementById("avengers").className = "active"
    document.getElementById("inception").className = "disactive"

    title[0].innerHTML =   "Avengers: Endgame"
    title[1].innerHTML =   "April 22, 2019"

    text.innerHTML =    "Avengers: Endgame is a 2019 American superhero film based \
                        on the Marvel Comics superhero team the Avengers. \
                        Produced by Marvel Studios and distributed by Walt Disney \
                        Studios Motion Pictures, it is the direct sequel to Avengers: \
                        Infinity War (2018) and the 22nd film in the Marvel \
                        Cinematic Universe (MCU). Directed by Anthony and Joe Russo \
                        and written by Christopher Markus and Stephen McFeely, the \
                        film features an ensemble cast including Robert Downey Jr., \
                        Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, \
                        Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, \
                        Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, \
                        Gwyneth Paltrow, and Josh Brolin. In the film, the surviving \
                        members of the Avengers and their allies attempt to reverse \
                        the damage caused by Thanos in Infinity War."

    actors[0].innerHTML = "Robert Downey Jr."
    actors[1].innerHTML = "Chris Evans"
    actors[2].innerHTML = "Mark Ruffalo"
    actors[3].innerHTML = "Chris Hemsworth"
    actors[4].innerHTML = "Scarlett Johansson"

    image.children[0].setAttribute("src", "assets/images/avengers.jpg")
}

function buttonInception() {
    let titleBlock = document.getElementById("title")
    let actorBlock = document.getElementById("actors")
    let text = document.getElementById("text")
    let image = document.getElementById("image")

    let title = titleBlock.children
    let actors = actorBlock.children

    document.getElementById("john_wick").className = "disactive"
    document.getElementById("avengers").className = "disactive"
    document.getElementById("inception").className = "active"

    title[0].innerHTML =   "Inception"
    title[1].innerHTML =   "July 8, 2010"

    text.innerHTML =    "Inception is a 2010 science fiction action film written\
                        and directed by Christopher Nolan, who also produced the film \
                        with his wife, Emma Thomas. The film stars Leonardo DiCaprio \
                        as a professional thief who steals information by infiltrating \
                        the subconscious of his targets. He is offered a chance to have \
                        his criminal history erased as payment for the implantation \
                        of another person's idea into a target's subconscious. \
                        The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, \
                        Marion Cotillard, Elliot Page, Tom Hardy, Dileep Rao, Cillian \
                        Murphy, Tom Berenger, and Michael Caine."

    actors[0].innerHTML = "Leonardo DiCaprio"
    actors[1].innerHTML = "Ken Watanabe"
    actors[2].innerHTML = "Joseph Gordon-Levitt"
    actors[3].innerHTML = "Marion Cotillard"
    actors[4].innerHTML = "Elliot Page"

    image.children[0].setAttribute("src", "assets/images/inception.jpeg")
}