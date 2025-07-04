import { Structure } from '../../marshmallow/index.js';
import * as BN from 'bn.js';
import * as _solana_web3_js from '@solana/web3.js';
import '../../marshmallow/buffer-layout.js';

declare const LaunchpadConfig: Structure<number | _solana_web3_js.PublicKey | BN | BN[], "", {
    index: number;
    mintB: _solana_web3_js.PublicKey;
    tradeFeeRate: BN;
    epoch: BN;
    curveType: number;
    migrateFee: BN;
    maxShareFeeRate: BN;
    minSupplyA: BN;
    maxLockRate: BN;
    minSellRateA: BN;
    minMigrateRateA: BN;
    minFundRaisingB: BN;
    protocolFeeOwner: _solana_web3_js.PublicKey;
    migrateFeeOwner: _solana_web3_js.PublicKey;
    migrateToAmmWallet: _solana_web3_js.PublicKey;
    migrateToCpmmWallet: _solana_web3_js.PublicKey;
}>;
declare const LaunchpadVestingSchedule: Structure<BN, "", {
    startTime: BN;
    totalLockedAmount: BN;
    cliffPeriod: BN;
    unlockPeriod: BN;
    totalAllocatedShare: BN;
}>;
declare const LaunchpadPool: Structure<number | _solana_web3_js.PublicKey | BN | BN[] | {
    startTime: BN;
    totalLockedAmount: BN;
    cliffPeriod: BN;
    unlockPeriod: BN;
    totalAllocatedShare: BN;
}, "", {
    creator: _solana_web3_js.PublicKey;
    bump: number;
    status: number;
    mintA: _solana_web3_js.PublicKey;
    mintB: _solana_web3_js.PublicKey;
    vaultA: _solana_web3_js.PublicKey;
    vaultB: _solana_web3_js.PublicKey;
    mintDecimalsA: number;
    mintDecimalsB: number;
    supply: BN;
    configId: _solana_web3_js.PublicKey;
    epoch: BN;
    migrateFee: BN;
    migrateType: number;
    totalSellA: BN;
    virtualA: BN;
    virtualB: BN;
    realA: BN;
    realB: BN;
    totalFundRaisingB: BN;
    protocolFee: BN;
    platformFee: BN;
    vestingSchedule: {
        startTime: BN;
        totalLockedAmount: BN;
        cliffPeriod: BN;
        unlockPeriod: BN;
        totalAllocatedShare: BN;
    };
    platformId: _solana_web3_js.PublicKey;
}>;
declare const LaunchpadVesting: Structure<_solana_web3_js.PublicKey | BN | BN[], "", {
    poolId: _solana_web3_js.PublicKey;
    claimedAmount: BN;
    epoch: BN;
    beneficiary: _solana_web3_js.PublicKey;
    tokenShareAmount: BN;
}>;
declare const PlatformConfig: Structure<_solana_web3_js.PublicKey | number[] | BN, "", {
    name: number[];
    feeRate: BN;
    epoch: BN;
    platformClaimFeeWallet: _solana_web3_js.PublicKey;
    platformLockNftWallet: _solana_web3_js.PublicKey;
    platformScale: BN;
    creatorScale: BN;
    burnScale: BN;
    web: number[];
    img: number[];
    cpConfigId: _solana_web3_js.PublicKey;
}>;

export { LaunchpadConfig, LaunchpadPool, LaunchpadVesting, LaunchpadVestingSchedule, PlatformConfig };
