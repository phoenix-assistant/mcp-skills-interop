# Mcp Skills Interop

![npm](https://img.shields.io/npm/v/@phoenix-assistant/mcp-skills-interop)
![CI](https://github.com/phoenix-assistant/mcp-skills-interop/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

> Universal adapter between MCP (Model Context Protocol) and Skills protocols

## Installation

```bash
npm install @phoenix-assistant/mcp-skills-interop
```

## Quick Start

```typescript
import { create } from '@phoenix-assistant/mcp-skills-interop';

const instance = create({ verbose: true });
const result = await instance.process(input);
console.log(result.success);
```

## API

### `create(config?)`

Create a new instance.

### `instance.process(input)`

Process input and return results.

## Development

```bash
npm install
npm test
npm run build
```

## License

MIT © [Phoenix Assistant](https://github.com/phoenix-assistant)
