// Copyright 2017-2020 @polkadot/app-claims authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import bs58 from 'bs58';
import { blake2AsHex } from '@polkadot/util-crypto';
import store from 'store';
import { KeyringOption$Type } from '@polkadot/ui-keyring/options/types';
import { u8aToHex, isHex } from '@polkadot/util'

const DEFAULT_TYPE = 'account';
const STORAGE_KEY = 'options:InputAddress';

export function didToHex(did: string): string {
	const bytes = bs58.decode(did.substring(8))
	return blake2AsHex(bytes, 256)
}

export function hexToDid(hex: string): string {
	let did
	if (isHex(hex)) {
		const bytes = Buffer.from(hex.slice(2), 'hex')
		const address = bs58.encode(bytes)
		did = `did:ad3:${address}`
	} else {
		const hexStr = u8aToHex(hex)
		const bytes = Buffer.from(hexStr.slice(2), 'hex')
		const address = bs58.encode(bytes)
		did = `did:ad3:${address}`
	}
	return did
}

export function readOptions (): Record<string, any> {
  return store.get(STORAGE_KEY) || { defaults: {} };
}

export function getLastValue (type: KeyringOption$Type = DEFAULT_TYPE): any {
  const options = readOptions();

  return options.defaults[type];
}