export function content() {
    var div = document.getElementById("content");
    var heading = document.createElement("h1");
    var img = document.createElement("img");
    var text = document.createElement("p");
    heading.textContent = "Welcome";
    text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo blanditiis veritatis voluptatibus, eius, tempore iste pariatur molestias deserunt dignissimos aut eaque, enim iure necessitatibus accusamus illo architecto cum minima? Ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis a suscipit repellat amet, unde eveniet impedit aperiam. Minus facere autem quod magnam, illo voluptates eaque consequatur deleniti quidem at!"
    img.src = "https://media.istockphoto.com/id/1388791676/photo/teppanyaki-style.jpg?s=612x612&w=0&k=20&c=j2QXPUQapSE9221h9Hr7XOa5ywcuJUBl3xcv7a63LRE="
    div.appendChild(heading);
    div.appendChild(img);
    div.appendChild(text);
}