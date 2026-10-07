import React from "react";

function displayText(text) {
  const wrapped = text.match(/^\*\*([\s\S]+)\*\*$/);
  if (wrapped && !wrapped[1].includes("**")) return wrapped[1];
  return text;
}

function RichText({ text }) {
  const nodes = [];
  const pattern = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(<strong key={key}>{match[1]}</strong>);
    key += 1;
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}

function BlogContent({ blocks }) {
  return (
    <div className="blog-article">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} className="blog-article__h2">
              {block.text}
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3 key={index} className="blog-article__h3">
              {block.text}
            </h3>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={index} className="blog-article__list">
              {block.items.map((item, itemIndex) => (
                <li key={`${item}-${itemIndex}`}>
                  <RichText text={displayText(item)} />
                </li>
              ))}
            </ul>
          );
        }

        const isSteps = block.text.includes("→");
        const isCta = /^\*\*(Planning to|Ready to|Sending Diwali|Plan your)/.test(
          block.text
        );

        return (
          <p
            key={index}
            className={
              isCta
                ? "blog-article__cta"
                : isSteps
                  ? "blog-article__steps"
                  : "blog-article__p"
            }
          >
            <RichText text={displayText(block.text)} />
          </p>
        );
      })}
    </div>
  );
}

export default BlogContent;
