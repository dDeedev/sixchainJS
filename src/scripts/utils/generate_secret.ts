import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Generate a random key (32 bytes for aes-256)
const iv = crypto.randomBytes(16);  // Initialization vector (16 bytes)

// Convert the key to a hex string for storage
const keyHex = key.toString('hex');
const ivHex = iv.toString('hex');

console.log("KEY HEX",keyHex)
console.log("IV HEX",ivHex)
