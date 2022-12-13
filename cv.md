# Nadezhda Shelepova


## Contacts

**Email:** nadia344g@gmail.com

**Discord:** NadezhdaShel

**GitHub:** [NadezhdaShel](https://github.com/Nadezhdashel)

  
## About Myself

I work as a design engineer, but I'm very interested in creating websites. I would like to change my profession and work as a frontend developer. I like to learn something new and in this occupation I see great prospects for professional growth.
  

## Skills

* HTML
* CSS
* Preprocessor SCSS, BEM methodology 
* JavaScript (in progress)
* GitHub
* VS Code
* Figma, Zeplin

  
## Code example

**Solution task ["Reverse or rotate?"](https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991) from website Codewars:**
```
function revrot (str,sz) {
    let rez="";
    if (sz > 0 && str !== "" && sz <= str.length) {
        let A = Array.from(str); 
        for (let i = 1; i<=A.length/sz; i++) { 
            let chunk=A.slice(i*sz-sz, i*sz); 
            if (chunk.reduce(function (a,b) {return Number(a)+Math.pow(Number(b),3)})%2 === 0) { 
                rez+=chunk.reverse().join(""); 
                } else { 
                chunk.push(chunk.shift()); 
                rez+=chunk.join(""); 
                } 
            } 
        } 
    return rez; 
}
```

  
## Education

* Voronezh State Technical University (Computer-aided design systems)
* Self-learning of the basics of HTML, CSS, JavaScript from various sources on the Internet

  
## Experience

**Educational projects:**
* Tajem - [nadezhdashel.github.io/Tajam](https://nadezhdashel.github.io/Tajam/)
* Konstruct - [nadezhdashel.github.io/Konstruct](https://nadezhdashel.github.io/Konstruct/)
* Pompeo - [nadezhdashel.github.io/Pompeo](https://nadezhdashel.github.io/Pompeo/)

  
## English

Level A1
