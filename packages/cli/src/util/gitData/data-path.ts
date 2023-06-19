import path from "node:path";
import fs from "node:fs";
import {fileURLToPath} from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const dataPath = path.resolve(__dirname, "../../../.git-data.json");

export type GitData = {
  branch: string;
  commit: string;
};

/** Writes a persistent git data file. */
export function writeDataFile(gitData: GitData): void {
  fs.writeFileSync(dataPath, JSON.stringify(gitData, null, 2));
}

/** Reads the persistent git data file. */
export function readGitDataFile(): GitData {
  return JSON.parse(fs.readFileSync(dataPath, "utf8")) as GitData;
}