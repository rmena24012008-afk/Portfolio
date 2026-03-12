/* ============================================
   MOBILE MENU FUNCTIONALITY
   ============================================ */

// Mobile Menu Elements
const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu');
const mobileNavLinks = document.querySelectorAll('#mobile-menu .nav-link');

// Function to open mobile menu
function openMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

// Function to close mobile menu
function closeMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Event Listeners for Mobile Menu
if (mobileBtn) {
  mobileBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    openMobileMenu();
  });
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    closeMobileMenu();
  });
}

// Close menu when clicking on a nav link
mobileNavLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    closeMobileMenu();
  });
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  if (mobileMenu && mobileMenu.classList.contains('open')) {
    if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
      closeMobileMenu();
    }
  }
});

// Close menu on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
    closeMobileMenu();
  }
});

// Close menu on resize if screen becomes larger
window.addEventListener('resize', function() {
  if (window.innerWidth >= 768 && mobileMenu && mobileMenu.classList.contains('open')) {
    closeMobileMenu();
  }
});

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */

const reveals = document.querySelectorAll(".reveal-left, .reveal-right");

window.addEventListener("scroll", function() {
  reveals.forEach(function(el) {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
});

/* ============================================
   MAIN PROJECTS DATA & RENDERING
   ============================================ */

let mainProject = [
  {
    project_img: "image/trip-pilot.png",
    project_tag: ["OM","Node js","Mysql"],
    project_title: "Trip Pilot",
    project_desc: "Efficient platform for organizing group trips",
    github: "",
    preview: "https://trip-pilot-8080.zcodecorp.in/"
  },
  {
    project_img: "image/book.png",
    project_tag: ["HTML & CSS"],
    project_title: "Book Library",
    project_desc: "Creative online book library shopping platform",
    github: "https://github.com/rmena24012008-afk/Book-Library",
    preview: "https://menakar-dufyypr5-8443.zcodecorp.in/html-demo/PROJECT/PROJECT/Book%20Library.html"
  },
  {
    project_img: "image/shopping.jpg",
    project_tag: ["Java","Mysql"],
    project_title: "Online Shopping",
    project_desc: "User-Friendly Online Store Built With Java",
    github: "https://github.com/rmena24012008-afk/JavaProjectDatabaseConnection",
    preview: ""
  },
  {
    project_img: "image/array.jpeg",
    project_tag: ["Java"],
    project_title: "ArrayDeque",
    project_desc: "Efficient Data Handling Using Java ArrayDeque",
    github: "https://github.com/rmena24012008-afk/JAVA-PROJECT-ARRAYDEQUE",
    preview: ""
  },
  {
    project_img: "image/wordle.webp",
    project_tag: ["Java Script","html & css"],
    project_title: "Wordle",
    project_desc: "Players guess the correct word with smart hints",
    github: "https://github.com/rmena24012008-afk/wordle",
    preview: "https://rmena24012008-afk.github.io/wordle/wordle.html"
  }
];

let container = document.getElementById("projects-containers");
if (container) {
  container.innerHTML = "";
  mainProject.forEach(function(project) {
    let card = document.createElement("div");
    card.classList.add("project-card");

    let img = document.createElement("img");
    img.src = project.project_img;

    let overlay = document.createElement("div");
    overlay.classList.add("project-overlay");

    let githubLink = document.createElement("a");
    githubLink.href = project.github;
    githubLink.target = "_blank";
    githubLink.innerHTML = '<i class="fa-brands fa-github" style="font-size : 30px;"></i>';

    let previewLink = document.createElement("a");
    previewLink.href = project.preview;
    previewLink.target = "_blank";
    previewLink.textContent = "🔗";
    previewLink.classList.add("preview");

    if (project.project_tag != "Scratch" && project.project_tag != "OM") {
      overlay.appendChild(githubLink);
    }
    if (project.project_tag != "Java") {
      overlay.appendChild(previewLink);
    }

    let info = document.createElement("div");
    info.classList.add("project-info");

    let title = document.createElement("h3");
    title.classList.add("project-title");
    title.textContent = project.project_title;

    let desc = document.createElement("p");
    desc.classList.add("project-desc");
    desc.textContent = project.project_desc;

    info.appendChild(title);
    info.appendChild(desc);
    for(let i=0;i<project.project_tag.length;i++){
      let tag = document.createElement("div");
      tag.classList.add("project-tag");
      tag.textContent = project.project_tag[i];
      info.appendChild(tag);
    }
    

    card.appendChild(img);
    card.appendChild(overlay);
    card.appendChild(info);

    container.appendChild(card);
  });
}

/* ============================================
   PET PROJECTS DATA & FILTERING
   ============================================ */

const project = [
  {
    img: "image/fylo.png",
    category: ["html & css"],
    tag:"html & css",
    title: "Book Landing Page",
    desc: "Modern Web Page Recreated With HTML CSS",
    github: "https://github.com/rmena24012008-afk/html-assignment/tree/main/Assignment%20013",
    preview: "https://rmena24012008-afk.github.io/html-assignment/Assignment%20013/media.html"
  },
  {
    img: "image/banking.jpg",
    category: ["Js","html & css"],
    tag:"js",
    title: "Banking App",
    desc: "Secure Banking UI Built With JavaScript",
    github: "https://github.com/rmena24012008-afk/advancejsassignment/tree/main/Assignment%20004",
    preview: "https://menakar-dufyypr5-8443.zcodecorp.in/html-demo/Assignment%20javaScript%20Advance/Assignment%20004/banks.html"
  },
  {
    img: "image/bubble.webp",
    category: ["Scratch"],
    tag:"Scratch",
    title: "Bubble Shooter",
    desc: "Interactive bubble shooter game built with Scratch",
    github: "",
    preview: "https://scratch.mit.edu/projects/1192675780/fullscreen/"
  },
  {
    img: "image/planet.webp",
    category: ["Node Js","html & css","Js"],
    tag:"Node Js",
    title: "Planet System",
    desc: "Interactive Space Planet Viewer Application",
    github: "https://github.com/rmena24012008-afk/NODE-JS-ASSIGNMENT",
    preview: ""
  },
  {
    img: "image/phantom.png",
    category: ["html & css"],
    tag:"html & css",
    title: "Phantom",
    desc: "Animated Modern Web Page Built With HTML & CSS",
    github: "https://github.com/rmena24012008-afk/html-assignment/tree/main/Assignment%20017",
    preview: "https://rmena24012008-afk.github.io/html-assignment/Assignment%20017/phantom.html"
  },
  {
    img: "image/rps.png",
    category: ["Js","html & css"],
    tag:"Js",
    title: "Rock paper scissor",
    desc: "Fun rock paper scissors web game",
    github: "https://github.com/rmena24012008-afk/Java-Script-Assignment",
    preview: "https://rmena24012008-afk.github.io/Java-Script-Assignment/Rock%e2%80%93Paper%e2%80%93Scissors.html"
  },
  {
    img: "image/sll.png",
    category: ["Java"],
    tag:"Java",
    title: "Single Linked List",
    desc: "Dynamic Data Handling With Linked Lists",
    github: "https://github.com/rmena24012008-afk/LinkedList/blob/main/SingleLinkedList.java",
    preview: ""
  },
  {
    img: "image/DLL.png",
    category: ["Java"],
    tag:"Java",
    title: "Double Linked List",
    desc: "Efficient Doubly Linked List Operations",
    github: "https://github.com/rmena24012008-afk/LinkedList/blob/main/DoubleLinkedList.java",
    preview: ""
  },
  {
    img: "image/web.png",
    category: ["html & css"],
    tag:"html & css",
    title: "WebWave app",
    desc: "Modern WebWave interface rebuilt with HTML CSS",
    github: "https://github.com/rmena24012008-afk/html-assignment/tree/main/Assignment%20010/assignment%20010.2",
    preview: "https://rmena24012008-afk.github.io/html-assignment/Assignment%20010/assignment%20010.2/recreate-web-page.html"
  },
  {
    img: "image/flight.png",
    category: ["Js","htl & css"],
    tag:"Js",
    title: "Flight Tracking",
    desc: "Smart Flight Monitoring and Tracking System",
    github: "https://github.com/rmena24012008-afk/weatherapp/blob/main/flight-tracker.html",
    preview: "https://rmena24012008-afk.github.io/weatherapp/flight-tracker.html"
  },
  {
    img: "image/pattern.png",
    category: ["Js"],
    tag:"Js",
    title: "Pattern",
    desc: "Classic Pattern Challenges for Logical Thinking",
    github: "https://github.com/rmena24012008-afk/jsassignment/blob/main/Assignment%20003/pattern.html",
    preview: "https://rmena24012008-afk.github.io/jsassignment/Assignment%20003/pattern.html"
  },
  {
    img: "image/scanner.png",
    category: ["Scratch"],
    tag:"Scratch",
    title: "Scanner app",
    desc: "Simple Digital Scanner Simulation",
    github: "",
    preview: "https://scratch.mit.edu/projects/1186227344/fullscreen/"
  },
  {
    img: "image/todolist.png",
    category: ["Java","Mysql","html & css"],
    tag:"Java",
    title: "Todo List",
    desc: "Smart Task Management With Clean Architecture",
    github: "https://github.com/rmena24012008-afk/mvc",
    preview: ""
  },
  {
    img: "image/welcome.jpg",
    category: ["Group project"],
    tag:"Group project",
    title: "Welcome",
    desc: "Creative Welcome Experience for Zoho School",
    github: "",
    preview: "https://sivasuryamg-3ikyitoo-8443.zcodecorp.in/html_demo/scratch_project/Presidents%20Of%20India/Presidents%20Of%20India.html"
  },
  {
    img: "image/calculate.png",
    category: ["Js","html & css"],
    tag:"Js",
    title: "Age Calculate",
    desc: "Simple Age Calculation With Clean Interface",
    github: "https://github.com/rmena24012008-afk/jsassignment/tree/main/Assignment%20004",
    preview: "https://rmena24012008-afk.github.io/jsassignment/Assignment%20004/Age%20Calculator.html"
  }
];

const containers = document.getElementById("projects-container");

function createCard(proj) {
  // let category = proj.category;
  
  
  let card = document.createElement("div");
  card.classList.add("project-card");

  let img = document.createElement("img");
  img.src = proj.img;

  let overlay = document.createElement("div");
  overlay.classList.add("project-overlay");

  let github = document.createElement("a");
  github.href = proj.github;
  github.target = "_blank";
  github.innerHTML = '<i class="fa-brands fa-github" style="font-size : 30px;"></i>';

  let preview = document.createElement("a");
  preview.href = proj.preview;
  preview.target = "_blank";
  preview.classList.add("preview");
  preview.textContent = "🔗";
  
  for(let i=0;i<proj.category.length;i++){

    if (proj.category[i] != "Scratch") {
      overlay.appendChild(github);
      break;

    }
  }

  for(let i=0;i<proj.category.length;i++){
    if (proj.category[i] != "Java" && proj.category[i] != "Node Js") {
      overlay.appendChild(preview);
      break;
    }
  }

  let info = document.createElement("div");
  info.classList.add("project-info");
  

  let title = document.createElement("h3");
  title.classList.add("project-title");
  title.textContent = proj.title;

  let desc = document.createElement("p");
  desc.classList.add("project-desc");
  desc.textContent = proj.desc;

  info.appendChild(title);
  info.appendChild(desc);
  for(let i=0;i<proj.category.length;i++){
    let tag = document.createElement("div");
    tag.classList.add("project-tag");
    tag.textContent = proj.category[i];
    if (proj.category[i] == "Team") {
      tag.textContent =  "Scratch";
    }
    info.appendChild(tag);

  }

  card.appendChild(img);
  card.appendChild(overlay);
  card.appendChild(info);

  return card;
}

function renderProjects(category) {
  if (containers) {
    containers.textContent = "";
    project.forEach(function(proj) {
        if (proj.tag === category) {
          let card = createCard(proj);
          containers.appendChild(card);
        }
      
      
    });
  }
}

let buttons = document.querySelectorAll(".filters button");

buttons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    buttons.forEach(function(b) { b.classList.remove("active"); });
    btn.classList.add("active");
    let filter = btn.dataset.filter; 
    renderProjects(filter);
  });
});

// Initial render
let clickBtn = document.querySelector(".click");
if (clickBtn) {
  clickBtn.click();
}

/* ============================================
   ACTIVE NAV LINK ON SCROLL
   ============================================ */

const sections = document.querySelectorAll("section, footer");
const navLinksAll = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function() {
  let current = "";
  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 350) {
      current = section.getAttribute("id");
    }
  });
  navLinksAll.forEach(function(link) {
    link.classList.remove("active");
    if (link.getAttribute("href") && link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
