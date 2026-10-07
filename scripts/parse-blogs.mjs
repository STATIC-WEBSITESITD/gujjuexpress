import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const mdPath = path.join(root, "public", "#gujju blogs topic.md");

const ARTICLES = [
  { title: "Diwali Gift Shipping from Surat: Complete Guide to Sending Gifts Abroad", tags: ["Diwali", "Surat", "Gifts"], cover: "Diwali Gift Shipping", subtitle: "Surat to abroad" },
  { title: "How to Send Diwali Gifts from Surat to USA, UK, Canada & UAE", tags: ["Diwali", "USA", "UK"], cover: "USA, UK, Canada & UAE", subtitle: "Send gifts from Surat" },
  { title: "Diwali Parcel from Surat: What Can You Send Abroad?", tags: ["Diwali", "Parcel", "Surat"], cover: "What You Can Send", subtitle: "Diwali parcel from Surat" },
  { title: "How Early Should You Send Diwali Gifts Abroad from Surat?", tags: ["Diwali", "Planning", "Surat"], cover: "Ship Early", subtitle: "Diwali gifts from Surat" },
  { title: "Diwali Shipping Guide: Packing, Documents & Customs for International Parcels", tags: ["Diwali", "Customs", "Packing"], cover: "Packing & Customs", subtitle: "International parcels" },
  { title: "Can You Send Sweets from Surat Abroad for Diwali?", tags: ["Diwali", "Sweets", "Surat"], cover: "Sweets Abroad", subtitle: "From Surat for Diwali" },
  { title: "Can You Send Clothes & Traditional Gifts Abroad for Diwali?", tags: ["Diwali", "Clothes", "Gifts"], cover: "Clothes & Gifts", subtitle: "Traditional gifts abroad" },
  { title: "Diwali Gift Ideas You Can Ship from Surat to Family Abroad", tags: ["Diwali", "Gift Ideas", "Family"], cover: "Gift Ideas", subtitle: "Surat to family abroad" },
  { title: "How to Pack Diwali Gifts for International Courier from Surat", tags: ["Diwali", "Packing", "Courier"], cover: "How to Pack", subtitle: "International courier" },
  { title: "Diwali Courier from Surat: Door-to-Door International Shipping Guide", tags: ["Diwali", "Door-to-Door", "Surat"], cover: "Door-to-Door Courier", subtitle: "International shipping" },
  { title: "How to Send a Diwali Parcel from Surat to USA", tags: ["Diwali", "USA", "Surat"], cover: "Surat → USA", subtitle: "Diwali parcel guide" },
  { title: "How to Send Diwali Gifts from Surat to UK", tags: ["Diwali", "UK", "Surat"], cover: "Surat → UK", subtitle: "Diwali gifts guide" },
  { title: "How to Send Diwali Gifts from Surat to Dubai", tags: ["Diwali", "Dubai", "Surat"], cover: "Surat → Dubai", subtitle: "Diwali gifts guide" },
  { title: "How to Send Diwali Parcels from Surat to Canada", tags: ["Diwali", "Canada", "Surat"], cover: "Surat → Canada", subtitle: "Diwali parcel guide" },
  { title: "How to Send Diwali Gifts from Surat to Australia", tags: ["Diwali", "Australia", "Surat"], cover: "Surat → Australia", subtitle: "Diwali gifts guide" },
  { title: "How to Send Diwali Parcels from Surat to Germany", tags: ["Diwali", "Germany", "Surat"], cover: "Surat → Germany", subtitle: "Diwali parcel guide" },
  { title: "How to Send Diwali Gifts from Surat to Singapore", tags: ["Diwali", "Singapore", "Surat"], cover: "Surat → Singapore", subtitle: "Diwali gifts guide" },
  { title: "How to Send Diwali Gifts from Surat to UAE", tags: ["Diwali", "UAE", "Surat"], cover: "Surat → UAE", subtitle: "Diwali gifts guide" },
  { title: "Surat International Courier to USA: What You Need to Know Before Shipping", tags: ["USA", "Courier", "Surat"], cover: "Courier to USA", subtitle: "Before you ship" },
  { title: "Surat International Courier to UK: Documents, Packing & Delivery Guide", tags: ["UK", "Documents", "Surat"], cover: "Courier to UK", subtitle: "Documents & delivery" },
  { title: "How to Send Diwali Gifts Abroad from Adajan, Surat: Complete Courier Guide", tags: ["Diwali", "Adajan", "Surat"], cover: "From Adajan", subtitle: "Diwali courier guide" },
  { title: "Sending Diwali Parcels Abroad from Vesu, Surat: What You Need to Know", tags: ["Diwali", "Vesu", "Surat"], cover: "From Vesu", subtitle: "Parcels abroad" },
  { title: "How to Send Diwali Gifts from Varachha, Surat to Family Abroad", tags: ["Diwali", "Varachha", "Surat"], cover: "From Varachha", subtitle: "Gifts to family abroad" },
  { title: "Diwali Parcel Shipping from Katargam, Surat: Door-to-Door Guide", tags: ["Diwali", "Katargam", "Surat"], cover: "From Katargam", subtitle: "Door-to-door guide" },
  { title: "Send Diwali Gifts Abroad from Udhna, Surat: International Courier Guide", tags: ["Diwali", "Udhna", "Surat"], cover: "From Udhna", subtitle: "International courier" },
  { title: "How to Send Diwali Gifts Abroad from Piplod, Surat", tags: ["Diwali", "Piplod", "Surat"], cover: "From Piplod", subtitle: "Gifts abroad" },
  { title: "Diwali Gift Shipping from Pal, Surat: Send Parcels to Loved Ones Abroad", tags: ["Diwali", "Pal", "Surat"], cover: "From Pal", subtitle: "Parcels to loved ones" },
  { title: "How to Send Diwali Parcels Abroad from Rander, Surat", tags: ["Diwali", "Rander", "Surat"], cover: "From Rander", subtitle: "Parcels abroad" },
  { title: "Diwali International Courier from City Light, Surat: Send Gifts Abroad", tags: ["Diwali", "City Light", "Surat"], cover: "From City Light", subtitle: "Send gifts abroad" },
  { title: "Sending Diwali Gifts Abroad from Athwa, Surat: Personal & Family Shipping Guide", tags: ["Diwali", "Athwa", "Surat"], cover: "From Athwa", subtitle: "Personal & family shipping" },
  { title: "How to Send Diwali Gifts Abroad from Althan, Surat", tags: ["Diwali", "Althan", "Surat"], cover: "From Althan", subtitle: "Gifts abroad" },
  { title: "Sending Diwali Parcels Abroad from Bhatar, Surat: Complete Guide", tags: ["Diwali", "Bhatar", "Surat"], cover: "From Bhatar", subtitle: "Complete parcel guide" },
  { title: "How to Send Diwali Gifts from Pandesara, Surat to Family Abroad", tags: ["Diwali", "Pandesara", "Surat"], cover: "From Pandesara", subtitle: "Gifts to family abroad" },
  { title: "Diwali Gift Shipping from Sachin, Surat: What You Need to Know", tags: ["Diwali", "Sachin", "Surat"], cover: "From Sachin", subtitle: "What you need to know" },
  { title: "How to Send Diwali Parcels Abroad from Dumas Road, Surat", tags: ["Diwali", "Dumas Road", "Surat"], cover: "From Dumas Road", subtitle: "Parcels abroad" },
  { title: "Diwali International Courier from Magdalla, Surat: Send Gifts Abroad", tags: ["Diwali", "Magdalla", "Surat"], cover: "From Magdalla", subtitle: "Send gifts abroad" },
  { title: "How to Send Diwali Gifts Abroad from Jahangirpura, Surat", tags: ["Diwali", "Jahangirpura", "Surat"], cover: "From Jahangirpura", subtitle: "Gifts abroad" },
  { title: "Sending Diwali Gifts from Mota Varachha, Surat to Loved Ones Abroad", tags: ["Diwali", "Mota Varachha", "Surat"], cover: "From Mota Varachha", subtitle: "Loved ones abroad" },
  { title: "Diwali Parcel Shipping from Sarthana, Surat: International Courier Guide", tags: ["Diwali", "Sarthana", "Surat"], cover: "From Sarthana", subtitle: "International courier" },
  { title: "How to Send Diwali Gifts Abroad from Parvat Patiya, Surat", tags: ["Diwali", "Parvat Patiya", "Surat"], cover: "From Parvat Patiya", subtitle: "Gifts abroad" },
  { title: "What Documents Are Required to Send Diwali Gifts Abroad from Surat?", tags: ["Diwali", "Documents", "Surat"], cover: "Documents Required", subtitle: "Diwali gifts from Surat" },
  { title: "How Much Does It Cost to Send a Diwali Parcel from Surat Abroad?", tags: ["Diwali", "Cost", "Surat"], cover: "Shipping Cost", subtitle: "Diwali parcel from Surat" },
  { title: "How Long Does It Take to Send Diwali Gifts from Surat Abroad?", tags: ["Diwali", "Delivery Time", "Surat"], cover: "Delivery Time", subtitle: "Gifts from Surat" },
  { title: "What Diwali Gifts Can You Send from Surat to Family Abroad?", tags: ["Diwali", "Gifts", "Family"], cover: "Gifts You Can Send", subtitle: "Surat to family abroad" },
  { title: "What Diwali Items Cannot Be Sent Abroad from Surat?", tags: ["Diwali", "Restrictions", "Surat"], cover: "Restricted Items", subtitle: "What not to send" },
  { title: "Air Freight vs International Courier for Diwali Gifts: Which Is Better?", tags: ["Diwali", "Air Freight", "Courier"], cover: "Air Freight vs Courier", subtitle: "Which is better" },
  { title: "How Does Door-to-Door Diwali Gift Delivery from Surat Work?", tags: ["Diwali", "Door-to-Door", "Delivery"], cover: "Door-to-Door Delivery", subtitle: "How it works" },
  { title: "How to Track Your Diwali Parcel from Surat After Shipping", tags: ["Diwali", "Tracking", "Surat"], cover: "Track Your Parcel", subtitle: "After shipping" },
  { title: "Personal Diwali Gift vs Commercial Diwali Shipment: What Is the Difference?", tags: ["Diwali", "Personal", "Commercial"], cover: "Personal vs Commercial", subtitle: "What is the difference" },
  { title: "Complete Guide to Sending Diwali Parcels from Surat to Loved Ones Abroad", tags: ["Diwali", "Guide", "Surat"], cover: "Complete Sending Guide", subtitle: "Loved ones abroad" },
];

const PALETTES = [
  ["#4B369D", "#F58220"],
  ["#3a2a7a", "#6d5bd0"],
  ["#2f245f", "#c46b2a"],
  ["#4B369D", "#7c6ad4"],
  ["#3d2414", "#F58220"],
  ["#2a1848", "#4B369D"],
  ["#3a2a7a", "#e08a3c"],
  ["#241848", "#F58220"],
  ["#4B369D", "#2a1848"],
  ["#5a3d1a", "#F58220"],
  ["#32245f", "#d96f10"],
  ["#1e1638", "#6d5bd0"],
  ["#4B369D", "#c46b2a"],
  ["#3d2a14", "#4B369D"],
  ["#2a1f4a", "#F58220"],
  ["#4a2f78", "#e8a05a"],
  ["#2c2154", "#F58220"],
  ["#3a2a7a", "#f0b27a"],
  ["#4B369D", "#8d7ae0"],
  ["#5c3a16", "#4B369D"],
];

function unescapeMd(s) {
  return s.replace(/\\([.\\])/g, "$1").trim();
}

function stripHeadingMarks(s) {
  return unescapeMd(s.replace(/^\*+|\*+$/g, "").replace(/\*\*/g, "").trim());
}

function cleanInline(s) {
  return unescapeMd(
    s
      .replace(/\[([^\]]+)\]\([^)]+\)/g, (_, label) => {
        const plain = label.replace(/\*\*/g, "").trim();
        if (/^gujju express$/i.test(plain)) return "";
        return label;
      })
      .replace(/\s{2,}/g, " ")
      .replace(/\s+([.,;:])/g, "$1")
  );
}

function endsSentence(text) {
  const trimmed = text.replace(/[”"'’)\]\s]+$/g, "");
  return /[.!?]$/.test(trimmed);
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}/${date.getFullYear()}`;
}

function parseTable(lines, start) {
  const rows = [];
  let i = start;
  while (i < lines.length && lines[i].trim().startsWith("|")) {
    const cells = lines[i]
      .split("|")
      .map((cell) => cleanInline(cell.replace(/\*\*/g, "").trim()))
      .filter(Boolean);
    const isRule = cells.every((cell) => /^:?-{3,}:?$/.test(cell));
    if (!isRule && cells.length) rows.push(cells);
    i += 1;
  }

  if (rows.length < 2) {
    return { blocks: [], next: i };
  }

  const headers = rows[0];
  const items = rows.slice(1).map((row) => {
    const label = row[0];
    const rest = row.slice(1).map((value, index) => {
      const head = headers[index + 1] || `Option ${index + 1}`;
      return `${head} — ${value}`;
    });
    return `**${label}:** ${rest.join(". ")}`;
  });

  return { blocks: [{ type: "ul", items }], next: i };
}

function parseBlocks(raw) {
  const lines = raw.split(/\r?\n/).map((line) => line.replace(/\s+$/, ""));
  const blocks = [];
  let i = 0;
  const boldOnlyStack = [];

  const flushBoldStack = () => {
    if (!boldOnlyStack.length) return;
    blocks.push({ type: "ul", items: boldOnlyStack.splice(0, boldOnlyStack.length) });
  };

  while (i < lines.length) {
    const line = lines[i];

    if (!line || line === "---") {
      flushBoldStack();
      i += 1;
      continue;
    }

    if (line.trim().startsWith("|")) {
      flushBoldStack();
      const table = parseTable(lines, i);
      blocks.push(...table.blocks);
      i = table.next;
      continue;
    }

    const h1 = line.match(/^#\s+\*\*(.+)\*\*\s*$/) || line.match(/^#\s+(.+)$/);
    if (h1 && !line.startsWith("##")) {
      flushBoldStack();
      blocks.push({ type: "h2", text: stripHeadingMarks(h1[1]) });
      i += 1;
      continue;
    }

    const h2 = line.match(/^##\s+\*\*(.+)\*\*\s*$/) || line.match(/^##\s+(.+)$/);
    if (h2) {
      flushBoldStack();
      blocks.push({ type: "h2", text: stripHeadingMarks(h2[1]) });
      i += 1;
      continue;
    }

    const h3 = line.match(/^###\s+\*\*(.+)\*\*\s*$/) || line.match(/^###\s+(.+)$/);
    if (h3) {
      flushBoldStack();
      blocks.push({ type: "h3", text: stripHeadingMarks(h3[1]) });
      i += 1;
      continue;
    }

    if (/^\*\s+/.test(line)) {
      flushBoldStack();
      const items = [];
      while (i < lines.length && /^\*\s+/.test(lines[i])) {
        items.push(cleanInline(lines[i].replace(/^\*\s+/, "")));
        i += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    const cleaned = cleanInline(line);
    const boldOnly = cleaned.match(/^\*\*(.+)\*\*$/);
    if (boldOnly && /^\d+\./.test(boldOnly[1])) {
      flushBoldStack();
      blocks.push({ type: "h3", text: stripHeadingMarks(boldOnly[1]) });
      i += 1;
      continue;
    }

    const quoted = boldOnly && /^[“"'].*[”"']$/.test(boldOnly[1].trim());
    const leadIn = boldOnly && /:\s*$/.test(boldOnly[1]);
    if (
      boldOnly &&
      !quoted &&
      !leadIn &&
      !cleaned.includes("→") &&
      boldOnly[1].length < 90 &&
      !endsSentence(boldOnly[1]) &&
      !boldOnly[1].includes("Gujju Express")
    ) {
      boldOnlyStack.push(`**${boldOnly[1]}**`);
      i += 1;
      continue;
    }

    flushBoldStack();
    if (cleaned) blocks.push({ type: "p", text: cleaned });
    i += 1;
  }

  flushBoldStack();
  return blocks.filter((block) => {
    if (block.type === "ul") return block.items.length > 0;
    return Boolean(block.text);
  });
}

function excerptFromBlocks(blocks) {
  const first = blocks.find((block) => block.type === "p");
  if (!first) return "";
  const plain = first.text.replace(/\*\*/g, "");
  return plain.length > 180 ? `${plain.slice(0, 177).trim()}...` : plain;
}

function wordCount(blocks) {
  return blocks
    .map((block) => (block.type === "ul" ? block.items.join(" ") : block.text))
    .join(" ")
    .replace(/\*\*/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
}

function makeSvg(index, cover, subtitle) {
  const [from, to] = PALETTES[index % PALETTES.length];
  const id = `g${index}`;
  const escapeXml = (s) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const titleSize = cover.length > 22 ? 40 : 48;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-label="${escapeXml(cover)}">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#${id})"/>
  <circle cx="1020" cy="-40" r="280" fill="rgba(255,255,255,0.08)"/>
  <circle cx="80" cy="620" r="180" fill="rgba(255,255,255,0.06)"/>
  <rect x="64" y="64" width="88" height="72" rx="10" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="4"/>
  <path d="M64 88h88M108 64v72" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="4"/>
  <text x="64" y="430" fill="rgba(255,255,255,0.7)" font-family="Georgia, serif" font-size="22" letter-spacing="3">GUJJU EXPRESS</text>
  <text x="64" y="500" fill="#ffffff" font-family="Georgia, serif" font-size="${titleSize}" font-weight="700">${escapeXml(cover)}</text>
  <text x="64" y="548" fill="rgba(255,255,255,0.85)" font-family="Arial, sans-serif" font-size="24">${escapeXml(subtitle)}</text>
</svg>
`;
}

const md = fs.readFileSync(mdPath, "utf8");
const titleRe = /^# \*\*(.+)\*\*\s*$/gm;
const found = [];
let match;
while ((match = titleRe.exec(md)) !== null) {
  const title = stripHeadingMarks(match[1]);
  const article = ARTICLES.find((item) => item.title === title);
  if (!article) continue;
  found.push({
    title,
    article,
    index: match.index,
    end: match.index + match[0].length,
  });
}

if (found.length !== ARTICLES.length) {
  const missing = ARTICLES.filter((item) => !found.some((hit) => hit.title === item.title)).map((item) => item.title);
  throw new Error(`Expected ${ARTICLES.length} articles, found ${found.length}. Missing:\n${missing.join("\n")}`);
}

const blogs = ARTICLES.map((article, i) => {
  const current = found.find((hit) => hit.title === article.title);
  const next = found
    .filter((hit) => hit.index > current.index)
    .sort((a, b) => a.index - b.index)[0];
  const raw = md.slice(current.end, next ? next.index : md.length);
  const blocks = parseBlocks(raw);
  const words = wordCount(blocks);
  const minutes = Math.max(4, Math.round(words / 200));
  const published = new Date(2026, 9, 7);
  published.setDate(published.getDate() - i);
  const slug = slugify(article.title);
  return {
    id: i + 1,
    slug,
    author: "Gujju Express Team",
    date: formatDate(published),
    readTime: `${minutes} min read`,
    title: article.title,
    excerpt: excerptFromBlocks(blocks),
    tags: article.tags,
    img: `/assets/images/blogs/${slug}.svg`,
    cover: article.cover,
    content: blocks,
  };
});

const imgDir = path.join(root, "public", "assets", "images", "blogs");
fs.mkdirSync(imgDir, { recursive: true });
blogs.forEach((blog, i) => {
  fs.writeFileSync(
    path.join(imgDir, `${blog.slug}.svg`),
    makeSvg(i, ARTICLES[i].cover, ARTICLES[i].subtitle)
  );
});

const dataDir = path.join(root, "src", "data");
fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(path.join(dataDir, "blogs.json"), JSON.stringify(blogs, null, 2) + "\n");

console.log(`Wrote ${blogs.length} blogs`);
blogs.forEach((blog) => {
  const types = blog.content.reduce((acc, block) => {
    acc[block.type] = (acc[block.type] || 0) + 1;
    return acc;
  }, {});
  console.log(`- ${blog.id}. ${blog.slug} (${blog.readTime}, ${blog.content.length} blocks) ${JSON.stringify(types)}`);
});
