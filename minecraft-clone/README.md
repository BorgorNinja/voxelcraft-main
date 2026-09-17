# VoxelCraft

Modular Three.js voxel sandbox.

## Features

- 16x16x48 voxel chunks
- 6-chunk normal render distance
- 3-chunk underwater render distance with automatic switching
- seeded terrain, biomes, ores, trees, and deterministic 3D caves
- water-specific face culling and transparent rendering
- underwater fog/tint
- block breaking and placement
- IndexedDB autosave plus JSON import/export
- original block/item texture atlases preserved in `assets/`

Open `index.html` through a local web server so browser module/CORS rules allow the Three.js CDN import.
