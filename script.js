const inputs = document.querySelectorAll(".controls input");


function handleUpdate() {
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
// touchmove added so the function works on touchscreens - not in the tutorial
inputs.forEach(input => input.addEventListener("touchmove", handleUpdate));
