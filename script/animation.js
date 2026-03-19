const frames = [
    String.raw`
(>'-')>
`,
    String.raw`
<('-'<)
`,
    String.raw`
^('-')^
`,
    String.raw`
v('-')v
`,
    String.raw`
(>'-')>
`,
    String.raw`
<('-'<)
`,
    String.raw`
(^-^)
`
];

let currentFrame = 0;
const animationContainer = document.getElementById('ascii-animation');

function updateAnimation() {
    animationContainer.textContent = frames[currentFrame];
    currentFrame = (currentFrame + 1) % frames.length;
}

setInterval(updateAnimation, 200);