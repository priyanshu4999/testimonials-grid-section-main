const data = {
    1 : {   
            img : "./images/image-daniel.jpg",
            name : 'Daniel Clifford',
            status : 'Verified Graduate',
            heroPrimary : `I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.`,
            comment : `“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”`
        },
    2 : {
            img : "./images/image-jonathan.jpg",
            name  : 'Jonathan Walters',
            status : 'Verified Graduate',
            heroPrimary : 'The team was very supportive and kept me motivated',
            comment : `“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”`
        },

    3 : {
            img : "./images/image-jeanette.jpg",
            name : `Jeanette Harmon`,
            status : `Verified Graduate`,
            heroPrimary : `An overall wonderful and rewarding experience`,
            comment : `“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”`,
        },

    4 : {
            img : "./images/image-patrick.jpg",
            name : `Patrick Abrams`,
            status : `Verified Graduate`,
            heroPrimary : `Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.`,
            comment : `“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”`,
    },

    5 : {
            img : "./images/image-kira.jpg",
            name : `Kira Whittle`,
            status : `Verified Graduate`,
            heroPrimary : `Such a life-changing experience. Highly recommended!`,
            comment : `“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”`,}
    }

    const app = document.createElement("main")
    
    app.innerHTML = `
        <article class="container grid">
            ${Object.entries(data).map(([key , entry])=>{
                return `<div class='card card--${key} grid__area--${key} '>
                        <section class="card__profile">
                        <figure><img src="${entry.img}" alt="${entry.name}-image-" class="card__img card__img--${key} "/></figure>
                            <div class="card__profile-head">
                                <h1 class="card__h1--${key}  text__format-2">${entry.name}</h1>
                                <h2  class="card__h2--${key} text__format-4">${entry.status}<h2>
                            </div>
                        </section>
                        <section class="card__comment">
                            <p class="card__p1--${key} text__format-1">${entry.heroPrimary}</p>
                            <p class="card__p2 card__p2--${key} text__format-3">${entry.comment}</p>
                        </section>
                    </div>`
                }).join("")
            }

        
        </article>
    `


    document.body.appendChild(app)