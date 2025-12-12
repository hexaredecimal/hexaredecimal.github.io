

hljs.registerLanguage("pics", function (hljs) {
  const KEYWORDS = {
    keyword: (
      "module when is if else import do catch return let in use"
    )
  };

  return {
    name: "PiccodeScript",
    keywords: KEYWORDS,

    contains: [
      // comments
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,

      // strings
      {
        className: "string",
        variants: [
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE
        ]
      },

      // numbers
      hljs.NUMBER_MODE,

      // lambdas like `\x -> expr`
      {
        className: "function",
        begin: /\\[a-zA-Z_][a-zA-Z0-9_]*\s*->/
      },

      // module paths: Std.Pipe.map, Foo.Bar.baz
      {
        className: "built_in",
        begin: /\b[A-Z][A-Za-z0-9_]*(\.[A-Za-z0-9_]+)+/
      },

      // function declarations: let name ...
      {
        className: "title",
        begin: /\blet\s+([a-zA-Z_][a-zA-Z0-9_]*)/,
        returnBegin: true,
        contains: [
          { begin: /\blet/, className: "keyword" },
          { begin: /[a-zA-Z_][a-zA-Z0-9_]*/, className: "title" }
        ]
      },

      // operators (pipelike, function composition, etc.)
      {
        className: "operator",
        begin: /(\|\>|<\||->|=>|==|!=|<=|>=|\+|-|\*|\/)/
      }
    ]
  };
});
