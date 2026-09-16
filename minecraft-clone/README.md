# VoxelCraft HTML Clone

A browser voxel sandbox foundation implementing the first three development phases in one self-contained HTML entry point.

## Run
Serve the folder over HTTP, for example:
python -m http.server 8080

Then open http://localhost:8080/

Three.js is loaded from jsDelivr. IndexedDB is used for automatic world persistence. Worlds can also be exported/imported as JSON backups.

## Phase plan
### Phase 1: Core voxel engine
- WebGL voxel renderer
- First-person camera and pointer lock
- Deterministic seeded terrain
- Chunk-oriented world data model
- Block registry
- Breaking and placing blocks
- Collision and jumping
- IndexedDB autosave
- Save export/import

### Phase 2: Survival/world systems
- Replace prototype terrain with full chunk streaming
- Palette-compressed chunk serialization
- Dirty-chunk incremental saves
- Biomes, caves, ores, trees, fluids
- Day/night lighting
- Inventory UI and containers
- Crafting and recipes
- Proper block states
- OPFS storage layer and backup rotation

### Phase 3: Minecraft-like simulation
- Entity registry and persistent entities
- Mob AI
- Damage/combat/drop systems
- Block entities
- Scheduled/random ticks
- Redstone simulation
- Structures
- Dimensions
- Commands
- Multiplayer server authority

## Persistence design
IndexedDB is the automatic save database. The exported JSON is the user-controlled backup. The next persistence iteration should move chunk payloads to compact binary records and use OPFS for large-world storage while retaining IndexedDB for metadata/indexes.
