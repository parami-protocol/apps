// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import PhalaPoc3 from '@phala/typedefs/dist/phala-poc3';
import PhalaPoc4 from '@phala/typedefs/dist/phala-poc4';

import Parami from './parami';

// alphabetical, based on the actual displayed name
export default {
  Development: Parami,
  'Parami Testnet': Parami,
  'Phala PoC-3': PhalaPoc3,
  'Phala PoC-4': PhalaPoc4
};
