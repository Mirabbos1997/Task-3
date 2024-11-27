import crypto from 'crypto';

export default class FairRandom {
    static generateKey() {
        return crypto.randomBytes(32); // Generate a 256-bit key
    }

    static generateRandomValue(range) {
        return crypto.randomInt(0, range);
    }

    static calculateHmac(key, message) {
        return crypto.createHmac('sha3-256', key).update(message).digest('hex');
    }
}
