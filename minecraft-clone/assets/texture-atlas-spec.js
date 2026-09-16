/**
 * VoxelCraft — Full Texture Atlas Specification (REFERENCE ONLY)
 * ---------------------------------------------------------------------------
 * NOT WIRED INTO THE RENDERER. Nothing in index.html imports or reads this
 * file. The live game currently uses only:
 *   - assets/block_atlas.png  (13 blocks, 16 cols x 4 rows @ 16x16)
 *   - assets/item_atlas.png   (13 items, 16 cols x 1 row @ 16x16)
 * mapped via manifestBlocks in index.html and assets/texture_manifest.json.
 *
 * This file documents the *planned* full spritesheet for the eventual
 * complete asset set, based on the labeled reference sheet at:
 *   docs/texture-spritesheet-reference.png
 *
 * Facts in `meta` and each category's `count` are read directly off that
 * sheet's labels. Per-tile pixel offsets within each category are NOT yet
 * determined — the reference sheet is a categorized overview, not a sliced
 * atlas, so exact tile indices are TODO once a production atlas PNG matching
 * this layout is actually generated.
 */

const VOXELCRAFT_TEXTURE_SPEC = {
  meta: {
    tileSize: 16,                 // px, per reference sheet
    plannedAtlasSize: 1024,       // px, per reference sheet ("1024 x 1024, 16,384 tiles")
    format: "PNG (RGBA)",
    referenceImage: "docs/texture-spritesheet-reference.png",
    status: "reference only — no game code depends on this yet"
  },

  categories: {
    blockTextures: {
      count: 256,
      note: "Full block-face set. Game currently implements 13 blocks — see texture_manifest.json."
    },
    itemIcons: {
      count: 128,
      note: "Inventory/hotbar icons (tools, weapons, food, dyes, gems). Game currently implements 13 items."
    },
    guiTextures: {
      count: null,
      note: "Inventory/crafting frames, buttons, health/hunger bars. Not counted on the sheet; not implemented — current UI is plain HTML/CSS."
    },
    entityTextures: {
      count: 128,
      note: "Player skins, mobs, mob animation frames. Not implemented — no entity renderer exists yet."
    },
    environmentBiomeVariations: {
      count: 128,
      note: "Biome backdrop art: plains, forest, taiga, snow, desert, mountains, swamp, jungle, badlands, nether. Not implemented."
    },
    terrainFeatures: {
      count: 64,
      note: "Foliage, flowers, fluids, ore-in-terrain variants. Not implemented beyond the base 13-block set."
    },
    blockModels: {
      count: 64,
      note: "Non-cube block shapes: slab, stairs, fence, fence gate, door, trapdoor, button, pressure plate, lever, dispenser, dropper, piston, sticky piston, observer. Game currently renders only full cubes."
    },
    itemModels3D: {
      count: 64,
      note: "Held/dropped 3D item models: tools, weapons, door, bed, anvil, enchanting table, brewing stand, cauldron. Not implemented."
    },
    blockStateVariants: {
      count: 128,
      note: "Orientation/state variants: log axis, slab/stairs halves, fence connections, door open/closed, chest/furnace variants. Not implemented."
    },
    colorPalette: {
      count: 256,
      note: "Shared indexed color palette for texture-generation tooling. Not consumed by any game code."
    },
    miscellaneous: {
      count: 64,
      note: "Misc icons: compass, clock, map, rails, banners, shield, saddle. Not implemented."
    },
    backgroundUIElements: {
      count: 32,
      note: "Menu/background panel art. Not implemented."
    },
    effectsParticles: {
      count: 32,
      note: "Particle sprites: fire, hearts, snow, sparkles. No particle system exists yet."
    },
    fontNumbers: {
      count: 16,
      note: "Bitmap font glyphs (0-9, A-Z, punctuation). Game currently uses system fonts via HTML/CSS."
    }
  }
};

// Kept as a standalone, non-executing reference module. Not <script>-included
// by index.html. If/when a production atlas matching this layout exists,
// wire this up as the source of truth for per-category tile lookups instead
// of hardcoding indices the way manifestBlocks does today.
if (typeof module !== "undefined" && module.exports) {
  module.exports = VOXELCRAFT_TEXTURE_SPEC;
}
