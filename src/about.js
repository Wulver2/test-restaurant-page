export function about() {
    var about = document.createElement("div");
    var heading = document.createElement("h1");
    var story = document.createElement("p");
    var contact = document.createElement("h3");
    heading.textContent = "Our Story";
    story.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    contact.textContent = "Contact us at (555) 123-4567";
    about.appendChild(heading);
    about.appendChild(story);
    about.appendChild(contact);
    return about;
};