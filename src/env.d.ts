/// <reference types="astro/client" />
/// <reference types="node" />

// Declare missing type definitions for JS-only packages
declare module 'blobshape';
declare module 'unique-names-generator';

// Augment env for our public flag
interface ImportMetaEnv {
    readonly PUBLIC_DISABLE_UPLOADS?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}


