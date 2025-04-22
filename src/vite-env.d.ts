/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NOTION_DB_ID: string;
  readonly VITE_NOTION_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
