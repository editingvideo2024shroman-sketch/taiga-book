import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as ChevronRight, i as Download, o as ChevronLeft, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-lmd_hMpp.mjs";
import { a as book, c as photo, f as sectionOf, i as SAMPLE_IDS, l as recipeById, n as BuyDialog, o as cn, p as usePurchase, r as RecipeBlock, s as noteById, t as Button, u as recipesIn } from "./recipe-block-BY6fUehP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-B4-wGFj3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ENTITIES = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;"
};
function esc(s) {
	return s.replace(/[&<>"]/g, (ch) => ENTITIES[ch] ?? ch);
}
function p(text) {
	return text.split(/\n\n+/).map((block) => `<p>${esc(block).replace(/\n/g, "<br>")}</p>`).join("");
}
function downloadBookFile() {
	const chapters = book.sections.map((sec) => {
		const recipes = book.recipes.filter((r) => r.section === sec.id).map((r) => `
<article>
  <h3>${r.id}. ${esc(r.title)}</h3>
  <h4>Для чего</h4>${p(r.why)}
  <h4>Ингредиенты</h4>${p(r.ingredients)}
  <h4>Как приготовить</h4>${p(r.cook)}
  <h4>Как принимать</h4>${p(r.take)}
  <h4>Противопоказания</h4>${p(r.contra)}
</article>`).join("");
		return `<section>
  <h2>Раздел ${esc(sec.roman)}. ${esc(sec.title)}</h2>
  ${p(sec.intro)}
  ${recipes}
</section>`;
	}).join("");
	const notes = book.notes.map((n) => `<article>
  <h3>Запись ${n.id}. ${esc(n.title)}</h3>
  ${p(n.body)}
</article>`).join("");
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
  <p class="sub">${esc(book.author)} · 120 домашних рецептов</p>
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
	window.setTimeout(() => URL.revokeObjectURL(url), 1e3);
}
function BookPage() {
	const { r, n } = Route.useSearch();
	const owned = usePurchase((s) => s.owned);
	const [tocOpen, setTocOpen] = (0, import_react.useState)(false);
	const recipe = r ? recipeById(r) : void 0;
	const note = n ? noteById(n) : void 0;
	const isSample = recipe ? SAMPLE_IDS.includes(recipe.id) : false;
	const locked = !owned && (recipe && !isSample || !!note || !recipe && !note);
	const view = note ? "note" : recipe ? "recipe" : "home";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "no-print sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-line bg-paper/95 px-3 backdrop-blur sm:px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "rounded-md p-2 hover:bg-paper-2 lg:hidden",
					"aria-label": "Оглавление",
					onClick: () => setTocOpen(true),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-lg leading-none",
					children: "120 рецептов"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden font-sans text-sm text-muted sm:inline",
					children: "/ книга"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ml-auto flex items-center gap-2",
					children: owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						onClick: downloadBookFile,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Скачать"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "На сайт"
						})
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						children: "Купить"
					}) })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "no-print hidden w-72 shrink-0 border-r border-line lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-14 h-[calc(100svh-3.5rem)] overflow-y-auto p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toc, {
							currentR: r,
							currentN: n
						})
					})
				}),
				tocOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "no-print fixed inset-0 z-50 bg-paper lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-14 items-center justify-between border-b border-line px-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg",
							children: "Оглавление"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded-md p-2 hover:bg-paper-2",
							"aria-label": "Закрыть",
							onClick: () => setTocOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[calc(100svh-3.5rem)] overflow-y-auto p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toc, {
							currentR: r,
							currentN: n,
							onPick: () => setTocOpen(false)
						})
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-w-0 flex-1 px-4 py-8 sm:px-8 sm:py-12",
					children: [
						view === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookHome, { locked: !owned }) : null,
						view === "recipe" && recipe ? locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gate, { title: recipe.title }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipeView, {
							recipeId: recipe.id,
							owned
						}) : null,
						view === "note" && note ? locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gate, { title: note.title }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteView, { noteId: note.id }) : null
					]
				})
			]
		})]
	});
}
function BookHome({ locked }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photo("cover"),
				alt: "",
				className: "mb-8 aspect-2/3 w-full max-w-sm rounded-lg object-cover shadow-book"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-[0.72rem] tracking-[0.18em] text-clay uppercase",
				children: book.author
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: book.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-serif text-lg leading-relaxed text-ink-soft",
				children: "120 рецептов из того, что всегда есть дома. В конце — разговор на важные темы. Если слабость с высокой температурой, одышкой или вы падаете — сначала врач."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					children: "Открыть все 120 рецептов"
				}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						search: { r: 1 },
						children: "Начать с первого рецепта"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-sans text-sm text-muted",
				children: [
					"Без покупки открыты образцы: рецепты ",
					SAMPLE_IDS.join(", "),
					"."
				]
			})
		]
	});
}
function Gate({ title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-xs tracking-[0.16em] text-muted uppercase",
				children: "Закрыто"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-serif text-ink-soft",
				children: "Этот разворот открывается после покупки. Образцы — на главной."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					children: "Купить книгу"
				}) })
			})
		]
	});
}
function RecipeView({ recipeId, owned }) {
	const recipe = recipeById(recipeId);
	const sec = sectionOf(recipe.section);
	const prev = recipeById(recipeId - 1);
	const next = recipeById(recipeId + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-xs tracking-[0.16em] text-muted uppercase",
				children: [
					"Раздел ",
					sec.roman,
					". ",
					sec.title
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipeBlock, { recipe }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
				prev,
				next,
				owned,
				kind: "recipe"
			})
		]
	});
}
function NoteView({ noteId }) {
	const note = noteById(noteId);
	const prev = noteById(noteId - 1);
	const next = noteById(noteId + 1);
	const paragraphs = note.body.split(/\n\n+/);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photo("cabin"),
				alt: "",
				className: "mb-8 aspect-16/9 w-full rounded-lg object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-xs tracking-[0.16em] text-clay uppercase",
				children: [
					"Запись ",
					note.id,
					" из 6"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: note.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-5",
				children: paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-lg leading-[1.65] text-ink-soft",
					children: p
				}, p.slice(0, 24)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
				prev,
				next,
				owned: true,
				kind: "note"
			})
		]
	});
}
function Nav({ prev, next, owned, kind }) {
	const search = (id) => kind === "note" ? { n: id } : { r: id };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "no-print mt-10 flex items-stretch justify-between gap-3 border-t border-line pt-6",
		children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			className: "h-auto min-h-11 max-w-[48%] py-2",
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/book",
				search: search(prev.id),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: prev.title
				})]
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? owned || kind === "recipe" && SAMPLE_IDS.includes(next.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			className: "h-auto min-h-11 max-w-[48%] py-2",
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/book",
				search: search(next.id),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: next.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 shrink-0" })]
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			className: "h-auto min-h-11",
			children: "Дальше · купить"
		}) }) : kind === "recipe" ? owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/book",
				search: { n: 1 },
				children: ["К разговору", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
			})
		}) : null : null]
	});
}
function Toc({ currentR, currentN, onPick }) {
	const owned = usePurchase((s) => s.owned);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/book",
			className: "block py-1 font-display text-lg text-ink",
			onClick: onPick,
			children: "Титул"
		}),
		book.sections.map((sec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-[0.65rem] tracking-[0.16em] text-muted uppercase",
				children: [
					sec.roman,
					". ",
					sec.short
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-1",
				children: recipesIn(sec.id).map((r) => {
					const open = owned || SAMPLE_IDS.includes(r.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/book",
						search: { r: r.id },
						onClick: onPick,
						className: cn("block truncate py-1 font-sans text-[13px] leading-snug", currentR === r.id ? "text-clay" : "text-ink-soft hover:text-ink", !open && "text-muted"),
						children: [
							r.id,
							". ",
							r.title
						]
					}) }, r.id);
				})
			})]
		}, sec.id)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-[0.65rem] tracking-[0.16em] text-muted uppercase",
				children: "Разговор на важные темы"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-1",
				children: book.notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/book",
					search: { n: n.id },
					onClick: onPick,
					className: cn("block py-1 font-sans text-[13px]", currentN === n.id ? "text-clay" : "text-ink-soft hover:text-ink"),
					children: [
						n.id,
						". ",
						n.title
					]
				}) }, n.id))
			})]
		})
	] });
}
//#endregion
export { BookPage as component };
