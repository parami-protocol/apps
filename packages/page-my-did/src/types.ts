import { ITuple } from '@polkadot/types/types';
import { Hash } from '@polkadot/types/interfaces';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { u64, u8 } from '@polkadot/types/primitive';
import { Balance, Moment } from '@polkadot/types/interfaces';

/** @name VotingTally */
export interface MyDid extends Option<ITuple<[Hash, Vec<u8>]>> {
}

export interface LockedRecords<T, M> extends Struct {
  locked_time: M,
	locked_period: M,
	locked_funds: T,
	rewards_ratio: u64,
	max_quota: u64,
}

export interface UnlockedRecords<T, M> extends Struct {
  unlocked_time: M,
	unlocked_funds: T,
}

export interface ExternalAddress extends Struct {
  btc: Vec<u8>,
	eth: Vec<u8>,
	eos: Vec<u8>,
}

export interface MetadataRecord extends Struct {
  address: string,
	superior: string,
	creator: string,
	did: Vec<u8>,
	locked_records: Option<LockedRecords<Balance, Moment>>,
	unlocked_records: Option<UnlockedRecords<u64, u64>>,
	donate: Option<u64>,
	social_account: Option<Hash>,
	subordinate_count: u64,
	group_name: Option<Vec<u8>>,
	external_address: ExternalAddress
}