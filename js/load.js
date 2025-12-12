export const load = () => {
  const projects = {
    Equcyph: {about: "A mathematics equation parser and plotter"},
    JTempl: {about: "A compile-time JSP-Like template transpiler for Java"},
    TreeLibre: {about: "A fractal tree generator in Java"},
    PicassoCode: {about: "A code driven image editor", org: "SolarisStudio"},
    PiccodeScript: {about: "A small functional interpreter built for PicassoCode", org: "SolarisStudio"},
    Llaml: {about: "A fork of Roy with structural typing and native compilation"},
  };

  const projectsInfo = {
    Equcyph: {
      about: "A mathematics equation parser and plotter",
      why: "I wanted to create an app to help my younger sister learn grade 7 maths visually",
      explain:
`Equcyph is a algebraic function plotter built 100% in java with zero dependencies.
The apps allows you to type a graphical function in text and simply plot it`,
      impact: [
        "I implemented an infinite scrolling cartesian plane with minimal performance overhead",
        "Designed the entire UI for the application",
        "I implemented a parser to convert textual math equations to graphicas"
      ]
    },
    JTempl: {
      about: "A compile-time JSP-Like template transpiler for Java",
      why: "I wanted to de-mystify the process of templatin-and make it a compile time process instead of runtime",
      explain:
`JTempl is a Cli app that loads a html-based template file, tokenize it and parse it and
then write the content out as a java class that perfoms the templating specified. You can then
call the generated template function in your code directly`,
      impact: [
        "Implemented a full lexer and paser with group based tokenization",
        "Implemented a code generator that dumps java source code from the token groups",
        "Designed a \"target class customization\" system to allow passing args to the generated code",
        "Extended the customizer to allow code packages"
      ]
    },
    TreeLibre: {
      about: "A fractal tree generator in Java",
      why: "I was learning about fractals and I saw a static tree example and I wanted to make it dynamic and live",
      explain:
`TreeLibre is a procedural tree generator/simulation. It can simulate tree grownth, taper effects,
leaf density and more. The app is built in java and has minimal dependencies`,
      impact: [
        "I programmed a fractal tree",
        "Implemented a way to perform tree mutation using sliders",
        "Designed the ability to add leaves and flowers",
        "Designed the ability to generate not only trees, but also flowers and grass"
      ]
    },
    PicassoCode: {
      about: "A code driven image editor", 
      why: "I got inspired by OpenSCad and I wanted to build a code based image editor with a functional language",
      explain:
`PicassoCode is an image editor that is not mouse driven, you write code to edit your image. Since everything is code based 
you have an infinite in-code undo \"stack\" since you can change the code and re-render. Effects and filters are just functions`,
      impact: [
        "Led the development of the project as the team leader",
        "Implemented a double-buffered render to speed up the App.",
        "Intergrated an small functional DSL built for this project",
        "Implemented LLM chat function similar to cursor using LangChain4J",
      ]
    },
    PiccodeScript: {
      about: "A small functional interpreter built for PicassoCode",
      org: "SolarisStudio",
      why: "We needed a lngauge to use when making the image, so why not make one we thought",
      explain:
`PiccodeScript is a small embeddable, functional scripting language created for  PicassoCode. Overtime the lnguage 
became a stand-alone project and grew beyond PicassoCode.`,
      impact: [
        "Intergrated antlr4 as the language front end",
        "Implemented all runtime execution nodes and the stack",
        "Added a small standard library",
        "Developed an embedding API for using the language as a library",
      ],
      js: "./js/picslang.js",
      example: `
<pre><code class="pics">

import std.io

fact :: (0) = 1
fact :: (1) = 1
fact :: (n) = n * fact(n - 1)

main :: () =
  let 
    result = fact(5)
  in IO::println(result)

</code></pre>
`
    },
    Llaml: {
      about: "A fork of Roy with structural typing and native compilation",
      why: `After working on PiccodeScript I wanted to learn abouut how static typing is implemented. 
I found an abondened project with a broken typechecker, forked it and I started poking around`,
      explain:
`Llaml is a general purpose, static typed, lazy functional programming language in the family of ML languages.
It borrows features from F#, Sml, Ocaml and Haskell. It lowers to javascript and uses QuickJs as the runtime. 
Llaml can create native executables from javascript and it has type inference`,
      impact: [
        "Fixed the typechecker and then implemented a strict error checker and reporter",
        "Implememted an annotation based FFI (Foreign Function Interface) system",
        "Implemented traditional, functional features such as closures, pattern matching, let bindings, clause functions and more",
        "Intergrated QuickJS and added a small standard  library",
      ],
      js: "./js/llaml.js",
      example: `
<pre><code class="llml">

open Std.Printf
open Std.Pipe ((|>))
open Std.Args (getArgs)
open Std.List
open Std.String


let main () =
  let
    args = getArgs ()
  in 
    args
    |> List.map (\\x -> String.size x)
    |> Printf.println
</code></pre>
`
    },
  };

  const projectsDiv = document.getElementById("projectList");

  let projectHtml = "";
  for (const projectName of Object.keys(projects)) {
    const project = projects[projectName];
    const org = project.org ?? "Hexaredecimal";


    projectHtml = projectHtml.concat(`
<p>
<a href="" data-name="${projectName}" class="proj-link">${projectName}</a> - ${project.about}
</p>
`);
  }
  projectsDiv.innerHTML = projectHtml;
  document
  .querySelectorAll(".proj-link")
  .forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const name = e.currentTarget.dataset.name;
        const info = projectsInfo[name];
        const page = 
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${name} | Project</title>
<link href="css/style.css" rel="stylesheet">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"></script>
<script type="module" src="./js/load.js" ></script>

<script>
hljs.highlightAll();
</script>
</head>
<body>
<h2>${name}</h2>
<hr width="45%" />
<p class="text-content-bottom">${info.about}</p>
<h3>Why?</h3>
<p class="text-content-bottom">${info.why}</p>
<h3>Explain More?</h3>
<p class="text-content-bottom">${info.explain}</p>
<h3>Impact</h3>
<ul>
${info.impact.map(e => `<li>${e}</li>`).join('\n')}
</ul>
<br/>
<h3>${info.example ? `Example` : ``}</h3>
${info.example ?? ``}
<br/>
<br/>
<a href="/">[Go Back]</a>
</body>
</html>
`;
      document.open();
      document.write(page);
      document.close();
      })
    })
}


