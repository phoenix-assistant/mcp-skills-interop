import { describe, it } from 'node:test';
import assert from 'node:assert';
import { create } from '../src/index.js';

describe('Mcp Skills Interop', () => {
  it('should create instance with default config', () => {
    const instance = create();
    assert.ok(instance);
    const config = instance.getConfig();
    assert.deepStrictEqual(config, {});
  });

  it('should process input successfully', async () => {
    const instance = create({ verbose: false });
    const result = await instance.process({ test: true });
    assert.strictEqual(result.success, true);
    assert.deepStrictEqual(result.data, { test: true });
  });

  it('should include metadata in results', async () => {
    const instance = create();
    const result = await instance.process('hello');
    assert.ok(result.metadata?.timestamp);
  });
});
