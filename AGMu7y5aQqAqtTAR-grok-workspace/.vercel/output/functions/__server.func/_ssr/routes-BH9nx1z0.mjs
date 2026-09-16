import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as ArrowRight, s as Check } from "../_libs/lucide-react.mjs";
import { a as book, c as photo, d as rub, i as SAMPLE_IDS, l as recipeById, n as BuyDialog, o as cn, p as usePurchase, r as RecipeBlock, t as Button } from "./recipe-block-BY6fUehP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BH9nx1z0.js
var import_jsx_runtime = require_jsx_runtime();
function BookCover({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: cn("book-3d mx-auto w-full max-w-[340px]", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "book-3d-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "book-3d-spine",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "book-3d-pages",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "book-3d-cover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/photos/cover.jpg?v=5",
						alt: "Обложка книги Тимофея Багрова",
						className: "h-full w-full object-cover object-[50%_18%]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/90 via-ink/40 to-transparent px-6 pt-20 pb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[1.35rem] leading-[1.08] text-cream",
							children: "120 домашних рецептов, которые работают"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-[0.68rem] tracking-[0.18em] text-cream/70 uppercase",
							children: "Тимофей Багров"
						})]
					})]
				})
			]
		})
	});
}
function SiteHeader() {
	const owned = usePurchase((s) => s.owned);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "no-print sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "font-display text-[1.15rem] leading-none tracking-tight",
				children: "120 рецептов"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex items-center gap-2 sm:gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#toc",
					className: "hidden text-sm text-muted hover:text-ink sm:inline",
					children: "Оглавление"
				}), owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						search: { r: 1 },
						children: "Открыть книгу"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					children: ["Купить · ", rub(book.price)]
				}) })]
			})]
		})
	});
}
var FOR_WHOM = [
	{
		title: "Нет сил встать",
		body: "Усталость, пустая голова. Нужно что-то простое на сегодня."
	},
	{
		title: "Простыли",
		body: "Горло, насморк, ломота. Вечер, а до аптеки далеко."
	},
	{
		title: "Живот не в порядке",
		body: "Тяжесть после еды, вздутие, запор, изжога."
	},
	{
		title: "Давление и отёки",
		body: "Шум в голове, тяжесть, отекают ноги."
	},
	{
		title: "Ноют суставы",
		body: "Спина, колени, стопы. К ночи не согнуться."
	},
	{
		title: "Кожа, волосы, глаза",
		body: "Тускнеет лицо, секутся волосы, устают глаза."
	},
	{
		title: "Далеко от города",
		body: "Вахта, деревня, командировка. Аптека не рядом."
	},
	{
		title: "Хотите помочь своим",
		body: "Родители, жена, дети — тем, что есть на кухне."
	}
];
var CHAPTERS = [
	{
		roman: "I",
		title: "Нет сил. Голова не варит",
		blurb: "24 рецепта для сил, настроения и энергии.",
		count: "24 рецепта"
	},
	{
		roman: "II",
		title: "Если простыл",
		blurb: "20 рецептов, которыми родители поднимали нас на ноги.",
		count: "20 рецептов"
	},
	{
		roman: "III",
		title: "Проблемы с животом",
		blurb: "22 рецепта от вздутия, запоров и изжоги.",
		count: "22 рецепта"
	},
	{
		roman: "IV",
		title: "Давление, отёки, сосуды",
		blurb: "21 рецепт, когда шумит в голове и отекают ноги.",
		count: "21 рецепт"
	},
	{
		roman: "V",
		title: "Ноги и суставы",
		blurb: "17 ванночек и компрессов, когда ноет и не согнуться.",
		count: "17 рецептов"
	},
	{
		roman: "VI",
		title: "Кожа, волосы, глаза",
		blurb: "16 средств, когда тускнеет лицо, секутся волосы, устают глаза.",
		count: "16 рецептов"
	},
	{
		roman: "+",
		title: "Разговор на важные темы",
		blurb: "Развод, бутылка, злость, «уже поздно», нет друзей, нет сил.",
		count: "6 страниц"
	}
];
var NOTE_TEASERS = [
	"Что делать, если вы только что пережили развод.",
	"Что делать, если не можешь без алкоголя.",
	"Как не озлобиться, когда весь мир против тебя.",
	"Когда кажется, что уже поздно что-либо делать.",
	"Когда нету друзей.",
	"Проспал 10 часов, а встал всё равно без сил."
];
var INCLUDED = [
	"120 рецептов с фото продуктов",
	"Граммовки, шаги и противопоказания",
	"Разговор на важные темы в конце",
	"Читать с телефона и с компьютера",
	"Можно скачать и открывать без интернета"
];
var FAQ = [
	{
		q: "В каком виде я получу книгу?",
		a: "Сразу после оплаты откроется полная электронная книга: 120 рецептов с фото и разговор на важные темы. Читайте с телефона или с компьютера. Можно скачать и открывать в любой момент."
	},
	{
		q: "Это медицина?",
		a: "Нет. Мы не ставим диагнозов — даём то, что испробовали на себе. Если у вас что-то серьёзное, пожалуйста, обратитесь к врачу. Рецепты — домашние смеси и ванночки. Они не заменяют обследование."
	},
	{
		q: "Что в конце книги?",
		a: "Разговор на важные темы: после развода; когда тянет к бутылке; как не озлобиться; когда кажется, что поздно; когда нет друзей; когда нет сил."
	},
	{
		q: "Почему 890 ₽, а не бесплатно?",
		a: "Я делюсь тем, что проверял на себе годами. Покупка книги — поддержка для меня. Для вас — полезная информация под рукой."
	},
	{
		q: "Нужны ли редкие травы?",
		a: "Нет. Лук, мёд, свёкла, овсянка, кефир, ромашка из аптеки у дома. Если продукта нет — в рецепте обычно есть замена."
	}
];
function Home() {
	const owned = usePurchase((s) => s.owned);
	const sample = SAMPLE_IDS.map((id) => recipeById(id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate min-h-[88svh] overflow-hidden bg-forest text-cream",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo("hero"),
						alt: "Тимофей Багров играет с Майей",
						className: "absolute inset-0 h-full w-full object-cover object-[42%_42%]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-ink/85 via-ink/25 to-ink/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6 sm:pb-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-[0.72rem] tracking-[0.22em] text-cream/70 uppercase",
								children: "Тимофей Багров"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 max-w-2xl font-display text-[2.6rem] leading-[0.95] sm:text-6xl",
								children: "120 домашних рецептов, которые работают"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl font-serif text-lg leading-relaxed text-cream/90 sm:text-xl",
								children: "Я собрал 120 рецептов из того, что всегда есть дома или можно легко найти в ближайшем магазине или у соседа."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3",
								children: [owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "xl",
									variant: "cream",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/book",
										search: { r: 1 },
										children: "Открыть книгу"
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "xl",
									variant: "cream",
									children: ["Купить книгу · ", rub(book.price)]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "xl",
									variant: "outline",
									className: "border-cream/25 text-cream hover:bg-cream/10",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#sample",
										children: "Посмотреть страницу"
									})
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookCover, { className: "mx-auto w-full max-w-[320px] lg:max-w-[380px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-[0.72rem] tracking-[0.18em] text-clay uppercase",
						children: "Зачем эта книга"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl leading-tight sm:text-5xl",
						children: "Первая помощь, когда до цивилизации далеко."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 font-serif text-lg leading-relaxed text-ink-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Рецепты эффективных смесей и целебных напитков из того, что прямо сейчас лежит на вашей кухне." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "В конце — честный разговор о самом главном." })]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-forest py-16 text-cream sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl leading-tight",
						children: "Для кого книга"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-px overflow-hidden rounded-xl bg-cream/10 sm:grid-cols-2 lg:grid-cols-4",
						children: FOR_WHOM.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "bg-forest-2 p-5 sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-serif text-sm leading-relaxed text-cream/75",
								children: s.body
							})]
						}, s.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "toc",
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl",
					children: "Оглавление"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 divide-y divide-line border-y border-line",
					children: CHAPTERS.map((sec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-2 py-5 sm:grid-cols-[4rem_1fr_auto] sm:items-baseline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl text-clay",
								children: sec.roman
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl",
								children: sec.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 max-w-2xl font-serif text-ink-soft",
								children: sec.blurb
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-sm text-muted",
								children: sec.count
							})
						]
					}, sec.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "sample",
				className: "bg-paper-2/50 py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl",
							children: "Образец страницы"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl font-serif text-lg text-ink-soft",
							children: "Сверху фото продуктов. Снизу — зачем, из чего, как сделать, как принимать, кому не стоит. Три страницы открыты без покупки."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 flex flex-col gap-10",
							children: sample.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipeBlock, {
								recipe: r,
								kicker: `Образец · раздел ${r.section.toUpperCase()}`
							}, r.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 text-center",
							children: owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/book",
									search: { r: 1 },
									children: ["Читать все 120", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								children: [
									"Открыть остальные ",
									book.recipes.length - sample.length,
									" рецептов",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
								]
							}) })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-paper-2/60 py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl leading-tight",
							children: "Разговор на важные темы"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-serif text-lg text-ink-soft",
							children: "Шесть страниц в конце книги. Открываются после покупки."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-10 divide-y divide-line border-y border-line",
							children: NOTE_TEASERS.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-sans text-[0.72rem] tracking-[0.18em] text-clay uppercase",
									children: ["Запись ", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-2xl leading-snug",
									children: line
								})]
							}, line))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/book",
									search: { n: 1 },
									children: "Открыть все шесть записей"
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								children: "Открыть все шесть записей"
							}) })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,24rem)] lg:items-start lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-[0.72rem] tracking-[0.18em] text-clay uppercase",
						children: "Автор"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl",
						children: "Тимофей Багров"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 max-w-2xl space-y-4 font-serif text-lg leading-relaxed text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Бывший фельдшер скорой." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Четыре года назад забрал из приюта Майю и уехал с ней в тайгу — в посёлок, где до ближайшей аптеки сотни километров." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Пришлось разбирать, как выживали бабушки и деды. Начал проверять на себе. На удивление — заработало." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Теперь делюсь тем, что сам испробовал." })
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photo("author"),
					alt: "Тимофей Багров и Майя",
					width: 1008,
					height: 1792,
					className: "h-auto w-full rounded-lg"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "buy",
				className: "bg-forest py-16 text-cream sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_22rem] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-[0.72rem] tracking-[0.18em] text-cream/55 uppercase",
							children: "Электронная книга"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl sm:text-5xl",
							children: book.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-serif text-lg text-cream/80",
							children: "120 рецептов из того, что есть дома. В конце — разговор на важные темы."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-3",
							children: INCLUDED.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 font-sans text-sm text-cream/85",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-cream" }), item]
							}, item))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-cream/15 bg-forest-2 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-5xl",
								children: rub(book.price)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-serif text-sm text-cream/65",
								children: "Книга откроется сразу. Можно читать и скачать."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "cream",
									size: "lg",
									className: "w-full",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/book",
										search: { r: 1 },
										children: "Открыть книгу"
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "cream",
									size: "lg",
									className: "w-full",
									children: "Получить книгу"
								}) })
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl",
					children: "Частые вопросы"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 divide-y divide-line border-y border-line",
					children: FAQ.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "cursor-pointer list-none font-sans text-base font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center justify-between gap-4",
								children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted group-open:rotate-45",
									children: "+"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-serif text-base leading-relaxed text-ink-soft",
							children: f.a
						})]
					}, f.q))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line px-4 py-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl",
						children: book.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif text-sm text-muted",
						children: "Не является медицинской рекомендацией. При острой боли, высокой температуре, одышке или если вы падаете — обратитесь к врачу."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-sans text-xs text-muted",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Тимофей Багров"
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };
