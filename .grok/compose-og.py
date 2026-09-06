#!/usr/bin/env python3
"""Editorial 1200x630 share card for Fun Valley Resort.

Generation APIs are unavailable in this session, so this composites the
property's own dusk pool photograph with a hand-set serif lockup.
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageEnhance

ROOT = Path("/workspace")
SRC = ROOT / "public/gallery/g13.jpg"
FONT_ROMAN = ROOT / ".grok/fonts/playfair.zip"
FONT_ITALIC = ROOT / ".grok/fonts/PlayfairDisplay-Italic.ttf"
OUT = ROOT / ".grok/og.jpg.tmp"
W, H = 1200, 630

CREAM = (250, 247, 241, 255)
IVORY = (243, 238, 228, 255)
SAND = (231, 223, 208, 255)
TEAL = (47, 88, 84, 255)
INK = (18, 33, 30, 255)


def load_font(path: Path, size: int, weight: int | None = None) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(path), size)
    if weight is not None:
        try:
            font.set_variation_by_axes([weight])
        except OSError:
            pass
    return font


def cover_crop(im: Image.Image, w: int, h: int) -> Image.Image:
    src_w, src_h = im.size
    scale = max(w / src_w, h / src_h)
    nw, nh = int(round(src_w * scale)), int(round(src_h * scale))
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - w) // 2
    # Bias slightly down so the pool (lower half) stays in frame after the 16:9 crop.
    top = (nh - h) // 2 + 18
    top = max(0, min(top, nh - h))
    return im.crop((left, top, left + w, top + h))


def radial_veil(size: tuple[int, int], strength: int = 118) -> Image.Image:
    w, h = size
    veil = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(veil)
    # Soft center well so cream type reads; keeps edges of the photograph visible.
    cx, cy = w / 2, h / 2 - 12
    for i in range(28, 0, -1):
        a = int(strength * (i / 28) ** 1.35)
        rx = w * (0.22 + 0.38 * (i / 28))
        ry = h * (0.28 + 0.42 * (i / 28))
        draw.ellipse((cx - rx, cy - ry, cx + rx, cy + ry), fill=a)
    veil = veil.filter(ImageFilter.GaussianBlur(42))
    overlay = Image.new("RGBA", (w, h), (*INK[:3], 0))
    overlay.putalpha(veil)
    return overlay


def draw_leaf(draw: ImageDraw.ImageDraw, x: int, y: int, s: float = 1.0) -> None:
    """Tiny three-leaflet sprig, matching the brand mark."""
    # stem
    draw.line((x, y + 10 * s, x, y - 2 * s), fill=TEAL, width=max(2, int(2 * s)))
    # left, top, right leaflets
    leaflets = [
        (x - 9 * s, y - 8 * s, x - 1 * s, y + 2 * s),
        (x - 4 * s, y - 12 * s, x + 4 * s, y - 2 * s),
        (x + 1 * s, y - 8 * s, x + 9 * s, y + 2 * s),
    ]
    for box in leaflets:
        draw.ellipse(box, fill=TEAL)


def text_size(font: ImageFont.FreeTypeFont, text: str, spacing: int = 0) -> tuple[int, int]:
    dummy = Image.new("L", (1, 1))
    d = ImageDraw.Draw(dummy)
    if spacing:
        # measure with tracking by summing glyph boxes
        x = 0
        h = 0
        for i, ch in enumerate(text):
            bbox = d.textbbox((0, 0), ch, font=font)
            x += (bbox[2] - bbox[0]) + (spacing if i < len(text) - 1 else 0)
            h = max(h, bbox[3] - bbox[1])
        return x, h
    bbox = d.textbbox((0, 0), text, font=font)
    return bbox[2] - bbox[0], bbox[3] - bbox[1]


def draw_tracked(draw: ImageDraw.ImageDraw, xy: tuple[float, float], text: str, font, fill, spacing: int) -> None:
    x, y = xy
    w, _ = text_size(font, text, spacing)
    cx = x - w / 2
    for ch in text:
        draw.text((cx, y), ch, font=font, fill=fill, anchor="lm")
        bbox = draw.textbbox((0, 0), ch, font=font)
        cx += (bbox[2] - bbox[0]) + spacing


def main() -> None:
    photo = Image.open(SRC).convert("RGB")
    base = cover_crop(photo, W, H).convert("RGBA")
    # Slightly warmer, a touch darker — editorial dusk grade.
    base = ImageEnhance.Color(base).enhance(1.08)
    base = ImageEnhance.Contrast(base).enhance(1.06)
    base = ImageEnhance.Brightness(base).enhance(0.92)

    card = Image.alpha_composite(base, radial_veil((W, H)))
    # Hairline editorial frame
    frame = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    fd = ImageDraw.Draw(frame)
    inset = 28
    fd.rectangle((inset, inset, W - inset, H - inset), outline=(*CREAM[:3], 70), width=1)
    fd.rectangle((inset + 5, inset + 5, W - inset - 5, H - inset - 5), outline=(*CREAM[:3], 40), width=1)
    card = Image.alpha_composite(card, frame)

    title_font = load_font(FONT_ROMAN, 148, weight=600)
    resort_font = load_font(FONT_ROMAN, 24, weight=500)
    sub_font = ImageFont.truetype(str(FONT_ITALIC), 24)
    try:
        sub_font.set_variation_by_axes([500])
    except OSError:
        pass

    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)

    title = "Fun Valley"
    resort = "RESORT"
    sub = "Sector 135, Noida"

    tw, th = text_size(title_font, title, spacing=2)
    # Lockup stacked and centered; keep the whole block in the middle half of the frame.
    cx = W / 2
    title_y = 262
    leaf_y = title_y + 88
    resort_y = leaf_y + 30
    rule_y = resort_y + 30
    sub_y = rule_y + 30

    # Soft dark halo behind type (stacked blurred copies)
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    halo = (8, 16, 12, 180)
    draw_tracked(sd, (cx, title_y), title, title_font, halo, spacing=2)
    draw_tracked(sd, (cx, resort_y), resort, resort_font, halo, spacing=12)
    sd.text((cx, sub_y), sub, font=sub_font, fill=halo, anchor="mm")
    shadow = shadow.filter(ImageFilter.GaussianBlur(10))
    card = Image.alpha_composite(card, shadow)

    draw_tracked(draw, (cx, title_y), title, title_font, CREAM, spacing=2)
    draw_leaf(draw, int(cx), int(leaf_y) - 6, s=1.15)
    draw_tracked(draw, (cx, resort_y), resort, resort_font, SAND, spacing=12)

    rule_w = 110
    draw.line((cx - rule_w, rule_y, cx + rule_w, rule_y), fill=(*TEAL[:3], 210), width=1)
    draw.text((cx, sub_y), sub, font=sub_font, fill=IVORY, anchor="mm")

    card = Image.alpha_composite(card, layer)

    # Sanity: lockup vertical span stays inside the middle half (157–472).
    block_top = title_y - th / 2
    block_bot = sub_y + 16
    assert 157 <= block_top, f"lockup too high: {block_top}"
    assert block_bot <= 472, f"lockup too low: {block_bot}"
    assert 600 <= tw <= 800, f"title width {tw} should be ~half to two-thirds of 1200"

    rgb = card.convert("RGB")
    rgb.save(OUT, "JPEG", quality=90, optimize=True, subsampling=0)
    print(f"wrote {OUT} {rgb.size} {OUT.stat().st_size // 1024} KB  title_w={tw} block={block_top:.0f}-{block_bot:.0f}")


if __name__ == "__main__":
    main()
