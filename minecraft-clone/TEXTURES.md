# VoxelCraft Texture System

Current scope: the prototype's registered block and item textures only.

- `assets/block_atlas.png`: 16x16 pixel tiles, 3 faces per block.
- `assets/item_atlas.png`: 16x16 item icons.
- `assets/texture_manifest.json`: atlas layout metadata.
- `index.html`: loads the atlases with Three.js nearest-neighbor filtering.

The assets are original generated pixel art for this project, not copied Minecraft assets.

## Planned full atlas (not yet implemented)

A larger categorized spritesheet layout (block/item/entity/GUI/environment/
particle/font categories) is documented for future work in
`assets/texture-atlas-spec.js` (`VOXELCRAFT_TEXTURE_SPEC`). It is reference
only — no game code loads or imports it yet. Source layout image:
`docs/texture-spritesheet-reference.png`.
