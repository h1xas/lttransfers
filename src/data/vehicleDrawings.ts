/*
  Vehicle line drawings: original, generic side profiles by body type. They are
  design representations, not product illustrations, and carry no badges, logos,
  plates or lamp detail. Every car faces right and stands on y = h.

  All drawings share one scale (1 unit ≈ 20 mm), so the comparison between
  silhouettes is honest by body type: C-Class < RAV4 < E-Class < A8 in length, the
  V-Class tallest. No dimensions are ever printed.

  A drawing is described by its upper body (an SVG path fragment that starts at the
  rear bottom corner and ends at the front bottom corner), its windows and a few
  door seams. `build()` closes the body along the sill and cuts the wheel arches, so
  the arches, tyres and rims are consistent across all five.
*/

type Pt = [number, number];

interface Spec {
  /** viewBox width and height, in units. Ground is y = h. */
  w: number;
  h: number;
  /** Tyre radius. The arch is 3 units larger. */
  r: number;
  /** Wheel centres, rear then front. */
  wheels: [number, number];
  /** y of the body's underside (sill and bumpers). */
  sill: number;
  /** Rear / front x of the bottom corners. */
  x0: number;
  x1: number;
  /** Path fragment from (x0, sill) over the roof to (x1, sill). */
  upper: string;
  /** Window outlines as point lists (corners are rounded), and door seams as path data. */
  windows: Pt[][];
  seams: string[];
}

const specs: Record<string, Spec> = {
  // Compact SUV: upright tailgate, long roof, short high nose.
  rav4: {
    w: 232,
    h: 86,
    r: 18,
    wheels: [52, 182],
    sill: 75,
    x0: 6,
    x1: 230,
    upper:
      'L6 58 Q6 53 9 51 L20 14 Q22 4 31 3 C70 1 118 1 148 4 Q155 5 160 11 L190 36 C200 38 214 39 221 42 Q230 45 230 56 L230 75',
    windows: [
      [[26, 36], [32, 13], [98, 10], [98, 36]],
      [[105, 36], [105, 10], [146, 10], [182, 36]],
    ],
    seams: ['M101.5 37 L101.5 74', 'M62 37 L62 52', 'M150 37 L150 50'],
  },
  // Compact saloon: shortest wheelbase, tall for its length, short overhangs, steep tail.
  'c-class': {
    w: 222,
    h: 74,
    r: 16.5,
    wheels: [46, 172],
    sill: 65,
    x0: 6,
    x1: 220,
    upper:
      'L5 52 Q5 38 11 34 C26 32 44 30 62 28 L90 5 Q93 2 98 2 C112 1 124 1 132 4 C141 8 150 19 160 26 C174 29 192 31 206 35 Q219 38 220 52 L220 65',
    windows: [
      [[70, 27], [92, 8], [112, 7], [112, 27]],
      [[119, 27], [119, 7], [129, 8], [153, 27]],
    ],
    seams: ['M115.5 28 L115.5 64', 'M73 28 L74 62', 'M157 28 L158 62'],
  },
  // Executive saloon: a longer wheelbase and deck, lower roof than the C-Class.
  'e-class': {
    w: 248,
    h: 73,
    r: 17,
    wheels: [50, 196],
    sill: 64.5,
    x0: 6,
    x1: 246,
    upper:
      'L5 51 Q5 37 12 33 C30 31 52 29 72 27 L102 5 Q105 3 110 3 C128 2 142 2 152 5 C162 9 174 20 186 26 C202 29 220 31 234 35 Q245 38 246 51 L246 64.5',
    windows: [
      [[80, 26], [106, 8], [126, 7], [126, 26]],
      [[133, 26], [133, 7], [149, 8], [179, 26]],
    ],
    seams: ['M129.5 27 L129.5 63', 'M84 27 L85 61', 'M181 27 L182 61'],
  },
  // Long executive saloon: the longest car, a long low profile with a long bonnet and cabin.
  a8: {
    w: 272,
    h: 71,
    r: 17.5,
    wheels: [54, 220],
    sill: 62.5,
    x0: 6,
    x1: 270,
    upper:
      'L5 50 Q5 37 12 32 C34 30 62 28 88 26 L124 5 Q128 3 134 3 C154 2 170 2 180 5 C190 9 200 19 212 25 C232 28 252 30 262 34 Q270 37 270 50 L270 62.5',
    windows: [
      [[96, 25], [127, 8], [152, 7], [152, 25]],
      [[159, 25], [159, 7], [176, 8], [204, 25]],
    ],
    seams: ['M155.5 26 L155.5 61', 'M99 26 L100 60', 'M206 26 L207 60'],
  },
  // Large MPV: tallest and boxy, steeply raked screen, short nose.
  'v-class': {
    w: 262,
    h: 97,
    r: 17.5,
    wheels: [54, 212],
    sill: 86,
    x0: 6,
    x1: 260,
    upper: 'L6 20 Q6 3 20 2 L198 2 Q208 2 212 8 L238 46 C246 48 254 50 257 54 Q260 57 260 66 L260 86',
    windows: [
      [[16, 44], [16, 11], [97, 10], [97, 44]],
      [[104, 44], [104, 10], [150, 10], [150, 44]],
      [[157, 44], [157, 10], [196, 10], [230, 44]],
    ],
    seams: ['M100.5 45 L100.5 85', 'M153.5 45 L153.5 85'],
  },
};

const f = (n: number) => String(Math.round(n * 100) / 100);

/** A closed polygon with rounded corners. */
function poly(pts: Pt[], radius = 2.5): string {
  const n = pts.length;
  let d = '';
  for (let i = 0; i < n; i++) {
    const prev = pts[(i + n - 1) % n];
    const cur = pts[i];
    const next = pts[(i + 1) % n];
    const toward = (a: Pt, b: Pt): Pt => {
      const dx = a[0] - b[0];
      const dy = a[1] - b[1];
      const len = Math.hypot(dx, dy) || 1;
      const k = Math.min(radius, len / 2) / len;
      return [b[0] + dx * k, b[1] + dy * k];
    };
    const a = toward(prev, cur);
    const b = toward(next, cur);
    d += `${i === 0 ? 'M' : 'L'}${f(a[0])} ${f(a[1])}Q${f(cur[0])} ${f(cur[1])} ${f(b[0])} ${f(b[1])}`;
  }
  return `${d}Z`;
}

export interface Drawing {
  w: number;
  h: number;
  body: string;
  windows: string[];
  seams: string[];
  wheels: { cx: number; cy: number; r: number; hub: number }[];
}

function build(s: Spec): Drawing {
  const cy = s.h - s.r;
  const arch = s.r + 3;
  const dx = Math.sqrt(arch * arch - (s.sill - cy) ** 2);
  const large = s.sill > cy ? 1 : 0;
  const [rear, front] = s.wheels;
  const body =
    `M${f(s.x0)} ${f(s.sill)}${s.upper}` +
    `L${f(front + dx)} ${f(s.sill)}A${f(arch)} ${f(arch)} 0 ${large} 0 ${f(front - dx)} ${f(s.sill)}` +
    `L${f(rear + dx)} ${f(s.sill)}A${f(arch)} ${f(arch)} 0 ${large} 0 ${f(rear - dx)} ${f(s.sill)}Z`;
  return {
    w: s.w,
    h: s.h,
    body,
    windows: s.windows.map((p) => poly(p)),
    seams: s.seams,
    wheels: s.wheels.map((cx) => ({ cx, cy, r: s.r, hub: Math.round(s.r * 0.55 * 10) / 10 })),
  };
}

export const drawings: Record<string, Drawing> = Object.fromEntries(
  Object.entries(specs).map(([id, spec]) => [id, build(spec)]),
);

/** Width, in units, of the widest drawing (A8). The list layout's shared scale is room / FLEET_UNITS; the desktop sheet
 *  divides by a smaller number (see FleetSheet) so the drawings are larger there. */
export const FLEET_UNITS = 272;
