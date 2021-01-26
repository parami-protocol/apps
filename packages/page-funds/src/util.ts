// Copyright 2017-2020 @polkadot/app-claims authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import bs58 from 'bs58';
import { blake2AsHex } from '@polkadot/util-crypto';

export function didToHex(did: string): string {
	const bytes = bs58.decode(did.substring(8))
	return blake2AsHex(bytes, 256)
}