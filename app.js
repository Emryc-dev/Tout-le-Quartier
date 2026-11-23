/* ==========================================================================
   TOUT LE QUARTIER — Standalone Flagship Storefront (Vanilla ES6+)
   3D Runway + Product Detail Page + Full Catalog + Local Shopping Bag
   Zero External Frameworks · Zero External Links
   ========================================================================== */

const BAG_STORAGE_KEY = "tlq-store-bag-v1";
const PACK_DISCOUNT_RATE = 0.1;

/* --------------------------------------------------------------------------
   Centralized Media Asset Configuration
   -------------------------------------------------------------------------- */

const ASSETS = {
  "cameroon-black": {
    productImage: "/assets/aistudio/cutouts/cameroon-black.png",
    modelImage: "/assets/aistudio/cutouts/cameroon-black.png",
    isCutout: false,
  },
  "gabon-white": {
    productImage: "/assets/aistudio/cutouts/gabon-white.png",
    modelImage: "/assets/aistudio/cutouts/gabon-white.png",
    isCutout: false,
  },
  "ivory-coast-black": {
    productImage: "/assets/aistudio/cutouts/ivory-coast-black.png",
    modelImage: "/assets/aistudio/cutouts/ivory-coast-black.png",
    isCutout: false,
  },
  "congo-blue": {
    productImage: "/assets/aistudio/cutouts/congo-blue.png",
    modelImage: "/assets/aistudio/cutouts/congo-blue.png",
    isCutout: false,
  },
  "senegal-white": {
    productImage: "/assets/aistudio/cutouts/senegal-white.png",
    modelImage: "/assets/aistudio/cutouts/senegal-white.png",
    isCutout: false,
  },
  "cameroon-green": {
    productImage: "/assets/aistudio/cutouts/cameroon-green.png",
    modelImage: "/assets/aistudio/cutouts/cameroon-green.png",
    isCutout: false,
  },
  "gabon-yellow": {
    productImage: "/assets/aistudio/cutouts/gabon-yellow.png",
    modelImage: "/assets/aistudio/cutouts/gabon-yellow.png",
    isCutout: false,
  },
  "congo-white": {
    productImage: "/assets/aistudio/cutouts/congo-white.png",
    modelImage: "/assets/aistudio/cutouts/congo-white.png",
    isCutout: false,
  },
  "cameroon-white": {
    productImage: "/assets/aistudio/cutouts/cameroon-white.png",
    modelImage: "/assets/aistudio/cutouts/cameroon-white.png",
    isCutout: false,
  },
  "senegal-black": {
    productImage: "/assets/aistudio/cutouts/senegal-black.png",
    modelImage: "/assets/aistudio/cutouts/senegal-black.png",
    isCutout: false,
  },
  "tlq-iphone-case": {
    productImage: "/assets/aistudio/IMG-0848-removebg-preview_6c94537f.png",
    modelImage: "/assets/aistudio/IMG-0848-removebg-preview_6c94537f.png",
    isCutout: true,
  },
  "vintage-green": {
    productImage: "/assets/aistudio/487CEFF0-C989-4F90-AE39-E85C2191075D-removebg-preview_ed0f7266.png",
    modelImage: "/assets/aistudio/487CEFF0-C989-4F90-AE39-E85C2191075D-removebg-preview_ed0f7266.png",
    isCutout: true,
  },
};

/* --------------------------------------------------------------------------
   Deterministic Country Jersey & Case Fallback SVG Renderer
   -------------------------------------------------------------------------- */

function encodeSvgUri(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
}

const JERSEY_PALETTES = {
  "cameroon-black": { body: "#151413", sleeve: "#151413", accent1: "#C42B23", accent2: "#E6C229", accent3: "#16803C", text: "#FFFFFF", label: "CAMEROON" },
  "gabon-white": { body: "#FFFFFF", sleeve: "#16803C", accent1: "#1D65C1", accent2: "#E6C229", accent3: "#16803C", text: "#1D65C1", label: "GABON" },
  "ivory-coast-black": { body: "#E87A24", sleeve: "#151413", accent1: "#16803C", accent2: "#FFFFFF", accent3: "#151413", text: "#FFFFFF", label: "IVORY COAST" },
  "congo-blue": { body: "#1268C4", sleeve: "#1268C4", accent1: "#C42B23", accent2: "#E6C229", accent3: "#1268C4", text: "#E6C229", label: "CONGO" },
  "senegal-white": { body: "#118A44", sleeve: "#118A44", accent1: "#FFFFFF", accent2: "#E6C229", accent3: "#C42B23", text: "#E6C229", label: "SENEGAL" },
  "cameroon-green": { body: "#6EA98D", sleeve: "#6EA98D", accent1: "#C42B23", accent2: "#E6C229", accent3: "#16803C", text: "#E6C229", label: "CAMEROON" },
  "gabon-yellow": { body: "#E6C229", sleeve: "#16803C", accent1: "#1D65C1", accent2: "#16803C", accent3: "#E6C229", text: "#1D65C1", label: "GABON" },
  "congo-white": { body: "#FFFFFF", sleeve: "#FFFFFF", accent1: "#C42B23", accent2: "#E6C229", accent3: "#1268C4", text: "#1268C4", label: "CONGO" },
  "cameroon-white": { body: "#FFFFFF", sleeve: "#FFFFFF", accent1: "#C42B23", accent2: "#E6C229", accent3: "#16803C", text: "#151413", label: "CAMEROON" },
  "senegal-black": { body: "#118A44", sleeve: "#118A44", accent1: "#151413", accent2: "#C42B23", accent3: "#E6C229", text: "#E6C229", label: "SENEGAL" },
  "vintage-green": { body: "#F2F1EE", sleeve: "#12854B", accent1: "#E87A24", accent2: "#151413", accent3: "#12854B", text: "#151413", label: "VINTAGE" },
};

function createProductFallbackSvg(productId, title) {
  if (productId === "tlq-iphone-case") {
    return encodeSvgUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750">
        <rect width="600" height="750" fill="#FFFFFF"/>
        <rect x="176" y="128" width="248" height="494" rx="44" fill="#F7F7F7" stroke="#D5D5D5" stroke-width="4"/>
        <rect x="200" y="152" width="96" height="96" rx="24" fill="#181818"/>
        <circle cx="228" cy="180" r="15" fill="#2A2A2A"/>
        <circle cx="228" cy="220" r="15" fill="#2A2A2A"/>
        <circle cx="268" cy="200" r="7" fill="#EAEAEA"/>
        <text x="300" y="378" fill="#151413" font-family="Helvetica, Arial, sans-serif" font-size="42" font-weight="700" text-anchor="middle">TLQ</text>
        <text x="300" y="424" fill="#151413" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="2" text-anchor="middle">TOUTLEQUARTIER</text>
        <text x="300" y="448" fill="#66625C" font-family="Helvetica, Arial, sans-serif" font-size="11" letter-spacing="4" text-anchor="middle">PARIS</text>
      </svg>
    `);
  }

  const p = JERSEY_PALETTES[productId] || {
    body: "#151413",
    sleeve: "#151413",
    accent1: "#66625C",
    accent2: "#E4E4E4",
    accent3: "#151413",
    text: "#FFFFFF",
    label: (title || "TLQ").toUpperCase(),
  };

  return encodeSvgUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750">
      <rect width="600" height="750" fill="#FFFFFF"/>
      <!-- Sleeves -->
      <path d="M180 154 L76 246 L112 372 L180 330 Z" fill="${p.sleeve}" stroke="#151413" stroke-opacity="0.12" stroke-width="2"/>
      <path d="M420 154 L524 246 L488 372 L420 330 Z" fill="${p.sleeve}" stroke="#151413" stroke-opacity="0.12" stroke-width="2"/>
      <!-- Torso -->
      <path d="M180 154 L420 154 L430 600 L170 600 Z" fill="${p.body}" stroke="#151413" stroke-opacity="0.12" stroke-width="2"/>
      <!-- Collar & Shoulder Stripes -->
      <path d="M236 146 L300 202 L364 146" fill="none" stroke="${p.accent1}" stroke-width="14"/>
      <path d="M180 170 L102 258 M420 170 L498 258" stroke="${p.accent2}" stroke-width="12"/>
      <!-- Hem Stripe -->
      <rect x="172" y="546" width="256" height="10" fill="${p.accent1}"/>
      <rect x="172" y="560" width="256" height="8" fill="${p.accent2}"/>
      <!-- Crest -->
      <path d="M352 224 h40 v34 c0 14 -20 22 -20 22 s-20 -8 -20 -22 z" fill="${p.accent3}" stroke="${p.accent2}" stroke-width="3"/>
      <text x="372" y="256" fill="#FFFFFF" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="700" text-anchor="middle">TLQ</text>
      <!-- Country Wordmark -->
      <text x="300" y="388" fill="${p.text}" font-family="Helvetica, Arial, sans-serif" font-size="38" font-weight="700" letter-spacing="3" text-anchor="middle">${p.label}</text>
    </svg>
  `);
}

/* --------------------------------------------------------------------------
   Official Tout le Quartier Catalog (12 Official Items — Jerseys + Case Only)
   -------------------------------------------------------------------------- */

const JERSEY_SIZES = ["S", "L", "M", "XL"];
const IPHONE_MODELS = [
  "iPhone 15 / 16",
  "iPhone 15 Pro / 16 Pro",
  "iPhone 15 Pro Max / 16 Pro Max",
];

function buildVariants(productId, labels, available = true) {
  return labels.map((label) => ({
    id: `${productId}__${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    label,
    available,
  }));
}

function formatEur(amount) {
  return `€${Number(amount).toFixed(2)}`;
}

const STANDARD_JERSEY_DETAILS = [
  "240 GSM breathable jacquard football mesh (100% recycled polyester)",
  "High-density embroidered national emblem & woven TLQ chest crest",
  "Relaxed oversized streetwear block with contrast ribbed polo collar",
  "Machine wash cold inside-out · Worldwide tracked dispatch from Paris",
];

const TLQ_PRODUCTS = [
  {
    id: "cameroon-black",
    name: "CAMEROON BLACK",
    category: "Jerseys",
    subtitle: "Cameroon Heritage Edition",
    price: 80.0,
    soldOut: false,
    badge: "New",
    productImage: ASSETS["cameroon-black"].productImage,
    modelImage: ASSETS["cameroon-black"].modelImage,
    isCutout: ASSETS["cameroon-black"].isCutout,
    description:
      "Heavyweight breathable jacquard football jersey inspired by Cameroonian football heritage. Features custom embroidered TLQ crest, contrast ribbed collar, and oversized streetwear drape.",
    details: STANDARD_JERSEY_DETAILS,
    optionName: "Size",
    variants: buildVariants("cameroon-black", JERSEY_SIZES, true),
  },
  {
    id: "gabon-white",
    name: "GABON WHITE",
    category: "Jerseys",
    subtitle: "Gabon Heritage Edition",
    price: 80.0,
    soldOut: false,
    badge: null,
    productImage: ASSETS["gabon-white"].productImage,
    modelImage: ASSETS["gabon-white"].modelImage,
    isCutout: ASSETS["gabon-white"].isCutout,
    description:
      "White technical mesh jersey accented with emerald green, cobalt blue, and yellow stripes, embroidered panther motif, and woven TLQ Gabon crest.",
    details: STANDARD_JERSEY_DETAILS,
    optionName: "Size",
    variants: buildVariants("gabon-white", JERSEY_SIZES, true),
  },
  {
    id: "ivory-coast-black",
    name: "IVORY COAST BLACK",
    category: "Jerseys",
    subtitle: "Ivory Coast Heritage Edition",
    price: 80.0,
    soldOut: false,
    badge: null,
    productImage: ASSETS["ivory-coast-black"].productImage,
    modelImage: ASSETS["ivory-coast-black"].modelImage,
    isCutout: ASSETS["ivory-coast-black"].isCutout,
    description:
      "Vibrant orange, green, and black paneled heritage jersey featuring white elephant embroidery, ribbed polo collar, and relaxed boxy silhouette.",
    details: STANDARD_JERSEY_DETAILS,
    optionName: "Size",
    variants: buildVariants("ivory-coast-black", JERSEY_SIZES, true),
  },
  {
    id: "congo-blue",
    name: "CONGO BLUE",
    category: "Jerseys",
    subtitle: "Congo Heritage Edition",
    price: 80.0,
    soldOut: false,
    badge: null,
    productImage: ASSETS["congo-blue"].productImage,
    modelImage: ASSETS["congo-blue"].modelImage,
    isCutout: ASSETS["congo-blue"].isCutout,
    description:
      "Royal blue textured mesh jersey with red and yellow shoulder piping, roaring leopard emblem, and bold front CONGO appliqué lettering.",
    details: STANDARD_JERSEY_DETAILS,
    optionName: "Size",
    variants: buildVariants("congo-blue", JERSEY_SIZES, true),
  },
  {
    id: "senegal-white",
    name: "SENEGAL WHITE",
    category: "Jerseys",
    subtitle: "Senegal Heritage Edition",
    price: 80.0,
    soldOut: false,
    badge: null,
    productImage: ASSETS["senegal-white"].productImage,
    modelImage: ASSETS["senegal-white"].modelImage,
    isCutout: ASSETS["senegal-white"].isCutout,
    description:
      "Emerald green and crisp white paneled jersey detailed with yellow trim, lion crest embroidery, and custom TLQ Senegal shield.",
    details: STANDARD_JERSEY_DETAILS,
    optionName: "Size",
    variants: buildVariants("senegal-white", JERSEY_SIZES, true),
  },
  {
    id: "cameroon-green",
    name: "CAMEROON GREEN",
    category: "Jerseys",
    subtitle: "Cameroon Heritage Edition",
    price: 80.0,
    soldOut: false,
    badge: null,
    productImage: ASSETS["cameroon-green"].productImage,
    modelImage: ASSETS["cameroon-green"].modelImage,
    isCutout: ASSETS["cameroon-green"].isCutout,
    description:
      "Sage-emerald heritage jersey finished with crimson polo collar, gold-and-red geometric trim, and stitched CAMEROON chest lettering.",
    details: STANDARD_JERSEY_DETAILS,
    optionName: "Size",
    variants: buildVariants("cameroon-green", JERSEY_SIZES, true),
  },
  {
    id: "gabon-yellow",
    name: "GABON",
    category: "Jerseys",
    subtitle: "Gabon Heritage Edition",
    price: 80.0,
    soldOut: false,
    badge: null,
    productImage: ASSETS["gabon-yellow"].productImage,
    modelImage: ASSETS["gabon-yellow"].modelImage,
    isCutout: ASSETS["gabon-yellow"].isCutout,
    description:
      "Sun-yellow, royal blue, and green colorway of the Gabon heritage jersey with embroidered panther chest badge and breathable mesh knit.",
    details: STANDARD_JERSEY_DETAILS,
    optionName: "Size",
    variants: buildVariants("gabon-yellow", JERSEY_SIZES, true),
  },
  {
    id: "congo-white",
    name: "CONGO WHITE",
    category: "Jerseys",
    subtitle: "Congo Heritage Edition",
    price: 80.0,
    soldOut: false,
    badge: null,
    productImage: ASSETS["congo-white"].productImage,
    modelImage: ASSETS["congo-white"].modelImage,
    isCutout: ASSETS["congo-white"].isCutout,
    description:
      "Crisp white edition of the Congo heritage jersey with red-and-gold collar trim, blue leopard emblem, and royal blue CONGO front appliqué.",
    details: STANDARD_JERSEY_DETAILS,
    optionName: "Size",
    variants: buildVariants("congo-white", JERSEY_SIZES, true),
  },
  {
    id: "cameroon-white",
    name: "CAMEROON WHITE",
    category: "Jerseys",
    subtitle: "Cameroon Heritage Edition",
    price: 80.0,
    soldOut: false,
    badge: null,
    productImage: ASSETS["cameroon-white"].productImage,
    modelImage: ASSETS["cameroon-white"].modelImage,
    isCutout: ASSETS["cameroon-white"].isCutout,
    description:
      "Clean white edition of the Cameroon heritage jersey featuring tricolor shoulder piping, woven TLQ crest, and bold black CAMEROON lettering.",
    details: STANDARD_JERSEY_DETAILS,
    optionName: "Size",
    variants: buildVariants("cameroon-white", JERSEY_SIZES, true),
  },
  {
    id: "senegal-black",
    name: "SENEGAL BLACK",
    category: "Jerseys",
    subtitle: "Senegal Heritage Edition",
    price: 80.0,
    soldOut: false,
    badge: null,
    productImage: ASSETS["senegal-black"].productImage,
    modelImage: ASSETS["senegal-black"].modelImage,
    isCutout: ASSETS["senegal-black"].isCutout,
    description:
      "Emerald green and black shoulder-paneled Senegal jersey with red collar striping, yellow lion embroidery, and bold SENEGAL lettering.",
    details: STANDARD_JERSEY_DETAILS,
    optionName: "Size",
    variants: buildVariants("senegal-black", JERSEY_SIZES, true),
  },
  {
    id: "tlq-iphone-case",
    name: "TLQ Iphone Case®",
    category: "Accessories",
    subtitle: "Paris Monogram Shell",
    price: 26.74,
    soldOut: false,
    badge: null,
    productImage: ASSETS["tlq-iphone-case"].productImage,
    modelImage: ASSETS["tlq-iphone-case"].modelImage,
    isCutout: true,
    description:
      "Impact-resistant glossy white protective case stamped with the signature black TLQ TOUTLEQUARTIER PARIS monogram.",
    details: [
      "Dual-layer polycarbonate shell with shock-absorbing TPU inner bumper",
      "High-gloss scratch-resistant finish with crisp black TLQ Paris monogram",
      "Raised camera bezel & front screen lip for daily drop protection",
      "Compatible with wireless & MagSafe charging · Dispatched from Paris",
    ],
    optionName: "Model",
    variants: buildVariants("tlq-iphone-case", IPHONE_MODELS, true),
  },
  {
    id: "vintage-green",
    name: "VINTAGE GREEN",
    category: "Jerseys",
    subtitle: "Archival Limited Edition",
    price: 90.0,
    soldOut: true,
    badge: "Sold out",
    productImage: ASSETS["vintage-green"].productImage,
    modelImage: ASSETS["vintage-green"].modelImage,
    isCutout: true,
    description:
      "Limited archival wash green jersey with distressed heritage detailing. Currently sold out.",
    details: [
      "Limited archival production run — numbered studio release",
      "260 GSM enzyme-washed heavyweight knit with custom woven crest",
      "Boxy vintage match cut with contrast striped sleeves & polo collar",
      "Sold out · Archived in the Tout le Quartier Paris lookbook",
    ],
    optionName: "Size",
    variants: buildVariants("vintage-green", JERSEY_SIZES, false),
  },
];

const PRODUCT_BY_ID = new Map(TLQ_PRODUCTS.map((p) => [p.id, p]));
const VARIANT_INDEX = new Map();
for (const product of TLQ_PRODUCTS) {
  for (const variant of product.variants) {
    VARIANT_INDEX.set(variant.id, { product, variant });
  }
}

/* --------------------------------------------------------------------------
   Six Runway Looks (01–06) — Spacious 6-Person 3D Ring (60° Spacing)
   -------------------------------------------------------------------------- */

const RUNWAY_LOOKS = [
  { id: "look-01", indexLabel: "01", name: "Cameroon Black", jerseyId: "cameroon-black" },
  { id: "look-02", indexLabel: "02", name: "Gabon White", jerseyId: "gabon-white" },
  { id: "look-03", indexLabel: "03", name: "Ivory Coast Black", jerseyId: "ivory-coast-black" },
  { id: "look-04", indexLabel: "04", name: "Congo Blue", jerseyId: "congo-blue" },
  { id: "look-05", indexLabel: "05", name: "Senegal White", jerseyId: "senegal-white" },
  { id: "look-06", indexLabel: "06", name: "Cameroon Green", jerseyId: "cameroon-green" },
].map((entry) => {
  const jersey = PRODUCT_BY_ID.get(entry.jerseyId);
  return {
    ...entry,
    heroImage: jersey ? jersey.modelImage : "",
    // Hero pin is strictly placed on the jersey chest (50%, 34%) — never on styling denim/sneakers
    pin: { productId: entry.jerseyId, x: 50, y: 34 },
    // Right panel lists strictly 2 official store items: Hero Jersey + TLQ Iphone Case®
    pieces: [
      { productId: entry.jerseyId, hasPin: true },
      { productId: "tlq-iphone-case", hasPin: false },
    ],
  };
});

const RUNWAY_INDEX_BY_PRODUCT = new Map(
  RUNWAY_LOOKS.map((look, idx) => [look.jerseyId, idx])
);

function getPackPricing(look) {
  const rawTotal = look.pieces.reduce((sum, piece) => {
    const product = PRODUCT_BY_ID.get(piece.productId);
    return sum + (product ? product.price : 0);
  }, 0);
  const packTotal = rawTotal * (1 - PACK_DISCOUNT_RATE);
  return {
    rawTotal,
    packTotal,
    rawFormatted: formatEur(rawTotal),
    packFormatted: formatEur(packTotal),
  };
}

/* --------------------------------------------------------------------------
   48px-Wide Alpha-Channel Feet Detector (--rw-foot) for Pre-Cutout PNGs
   -------------------------------------------------------------------------- */

const footOffsetCache = new Map();

function detectCutoutFootOffset(src, productId, title) {
  if (footOffsetCache.has(src)) {
    return footOffsetCache.get(src);
  }

  const promise = new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.decoding = "async";

    img.onload = () => {
      let footOffsetPct = 0;
      try {
        const natW = img.naturalWidth;
        const natH = img.naturalHeight;
        if (natW > 0 && natH > 0) {
          const probeW = 48;
          const probeH = Math.max(1, Math.round((natH / natW) * probeW));
          const probe = document.createElement("canvas");
          probe.width = probeW;
          probe.height = probeH;
          const pctx = probe.getContext("2d", { willReadFrequently: true });
          if (pctx) {
            pctx.drawImage(img, 0, 0, probeW, probeH);
            const px = pctx.getImageData(0, 0, probeW, probeH).data;
            let lowestOpaqueRow = probeH - 1;

            outer: for (let y = probeH - 1; y >= 0; y--) {
              for (let x = 0; x < probeW; x++) {
                if (px[(y * probeW + x) * 4 + 3] > 20) {
                  lowestOpaqueRow = y;
                  break outer;
                }
              }
            }

            const bottomPadRatio = Math.max(
              0,
              Math.min(0.18, (probeH - 1 - lowestOpaqueRow) / probeH)
            );
            footOffsetPct = Number((bottomPadRatio * 100).toFixed(2));
          }
        }
      } catch (_err) {
        footOffsetPct = 0;
      }
      resolve({ cutoutUrl: src, footOffsetPct });
    };

    img.onerror = () => {
      resolve({
        cutoutUrl: createProductFallbackSvg(productId, title),
        footOffsetPct: 0,
      });
    };

    img.src = src;
  });

  footOffsetCache.set(src, promise);
  return promise;
}

/* --------------------------------------------------------------------------
   Shopping Bag Store (localStorage: tlq-store-bag-v1)
   Schema: [{ id, variantId, sizeLabel, quantity }]
   -------------------------------------------------------------------------- */

const bagStatusEl = document.getElementById("bag-status");
let toastTimer = null;

function showBagToast(message) {
  if (!bagStatusEl) return;
  bagStatusEl.textContent = message;
  bagStatusEl.classList.add("is-shown");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    bagStatusEl.classList.remove("is-shown");
  }, 2600);
}

const storeBag = {
  items: [],

  load() {
    try {
      const raw = window.localStorage.getItem(BAG_STORAGE_KEY);
      if (!raw) {
        this.items = [];
        return;
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        this.items = [];
        return;
      }
      this.items = parsed
        .filter(
          (entry) =>
            entry &&
            typeof entry.variantId === "string" &&
            Number.isFinite(entry.quantity) &&
            entry.quantity > 0 &&
            VARIANT_INDEX.has(entry.variantId)
        )
        .map((entry) => {
          const rec = VARIANT_INDEX.get(entry.variantId);
          return {
            id: rec.product.id,
            variantId: rec.variant.id,
            sizeLabel: rec.variant.label,
            quantity: Math.floor(entry.quantity),
          };
        });
    } catch (_err) {
      this.items = [];
    }
  },

  save() {
    try {
      window.localStorage.setItem(BAG_STORAGE_KEY, JSON.stringify(this.items));
    } catch (_err) {
      // Ignore storage errors in sandboxed iframes
    }
    this.notify();
  },

  notify() {
    const count = this.getTotalCount();
    document.querySelectorAll("[data-cart-count]").forEach((el) => {
      el.textContent = String(count);
    });
    window.dispatchEvent(new CustomEvent("tlq:bag-change", { detail: this.getSnapshot() }));
  },

  add(variantId, quantity = 1) {
    const rec = VARIANT_INDEX.get(variantId);
    if (!rec || !rec.variant.available || rec.product.soldOut) return false;

    const existing = this.items.find((entry) => entry.variantId === variantId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({
        id: rec.product.id,
        variantId: rec.variant.id,
        sizeLabel: rec.variant.label,
        quantity,
      });
    }
    this.save();
    return true;
  },

  addMany(variantIds) {
    let added = 0;
    for (const variantId of variantIds) {
      const rec = VARIANT_INDEX.get(variantId);
      if (!rec || !rec.variant.available || rec.product.soldOut) continue;
      const existing = this.items.find((entry) => entry.variantId === variantId);
      if (existing) {
        existing.quantity += 1;
      } else {
        this.items.push({
          id: rec.product.id,
          variantId: rec.variant.id,
          sizeLabel: rec.variant.label,
          quantity: 1,
        });
      }
      added += 1;
    }
    if (added > 0) this.save();
    return added;
  },

  setQuantity(variantId, nextQty) {
    if (nextQty <= 0) {
      this.remove(variantId);
      return;
    }
    const target = this.items.find((entry) => entry.variantId === variantId);
    if (!target) return;
    target.quantity = Math.floor(nextQty);
    this.save();
  },

  remove(variantId) {
    this.items = this.items.filter((entry) => entry.variantId !== variantId);
    this.save();
  },

  clear() {
    this.items = [];
    this.save();
  },

  hasProduct(productId) {
    return this.items.some((entry) => entry.id === productId);
  },

  getVariantForProduct(productId) {
    const match = this.items.find((entry) => entry.id === productId);
    return match ? match.variantId : null;
  },

  getTotalCount() {
    return this.items.reduce((sum, entry) => sum + entry.quantity, 0);
  },

  getSnapshot() {
    const lines = [];
    let subtotal = 0;
    const jerseyUnitPrices = [];
    const caseUnitPrices = [];

    for (const entry of this.items) {
      const rec = VARIANT_INDEX.get(entry.variantId);
      if (!rec) continue;
      const lineTotal = rec.product.price * entry.quantity;
      subtotal += lineTotal;
      lines.push({
        id: rec.product.id,
        variantId: rec.variant.id,
        sizeLabel: rec.variant.label,
        quantity: entry.quantity,
        product: rec.product,
        variant: rec.variant,
        lineTotal,
      });

      for (let q = 0; q < entry.quantity; q++) {
        if (rec.product.category === "Jerseys") {
          jerseyUnitPrices.push(rec.product.price);
        } else if (rec.product.id === "tlq-iphone-case") {
          caseUnitPrices.push(rec.product.price);
        }
      }
    }

    // Automatic 10% pack discount for every paired Jersey + TLQ Iphone Case®
    const packCount = Math.min(jerseyUnitPrices.length, caseUnitPrices.length);
    let bundleDiscount = 0;
    for (let i = 0; i < packCount; i++) {
      bundleDiscount += (jerseyUnitPrices[i] + caseUnitPrices[i]) * PACK_DISCOUNT_RATE;
    }

    return {
      lines,
      totalCount: this.getTotalCount(),
      subtotal,
      packCount,
      bundleDiscount,
      estimatedTotal: Math.max(0, subtotal - bundleDiscount),
    };
  },
};

/* --------------------------------------------------------------------------
   <runway-section> Custom Web Component (10 Official Jersey Looks)
   -------------------------------------------------------------------------- */

const SPRING_K = 95;
const SPRING_C = 2 * Math.sqrt(SPRING_K); // ~19.4936
const SPRING_SUBSTEPS = 3;

function shortestDelta(from, to, period) {
  let diff = ((to - from) % period + period) % period;
  if (diff > period / 2) diff -= period;
  return diff;
}

class RunwaySection extends HTMLElement {
  constructor() {
    super();

    this.looks = RUNWAY_LOOKS;
    this.n = this.looks.length; // 6
    this.N = this.n; // Exactly 6 people in the circle for open, uncrowded spacing
    this.step = (Math.PI * 2) / this.N; // 60°

    this.reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    this.mobileQuery = window.matchMedia("(max-width: 749px)");

    this.prefersReducedMotion = this.reducedMotionQuery.matches;
    this.isMobile = this.mobileQuery.matches;

    this.pos = this.prefersReducedMotion ? 0 : 1.15;
    this.target = 0;
    this.vel = 0;
    this.activeLook = 0;

    this.dragging = false;
    this.dragMoved = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.dragStartPos = 0;
    this.lastDragX = 0;
    this.lastDragTime = 0;
    this.dragVelocity = 0;

    this.panelHover = false;
    this.zoomed = false;
    this.stageVisible = true;
    this.engaged = false;
    this.autoplayRequested = true;
    this.autoplayTimer = null;
    this.speedMs = 5000;

    this.cursorX = 0;
    this.cursorY = 0;
    this.cursorTargetX = 0;
    this.cursorTargetY = 0;
    this.cursorActive = false;

    this.pieceSelections = new Map();
    this.openPickers = new Set();
    this.mobileSheetContext = null;

    this.rafId = 0;
    this.lastFrameTime = 0;
    this.headerObserver = null;
    this.intersectionObserver = null;
    this.highlightTimer = null;
    this.lbPinTimer = null;
    this.wheelLockTimer = null;

    this._onResize = this._onResize.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onVisibilityChange = this._onVisibilityChange.bind(this);
    this._onBagChange = this._onBagChange.bind(this);
    this._onReducedMotionChange = this._onReducedMotionChange.bind(this);
    this._onMobileChange = this._onMobileChange.bind(this);
    this._onPointerMove = this._onPointerMove.bind(this);
    this._onPointerUp = this._onPointerUp.bind(this);
    this._tickFrame = this._tickFrame.bind(this);
  }

  connectedCallback() {
    this.speedMs = Number(this.dataset.speed) || 5000;
    this.autoplayRequested =
      this.dataset.autoplay !== "false" && !this.prefersReducedMotion;
    this.useBlurDesktop = this.dataset.blur !== "false";
    this.useBlurMobile = this.dataset.mblur !== "false";

    this._renderSkeleton();
    this._measureHeaderHeight();
    this._bindEvents();
    this._renderPanelForLook(this.activeLook);
    this._updateTicksUI();
    this._updateAutoplayState();
    this._hydrateRunwayCutouts();

    this.lastFrameTime = performance.now();
    this.rafId = window.requestAnimationFrame(this._tickFrame);
  }

  disconnectedCallback() {
    if (this.rafId) {
      window.cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
    this._clearAutoplayTimer();
    if (this.highlightTimer) clearTimeout(this.highlightTimer);
    if (this.lbPinTimer) clearTimeout(this.lbPinTimer);
    if (this.wheelLockTimer) clearTimeout(this.wheelLockTimer);

    if (this.headerObserver) this.headerObserver.disconnect();
    if (this.intersectionObserver) this.intersectionObserver.disconnect();

    window.removeEventListener("resize", this._onResize);
    window.removeEventListener("keydown", this._onKeyDown);
    window.removeEventListener("tlq:bag-change", this._onBagChange);
    window.removeEventListener("pointermove", this._onPointerMove);
    window.removeEventListener("pointerup", this._onPointerUp);
    window.removeEventListener("pointercancel", this._onPointerUp);
    document.removeEventListener("visibilitychange", this._onVisibilityChange);

    if (this.reducedMotionQuery.removeEventListener) {
      this.reducedMotionQuery.removeEventListener("change", this._onReducedMotionChange);
      this.mobileQuery.removeEventListener("change", this._onMobileChange);
    }

    this._closeMobileSheet(true);
    if (this.sheetHost && this.sheetHost.parentNode) {
      this.sheetHost.parentNode.removeChild(this.sheetHost);
    }
  }

  goToLook(index, userInitiated = true) {
    const safeIdx = ((index % this.n) + this.n) % this.n;
    if (userInitiated) {
      this.engaged = true;
      this.autoplayRequested = false;
    }
    const delta = shortestDelta(this.target, safeIdx, this.N);
    this.target += delta;

    if (this.prefersReducedMotion) {
      this.pos = this.target;
      this.vel = 0;
    }

    this._setActiveLook(safeIdx);
    this._updateAutoplayState();
  }

  forceCloseOverlays() {
    this._closeMobileSheet(true);
    if (this.zoomed) {
      if (this.lbPinTimer) clearTimeout(this.lbPinTimer);
      this.zoomed = false;
      this.classList.remove("is-zoomed");
      this.lbEl.classList.remove("pins-ready");
      this.lbEl.hidden = true;
      this.lbFigureEl.style.transition = "";
      this.lbFigureEl.style.transform = "";
      document.body.style.overflow = "";
      this._updateAutoplayState();
    }
  }

  _renderSkeleton() {
    const bodiesMarkup = Array.from({ length: this.N }, (_, slot) => {
      const lookIdx = slot % this.n;
      const look = this.looks[lookIdx];
      return `
        <button
          type="button"
          class="rw__body${slot === 0 ? " is-front" : ""}"
          data-slot="${slot}"
          data-look="${lookIdx}"
          aria-label="Look ${look.indexLabel}: ${look.name}"
        >
          <figure class="rw__fig">
            <img
              src="${look.heroImage}"
              alt="Tout le Quartier Look ${look.indexLabel} — ${look.name}"
              loading="${slot < 3 ? "eager" : "lazy"}"
              decoding="async"
              referrerpolicy="no-referrer"
            />
            <span class="rw__shadow" aria-hidden="true"></span>
          </figure>
          <span class="rw__body-tag" aria-hidden="true">${look.indexLabel}</span>
        </button>
      `;
    }).join("");

    const ticksMarkup = this.looks
      .map(
        (look, i) => `
          <button
            type="button"
            class="rw__tick${i === 0 ? " is-active" : ""}"
            data-tick="${i}"
            aria-label="Select Look ${look.indexLabel}: ${look.name}"
            aria-current="${i === 0 ? "true" : "false"}"
          >
            <span class="rw__tick-head">
              <span class="rw__tick-num">${look.indexLabel}</span>
              <span class="rw__tick-name">${look.name}</span>
            </span>
            <span class="rw__tick-track" aria-hidden="true">
              <span class="rw__tick-fill"></span>
            </span>
          </button>
        `
      )
      .join("");

    this.innerHTML = `
      <div class="rw__shell">
        <div class="rw__stage" data-rw-stage>
          <div class="rw__head">
            <p class="rw__eyebrow">Tout le Quartier · Runway 01–${String(this.n).padStart(2, "0")}</p>
            <h1 class="rw__title">Try the Look.</h1>
            <p class="rw__sub">Drag the 3D runway to rotate through six signature looks, or tap the front look to inspect.</p>
          </div>

          <div class="rw__floor" aria-hidden="true"></div>
          <div class="rw__ring" data-rw-ring>${bodiesMarkup}</div>

          <button
            type="button"
            class="rw__zoom"
            data-rw-zoom
            aria-label="View Look 01: Cameroon Black in detail"
          >
            <span class="rw__zoom-label">View look</span>
          </button>

          <div class="rw__controls">
            <div class="rw__nav-btns">
              <button type="button" class="rw__ctrl-btn" data-rw-prev aria-label="Previous look">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
                  <path d="M8.5 2.5L4 7l4.5 4.5" />
                </svg>
              </button>
              <button type="button" class="rw__ctrl-btn" data-rw-next aria-label="Next look">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
                  <path d="M5.5 2.5L10 7l-4.5 4.5" />
                </svg>
              </button>
              <button
                type="button"
                class="rw__ctrl-btn"
                data-rw-play
                aria-label="Pause runway autoplay"
                aria-pressed="true"
              >
                <svg class="rw__icon-pause" width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <rect x="2" y="1.5" width="2.5" height="9" />
                  <rect x="7.5" y="1.5" width="2.5" height="9" />
                </svg>
                <svg class="rw__icon-play" width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true" hidden>
                  <path d="M3 1.5l7.5 4.5L3 10.5V1.5z" />
                </svg>
              </button>
            </div>
            <div class="rw__ticks" data-rw-ticks>${ticksMarkup}</div>
          </div>

          <div class="rw__cursor" data-rw-cursor aria-hidden="true">
            <span class="rw__cursor-text" data-rw-cursor-text>Drag</span>
          </div>
        </div>

        <aside class="rw__panel" data-rw-panel aria-label="In this look">
          <div class="rw__panel-head">
            <div class="rw__panel-meta">
              <span class="rw__panel-kicker">In this look · 2 pieces</span>
              <span class="rw__panel-index" data-rw-panel-index>01 / 06</span>
            </div>
            <h2 class="rw__panel-title" data-rw-panel-title>Cameroon Black</h2>
          </div>

          <div class="rw__panel-scroll" data-rw-panel-scroll>
            <ul class="rw__items" data-rw-items></ul>
            <p class="rw__panel-note">
              Click any item name or photo to view full details and size measurements. Styling trousers and footwear are not sold.
            </p>
          </div>

          <div class="rw__panel-foot">
            <p class="rw__msg" data-rw-msg role="status" aria-live="polite"></p>
            <div class="rw__bundle-row">
              <span class="rw__bundle-label">Bundle jersey + case and save 10%</span>
              <span class="rw__bundle-prices" data-rw-bundle-prices></span>
            </div>
            <button type="button" class="rw__cta" data-rw-add-pack>
              <span class="rw__cta-desktop" data-rw-cta-desktop>Add pack to bag</span>
              <span class="rw__cta-mobile" data-rw-cta-mobile>Add pack — €96.07</span>
            </button>
          </div>
        </aside>
      </div>

      <div
        class="rw__lb"
        data-rw-lb
        role="dialog"
        aria-modal="true"
        aria-label="Inspect runway look"
        hidden
      >
        <div class="rw__lb-bar">
          <p class="rw__lb-kicker" data-rw-lb-kicker>Look 01 / 06 — Cameroon Black</p>
          <div class="rw__lb-actions">
            <button type="button" class="rw__ctrl-btn" data-rw-lb-prev aria-label="Previous look">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
                <path d="M8.5 2.5L4 7l4.5 4.5" />
              </svg>
            </button>
            <button type="button" class="rw__ctrl-btn" data-rw-lb-next aria-label="Next look">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
                <path d="M5.5 2.5L10 7l-4.5 4.5" />
              </svg>
            </button>
            <button type="button" class="rw__lb-close" data-rw-lb-close aria-label="Close look view">
              <span>Close</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
                <path d="M2.5 2.5l9 9M11.5 2.5l-9 9" />
              </svg>
            </button>
          </div>
        </div>

        <div class="rw__lb-stage" data-rw-lb-stage>
          <div class="rw__lb-figure" data-rw-lb-figure>
            <img src="" alt="" data-rw-lb-img referrerpolicy="no-referrer" />
            <div class="rw__pins" data-rw-pins></div>
          </div>
        </div>

        <div class="rw__lb-mobile-card" data-rw-lb-mobile>
          <div class="rw__lb-mobile-info">
            <p class="rw__lb-mobile-name" data-rw-lb-mobile-name></p>
            <p class="rw__lb-mobile-price" data-rw-lb-mobile-price></p>
          </div>
          <div class="rw__lb-mobile-actions">
            <button type="button" class="rw__lb-mobile-pdp" data-rw-lb-mobile-pdp>
              Details
            </button>
            <button type="button" class="rw__lb-mobile-pick" data-rw-lb-mobile-pick>
              Select size
            </button>
          </div>
        </div>
      </div>
    `;

    this.stageEl = this.querySelector("[data-rw-stage]");
    this.bodyEls = Array.from(this.querySelectorAll(".rw__body"));
    this.zoomEl = this.querySelector("[data-rw-zoom]");
    this.prevBtn = this.querySelector("[data-rw-prev]");
    this.nextBtn = this.querySelector("[data-rw-next]");
    this.playBtn = this.querySelector("[data-rw-play]");
    this.tickEls = Array.from(this.querySelectorAll("[data-tick]"));
    this.cursorEl = this.querySelector("[data-rw-cursor]");
    this.cursorTextEl = this.querySelector("[data-rw-cursor-text]");

    this.panelEl = this.querySelector("[data-rw-panel]");
    this.panelIndexEl = this.querySelector("[data-rw-panel-index]");
    this.panelTitleEl = this.querySelector("[data-rw-panel-title]");
    this.itemsListEl = this.querySelector("[data-rw-items]");
    this.msgEl = this.querySelector("[data-rw-msg]");
    this.bundlePricesEl = this.querySelector("[data-rw-bundle-prices]");
    this.addPackBtn = this.querySelector("[data-rw-add-pack]");
    this.ctaDesktopEl = this.querySelector("[data-rw-cta-desktop]");
    this.ctaMobileEl = this.querySelector("[data-rw-cta-mobile]");

    this.lbEl = this.querySelector("[data-rw-lb]");
    this.lbKickerEl = this.querySelector("[data-rw-lb-kicker]");
    this.lbStageEl = this.querySelector("[data-rw-lb-stage]");
    this.lbFigureEl = this.querySelector("[data-rw-lb-figure]");
    this.lbImgEl = this.querySelector("[data-rw-lb-img]");
    this.lbPinsEl = this.querySelector("[data-rw-pins]");
    this.lbPrevBtn = this.querySelector("[data-rw-lb-prev]");
    this.lbNextBtn = this.querySelector("[data-rw-lb-next]");
    this.lbCloseBtn = this.querySelector("[data-rw-lb-close]");
    this.lbMobileNameEl = this.querySelector("[data-rw-lb-mobile-name]");
    this.lbMobilePriceEl = this.querySelector("[data-rw-lb-mobile-price]");
    this.lbMobilePickBtn = this.querySelector("[data-rw-lb-mobile-pick]");
    this.lbMobilePdpBtn = this.querySelector("[data-rw-lb-mobile-pdp]");

    // Detached mobile bottom sheet host
    this.sheetHost = document.createElement("div");
    this.sheetHost.className = "rw-sheet-host";
    this.sheetHost.setAttribute("aria-hidden", "true");
    this.sheetHost.innerHTML = `
      <div class="rw-sheet-scrim" data-sheet-close></div>
      <div class="rw-sheet-panel" role="dialog" aria-modal="true" aria-label="Choose option">
        <div class="rw-sheet-grabber" aria-hidden="true"></div>
        <div class="rw-sheet-head">
          <div>
            <p class="rw-sheet-title" data-sheet-title></p>
            <p class="rw-sheet-price" data-sheet-price></p>
          </div>
          <button type="button" class="rw-sheet-close" data-sheet-close aria-label="Close size picker">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
              <path d="M2.5 2.5l9 9M11.5 2.5l-9 9" />
            </svg>
          </button>
        </div>
        <div class="rw-sheet-body" data-sheet-body></div>
      </div>
    `;
    document.body.appendChild(this.sheetHost);

    this.sheetTitleEl = this.sheetHost.querySelector("[data-sheet-title]");
    this.sheetPriceEl = this.sheetHost.querySelector("[data-sheet-price]");
    this.sheetBodyEl = this.sheetHost.querySelector("[data-sheet-body]");

    this.bodyEls.forEach((bodyEl, slot) => {
      const img = bodyEl.querySelector("img");
      const look = this.looks[slot % this.n];
      if (img) {
        img.addEventListener("error", () => {
          img.src = createProductFallbackSvg(look.jerseyId, look.name);
        });
      }
    });
  }

  _hydrateRunwayCutouts() {
    this.looks.forEach((look, lookIdx) => {
      detectCutoutFootOffset(look.heroImage, look.jerseyId, look.name).then(
        ({ cutoutUrl, footOffsetPct }) => {
          look.cutoutImage = cutoutUrl;
          look.footOffsetPct = footOffsetPct;
          this.bodyEls.forEach((bodyEl) => {
            if (Number(bodyEl.dataset.look) === lookIdx) {
              const img = bodyEl.querySelector("img");
              if (img) {
                img.style.setProperty("--rw-foot", `${footOffsetPct}%`);
              }
            }
          });
        }
      );
    });
  }

  _measureHeaderHeight() {
    const header = document.querySelector(".shopify-section-group-header-group");
    if (!header) return;
    const apply = () => {
      const rect = header.getBoundingClientRect();
      if (rect.height > 0) {
        document.documentElement.style.setProperty(
          "--rw-header-h",
          `${Math.round(rect.height)}px`
        );
      }
    };
    apply();
    if ("ResizeObserver" in window) {
      this.headerObserver = new ResizeObserver(apply);
      this.headerObserver.observe(header);
    }
  }

  _bindEvents() {
    window.addEventListener("resize", this._onResize);
    window.addEventListener("keydown", this._onKeyDown);
    window.addEventListener("tlq:bag-change", this._onBagChange);
    window.addEventListener("pointermove", this._onPointerMove);
    window.addEventListener("pointerup", this._onPointerUp);
    window.addEventListener("pointercancel", this._onPointerUp);
    document.addEventListener("visibilitychange", this._onVisibilityChange);

    if (this.reducedMotionQuery.addEventListener) {
      this.reducedMotionQuery.addEventListener("change", this._onReducedMotionChange);
      this.mobileQuery.addEventListener("change", this._onMobileChange);
    }

    if ("IntersectionObserver" in window) {
      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          this.stageVisible = entry ? entry.isIntersecting : true;
          this._updateAutoplayState();
        },
        { threshold: 0.15 }
      );
      this.intersectionObserver.observe(this.stageEl);
    }

    this.panelEl.addEventListener("mouseenter", () => {
      this.panelHover = true;
      this._updateAutoplayState();
    });
    this.panelEl.addEventListener("mouseleave", () => {
      this.panelHover = false;
      this._updateAutoplayState();
    });

    this.prevBtn.addEventListener("click", () => {
      this.goToLook(this.activeLook - 1, true);
    });
    this.nextBtn.addEventListener("click", () => {
      this.goToLook(this.activeLook + 1, true);
    });
    this.playBtn.addEventListener("click", () => {
      if (this.autoplayRequested && !this.engaged) {
        this.autoplayRequested = false;
        this.engaged = true;
      } else {
        this.engaged = false;
        this.autoplayRequested = true;
      }
      this._updateAutoplayState();
    });

    this.tickEls.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.goToLook(Number(btn.dataset.tick), true);
      });
    });

    this.bodyEls.forEach((bodyEl) => {
      bodyEl.addEventListener("click", () => {
        if (this.dragMoved) return;
        const lookIdx = Number(bodyEl.dataset.look);
        if (bodyEl.classList.contains("is-front") || lookIdx === this.activeLook) {
          this._openLightbox();
        } else {
          this.goToLook(lookIdx, true);
        }
      });
    });

    this.zoomEl.addEventListener("click", () => {
      if (this.dragMoved) return;
      this._openLightbox();
    });

    this.stageEl.addEventListener("pointerdown", (e) => {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      if (e.target.closest(".rw__controls")) return;

      this.dragging = true;
      this.dragMoved = false;
      this.dragStartX = e.clientX;
      this.dragStartY = e.clientY;
      this.dragStartPos = this.pos;
      this.lastDragX = e.clientX;
      this.lastDragTime = performance.now();
      this.dragVelocity = 0;

      this.stageEl.classList.add("is-dragging");
      if (this.cursorEl) this.cursorEl.classList.add("is-dragging");
      this._updateAutoplayState();
    });

    this.stageEl.addEventListener(
      "wheel",
      (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 22) {
          e.preventDefault();
          if (this.wheelLockTimer) return;
          this.goToLook(this.activeLook + (e.deltaX > 0 ? 1 : -1), true);
          this.wheelLockTimer = window.setTimeout(() => {
            this.wheelLockTimer = null;
          }, 340);
        }
      },
      { passive: false }
    );

    this.stageEl.addEventListener("pointerenter", (e) => {
      if (!this.finePointerQuery.matches) return;
      this.cursorActive = true;
      this.cursorX = e.clientX;
      this.cursorY = e.clientY;
      this.cursorTargetX = e.clientX;
      this.cursorTargetY = e.clientY;
      this.stageEl.classList.add("has-custom-cursor");
      this.cursorEl.classList.add("is-visible");
      this._updateCursorMode(e.target);
    });

    this.stageEl.addEventListener("pointerleave", () => {
      this.cursorActive = false;
      this.stageEl.classList.remove("has-custom-cursor");
      this.cursorEl.classList.remove("is-visible", "is-link", "is-dragging");
    });

    this.addPackBtn.addEventListener("click", () => {
      this._handleAddPack();
    });

    this.lbCloseBtn.addEventListener("click", () => this._closeLightbox());
    this.lbPrevBtn.addEventListener("click", () => {
      this.goToLook(this.activeLook - 1, true);
      this._renderLightboxContent(false);
    });
    this.lbNextBtn.addEventListener("click", () => {
      this.goToLook(this.activeLook + 1, true);
      this._renderLightboxContent(false);
    });
    this.lbStageEl.addEventListener("click", (e) => {
      if (e.target === this.lbStageEl) {
        this._closeLightbox();
      }
    });

    this.lbMobilePickBtn.addEventListener("click", () => {
      const look = this.looks[this.activeLook];
      const cardEl = this.itemsListEl.querySelector(
        `[data-piece-id="${look.jerseyId}"]`
      );
      if (cardEl) {
        this._openMobileSheet(cardEl, look.jerseyId);
      }
    });

    this.lbMobilePdpBtn.addEventListener("click", () => {
      const look = this.looks[this.activeLook];
      this.forceCloseOverlays();
      navigateToProduct(look.jerseyId);
    });

    this.sheetHost.querySelectorAll("[data-sheet-close]").forEach((el) => {
      el.addEventListener("click", () => this._closeMobileSheet());
    });
  }

  _onPointerMove(e) {
    if (this.finePointerQuery.matches && this.cursorActive) {
      this.cursorTargetX = e.clientX;
      this.cursorTargetY = e.clientY;
      this._updateCursorMode(e.target);
    }

    if (!this.dragging) return;
    const dx = e.clientX - this.dragStartX;
    const dy = e.clientY - this.dragStartY;

    if (!this.dragMoved && Math.abs(dx) > 6) {
      if (Math.abs(dx) >= Math.abs(dy)) {
        this.dragMoved = true;
        this.engaged = true;
        this.autoplayRequested = false;
      }
    }

    if (!this.dragMoved) return;

    const stageW = Math.max(320, this.stageEl.clientWidth);
    const sensitivity = this.isMobile ? stageW * 0.58 : stageW * 0.44;
    const nextPos = this.dragStartPos - dx / sensitivity;

    const now = performance.now();
    const dt = Math.max(8, now - this.lastDragTime);
    this.dragVelocity = (-(e.clientX - this.lastDragX) / sensitivity) / (dt / 1000);
    this.lastDragX = e.clientX;
    this.lastDragTime = now;

    this.pos = nextPos;
    this.target = nextPos;
    this.vel = 0;

    const nearest = ((Math.round(this.pos) % this.n) + this.n) % this.n;
    if (nearest !== this.activeLook) {
      this._setActiveLook(nearest);
    }
  }

  _onPointerUp() {
    if (!this.dragging) return;
    this.dragging = false;
    this.stageEl.classList.remove("is-dragging");
    if (this.cursorEl) this.cursorEl.classList.remove("is-dragging");

    if (this.dragMoved) {
      const projected = this.pos + this.dragVelocity * 0.14;
      const snapped = Math.round(projected);
      this.target = snapped;
      const nextLook = ((snapped % this.n) + this.n) % this.n;
      this._setActiveLook(nextLook);
      window.setTimeout(() => {
        this.dragMoved = false;
      }, 40);
    }
    this._updateAutoplayState();
  }

  _updateCursorMode(target) {
    if (!this.cursorEl || !this.cursorTextEl) return;
    if (this.dragging) {
      this.cursorEl.classList.remove("is-link");
      this.cursorTextEl.textContent = "Drag";
      return;
    }

    const overInteractive =
      target &&
      target.closest(
        ".rw__controls, .rw__ctrl-btn, .rw__tick, .rw__pin, .rw__body:not(.is-front)"
      );

    if (overInteractive) {
      this.cursorEl.classList.add("is-link");
      return;
    }

    this.cursorEl.classList.remove("is-link");
    const overZoom = target && target.closest(".rw__zoom");
    this.cursorTextEl.textContent = overZoom ? "View" : "Drag";
  }

  _onResize() {
    this.isMobile = this.mobileQuery.matches;
    if (!this.isMobile && this.mobileSheetContext) {
      this._closeMobileSheet(true);
    }
  }

  _onMobileChange(e) {
    this.isMobile = e.matches;
    if (!this.isMobile && this.mobileSheetContext) {
      this._closeMobileSheet(true);
    }
  }

  _onReducedMotionChange(e) {
    this.prefersReducedMotion = e.matches;
    if (this.prefersReducedMotion) {
      this.pos = this.target;
      this.vel = 0;
      this.autoplayRequested = false;
      this._updateAutoplayState();
    }
  }

  _onVisibilityChange() {
    this._updateAutoplayState();
  }

  _onKeyDown(e) {
    if (e.key === "Escape") {
      if (this.mobileSheetContext) {
        this._closeMobileSheet();
        return;
      }
      if (this.zoomed) {
        this._closeLightbox();
        return;
      }
    }

    const activeTag = document.activeElement ? document.activeElement.tagName : "";
    if (activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT") {
      return;
    }

    if (e.key === "ArrowRight" && (this.zoomed || this.contains(document.activeElement))) {
      e.preventDefault();
      this.goToLook(this.activeLook + 1, true);
      if (this.zoomed) this._renderLightboxContent(false);
    } else if (e.key === "ArrowLeft" && (this.zoomed || this.contains(document.activeElement))) {
      e.preventDefault();
      this.goToLook(this.activeLook - 1, true);
      if (this.zoomed) this._renderLightboxContent(false);
    }
  }

  _onBagChange() {
    this._syncPanelBagState();
  }

  _shouldAutoplayRun() {
    const homeView = document.getElementById("view-home");
    const homeVisible = !homeView || !homeView.hidden;
    return (
      homeVisible &&
      this.autoplayRequested &&
      !this.engaged &&
      !this.prefersReducedMotion &&
      !this.panelHover &&
      !this.zoomed &&
      !this.dragging &&
      this.stageVisible &&
      !document.hidden
    );
  }

  _clearAutoplayTimer() {
    if (this.autoplayTimer) {
      clearTimeout(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  _updateAutoplayState() {
    const running = this._shouldAutoplayRun();
    const activePlayPreference = this.autoplayRequested && !this.engaged;

    this.classList.toggle("is-playing", activePlayPreference && !this.prefersReducedMotion);
    this.classList.toggle("is-paused", activePlayPreference && !running);

    if (this.playBtn) {
      this.playBtn.setAttribute("aria-pressed", String(activePlayPreference));
      this.playBtn.setAttribute(
        "aria-label",
        activePlayPreference ? "Pause runway autoplay" : "Play runway autoplay"
      );
      const pauseIcon = this.playBtn.querySelector(".rw__icon-pause");
      const playIcon = this.playBtn.querySelector(".rw__icon-play");
      if (pauseIcon && playIcon) {
        pauseIcon.hidden = !activePlayPreference;
        playIcon.hidden = activePlayPreference;
      }
    }

    this._clearAutoplayTimer();
    if (running) {
      this.autoplayTimer = window.setTimeout(() => {
        const nextIdx = (this.activeLook + 1) % this.n;
        const delta = shortestDelta(this.target, nextIdx, this.N);
        this.target += delta;
        this._setActiveLook(nextIdx);
        this._restartActiveTickAnimation();
        this._updateAutoplayState();
      }, this.speedMs);
    }
  }

  _restartActiveTickAnimation() {
    const activeTick = this.tickEls[this.activeLook];
    if (!activeTick) return;
    const fill = activeTick.querySelector(".rw__tick-fill");
    if (!fill) return;
    fill.style.animation = "none";
    void fill.offsetWidth;
    fill.style.animation = "";
  }

  _tickFrame(now) {
    const rawDt = (now - this.lastFrameTime) / 1000;
    this.lastFrameTime = now;
    const dt = Math.min(0.05, Math.max(0.001, rawDt));

    if (!this.dragging) {
      if (this.prefersReducedMotion) {
        this.pos = this.target;
        this.vel = 0;
      } else {
        const subDt = dt / SPRING_SUBSTEPS;
        for (let s = 0; s < SPRING_SUBSTEPS; s++) {
          const disp = this.pos - this.target;
          const acc = -SPRING_K * disp - SPRING_C * this.vel;
          this.vel += acc * subDt;
          this.pos += this.vel * subDt;
        }
        if (Math.abs(this.target - this.pos) < 0.0005 && Math.abs(this.vel) < 0.0005) {
          this.pos = this.target;
          this.vel = 0;
        }
      }
    }

    const wrappedPos = ((this.pos % this.n) + this.n) % this.n;
    const progress = this.n > 1 ? wrappedPos / (this.n - 1) : 0;
    this.style.setProperty("--rw-progress", Math.min(1, Math.max(0, progress)).toFixed(4));

    this._layoutBodies();
    this._updateCursorFrame();

    this.rafId = window.requestAnimationFrame(this._tickFrame);
  }

  _layoutBodies() {
    const stageW = this.stageEl.clientWidth || 800;
    const stageH = this.stageEl.clientHeight || 680;
    const frontSlot = ((Math.round(this.pos) % this.N) + this.N) % this.N;

    if (!this.isMobile) {
      // Desktop: Spacious 6-body 3D Elliptical Ring (step = 60°)
      const rx = Math.min(stageW * 0.41, 420);
      const ry = Math.min(stageH * 0.155, 122);

      for (let slot = 0; slot < this.N; slot++) {
        const bodyEl = this.bodyEls[slot];
        const diff = shortestDelta(this.pos, slot, this.N);
        const angle = diff * this.step;

        const sin = Math.sin(angle);
        const cos = Math.cos(angle);
        const depth = (cos + 1) * 0.5;

        const x = sin * rx;
        const y = -(1 - depth) * ry;
        const scale = 0.56 + 0.44 * depth;
        const opacity = 0.24 + 0.76 * Math.pow(depth, 0.85);
        const blur = this.useBlurDesktop
          ? Math.pow(Math.max(0, 1 - depth), 1.65) * 4.2
          : 0;
        const zIndex = Math.round(depth * 24) + 1;

        bodyEl.style.transform = `translate3d(calc(-50% + ${x.toFixed(1)}px), ${y.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`;
        bodyEl.style.opacity = opacity.toFixed(3);
        bodyEl.style.filter = blur > 0.08 ? `blur(${blur.toFixed(2)}px)` : "none";
        bodyEl.style.zIndex = String(zIndex);
        bodyEl.classList.toggle("is-front", slot === frontSlot);
        bodyEl.setAttribute("aria-hidden", depth < 0.14 ? "true" : "false");
        bodyEl.tabIndex = depth < 0.14 ? -1 : 0;
      }
    } else {
      // Mobile: Classic Diagonal Runway Queue
      for (let slot = 0; slot < this.N; slot++) {
        const bodyEl = this.bodyEls[slot];
        let k = ((slot - this.pos) % this.N + this.N) % this.N;
        if (k > this.N - 1.5) k -= this.N;

        const isVisible = k > -1.0 && k < 4.2;
        const x = -stageW * 0.12 + k * stageW * 0.27;
        const y = k >= 0 ? -k * 24 : k * 14;
        const scale = Math.max(0.54, 1 - Math.abs(k) * 0.14);

        let opacity = 1;
        if (k < 0) {
          opacity = Math.max(0, 1 + k * 1.45);
        } else {
          opacity = Math.max(0, 1 - k * 0.26);
        }

        const blur =
          this.useBlurMobile && Math.abs(k) > 0.12
            ? Math.min(4.2, Math.abs(k) * 1.35)
            : 0;
        const zIndex = Math.max(1, Math.round(24 - Math.abs(k) * 4));

        bodyEl.style.transform = `translate3d(calc(-50% + ${x.toFixed(1)}px), ${y.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`;
        bodyEl.style.opacity = isVisible ? opacity.toFixed(3) : "0";
        bodyEl.style.filter = blur > 0.08 ? `blur(${blur.toFixed(2)}px)` : "none";
        bodyEl.style.zIndex = String(zIndex);
        bodyEl.style.pointerEvents = isVisible && opacity > 0.15 ? "auto" : "none";
        bodyEl.classList.toggle("is-front", slot === frontSlot);
      }
    }
  }

  _updateCursorFrame() {
    if (!this.cursorEl || !this.cursorActive) return;
    if (this.prefersReducedMotion) {
      this.cursorX = this.cursorTargetX;
      this.cursorY = this.cursorTargetY;
    } else {
      this.cursorX += (this.cursorTargetX - this.cursorX) * 0.19;
      this.cursorY += (this.cursorTargetY - this.cursorY) * 0.19;
    }
    this.cursorEl.style.transform = `translate3d(${(this.cursorX - this.cursorEl.offsetWidth / 2).toFixed(1)}px, ${(this.cursorY - this.cursorEl.offsetHeight / 2).toFixed(1)}px, 0)`;
  }

  _setActiveLook(lookIdx) {
    if (this.activeLook === lookIdx) return;
    this.activeLook = lookIdx;
    this._closeMobileSheet(true);
    this._updateTicksUI();
    this._renderPanelForLook(lookIdx);
    this._restartActiveTickAnimation();
  }

  _updateTicksUI() {
    const look = this.looks[this.activeLook];
    this.tickEls.forEach((btn, idx) => {
      const active = idx === this.activeLook;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-current", active ? "true" : "false");
    });

    if (this.zoomEl) {
      this.zoomEl.setAttribute(
        "aria-label",
        `View Look ${look.indexLabel}: ${look.name} in detail`
      );
    }
  }

  _getSelectionState(lookIdx, productId) {
    const key = `${lookIdx}:${productId}`;
    if (!this.pieceSelections.has(key)) {
      const existingInBag = storeBag.getVariantForProduct(productId);
      this.pieceSelections.set(key, {
        variantId: existingInBag || null,
        touched: Boolean(existingInBag),
      });
    }
    return this.pieceSelections.get(key);
  }

  _renderPanelForLook(lookIdx) {
    const look = this.looks[lookIdx];
    const pricing = getPackPricing(look);

    this.panelIndexEl.textContent = `${look.indexLabel} / ${String(this.n).padStart(2, "0")}`;
    this.panelTitleEl.textContent = look.name;
    this.msgEl.textContent = "";
    this.msgEl.classList.remove("is-ok");

    this.bundlePricesEl.innerHTML = `<s>${pricing.rawFormatted}</s><strong>${pricing.packFormatted}</strong>`;
    this.ctaMobileEl.textContent = `Add pack — ${pricing.packFormatted}`;

    this.itemsListEl.innerHTML = look.pieces
      .map((piece, idx) => {
        const product = PRODUCT_BY_ID.get(piece.productId);
        if (!product) return "";

        const key = `${lookIdx}:${product.id}`;
        const sel = this._getSelectionState(lookIdx, product.id);
        const inBag = storeBag.hasProduct(product.id);
        const isPicking = !this.isMobile && this.openPickers.has(key);
        const selectedVariant = sel.variantId
          ? product.variants.find((v) => v.id === sel.variantId)
          : null;

        const optsHtml = product.variants
          .map(
            (v) => `
              <button
                type="button"
                class="rw__opt${sel.variantId === v.id ? " is-selected" : ""}"
                data-opt-id="${v.id}"
                ${!v.available ? "disabled" : ""}
              >${v.label}</button>
            `
          )
          .join("");

        return `
          <li
            class="rw__item${isPicking ? " is-picking" : ""}${inBag ? " is-added" : ""}"
            data-piece-id="${product.id}"
            data-piece-index="${idx}"
          >
            <div class="rw__item-row">
              <a
                href="#product/${product.id}"
                class="rw__thumb"
                data-open-pdp="${product.id}"
                aria-label="View ${product.name} product details"
              >
                <img
                  src="${product.productImage}"
                  alt="${product.name}"
                  class="${product.isCutout ? "is-cutout-item" : ""}"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                />
                <span class="rw__thumb-num" aria-hidden="true">${idx + 1}</span>
              </a>

              <div class="rw__info">
                <div class="rw__brand-line">
                  <span>${idx === 0 ? "Hero Jersey" : "Drop Accessory"}</span>
                  ${
                    product.badge
                      ? `<span aria-hidden="true">·</span><span class="rw__tag${product.soldOut ? " rw__tag--soldout" : ""}">${product.badge}</span>`
                      : ""
                  }
                </div>
                <a
                  href="#product/${product.id}"
                  class="rw__item-name"
                  data-open-pdp="${product.id}"
                >${product.name}</a>
                <p class="rw__item-price">${formatEur(product.price)}</p>
                ${
                  selectedVariant || inBag
                    ? `<p class="rw__item-picked">
                        ${selectedVariant ? `<strong>${selectedVariant.label}</strong>` : ""}
                        ${inBag ? `<span class="rw__item-state">In bag</span>` : `<span class="rw__item-state">Selected</span>`}
                      </p>`
                    : ""
                }
              </div>

              <button
                type="button"
                class="rw__add-btn"
                data-rw-toggle-picker
                aria-expanded="${isPicking ? "true" : "false"}"
                aria-label="Choose ${product.optionName.toLowerCase()} for ${product.name}"
              >
                ${
                  inBag && !isPicking
                    ? `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M2.5 7.2l3 3 6-6.2"/></svg>`
                    : `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M7 2v10M2 7h10"/></svg>`
                }
              </button>
            </div>

            <div class="rw__picker" data-rw-picker>
              <div class="rw__picker-label">
                <span>Select ${product.optionName}</span>
                <span>${selectedVariant ? selectedVariant.label : "Required"}</span>
              </div>
              <div class="rw__picker-opts">${optsHtml}</div>
              <button
                type="button"
                class="rw__picker-add"
                data-rw-add-piece
                ${!sel.touched || !sel.variantId ? "disabled" : ""}
              >
                ${inBag ? `Add another — ${formatEur(product.price)}` : `Add to bag — ${formatEur(product.price)}`}
              </button>
            </div>
          </li>
        `;
      })
      .join("");

    this.itemsListEl.querySelectorAll(".rw__item").forEach((cardEl) => {
      const productId = cardEl.dataset.pieceId;
      const product = PRODUCT_BY_ID.get(productId);
      const img = cardEl.querySelector(".rw__thumb img");
      if (img && product) {
        img.addEventListener("error", () => {
          img.src = createProductFallbackSvg(product.id, product.name);
        });
      }

      cardEl.querySelectorAll("[data-open-pdp]").forEach((linkEl) => {
        linkEl.addEventListener("click", (e) => {
          e.preventDefault();
          this.forceCloseOverlays();
          navigateToProduct(productId);
        });
      });

      const toggleBtn = cardEl.querySelector("[data-rw-toggle-picker]");
      toggleBtn.addEventListener("click", () => {
        this.engaged = true;
        this.autoplayRequested = false;
        this._updateAutoplayState();

        if (this.isMobile) {
          this._openMobileSheet(cardEl, productId);
        } else {
          const key = `${this.activeLook}:${productId}`;
          if (this.openPickers.has(key)) {
            this.openPickers.delete(key);
          } else {
            this.openPickers.add(key);
          }
          this._renderPanelForLook(this.activeLook);
        }
      });

      this._bindPickerEvents(cardEl, productId);
    });

    this._syncPanelBagState();
  }

  _bindPickerEvents(containerEl, productId) {
    const product = PRODUCT_BY_ID.get(productId);
    if (!product) return;

    const pickerEl = containerEl.querySelector("[data-rw-picker]");
    if (!pickerEl) return;

    pickerEl.querySelectorAll("[data-opt-id]").forEach((optBtn) => {
      optBtn.addEventListener("click", () => {
        const variantId = optBtn.dataset.optId;
        const sel = this._getSelectionState(this.activeLook, productId);
        sel.variantId = variantId;
        sel.touched = true;

        this.engaged = true;
        this.autoplayRequested = false;
        this._updateAutoplayState();

        pickerEl.querySelectorAll("[data-opt-id]").forEach((btn) => {
          btn.classList.toggle("is-selected", btn.dataset.optId === variantId);
        });
        const labelSpan = pickerEl.querySelector(".rw__picker-label span:last-child");
        const variant = product.variants.find((v) => v.id === variantId);
        if (labelSpan && variant) {
          labelSpan.textContent = variant.label;
        }
        const addBtn = pickerEl.querySelector("[data-rw-add-piece]");
        if (addBtn) addBtn.disabled = false;

        this.msgEl.textContent = "";
        this.msgEl.classList.remove("is-ok");

        if (!this.mobileSheetContext) {
          this._renderPanelForLook(this.activeLook);
        }
      });
    });

    const addPieceBtn = pickerEl.querySelector("[data-rw-add-piece]");
    if (addPieceBtn) {
      addPieceBtn.addEventListener("click", () => {
        const sel = this._getSelectionState(this.activeLook, productId);
        if (!sel.touched || !sel.variantId) return;

        const ok = storeBag.add(sel.variantId, 1);
        if (!ok) {
          this.msgEl.textContent =
            this.dataset.msgError || "Couldn’t add to bag. Please try again.";
          return;
        }

        const variant = product.variants.find((v) => v.id === sel.variantId);
        showBagToast(`Added ${product.name} (${variant ? variant.label : ""}) to bag`);

        const key = `${this.activeLook}:${productId}`;
        this.openPickers.delete(key);
        if (this.mobileSheetContext) {
          this._closeMobileSheet();
        }
        this._renderPanelForLook(this.activeLook);
      });
    }
  }

  _syncPanelBagState() {
    const look = this.looks[this.activeLook];
    const pricing = getPackPricing(look);

    let addedCount = 0;
    look.pieces.forEach((piece) => {
      const inBag = storeBag.hasProduct(piece.productId);
      if (inBag) addedCount += 1;
      const cardEl = this.itemsListEl.querySelector(
        `[data-piece-id="${piece.productId}"]`
      );
      if (cardEl) {
        cardEl.classList.toggle("is-added", inBag);
      }
    });

    const isComplete = addedCount === look.pieces.length;
    this.addPackBtn.classList.toggle("is-complete", isComplete);
    if (isComplete) {
      this.ctaDesktopEl.textContent = "Pack in your bag";
      this.ctaMobileEl.textContent = "Pack in your bag";
    } else {
      this.ctaDesktopEl.textContent = "Add pack to bag";
      this.ctaMobileEl.textContent = `Add pack — ${pricing.packFormatted}`;
    }
  }

  _handleAddPack() {
    this.engaged = true;
    this.autoplayRequested = false;
    this._updateAutoplayState();

    const look = this.looks[this.activeLook];
    const missingItems = [];
    const readyVariantIds = [];

    for (const piece of look.pieces) {
      const product = PRODUCT_BY_ID.get(piece.productId);
      if (!product) continue;

      if (storeBag.hasProduct(product.id)) {
        continue;
      }

      const sel = this._getSelectionState(this.activeLook, product.id);
      if (!sel.touched || !sel.variantId) {
        missingItems.push(product);
      } else {
        readyVariantIds.push(sel.variantId);
      }
    }

    if (missingItems.length === 0 && readyVariantIds.length === 0) {
      openBagDialog();
      return;
    }

    if (missingItems.length > 0) {
      const names = missingItems.map((p) => p.name).join(", ");
      const template = this.dataset.msgChoose || "Pick a size for: [items]";
      this.msgEl.textContent = template.replace("[items]", names);
      this.msgEl.classList.remove("is-ok");

      if (this.isMobile) {
        const firstMissing = missingItems[0];
        const cardEl = this.itemsListEl.querySelector(
          `[data-piece-id="${firstMissing.id}"]`
        );
        if (cardEl) {
          cardEl.scrollIntoView({
            behavior: this.prefersReducedMotion ? "auto" : "smooth",
            block: "nearest",
          });
          this._openMobileSheet(cardEl, firstMissing.id);
        }
      } else {
        for (const prod of missingItems) {
          this.openPickers.add(`${this.activeLook}:${prod.id}`);
        }
        this._renderPanelForLook(this.activeLook);
        this.msgEl.textContent = template.replace("[items]", names);
        const firstCard = this.itemsListEl.querySelector(
          `[data-piece-id="${missingItems[0].id}"]`
        );
        if (firstCard) {
          firstCard.scrollIntoView({
            behavior: this.prefersReducedMotion ? "auto" : "smooth",
            block: "nearest",
          });
        }
      }
      return;
    }

    const addedCount = storeBag.addMany(readyVariantIds);
    if (addedCount > 0) {
      for (const piece of look.pieces) {
        this.openPickers.delete(`${this.activeLook}:${piece.productId}`);
      }
      this._renderPanelForLook(this.activeLook);
      this.msgEl.textContent = "Jersey + case pack added — 10% savings applied in bag.";
      this.msgEl.classList.add("is-ok");
      showBagToast(`Added ${look.name} pack to bag`);
    } else {
      this.msgEl.textContent =
        this.dataset.msgError || "Couldn’t add to bag. Please try again.";
    }
  }

  _openMobileSheet(cardEl, productId) {
    this._closeMobileSheet(true);
    const product = PRODUCT_BY_ID.get(productId);
    const pickerEl = cardEl.querySelector("[data-rw-picker]");
    if (!product || !pickerEl) return;

    this.sheetTitleEl.textContent = product.name;
    this.sheetPriceEl.textContent = formatEur(product.price);
    this.sheetBodyEl.appendChild(pickerEl);

    this.mobileSheetContext = { cardEl, pickerEl, productId };
    this.sheetHost.setAttribute("aria-hidden", "false");
    window.requestAnimationFrame(() => {
      this.sheetHost.classList.add("is-open");
    });
  }

  _closeMobileSheet(immediate = false) {
    if (!this.mobileSheetContext) return;
    const { cardEl, pickerEl } = this.mobileSheetContext;
    this.mobileSheetContext = null;

    this.sheetHost.classList.remove("is-open");
    this.sheetHost.setAttribute("aria-hidden", "true");

    const restore = () => {
      if (cardEl && cardEl.isConnected && pickerEl) {
        cardEl.appendChild(pickerEl);
      }
      this._renderPanelForLook(this.activeLook);
    };

    if (immediate || this.prefersReducedMotion) {
      restore();
    } else {
      window.setTimeout(restore, 220);
    }
  }

  /* ------------------------------------------------------------------------
     "View Look" Lightbox Popup (.rw__lb) — Jersey Chest Pin 1 Only
     ------------------------------------------------------------------------ */

  _openLightbox() {
    if (this.zoomed) return;
    this.zoomed = true;
    this._updateAutoplayState();

    const frontBody = this.bodyEls.find((b) => b.classList.contains("is-front"));
    const frontImg = frontBody ? frontBody.querySelector("img") : null;
    const fromRect = frontImg ? frontImg.getBoundingClientRect() : null;

    this.lbEl.hidden = false;
    this.lbEl.classList.remove("pins-ready");
    this._renderLightboxContent(false);

    this.classList.add("is-zoomed");
    document.body.style.overflow = "hidden";

    if (fromRect && fromRect.width > 0 && !this.prefersReducedMotion) {
      const toRect = this.lbFigureEl.getBoundingClientRect();
      const dx = fromRect.left - toRect.left;
      const dy = fromRect.top - toRect.top;
      const sx = fromRect.width / Math.max(1, toRect.width);
      const sy = fromRect.height / Math.max(1, toRect.height);

      this.lbFigureEl.style.transition = "none";
      this.lbFigureEl.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0) scale(${sx.toFixed(4)}, ${sy.toFixed(4)})`;
      void this.lbFigureEl.offsetWidth;

      this.lbFigureEl.style.transition =
        "transform 950ms cubic-bezier(0.16, 1, 0.3, 1)";
      this.lbFigureEl.style.transform = "translate3d(0, 0, 0) scale(1, 1)";

      if (this.lbPinTimer) clearTimeout(this.lbPinTimer);
      this.lbPinTimer = window.setTimeout(() => {
        if (this.zoomed) this.lbEl.classList.add("pins-ready");
      }, 360);
    } else {
      this.lbFigureEl.style.transition = "none";
      this.lbFigureEl.style.transform = "none";
      this.lbEl.classList.add("pins-ready");
    }

    this.lbCloseBtn.focus({ preventScroll: true });
  }

  _closeLightbox() {
    if (!this.zoomed) return;
    if (this.lbPinTimer) clearTimeout(this.lbPinTimer);
    this.lbEl.classList.remove("pins-ready");

    const finishClose = () => {
      this.zoomed = false;
      this.classList.remove("is-zoomed");
      this.lbEl.hidden = true;
      this.lbFigureEl.style.transition = "";
      this.lbFigureEl.style.transform = "";
      document.body.style.overflow = "";
      this._updateAutoplayState();
    };

    const frontBody = this.bodyEls.find((b) => b.classList.contains("is-front"));
    const frontImg = frontBody ? frontBody.querySelector("img") : null;
    const targetRect = frontImg ? frontImg.getBoundingClientRect() : null;

    if (targetRect && targetRect.width > 0 && !this.prefersReducedMotion) {
      const fromRect = this.lbFigureEl.getBoundingClientRect();
      const dx = targetRect.left - fromRect.left;
      const dy = targetRect.top - fromRect.top;
      const sx = targetRect.width / Math.max(1, fromRect.width);
      const sy = targetRect.height / Math.max(1, fromRect.height);

      this.lbFigureEl.style.transition =
        "transform 420ms cubic-bezier(0.32, 0.72, 0, 1)";
      this.lbFigureEl.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0) scale(${sx.toFixed(4)}, ${sy.toFixed(4)})`;
      window.setTimeout(finishClose, 380);
    } else {
      finishClose();
    }
  }

  _renderLightboxContent(retriggerPins = true) {
    const look = this.looks[this.activeLook];
    const heroJersey = PRODUCT_BY_ID.get(look.pin.productId);
    if (!heroJersey) return;

    this.lbKickerEl.textContent = `Look ${look.indexLabel} / ${String(this.n).padStart(2, "0")} — ${look.name}`;
    this.lbImgEl.src = look.cutoutImage || look.heroImage;
    this.lbImgEl.alt = `Tout le Quartier Look ${look.indexLabel} — ${look.name}`;

    // Single Pin 1 strictly on the hero jersey chest (50%, 34%)
    this.lbPinsEl.innerHTML = `
      <div
        class="rw__pin is-active"
        style="left: ${look.pin.x}%; top: ${look.pin.y}%;"
      >
        <button
          type="button"
          class="rw__pin-btn"
          data-pin-product="${heroJersey.id}"
          aria-label="Pin 1: ${heroJersey.name}, ${formatEur(heroJersey.price)}"
        >1</button>
        <div class="rw__pin-tip" aria-hidden="true">
          <span class="rw__pin-tip-name">${heroJersey.name}</span>
          <span class="rw__pin-tip-price">${formatEur(heroJersey.price)}</span>
        </div>
      </div>
    `;

    const pinBtn = this.lbPinsEl.querySelector(".rw__pin-btn");
    if (pinBtn) {
      pinBtn.addEventListener("click", () => {
        this._handleHeroPinClick(heroJersey.id);
      });
    }

    this.lbMobileNameEl.textContent = `1. ${heroJersey.name}`;
    this.lbMobilePriceEl.textContent = `Tout le Quartier · ${formatEur(heroJersey.price)}`;

    if (retriggerPins) {
      this.lbEl.classList.remove("pins-ready");
      window.requestAnimationFrame(() => {
        if (this.zoomed) this.lbEl.classList.add("pins-ready");
      });
    }
  }

  _handleHeroPinClick(productId) {
    if (this.isMobile) {
      const cardEl = this.itemsListEl.querySelector(`[data-piece-id="${productId}"]`);
      if (cardEl) this._openMobileSheet(cardEl, productId);
      return;
    }

    const key = `${this.activeLook}:${productId}`;
    if (!storeBag.hasProduct(productId)) {
      this.openPickers.add(key);
      this._renderPanelForLook(this.activeLook);
    }

    const cardEl = this.itemsListEl.querySelector(`[data-piece-id="${productId}"]`);
    if (!cardEl) return;

    this.itemsListEl.querySelectorAll(".rw__item").forEach((el) => {
      el.classList.remove("is-highlighted");
    });
    cardEl.classList.add("is-highlighted");
    cardEl.scrollIntoView({
      behavior: this.prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
    });

    if (this.highlightTimer) clearTimeout(this.highlightTimer);
    this.highlightTimer = window.setTimeout(() => {
      cardEl.classList.remove("is-highlighted");
    }, 1800);
  }
}

storeBag.load();

if (!customElements.get("runway-section")) {
  customElements.define("runway-section", RunwaySection);
}

/* --------------------------------------------------------------------------
   Clean Editorial Product Card Builder (Used in Catalog, PDP Related, Project)
   -------------------------------------------------------------------------- */

function buildEditorialCardHtml(product) {
  const quickOptionsMarkup = product.soldOut
    ? ""
    : product.variants
        .map(
          (v) => `
            <button
              type="button"
              class="tlq-quick-opt"
              data-quick-add="${v.id}"
              data-quick-prod="${product.id}"
            >${v.label}</button>
          `
        )
        .join("");

  return `
    <article class="tlq-card" data-catalog-card="${product.id}">
      <div class="tlq-card__media-wrap">
        <a
          href="#product/${product.id}"
          class="tlq-card__media-link"
          data-open-pdp="${product.id}"
          aria-label="Open ${product.name}"
        >
          <img
            src="${product.productImage}"
            alt="${product.name}"
            class="${product.isCutout ? "is-cutout-item" : ""}"
            loading="lazy"
            referrerpolicy="no-referrer"
          />
        </a>

        ${
          !product.soldOut
            ? `
              <div class="tlq-card__quick-tray" data-quick-tray>
                <p class="tlq-card__quick-label">Quick add · Select ${product.optionName}</p>
                <div class="tlq-card__quick-opts">${quickOptionsMarkup}</div>
              </div>
              <button
                type="button"
                class="tlq-card__quick-btn"
                data-quick-toggle="${product.id}"
                aria-expanded="false"
                aria-label="Quick add ${product.name} to bag"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                  <path d="M7 2v10M2 7h10" />
                </svg>
              </button>
            `
            : `
              <button
                type="button"
                class="tlq-card__quick-btn"
                disabled
                aria-label="${product.name} is sold out"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                  <path d="M2 6h8" />
                </svg>
              </button>
            `
        }
      </div>

      <div class="tlq-card__meta">
        <span>Tout le Quartier · ${product.category}</span>
        ${
          product.badge
            ? `<span class="tlq-card__tag${product.soldOut ? " tlq-card__tag--soldout" : ""}">${product.badge}</span>`
            : ""
        }
      </div>

      <div class="tlq-card__row">
        <h3 class="tlq-card__title">
          <a href="#product/${product.id}" data-open-pdp="${product.id}">${product.name}</a>
        </h3>
        <p class="tlq-card__price">${formatEur(product.price)}</p>
      </div>
    </article>
  `;
}

function wireEditorialCards(container) {
  if (!container) return;

  container.querySelectorAll(".tlq-card").forEach((card) => {
    const prodId = card.dataset.catalogCard;
    const product = PRODUCT_BY_ID.get(prodId);
    const img = card.querySelector("img");
    if (img && product) {
      img.addEventListener("error", () => {
        img.src = createProductFallbackSvg(product.id, product.name);
      });
    }
  });

  container.querySelectorAll("[data-open-pdp]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navigateToProduct(link.dataset.openPdp);
    });
  });

  container.querySelectorAll("[data-quick-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".tlq-card");
      if (!card) return;
      const willOpen = !card.classList.contains("is-quick-open");

      container.querySelectorAll(".tlq-card.is-quick-open").forEach((openCard) => {
        openCard.classList.remove("is-quick-open");
        const openBtn = openCard.querySelector("[data-quick-toggle]");
        if (openBtn) openBtn.setAttribute("aria-expanded", "false");
      });

      if (willOpen) {
        card.classList.add("is-quick-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  container.querySelectorAll("[data-quick-add]").forEach((optBtn) => {
    optBtn.addEventListener("click", () => {
      const variantId = optBtn.dataset.quickAdd;
      const rec = VARIANT_INDEX.get(variantId);
      if (!rec) return;

      if (storeBag.add(variantId, 1)) {
        showBagToast(`Added ${rec.product.name} (${rec.variant.label}) to bag`);
        const card = optBtn.closest(".tlq-card");
        if (card) {
          card.classList.remove("is-quick-open");
          const toggle = card.querySelector("[data-quick-toggle]");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Full Catalog Grid Controller (#full-catalog)
   -------------------------------------------------------------------------- */

let activeCategory = "All";

function renderCatalogFilters() {
  const container = document.querySelector("[data-catalog-filters]");
  if (!container) return;

  const totalCount = TLQ_PRODUCTS.length;
  const jerseyCount = TLQ_PRODUCTS.filter((p) => p.category === "Jerseys").length;
  const accessoryCount = TLQ_PRODUCTS.filter((p) => p.category === "Accessories").length;

  const tabs = [
    { key: "All", label: `All (${totalCount})` },
    { key: "Jerseys", label: `Jerseys (${jerseyCount})` },
    { key: "Accessories", label: `Accessories (${accessoryCount})` },
  ];

  container.innerHTML = tabs
    .map(
      (tab) => `
        <button
          type="button"
          role="tab"
          class="tlq-filter-btn"
          aria-selected="${tab.key === activeCategory ? "true" : "false"}"
          data-category="${tab.key}"
        >${tab.label}</button>
      `
    )
    .join("");

  container.querySelectorAll("[data-category]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderCatalogFilters();
      renderCatalogGrid();
    });
  });
}

function renderCatalogGrid() {
  const grid = document.querySelector("[data-catalog-grid]");
  if (!grid) return;

  const filtered =
    activeCategory === "All"
      ? TLQ_PRODUCTS
      : TLQ_PRODUCTS.filter((p) => p.category === activeCategory);

  grid.innerHTML = filtered.map(buildEditorialCardHtml).join("");
  wireEditorialCards(grid);
}

/* --------------------------------------------------------------------------
   Dedicated Product Detail Page (#view-product / #product/<id>)
   -------------------------------------------------------------------------- */

let pdpSelectedVariantId = null;
let pdpGalleryMode = "studio"; // "studio" | "lookbook"

function renderProductDetailPage(productId) {
  const product = PRODUCT_BY_ID.get(productId);
  const pdpSection = document.getElementById("product-detail-view");
  if (!product || !pdpSection) {
    navigateToHome();
    return;
  }

  const runwayIdx = RUNWAY_INDEX_BY_PRODUCT.get(product.id);
  const hasLookbookToggle = typeof runwayIdx === "number";
  pdpGalleryMode = "studio";

  const firstAvail = product.variants.find((v) => v.available);
  pdpSelectedVariantId = firstAvail ? firstAvail.id : null;

  const related = TLQ_PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === "Jerseys" && !p.soldOut
  ).slice(0, 4);

  const pillsHtml = product.variants
    .map(
      (v) => `
        <button
          type="button"
          class="tlq-pdp__pill${pdpSelectedVariantId === v.id ? " is-selected" : ""}"
          data-pdp-opt="${v.id}"
          ${!v.available ? "disabled" : ""}
        >${v.label}</button>
      `
    )
    .join("");

  const sizeGuideAccordion =
    product.category === "Jerseys"
      ? `
        <details class="tlq-acc">
          <summary>
            <span>Size Guide (Oversized Boxy Fit)</span>
            <span class="tlq-acc__plus" aria-hidden="true">+</span>
          </summary>
          <div class="tlq-acc__body">
            <table class="tlq-size-table">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Chest (cm)</th>
                  <th>Length (cm)</th>
                  <th>Shoulder (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>S</td><td>56</td><td>70</td><td>49</td></tr>
                <tr><td>M</td><td>59</td><td>73</td><td>52</td></tr>
                <tr><td>L</td><td>62</td><td>76</td><td>55</td></tr>
                <tr><td>XL</td><td>65</td><td>79</td><td>58</td></tr>
              </tbody>
            </table>
            <p class="tlq-size-note">
              Cut relaxed for a boxy terrace drape. Take your usual size for the runway fit, or size down for a closer silhouette.
            </p>
          </div>
        </details>
      `
      : `
        <details class="tlq-acc">
          <summary>
            <span>Compatibility &amp; Fit</span>
            <span class="tlq-acc__plus" aria-hidden="true">+</span>
          </summary>
          <div class="tlq-acc__body">
            Precision-molded for iPhone 15 and iPhone 16 series with full access to action button, USB-C port, and magnetic wireless charging.
          </div>
        </details>
      `;

  pdpSection.innerHTML = `
    <div class="tlq-pdp__inner">
      <div class="tlq-pdp__crumb">
        <button type="button" class="tlq-back-btn" data-nav="home">
          <span aria-hidden="true">←</span> Back to Runway &amp; Catalog
        </button>
        <span class="tlq-crumb-trail">Home / ${product.category} / ${product.name}</span>
      </div>

      <div class="tlq-pdp__grid">
        <div class="tlq-pdp__gallery">
          <div class="tlq-pdp__stage">
            <img
              src="${product.productImage}"
              alt="${product.name}"
              class="view-studio${product.isCutout ? " is-cutout-item" : ""}"
              data-pdp-main-img
              referrerpolicy="no-referrer"
            />
          </div>

          ${
            hasLookbookToggle
              ? `
                <div class="tlq-pdp__tabs" role="tablist" aria-label="Product gallery views">
                  <button
                    type="button"
                    role="tab"
                    class="tlq-pdp__tab"
                    aria-selected="true"
                    data-pdp-gallery="studio"
                  >Studio Cutout View</button>
                  <button
                    type="button"
                    role="tab"
                    class="tlq-pdp__tab"
                    aria-selected="false"
                    data-pdp-gallery="lookbook"
                  >Runway Lookbook View</button>
                </div>
              `
              : ""
          }
        </div>

        <div class="tlq-pdp__info">
          <p class="tlq-pdp__vendor">TOUT LE QUARTIER</p>
          <div class="tlq-pdp__title-row">
            <h1 class="tlq-pdp__title">${product.name}</h1>
            ${
              product.badge
                ? `<span class="tlq-pdp__badge${product.soldOut ? " tlq-pdp__badge--soldout" : ""}">${product.badge}</span>`
                : ""
            }
          </div>
          <p class="tlq-pdp__price">${formatEur(product.price)}</p>
          <p class="tlq-pdp__desc">${product.description}</p>

          <div class="tlq-pdp__options">
            <div class="tlq-pdp__opt-head">
              <span class="tlq-pdp__opt-label">
                ${product.optionName}:
                <strong data-pdp-selected-label>${firstAvail ? firstAvail.label : "Unavailable"}</strong>
              </span>
            </div>
            <div class="tlq-pdp__pills">${pillsHtml}</div>
          </div>

          <div class="tlq-pdp__actions">
            <button
              type="button"
              class="tlq-pdp__cta"
              data-pdp-add
              ${product.soldOut ? "disabled" : ""}
            >
              ${product.soldOut ? "Sold out" : `Add to bag — ${formatEur(product.price)}`}
            </button>
            ${
              hasLookbookToggle
                ? `<button type="button" class="tlq-pdp__secondary" data-pdp-runway="${runwayIdx}">View on 3D Runway</button>`
                : ""
            }
          </div>

          <div class="tlq-pdp__accordions">
            ${sizeGuideAccordion}
            <details class="tlq-acc" open>
              <summary>
                <span>Product Specifications</span>
                <span class="tlq-acc__plus" aria-hidden="true">+</span>
              </summary>
              <div class="tlq-acc__body">
                <ul class="tlq-specs">
                  ${product.details.map((line) => `<li>${line}</li>`).join("")}
                </ul>
              </div>
            </details>
            <details class="tlq-acc">
              <summary>
                <span>Shipping &amp; Delivery</span>
                <span class="tlq-acc__plus" aria-hidden="true">+</span>
              </summary>
              <div class="tlq-acc__body">
                <ul class="tlq-specs">
                  <li>United States: 1–3 business days processing · 3–5 business days shipping.</li>
                  <li>Canada: 3–4 business days processing · 3–7 business days shipping.</li>
                  <li>International (outside US &amp; Canada): Pre-order only · 3–4 business days processing after pre-order · 1–3 weeks transit.</li>
                </ul>
                <p class="tlq-size-note">
                  <a href="#shipping-policy" data-nav="shipping" class="tlq-link-inline">
                    Read full Shipping Policy →
                  </a>
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>

      <div class="tlq-pdp__related">
        <div class="tlq-pdp__related-head">
          <h2 class="tlq-pdp__related-title">Complete the Collection</h2>
          <a href="#full-catalog" data-nav="catalog" class="tlq-link-inline">View all 12 items</a>
        </div>
        <div class="tlq-pdp__related-grid" data-pdp-related>
          ${related.map(buildEditorialCardHtml).join("")}
        </div>
      </div>
    </div>
  `;

  // Image error fallback
  const mainImg = pdpSection.querySelector("[data-pdp-main-img]");
  if (mainImg) {
    mainImg.addEventListener("error", () => {
      mainImg.src = createProductFallbackSvg(product.id, product.name);
    });
  }

  // Gallery switcher tabs (Studio Cutout View vs Runway Lookbook View)
  pdpSection.querySelectorAll("[data-pdp-gallery]").forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      const mode = tabBtn.dataset.pdpGallery;
      pdpGalleryMode = mode;
      pdpSection.querySelectorAll("[data-pdp-gallery]").forEach((b) => {
        b.setAttribute("aria-selected", String(b.dataset.pdpGallery === mode));
      });
      if (mainImg) {
        mainImg.src = mode === "lookbook" ? product.modelImage : product.productImage;
        mainImg.classList.toggle("view-studio", mode === "studio");
        mainImg.classList.toggle("view-lookbook", mode === "lookbook");
      }
    });
  });

  // Option selection pills
  const selectedLabelEl = pdpSection.querySelector("[data-pdp-selected-label]");
  pdpSection.querySelectorAll("[data-pdp-opt]").forEach((pillBtn) => {
    pillBtn.addEventListener("click", () => {
      const varId = pillBtn.dataset.pdpOpt;
      pdpSelectedVariantId = varId;
      const variant = product.variants.find((v) => v.id === varId);
      if (selectedLabelEl && variant) {
        selectedLabelEl.textContent = variant.label;
      }
      pdpSection.querySelectorAll("[data-pdp-opt]").forEach((b) => {
        b.classList.toggle("is-selected", b.dataset.pdpOpt === varId);
      });
    });
  });

  // Add to bag CTA
  const addBtn = pdpSection.querySelector("[data-pdp-add]");
  if (addBtn && !product.soldOut) {
    addBtn.addEventListener("click", () => {
      if (!pdpSelectedVariantId) return;
      if (storeBag.add(pdpSelectedVariantId, 1)) {
        const rec = VARIANT_INDEX.get(pdpSelectedVariantId);
        showBagToast(`Added ${product.name} (${rec ? rec.variant.label : ""}) to bag`);
      }
    });
  }

  // View on 3D Runway button
  const runwayBtn = pdpSection.querySelector("[data-pdp-runway]");
  if (runwayBtn) {
    runwayBtn.addEventListener("click", () => {
      const targetIdx = Number(runwayBtn.dataset.pdpRunway);
      navigateToHome(false);
      const runwayEl = document.getElementById("Runway-toutlequartier__the_runway");
      if (runwayEl && typeof runwayEl.goToLook === "function") {
        runwayEl.goToLook(targetIdx, true);
      }
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    });
  }

  // Internal nav & related cards
  bindInternalNavLinks(pdpSection);
  wireEditorialCards(pdpSection.querySelector("[data-pdp-related]"));
}

/* --------------------------------------------------------------------------
   TLQPROJECT Archive Highlights Grid
   -------------------------------------------------------------------------- */

function renderProjectHighlights() {
  const container = document.querySelector("[data-project-thumbs]");
  if (!container) return;

  const featuredIds = ["cameroon-black", "gabon-white", "congo-blue", "tlq-iphone-case"];
  const items = featuredIds.map((id) => PRODUCT_BY_ID.get(id)).filter(Boolean);
  container.innerHTML = items.map(buildEditorialCardHtml).join("");
  wireEditorialCards(container);
}

/* --------------------------------------------------------------------------
   Client-Side Hash View Router (#runway, #full-catalog, #product/<id>, #tlqproject, #shipping-policy)
   -------------------------------------------------------------------------- */

const viewHomeEl = document.getElementById("view-home");
const viewProductWrapEl = document.getElementById("view-product");
const productDetailSectionEl = document.getElementById("product-detail-view");
const viewProjectWrapEl = document.getElementById("view-project");
const projectSectionEl = document.getElementById("tlq-project-view");
const viewShippingWrapEl = document.getElementById("view-shipping");
const shippingSectionEl = document.getElementById("tlq-shipping-view");
const viewLoginWrapEl = document.getElementById("view-login");
const loginSectionEl = document.getElementById("tlq-login-view");

function updateHeaderNavState(activeKey) {
  document.querySelectorAll(".site-header nav a").forEach((link) => {
    const key = link.dataset.nav;
    if (key === activeKey) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function showView(viewName) {
  const runwayEl = document.getElementById("Runway-toutlequartier__the_runway");
  if (runwayEl && typeof runwayEl.forceCloseOverlays === "function") {
    runwayEl.forceCloseOverlays();
  }

  viewHomeEl.hidden = viewName !== "home";
  viewProductWrapEl.hidden = viewName !== "product";
  productDetailSectionEl.hidden = viewName !== "product";
  viewProjectWrapEl.hidden = viewName !== "project";
  projectSectionEl.hidden = viewName !== "project";
  if (viewShippingWrapEl) viewShippingWrapEl.hidden = viewName !== "shipping";
  if (shippingSectionEl) shippingSectionEl.hidden = viewName !== "shipping";
  if (viewLoginWrapEl) viewLoginWrapEl.hidden = viewName !== "login";
  if (loginSectionEl) loginSectionEl.hidden = viewName !== "login";

  if (viewName === "home") {
    updateHeaderNavState("home");
    if (runwayEl && typeof runwayEl._updateAutoplayState === "function") {
      runwayEl._updateAutoplayState();
    }
  } else if (viewName === "project") {
    updateHeaderNavState("project");
  } else if (viewName === "shipping") {
    updateHeaderNavState("shipping");
  } else {
    updateHeaderNavState("");
  }
}

function scrollToTopSmooth() {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

function navigateToHome(scrollToCatalog = false) {
  const targetHash = scrollToCatalog ? "#full-catalog" : "#runway";
  if (window.location.hash !== targetHash) {
    window.location.hash = targetHash;
  } else {
    applyRouteFromHash();
  }
}

function navigateToProduct(productId) {
  if (!PRODUCT_BY_ID.has(productId)) return;
  const targetHash = `#product/${productId}`;
  if (window.location.hash !== targetHash) {
    window.location.hash = targetHash;
  } else {
    applyRouteFromHash();
  }
}

function navigateToProject() {
  if (window.location.hash !== "#tlqproject") {
    window.location.hash = "#tlqproject";
  } else {
    applyRouteFromHash();
  }
}

function navigateToShipping() {
  if (window.location.hash !== "#shipping-policy") {
    window.location.hash = "#shipping-policy";
  } else {
    applyRouteFromHash();
  }
}

function navigateToLogin() {
  if (window.location.hash !== "#login") {
    window.location.hash = "#login";
  } else {
    applyRouteFromHash();
  }
}

function applyRouteFromHash() {
  const raw = (window.location.hash || "#runway").trim();

  if (raw.startsWith("#product/")) {
    const productId = decodeURIComponent(raw.slice("#product/".length));
    if (PRODUCT_BY_ID.has(productId)) {
      renderProductDetailPage(productId);
      showView("product");
      scrollToTopSmooth();
      return;
    }
  }

  if (raw === "#tlqproject") {
    showView("project");
    scrollToTopSmooth();
    return;
  }

  if (raw === "#shipping-policy" || raw === "#shipping") {
    showView("shipping");
    scrollToTopSmooth();
    return;
  }

  if (raw === "#login" || raw === "#signin") {
    showView("login");
    window.dispatchEvent(new CustomEvent("tlq:login-view-open"));
    scrollToTopSmooth();
    return;
  }

  showView("home");

  if (raw === "#full-catalog" || raw === "#catalog") {
    updateHeaderNavState("catalog");
    const catalogEl = document.getElementById("full-catalog");
    if (catalogEl) {
      window.requestAnimationFrame(() => {
        catalogEl.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      });
    }
  } else {
    scrollToTopSmooth();
  }
}

function bindInternalNavLinks(root = document) {
  root.querySelectorAll("[data-nav]").forEach((el) => {
    if (el.dataset.navBound === "true") return;
    el.dataset.navBound = "true";
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const target = el.dataset.nav;
      if (target === "home") {
        navigateToHome(false);
      } else if (target === "catalog") {
        navigateToHome(true);
      } else if (target === "project") {
        navigateToProject();
      } else if (target === "shipping") {
        navigateToShipping();
      } else if (target === "contact") {
        navigateToShipping();
        window.requestAnimationFrame(() => {
          const helpEl = document.getElementById("tlq-help-heading");
          if (helpEl) {
            helpEl.scrollIntoView({
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth",
              block: "start",
            });
          }
        });
      }
    });
  });
}

function wireShippingPolicyInteractions() {
  const filtersRoot = document.querySelector("[data-shipping-filters]");
  const gridEl = document.querySelector("[data-shipping-grid]");
  if (filtersRoot && gridEl) {
    const buttons = Array.from(filtersRoot.querySelectorAll("[data-shipping-filter]"));
    const cards = Array.from(gridEl.querySelectorAll("[data-shipping-region]"));
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selected = btn.dataset.shippingFilter || "all";
        buttons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-selected", active ? "true" : "false");
        });
        cards.forEach((card) => {
          const match = selected === "all" || card.dataset.shippingRegion === selected;
          card.hidden = !match;
        });
        gridEl.classList.toggle("is-single", selected !== "all");
      });
    });
  }

  document.querySelectorAll("[data-copy-email]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const email = btn.dataset.copyEmail || "TLQ.projectparis@gmail.com";
      const original = btn.textContent;
      try {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
          await navigator.clipboard.writeText(email);
        }
        btn.textContent = "Email Copied";
        showBagToast(`Copied ${email}`);
      } catch {
        showBagToast(`Contact: ${email}`);
      }
      window.setTimeout(() => {
        btn.textContent = original;
      }, 1800);
    });
  });
}

function wireAffiliateProgramInteractions() {
  const AFFILIATE_KEY = "tlq-affiliate-applications-v1";
  const applyPanel = document.querySelector('[data-affiliate-panel="apply"]');
  const signinPanel = document.querySelector('[data-affiliate-panel="signin"]');
  const successPanel = document.querySelector('[data-affiliate-panel="success"]');
  const applyForm = document.getElementById("tlq-affiliate-form");
  const signinForm = document.getElementById("tlq-affiliate-signin-form");
  const applyErrEl = document.querySelector("[data-affiliate-error]");
  const signinErrEl = document.querySelector("[data-affiliate-signin-error]");
  const receiptEl = document.querySelector("[data-affiliate-receipt]");
  const successTitleEl = document.querySelector("[data-affiliate-success-title]");
  const copyCodeBtn = document.querySelector("[data-affiliate-copy-code]");
  const resetBtn = document.querySelector("[data-affiliate-reset]");

  if (!applyPanel || !signinPanel || !successPanel || !applyForm) return;

  let activeReferralCode = "";

  function loadApplications() {
    try {
      const raw = window.localStorage.getItem(AFFILIATE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveApplication(entry) {
    try {
      const list = loadApplications().filter(
        (item) => item.email.toLowerCase() !== entry.email.toLowerCase()
      );
      list.unshift(entry);
      window.localStorage.setItem(AFFILIATE_KEY, JSON.stringify(list.slice(0, 20)));
    } catch {
      // Ignore storage quota issues
    }
  }

  function showPanel(mode) {
    applyPanel.hidden = mode !== "apply";
    signinPanel.hidden = mode !== "signin";
    successPanel.hidden = mode !== "success";
    if (applyErrEl) applyErrEl.hidden = true;
    if (signinErrEl) signinErrEl.hidden = true;
  }

  function renderReceipt(record, headingText) {
    activeReferralCode = record.referralCode;
    if (successTitleEl) {
      successTitleEl.textContent = headingText || `Welcome Home, ${record.name}`;
    }
    const channelSummary =
      record.channels.length > 0
        ? record.channels.map((c) => `${c.platform}: ${c.handle}`).join(" · ")
        : "Not provided";

    if (receiptEl) {
      receiptEl.replaceChildren();
      const rows = [
        ["Application Reference", record.reference],
        ["Applicant", record.name],
        ["Email Address", record.email],
        ["PayPal Payout Email", record.paypalEmail || "To be added later"],
        ["Channels", channelSummary],
        ["Preview Referral Code", record.referralCode],
      ];
      rows.forEach(([label, value]) => {
        const row = document.createElement("div");
        row.className = "tlq-affiliate__receipt-row";
        const dt = document.createElement("dt");
        dt.textContent = label;
        const dd = document.createElement("dd");
        dd.textContent = value;
        row.append(dt, dd);
        receiptEl.appendChild(row);
      });
    }
    showPanel("success");
  }

  document.querySelectorAll("[data-affiliate-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      showPanel(btn.dataset.affiliateMode || "apply");
    });
  });

  applyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (applyErrEl) applyErrEl.hidden = true;

    const formData = new FormData(applyForm);
    const email = String(formData.get("email") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const paypalEmail = String(formData.get("paypalEmail") || "").trim();
    const rawChannels = [
      { platform: "Facebook", value: String(formData.get("facebook") || "").trim() },
      { platform: "Instagram", value: String(formData.get("instagram") || "").trim() },
      { platform: "Tik Tok", value: String(formData.get("tiktok") || "").trim() },
      { platform: "Snapchat", value: String(formData.get("snapchat") || "").trim() },
    ];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      if (applyErrEl) {
        applyErrEl.textContent = "Please enter a valid email address.";
        applyErrEl.hidden = false;
      }
      return;
    }

    if (!name) {
      if (applyErrEl) {
        applyErrEl.textContent = "Please enter your name.";
        applyErrEl.hidden = false;
      }
      return;
    }

    if (paypalEmail && !emailRegex.test(paypalEmail)) {
      if (applyErrEl) {
        applyErrEl.textContent = "Please enter a valid PayPal email address, or leave the field blank.";
        applyErrEl.hidden = false;
      }
      return;
    }

    const invalidChannel = rawChannels.find(
      (c) => c.value && (/\s/.test(c.value) || c.value.includes("@"))
    );
    if (invalidChannel) {
      if (applyErrEl) {
        applyErrEl.textContent = `Please enter your ${invalidChannel.platform} username without spaces or the @ symbol.`;
        applyErrEl.hidden = false;
      }
      return;
    }

    const channels = rawChannels
      .filter((c) => c.value.length > 0)
      .map((c) => ({ platform: c.platform, handle: c.value }));

    const slug = name
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 6) || "MEMBER";
    const num = Math.floor(1000 + Math.random() * 9000);
    const record = {
      reference: `#TLQ-AFF-${num}`,
      name,
      email,
      paypalEmail,
      channels,
      referralCode: `TLQ-${slug}${String(num).slice(-2)}`,
      submittedAt: new Date().toISOString(),
    };

    saveApplication(record);
    renderReceipt(record, `Welcome Home, ${record.name}`);
    showBagToast("Affiliate application submitted");
  });

  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (signinErrEl) signinErrEl.hidden = true;

      const formData = new FormData(signinForm);
      const email = String(formData.get("email") || "").trim();
      const password = String(formData.get("password") || "").trim();

      if (!email || !password) {
        if (signinErrEl) {
          signinErrEl.textContent = "Please enter both your email address and password.";
          signinErrEl.hidden = false;
        }
        return;
      }

      const match = loadApplications().find(
        (item) => item.email.toLowerCase() === email.toLowerCase()
      );
      if (match) {
        renderReceipt(match, `Affiliate Portal · ${match.name}`);
        showBagToast(`Signed in as ${match.name}`);
      } else if (signinErrEl) {
        signinErrEl.textContent =
          "No affiliate application found for this email yet. Apply first to activate your portal preview.";
        signinErrEl.hidden = false;
      }
    });
  }

  if (copyCodeBtn) {
    copyCodeBtn.addEventListener("click", async () => {
      if (!activeReferralCode) return;
      const original = copyCodeBtn.textContent;
      try {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
          await navigator.clipboard.writeText(activeReferralCode);
        }
        copyCodeBtn.textContent = "Code Copied";
        showBagToast(`Copied ${activeReferralCode}`);
      } catch {
        showBagToast(`Referral Code: ${activeReferralCode}`);
      }
      window.setTimeout(() => {
        copyCodeBtn.textContent = original;
      }, 1800);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      applyForm.reset();
      showPanel("apply");
    });
  }
}

/* --------------------------------------------------------------------------
   Shopping Bag Dialog (<dialog id="bag-dialog">), Checkout Summary & Export
   -------------------------------------------------------------------------- */

const bagDialog = document.getElementById("bag-dialog");
const openBagBtn = document.getElementById("open-bag");
const bagItemsEl = document.querySelector("[data-bag-items]");
const bagSummaryEl = document.querySelector("[data-bag-summary]");
const bagCheckoutBtn = document.querySelector("[data-bag-checkout]");
const bagExportBtn = document.querySelector("[data-bag-export]");
const bagClearBtn = document.querySelector("[data-bag-clear]");

let clearArmed = false;
let checkoutConfirmation = null; // { orderCode, snapshot }

function openBagDialog() {
  if (!bagDialog) return;
  checkoutConfirmation = null;
  renderBagDialog();
  if (!bagDialog.open) {
    bagDialog.showModal();
  }
}

function closeBagDialog() {
  if (bagDialog && bagDialog.open) {
    clearArmed = false;
    checkoutConfirmation = null;
    bagDialog.close();
  }
}

function renderBagDialog() {
  if (!bagItemsEl || !bagSummaryEl) return;

  // Internal Order Summary Confirmation State (Zero External Redirects)
  if (checkoutConfirmation) {
    const { orderCode, snapshot } = checkoutConfirmation;
    bagItemsEl.innerHTML = `
      <div class="bag-checkout-view">
        <p class="bag-checkout__kicker">Order Summary Confirmed</p>
        <h3 class="bag-checkout__title">Reference ${orderCode}</h3>
        <p class="bag-checkout__sub">
          Your Tout le Quartier order summary has been prepared locally. Download your shortlist or return to continue exploring the 3D runway.
        </p>
        <ul class="bag-checkout__list">
          ${snapshot.lines
            .map(
              (line) => `
                <li>
                  <span>${line.product.name} (${line.sizeLabel}) × ${line.quantity}</span>
                  <span>${formatEur(line.lineTotal)}</span>
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
    `;

    bagSummaryEl.innerHTML = `
      <div class="bag-summary__row">
        <span>Subtotal</span>
        <span>${formatEur(snapshot.subtotal)}</span>
      </div>
      ${
        snapshot.bundleDiscount > 0
          ? `<div class="bag-summary__row bag-summary__row--savings">
              <span>Bundle Discount (-10%)</span>
              <span>−${formatEur(snapshot.bundleDiscount)}</span>
            </div>`
          : ""
      }
      <div class="bag-summary__row bag-summary__row--total">
        <span>Estimated Total (€)</span>
        <span>${formatEur(snapshot.estimatedTotal)}</span>
      </div>
    `;

    if (bagCheckoutBtn) {
      bagCheckoutBtn.disabled = false;
      bagCheckoutBtn.textContent = "Back to Shopping Bag";
    }
    if (bagExportBtn) bagExportBtn.disabled = false;
    if (bagClearBtn) {
      bagClearBtn.disabled = false;
      bagClearBtn.textContent = "Start fresh bag";
    }
    return;
  }

  const snapshot = storeBag.getSnapshot();

  if (snapshot.lines.length === 0) {
    bagItemsEl.innerHTML = `
      <div class="bag-empty">
        <p class="bag-empty__title">Your shopping bag is empty.</p>
        <p class="bag-empty__sub">
          Explore the 3D runway or browse The Collection to add official Tout le Quartier jerseys and the TLQ Iphone Case®.
        </p>
      </div>
    `;
    bagSummaryEl.innerHTML = `
      <div class="bag-summary__row bag-summary__row--total">
        <span>Estimated Total (€)</span>
        <span>€0.00</span>
      </div>
    `;
    if (bagCheckoutBtn) {
      bagCheckoutBtn.disabled = true;
      bagCheckoutBtn.textContent = "Proceed to Checkout (Order Summary)";
    }
    if (bagExportBtn) bagExportBtn.disabled = true;
    if (bagClearBtn) {
      bagClearBtn.disabled = true;
      bagClearBtn.textContent = "Clear bag";
    }
    return;
  }

  bagItemsEl.innerHTML = snapshot.lines
    .map(
      (line) => `
        <div class="bag-line" data-bag-line="${line.variantId}">
          <a
            href="#product/${line.product.id}"
            class="bag-line__thumb"
            data-bag-open-pdp="${line.product.id}"
            aria-label="Open ${line.product.name}"
          >
            <img
              src="${line.product.productImage}"
              alt="${line.product.name}"
              class="${line.product.isCutout ? "is-cutout-item" : ""}"
              referrerpolicy="no-referrer"
            />
          </a>
          <div class="bag-line__info">
            <div class="bag-line__top">
              <a
                href="#product/${line.product.id}"
                class="bag-line__name"
                data-bag-open-pdp="${line.product.id}"
              >${line.product.name}</a>
              <p class="bag-line__price">${formatEur(line.lineTotal)}</p>
            </div>
            <p class="bag-line__variant">${line.product.optionName}: ${line.sizeLabel} · ${formatEur(line.product.price)} each</p>
            <div class="bag-line__controls">
              <div class="bag-qty" aria-label="Quantity for ${line.product.name}">
                <button type="button" data-bag-dec="${line.variantId}" aria-label="Decrease quantity">−</button>
                <span>${line.quantity}</span>
                <button type="button" data-bag-inc="${line.variantId}" aria-label="Increase quantity">+</button>
              </div>
              <button
                type="button"
                class="bag-remove"
                data-bag-remove="${line.variantId}"
                aria-label="Remove ${line.product.name}"
              >×</button>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  bagItemsEl.querySelectorAll("[data-bag-open-pdp]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const prodId = link.dataset.bagOpenPdp;
      closeBagDialog();
      navigateToProduct(prodId);
    });
  });

  bagItemsEl.querySelectorAll("[data-bag-dec]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const varId = btn.dataset.bagDec;
      const line = snapshot.lines.find((l) => l.variantId === varId);
      if (line) storeBag.setQuantity(varId, line.quantity - 1);
    });
  });

  bagItemsEl.querySelectorAll("[data-bag-inc]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const varId = btn.dataset.bagInc;
      const line = snapshot.lines.find((l) => l.variantId === varId);
      if (line) storeBag.setQuantity(varId, line.quantity + 1);
    });
  });

  bagItemsEl.querySelectorAll("[data-bag-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      storeBag.remove(btn.dataset.bagRemove);
      showBagToast("Removed item from bag");
    });
  });

  const bundleRow =
    snapshot.bundleDiscount > 0
      ? `<div class="bag-summary__row bag-summary__row--savings">
          <span>Bundle Discount (-10% × ${snapshot.packCount})</span>
          <span>−${formatEur(snapshot.bundleDiscount)}</span>
        </div>`
      : "";

  bagSummaryEl.innerHTML = `
    <div class="bag-summary__row">
      <span>Subtotal (${snapshot.totalCount} ${snapshot.totalCount === 1 ? "item" : "items"})</span>
      <span>${formatEur(snapshot.subtotal)}</span>
    </div>
    ${bundleRow}
    <div class="bag-summary__row bag-summary__row--total">
      <span>Estimated Total (€)</span>
      <span>${formatEur(snapshot.estimatedTotal)}</span>
    </div>
    <p class="bag-summary__policy-note">
      Questions on delivery windows or duties? <a href="#shipping-policy" data-bag-open-shipping>View Shipping Policy</a>
    </p>
  `;

  const bagShippingLink = bagSummaryEl.querySelector("[data-bag-open-shipping]");
  if (bagShippingLink) {
    bagShippingLink.addEventListener("click", (e) => {
      e.preventDefault();
      closeBagDialog();
      navigateToShipping();
    });
  }

  if (bagCheckoutBtn) {
    bagCheckoutBtn.disabled = false;
    bagCheckoutBtn.textContent = "Proceed to Checkout (Order Summary)";
  }
  if (bagExportBtn) bagExportBtn.disabled = false;
  if (bagClearBtn) {
    bagClearBtn.disabled = false;
    bagClearBtn.textContent = clearArmed ? "Confirm clear" : "Clear bag";
  }
}

function downloadShortlistTxt() {
  const snapshot = checkoutConfirmation
    ? checkoutConfirmation.snapshot
    : storeBag.getSnapshot();
  if (!snapshot || snapshot.lines.length === 0) return;

  const lines = [
    "TOUT LE QUARTIER — OFFICIAL STOREFRONT SHORTLIST",
    `Date: ${new Date().toISOString().slice(0, 10)}`,
    checkoutConfirmation ? `Order Reference: ${checkoutConfirmation.orderCode}` : "Status: Saved Bag Shortlist",
    "------------------------------------------------------------",
    "",
  ];

  snapshot.lines.forEach((line, idx) => {
    lines.push(
      `${String(idx + 1).padStart(2, "0")}. ${line.product.name} (${line.product.optionName}: ${line.sizeLabel}) × ${line.quantity} — ${formatEur(line.lineTotal)}`
    );
  });

  lines.push("");
  lines.push("------------------------------------------------------------");
  lines.push(`Subtotal: ${formatEur(snapshot.subtotal)}`);
  if (snapshot.bundleDiscount > 0) {
    lines.push(
      `Bundle Discount (-10% × ${snapshot.packCount} jersey + case pack): -${formatEur(snapshot.bundleDiscount)}`
    );
  }
  lines.push(`Estimated Total (EUR): ${formatEur(snapshot.estimatedTotal)}`);

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "tlq-storefront-shortlist.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showBagToast("Downloaded tlq-storefront-shortlist.txt");
}

/* --------------------------------------------------------------------------
   Static Client-Side Account & Login (<dialog id="account-dialog">)
   -------------------------------------------------------------------------- */

const ACCOUNT_SESSION_KEY = "tlq-account-session-v1";
const ACCOUNT_USERS_KEY = "tlq-account-users-v1";
const ACCOUNT_ORDERS_KEY = "tlq-account-orders-v1";

function loadStaticSession() {
  try {
    const raw = window.localStorage.getItem(ACCOUNT_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveStaticSession(session) {
  try {
    if (session) {
      window.localStorage.setItem(ACCOUNT_SESSION_KEY, JSON.stringify(session));
    } else {
      window.localStorage.removeItem(ACCOUNT_SESSION_KEY);
    }
  } catch {
    // Ignore storage quota errors
  }
}

function loadStaticUsers() {
  try {
    const raw = window.localStorage.getItem(ACCOUNT_USERS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveStaticUsers(users) {
  try {
    window.localStorage.setItem(ACCOUNT_USERS_KEY, JSON.stringify(users.slice(0, 30)));
  } catch {
    // Ignore storage quota errors
  }
}

function loadStaticOrders() {
  try {
    const raw = window.localStorage.getItem(ACCOUNT_ORDERS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function recordStaticOrder(orderCode, snapshot) {
  try {
    const existing = loadStaticOrders();
    const session = loadStaticSession();
    existing.unshift({
      orderCode,
      date: new Date().toISOString().slice(0, 10),
      itemCount: snapshot.totalCount,
      total: snapshot.estimatedTotal,
      email: session ? session.email : "",
      itemsSummary: snapshot.lines
        .map((l) => `${l.product.name} (${l.sizeLabel}) × ${l.quantity}`)
        .join(", "),
    });
    window.localStorage.setItem(ACCOUNT_ORDERS_KEY, JSON.stringify(existing.slice(0, 25)));
  } catch {
    // Ignore storage quota errors
  }
}

function getInitialsFromName(name) {
  const parts = String(name || "TL")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "TL";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function wireStaticAccountAuth() {
  const accountDialog = document.getElementById("account-dialog");
  const openAccountBtn = document.getElementById("open-account");
  const headerInitialsEl = document.querySelector("[data-account-initials]");
  const headingEl = document.querySelector("[data-account-heading]");
  const backBtn = document.querySelector("[data-account-back]");

  const menuView = document.querySelector('[data-account-view="menu"]');
  const signinView = document.querySelector('[data-account-view="signin"]');
  const registerView = document.querySelector('[data-account-view="register"]');
  const memberView = document.querySelector('[data-account-view="member"]');

  const signinForm = document.getElementById("account-signin-form");
  const registerForm = document.getElementById("account-register-form");
  const profileForm = document.getElementById("account-profile-form");

  const signinErrEl = document.querySelector("[data-account-signin-error]");
  const registerErrEl = document.querySelector("[data-account-register-error]");

  const memberAvatarEl = document.querySelector("[data-member-avatar]");
  const memberNameEl = document.querySelector("[data-member-name]");
  const memberEmailEl = document.querySelector("[data-member-email]");
  const ordersListEl = document.querySelector("[data-account-orders-list]");
  const profNameInput = document.getElementById("acc-prof-name");
  const profRegionSelect = document.getElementById("acc-prof-region");

  if (!accountDialog || !openAccountBtn) return;

  let pendingMemberTab = "orders";

  function syncHeaderAccountState() {
    const session = loadStaticSession();
    if (session) {
      if (headerInitialsEl) {
        headerInitialsEl.textContent = getInitialsFromName(session.name);
        headerInitialsEl.hidden = false;
      }
      openAccountBtn.setAttribute("aria-label", `Account — ${session.name}`);
    } else {
      if (headerInitialsEl) {
        headerInitialsEl.textContent = "";
        headerInitialsEl.hidden = true;
      }
      openAccountBtn.setAttribute("aria-label", "Account sign in");
    }
  }

  function renderMemberOrders() {
    if (!ordersListEl) return;
    ordersListEl.replaceChildren();
    const orders = loadStaticOrders();
    if (orders.length === 0) {
      const empty = document.createElement("div");
      empty.className = "account-orders-empty";
      const msg = document.createElement("p");
      msg.textContent =
        "No order summaries yet. Add pieces to your bag and confirm an order summary to see them here.";
      const cta = document.createElement("button");
      cta.type = "button";
      cta.className = "tlq-link-inline";
      cta.textContent = "Browse The Collection →";
      cta.addEventListener("click", () => {
        accountDialog.close();
        navigateToHome(true);
      });
      empty.append(msg, cta);
      ordersListEl.appendChild(empty);
      return;
    }

    const list = document.createElement("div");
    list.className = "account-order-list";
    orders.forEach((order) => {
      const row = document.createElement("div");
      row.className = "account-order-row";

      const top = document.createElement("div");
      top.className = "account-order-row__top";
      const codeSpan = document.createElement("span");
      codeSpan.textContent = order.orderCode;
      const totalSpan = document.createElement("span");
      totalSpan.textContent = formatEur(order.total);
      top.append(codeSpan, totalSpan);

      const meta = document.createElement("div");
      meta.className = "account-order-row__meta";
      meta.textContent = `${order.date} · ${order.itemCount} ${
        order.itemCount === 1 ? "item" : "items"
      } · ${order.itemsSummary}`;

      row.append(top, meta);
      list.appendChild(row);
    });
    ordersListEl.appendChild(list);
  }

  function setMemberTab(tabName) {
    const activeTab = tabName === "profile" ? "profile" : "orders";
    accountDialog.querySelectorAll("[data-member-tab]").forEach((btn) => {
      const isMatch = btn.dataset.memberTab === activeTab;
      btn.classList.toggle("is-active", isMatch);
      btn.setAttribute("aria-selected", isMatch ? "true" : "false");
    });
    accountDialog.querySelectorAll("[data-member-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.memberPanel !== activeTab;
    });
    if (activeTab === "orders") {
      renderMemberOrders();
    }
  }

  function populateMemberView(session) {
    if (memberAvatarEl) memberAvatarEl.textContent = getInitialsFromName(session.name);
    if (memberNameEl) memberNameEl.textContent = session.name;
    if (memberEmailEl) memberEmailEl.textContent = session.email;
    if (profNameInput) profNameInput.value = session.name;
    if (profRegionSelect) profRegionSelect.value = session.region || "United States";
    renderMemberOrders();
  }

  function showAccountView(viewName) {
    if (menuView) menuView.hidden = viewName !== "menu";
    if (signinView) signinView.hidden = viewName !== "signin";
    if (registerView) registerView.hidden = viewName !== "register";
    if (memberView) memberView.hidden = viewName !== "member";

    if (signinErrEl) signinErrEl.hidden = true;
    if (registerErrEl) registerErrEl.hidden = true;

    const showBack = viewName === "signin" || viewName === "register";
    if (backBtn) backBtn.hidden = !showBack;

    if (headingEl) {
      if (viewName === "signin") headingEl.textContent = "Sign in";
      else if (viewName === "register") headingEl.textContent = "Create account";
      else headingEl.textContent = "Account";
    }
  }

  function openAccountDialog() {
    const session = loadStaticSession();
    if (session) {
      populateMemberView(session);
      showAccountView("member");
      setMemberTab(pendingMemberTab);
    } else {
      showAccountView("menu");
    }
    if (!accountDialog.open) {
      accountDialog.showModal();
    }
  }

  openAccountBtn.addEventListener("click", openAccountDialog);

  accountDialog.querySelectorAll("[data-account-close]").forEach((btn) => {
    btn.addEventListener("click", () => accountDialog.close());
  });

  accountDialog.addEventListener("click", (e) => {
    if (e.target === accountDialog) accountDialog.close();
  });

  if (backBtn) {
    backBtn.addEventListener("click", () => showAccountView("menu"));
  }

  accountDialog.querySelectorAll("[data-account-goto]").forEach((btn) => {
    btn.addEventListener("click", () => {
      showAccountView(btn.dataset.accountGoto || "menu");
    });
  });

  accountDialog.querySelectorAll("[data-account-open-login]").forEach((btn) => {
    btn.addEventListener("click", () => {
      accountDialog.close();
      navigateToLogin();
    });
  });

  window.addEventListener("tlq:account-sync", () => {
    syncHeaderAccountState();
  });

  window.addEventListener("tlq:open-account-modal", () => {
    openAccountDialog();
  });

  accountDialog.querySelectorAll("[data-account-shortcut]").forEach((btn) => {
    btn.addEventListener("click", () => {
      pendingMemberTab = btn.dataset.accountShortcut || "orders";
      const session = loadStaticSession();
      if (session) {
        populateMemberView(session);
        showAccountView("member");
        setMemberTab(pendingMemberTab);
      } else {
        showAccountView("signin");
      }
    });
  });

  accountDialog.querySelectorAll("[data-member-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      pendingMemberTab = btn.dataset.memberTab || "orders";
      setMemberTab(pendingMemberTab);
    });
  });

  accountDialog.querySelectorAll("[data-toggle-pass]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.togglePass || "");
      if (!input) return;
      const showing = input.type === "text";
      input.type = showing ? "password" : "text";
      btn.textContent = showing ? "Show" : "Hide";
      btn.setAttribute("aria-label", showing ? "Show password" : "Hide password");
    });
  });

  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (signinErrEl) signinErrEl.hidden = true;

      const fd = new FormData(signinForm);
      const email = String(fd.get("email") || "").trim().toLowerCase();
      const password = String(fd.get("password") || "");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        if (signinErrEl) {
          signinErrEl.textContent = "Please enter a valid email address.";
          signinErrEl.hidden = false;
        }
        return;
      }

      if (password.length < 4) {
        if (signinErrEl) {
          signinErrEl.textContent = "Please enter a password of at least 4 characters.";
          signinErrEl.hidden = false;
        }
        return;
      }

      const users = loadStaticUsers();
      let user = users.find((u) => u.email.toLowerCase() === email);
      if (user && user.password && user.password !== password) {
        if (signinErrEl) {
          signinErrEl.textContent = "Incorrect password for this account.";
          signinErrEl.hidden = false;
        }
        return;
      }

      if (!user) {
        const rawHandle = email.split("@")[0].replace(/[._-]+/g, " ").trim();
        const displayName = rawHandle
          ? rawHandle.replace(/\b\w/g, (ch) => ch.toUpperCase())
          : "TLQ Member";
        user = {
          name: displayName,
          email,
          password,
          region: "United States",
        };
        users.unshift(user);
        saveStaticUsers(users);
      }

      const session = {
        name: user.name,
        email: user.email,
        region: user.region || "United States",
      };
      saveStaticSession(session);
      syncHeaderAccountState();
      populateMemberView(session);
      showAccountView("member");
      setMemberTab(pendingMemberTab);
      signinForm.reset();
      showBagToast(`Signed in as ${session.name}`);
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (registerErrEl) registerErrEl.hidden = true;

      const fd = new FormData(registerForm);
      const name = String(fd.get("name") || "").trim();
      const email = String(fd.get("email") || "").trim().toLowerCase();
      const password = String(fd.get("password") || "");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name) {
        if (registerErrEl) {
          registerErrEl.textContent = "Please enter your full name.";
          registerErrEl.hidden = false;
        }
        return;
      }

      if (!email || !emailRegex.test(email)) {
        if (registerErrEl) {
          registerErrEl.textContent = "Please enter a valid email address.";
          registerErrEl.hidden = false;
        }
        return;
      }

      if (password.length < 4) {
        if (registerErrEl) {
          registerErrEl.textContent = "Password must be at least 4 characters.";
          registerErrEl.hidden = false;
        }
        return;
      }

      const users = loadStaticUsers().filter((u) => u.email.toLowerCase() !== email);
      users.unshift({
        name,
        email,
        password,
        region: "United States",
      });
      saveStaticUsers(users);

      const session = {
        name,
        email,
        region: "United States",
      };
      saveStaticSession(session);
      syncHeaderAccountState();
      populateMemberView(session);
      showAccountView("member");
      setMemberTab("profile");
      registerForm.reset();
      showBagToast(`Welcome, ${session.name}`);
    });
  }

  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const session = loadStaticSession();
      if (!session) return;
      const fd = new FormData(profileForm);
      const updatedName = String(fd.get("name") || "").trim() || session.name;
      const updatedRegion = String(fd.get("region") || "United States");

      const updatedSession = {
        ...session,
        name: updatedName,
        region: updatedRegion,
      };
      saveStaticSession(updatedSession);

      const users = loadStaticUsers().map((u) =>
        u.email.toLowerCase() === session.email.toLowerCase()
          ? { ...u, name: updatedName, region: updatedRegion }
          : u
      );
      saveStaticUsers(users);
      syncHeaderAccountState();
      populateMemberView(updatedSession);
      showBagToast("Profile preferences saved");
    });
  }

  const affiliateJumpBtn = accountDialog.querySelector("[data-account-goto-affiliate]");
  if (affiliateJumpBtn) {
    affiliateJumpBtn.addEventListener("click", () => {
      accountDialog.close();
      navigateToProject();
    });
  }

  const signoutBtn = accountDialog.querySelector("[data-account-signout]");
  if (signoutBtn) {
    signoutBtn.addEventListener("click", () => {
      saveStaticSession(null);
      syncHeaderAccountState();
      showAccountView("menu");
      showBagToast("Signed out");
    });
  }

  syncHeaderAccountState();
}

function wireFooterInteractions() {
  const CLUB_KEY = "tlq-club-subscribers-v1";
  const clubForm = document.getElementById("footer-club-form");
  const feedbackEl = document.querySelector("[data-footer-feedback]");
  const legalDialog = document.getElementById("legal-dialog");
  const legalTitleEl = document.querySelector("[data-legal-title]");
  const legalBodyEl = document.querySelector("[data-legal-body]");

  if (clubForm) {
    clubForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(clubForm);
      const email = String(fd.get("email") || "").trim().toLowerCase();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        if (feedbackEl) {
          feedbackEl.textContent = "Please enter a valid email address.";
          feedbackEl.classList.add("is-error");
          feedbackEl.hidden = false;
        }
        return;
      }

      try {
        const raw = window.localStorage.getItem(CLUB_KEY);
        const list = raw ? JSON.parse(raw) : [];
        const updated = Array.isArray(list) ? list : [];
        if (!updated.includes(email)) {
          updated.unshift(email);
          window.localStorage.setItem(CLUB_KEY, JSON.stringify(updated.slice(0, 50)));
        }
      } catch {
        // Ignore storage errors
      }

      clubForm.reset();
      if (feedbackEl) {
        feedbackEl.textContent = "Welcome to the club — you’re on the early-access list.";
        feedbackEl.classList.remove("is-error");
        feedbackEl.hidden = false;
      }
      showBagToast("Joined the Tout le Quartier club");
    });
  }

  const LEGAL_DOCS = {
    privacy: {
      title: "Privacy policy",
      sections: [
        {
          heading: "Information Collected",
          body: "Tout le Quartier collects only the details you choose to provide when building a bag shortlist, subscribing to early-access drops, submitting a TLQPROJECT affiliate inquiry, or signing in locally on this storefront.",
        },
        {
          heading: "How We Use Your Details",
          body: "Your contact details are used solely to communicate regarding product drops, shipment updates, or affiliate requests. We never sell or share customer information with third-party advertisers.",
        },
        {
          heading: "Contact & Data Requests",
          body: "For any privacy questions or data removal requests, contact our Paris client services team at TLQ.projectparis@gmail.com.",
        },
      ],
    },
    refund: {
      title: "Refund policy",
      sections: [
        {
          heading: "Eligibility & Condition",
          body: "Items must be unworn, unwashed, and returned in original condition with all woven tags and protective packaging intact within 14 days of delivery.",
        },
        {
          heading: "Pre-Order & International Shipments",
          body: "International orders outside the US and Canada are produced on a pre-order schedule. Customs duties, import taxes, and delivery fees paid upon receipt are non-refundable.",
        },
        {
          heading: "How to Start a Return or Exchange",
          body: "Email TLQ.projectparis@gmail.com with your order reference and requested size exchange or refund before sending any item back.",
        },
      ],
    },
  };

  if (legalDialog && legalTitleEl && legalBodyEl) {
    document.querySelectorAll("[data-legal-open]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const docKey = btn.dataset.legalOpen === "refund" ? "refund" : "privacy";
        const doc = LEGAL_DOCS[docKey];
        legalTitleEl.textContent = doc.title;
        legalBodyEl.replaceChildren();
        doc.sections.forEach((sec) => {
          const h3 = document.createElement("h3");
          h3.textContent = sec.heading;
          const p = document.createElement("p");
          p.textContent = sec.body;
          legalBodyEl.append(h3, p);
        });
        if (!legalDialog.open) {
          legalDialog.showModal();
        }
      });
    });

    legalDialog.querySelectorAll("[data-legal-close]").forEach((btn) => {
      btn.addEventListener("click", () => legalDialog.close());
    });

    legalDialog.addEventListener("click", (e) => {
      if (e.target === legalDialog) legalDialog.close();
    });
  }

  document.querySelectorAll("[data-scroll-top]").forEach((btn) => {
    btn.addEventListener("click", scrollToTopSmooth);
  });
}

function wireDedicatedLoginPage() {
  const entryStep = document.querySelector('[data-login-step="entry"]');
  const verifyStep = document.querySelector('[data-login-step="verify"]');
  const signedInStep = document.querySelector('[data-login-step="signedin"]');
  const expressBtn = document.querySelector("[data-login-express]");
  const emailForm = document.getElementById("tlq-login-email-form");
  const codeForm = document.getElementById("tlq-login-code-form");
  const emailErrEl = document.querySelector("[data-login-error]");
  const codeErrEl = document.querySelector("[data-login-code-error]");
  const sentEmailEl = document.querySelector("[data-login-sent-email]");
  const changeEmailBtn = document.querySelector("[data-login-change-email]");
  const fillDemoBtn = document.querySelector("[data-login-fill-demo]");
  const codeInput = document.getElementById("tlq-login-code");
  const memberHeadingEl = document.querySelector("[data-login-member-heading]");
  const memberEmailEl = document.querySelector("[data-login-member-email]");
  const openAccountBtn = document.querySelector("[data-login-open-account]");

  if (!entryStep || !verifyStep || !signedInStep) return;

  let pendingEmail = "";
  let pendingSubscribe = false;

  function setStep(step) {
    entryStep.hidden = step !== "entry";
    verifyStep.hidden = step !== "verify";
    signedInStep.hidden = step !== "signedin";
    if (emailErrEl) emailErrEl.hidden = true;
    if (codeErrEl) codeErrEl.hidden = true;
  }

  function syncLoginPageState() {
    const session = loadStaticSession();
    if (session) {
      if (memberHeadingEl) memberHeadingEl.textContent = `Welcome back, ${session.name}`;
      if (memberEmailEl) memberEmailEl.textContent = session.email;
      setStep("signedin");
    } else {
      setStep("entry");
    }
  }

  function completeStaticLogin(email, fallbackName) {
    const cleanEmail = email.trim().toLowerCase();
    const users = loadStaticUsers();
    let user = users.find((u) => u.email.toLowerCase() === cleanEmail);
    if (!user) {
      const rawHandle = cleanEmail.split("@")[0].replace(/[._-]+/g, " ").trim();
      const displayName =
        fallbackName ||
        (rawHandle
          ? rawHandle.replace(/\b\w/g, (ch) => ch.toUpperCase())
          : "TLQ Member");
      user = {
        name: displayName,
        email: cleanEmail,
        password: "",
        region: "United States",
      };
      users.unshift(user);
      saveStaticUsers(users);
    }

    if (pendingSubscribe) {
      try {
        const raw = window.localStorage.getItem("tlq-club-subscribers-v1");
        const list = raw ? JSON.parse(raw) : [];
        const updated = Array.isArray(list) ? list : [];
        if (!updated.includes(cleanEmail)) {
          updated.unshift(cleanEmail);
          window.localStorage.setItem(
            "tlq-club-subscribers-v1",
            JSON.stringify(updated.slice(0, 50))
          );
        }
      } catch {
        // Ignore storage errors
      }
    }

    const session = {
      name: user.name,
      email: user.email,
      region: user.region || "United States",
    };
    saveStaticSession(session);
    window.dispatchEvent(new CustomEvent("tlq:account-sync"));
    showBagToast(`Signed in as ${session.name}`);
    navigateToHome(false);
  }

  window.addEventListener("tlq:login-view-open", syncLoginPageState);

  if (expressBtn) {
    expressBtn.addEventListener("click", () => {
      const users = loadStaticUsers();
      if (users.length > 0) {
        completeStaticLogin(users[0].email, users[0].name);
      } else {
        completeStaticLogin("member@toutlequartier.paris", "TLQ Member");
      }
    });
  }

  if (emailForm) {
    emailForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (emailErrEl) emailErrEl.hidden = true;
      const fd = new FormData(emailForm);
      const email = String(fd.get("email") || "").trim().toLowerCase();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        if (emailErrEl) {
          emailErrEl.textContent = "Please enter a valid email address.";
          emailErrEl.hidden = false;
        }
        return;
      }

      pendingEmail = email;
      pendingSubscribe = Boolean(fd.get("newsletter"));
      if (sentEmailEl) sentEmailEl.textContent = pendingEmail;
      if (codeInput) codeInput.value = "";
      setStep("verify");
      if (codeInput) codeInput.focus();
    });
  }

  if (changeEmailBtn) {
    changeEmailBtn.addEventListener("click", () => {
      setStep("entry");
    });
  }

  if (fillDemoBtn && codeInput) {
    fillDemoBtn.addEventListener("click", () => {
      codeInput.value = "123456";
      codeInput.focus();
    });
  }

  if (codeForm) {
    codeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (codeErrEl) codeErrEl.hidden = true;
      const code = String(new FormData(codeForm).get("code") || "").trim();
      if (!/^\d{6}$/.test(code)) {
        if (codeErrEl) {
          codeErrEl.textContent = "Please enter a 6-digit numeric code (for example, 123456).";
          codeErrEl.hidden = false;
        }
        return;
      }
      completeStaticLogin(pendingEmail);
    });
  }

  if (openAccountBtn) {
    openAccountBtn.addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("tlq:open-account-modal"));
    });
  }
}

/* --------------------------------------------------------------------------
   Application Bootstrap
   -------------------------------------------------------------------------- */

function initApp() {
  storeBag.load();
  storeBag.notify();

  renderCatalogFilters();
  renderCatalogGrid();
  renderProjectHighlights();
  renderBagDialog();
  bindInternalNavLinks(document);
  wireShippingPolicyInteractions();
  wireAffiliateProgramInteractions();
  wireStaticAccountAuth();
  wireFooterInteractions();
  wireDedicatedLoginPage();

  window.addEventListener("tlq:bag-change", () => {
    clearArmed = false;
    if (!checkoutConfirmation) {
      renderBagDialog();
    }
  });

  window.addEventListener("hashchange", applyRouteFromHash);

  if (openBagBtn) {
    openBagBtn.addEventListener("click", openBagDialog);
  }

  if (bagDialog) {
    bagDialog.querySelectorAll("[data-bag-close]").forEach((btn) => {
      btn.addEventListener("click", closeBagDialog);
    });
    bagDialog.addEventListener("click", (e) => {
      if (e.target === bagDialog) closeBagDialog();
    });
  }

  if (bagCheckoutBtn) {
    bagCheckoutBtn.addEventListener("click", () => {
      if (checkoutConfirmation) {
        checkoutConfirmation = null;
        renderBagDialog();
        return;
      }
      const snapshot = storeBag.getSnapshot();
      if (snapshot.lines.length === 0) return;
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      checkoutConfirmation = {
        orderCode: `#TLQ-${randomNum}`,
        snapshot,
      };
      recordStaticOrder(checkoutConfirmation.orderCode, snapshot);
      renderBagDialog();
      showBagToast(`Order summary ${checkoutConfirmation.orderCode} ready`);
    });
  }

  if (bagExportBtn) {
    bagExportBtn.addEventListener("click", downloadShortlistTxt);
  }

  if (bagClearBtn) {
    bagClearBtn.addEventListener("click", () => {
      if (checkoutConfirmation) {
        checkoutConfirmation = null;
        storeBag.clear();
        renderBagDialog();
        showBagToast("Started a fresh shopping bag");
        return;
      }
      if (!clearArmed) {
        clearArmed = true;
        bagClearBtn.textContent = "Confirm clear";
        return;
      }
      clearArmed = false;
      storeBag.clear();
      showBagToast("Shopping bag cleared");
    });
  }

  applyRouteFromHash();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
