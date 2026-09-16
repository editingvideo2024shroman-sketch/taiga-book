import { book } from "@/lib/book";

const ENTITIES: Record<string, string> = {
  "&": "\u0026amp;",
  "<": "\u0026lt;",
  ">": "\u0026gt;",
  '"': "\u0026quot;",
};

function esc(s: string) {
  return s.replace(/[&<>"]/g, (ch) => ENTITIES[ch] ?? ch);
}

function p(text: string) {
  return text
    .split(/\n\n+/)
    .map((block) => `<p>${esc(block).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

export function downloadBookFile() {
  const chapters = book.sections
    .map((sec) => {
      const recipes = book.recipes
        .filter((r) => r.section === sec.id)
        .map(
          (r) => {
            const practice = r.kind === "practice";
            return `
<article>
  <h3>${r.id}. ${esc(r.title)}</h3>
  <h4>Почему советую</h4>${p(r.benefit)}
  <h4>${practice ? "Что нужно" : "Ингредиенты"}</h4>${p(r.ingredients)}
  <h4>${practice ? "Как делать" : "Как приготовить"}</h4>${p(r.cook)}
  <h4>${practice ? "Когда и сколько" : "Как принимать"}</h4>${p(r.take)}
  <h4>Противопоказания</h4>${p(r.contra)}
</article>`;
          },
        )
        .join("");
      return `<section>
  <h2>Раздел ${esc(sec.roman)}. ${esc(sec.title)}</h2>
  ${p(sec.intro)}
  ${recipes}
</section>`;
    })
    .join("");

  const notes = book.notes
    .map(
      (n) => `<article>
  <h3>Запись ${n.id}. ${esc(n.title)}</h3>
  ${p(n.body)}
</article>`,
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(book.title)} — ${esc(book.author)}</title>
<style>
  body{margin:0;background:#efe8dc;color:#1a1410;font:18px/1.55 Georgia,serif}
  main{max-width:40rem;margin:0 auto;padding:2.5rem 1.25rem 4rem}
  h1{font-size:2.4rem;line-height:1.05;font-weight:600;margin:0 0 .4rem}
  .sub{color:#6e645a;margin:0 0 2rem}
  h2{font-size:1.6rem;margin:2.5rem 0 .75rem;padding-top:1rem;border-top:1px solid #d4cbbd}
  h3{font-size:1.25rem;margin:1.75rem 0 .5rem}
  h4{font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:#6e645a;margin:1rem 0 .25rem;font-family:sans-serif}
  p{margin:.4rem 0 0}
  article{margin:1.5rem 0 2rem}
</style>
</head>
<body>
<main>
  <h1>${esc(book.title)}</h1>
  <p class="sub">${esc(book.author)} · 150 таёжных рецептов</p>
  <h2>Отказ от ответственности</h2>
  ${p(book.disclaimer)}
  ${chapters}
  <section>
    <h2>Разговор на важные темы</h2>
    ${p(book.notesIntro)}
    ${notes}
  </section>
</main>
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "kogda-daleko.html";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
