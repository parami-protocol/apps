import { Balance, Moment } from '@polkadot/types/interfaces';
import { Struct, Option, Vec } from '@polkadot/types/codec';
import { u64 } from '@polkadot/types/primitive';

export interface Owned extends Vec<u64> {
}

export interface AdsMetadata extends Struct {
	id?: string;
  advertiser: string;
	topic: string;
	total_amount: Balance;
	spend_amount: Balance;
	single_click_fee: Balance;
	display_page: string;
	landing_page: string;
	create_time: Moment;
	active: Option<u64>
}
