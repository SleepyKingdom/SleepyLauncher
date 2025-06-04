import { createWriteStream, promises as fs } from 'fs';
import { pipeline } from 'stream/promises';
import { createHash } from 'crypto';
import axios from 'axios';
import extract from 'extract-zip';
import { join } from 'path';
import { app } from 'electron';

const MODPACK_URL = 'https://download.sleepykingdom.net/gamelibrary/kingdomsrise/KingdomsRise.zip';

export async function installModpack() {
  const baseDir = join(app.getPath('appData'), '.sleepy', 'sleepylauncher', 'kingdomsrise');
  const zipPath = join(baseDir, 'modpack.zip');
  await fs.mkdir(baseDir, { recursive: true });

  const res = await axios.get(MODPACK_URL, { responseType: 'stream' });
  const hash = createHash('sha256');
  await pipeline(res.data, createWriteStream(zipPath));
  const stream = await fs.readFile(zipPath);
  hash.update(stream);
  const onlineHash = hash.digest('hex');

  let lastHash = '';
  try {
    lastHash = await fs.readFile(join(baseDir, 'last_hash.txt'), 'utf8');
  } catch {}

  if (lastHash !== onlineHash) {
    await fs.rm(join(baseDir, 'data'), { recursive: true, force: true });
    await fs.rm(join(baseDir, 'game'), { recursive: true, force: true });
    await extract(zipPath, { dir: baseDir });
    await fs.writeFile(join(baseDir, 'last_hash.txt'), onlineHash);
  }

  await fs.unlink(zipPath);
}
