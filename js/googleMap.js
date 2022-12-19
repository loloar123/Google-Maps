
export function myFunction(x, name) {
    if (x.matches) { // If media query matches
    //   name.style.marginTop = "20px";
    }
    if(name != null) {
        name.style.marginTop = "15px";
    }

  }
  export const checkXLocation = () => {
      var x = window.matchMedia("(max-width: 768px)")
      x.addListener(myFunction) // Attach listener function on state changes
  }
