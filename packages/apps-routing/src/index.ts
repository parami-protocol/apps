// Copyright 2017-2021 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { Routes } from './types';

import accounts from './accounts';
import addresses from './addresses';
import bounties from './bounties';
import calendar from './calendar';
import claims from './claims';
import contracts from './contracts';
import council from './council';
import democracy from './democracy';
import explorer from './explorer';
import extrinsics from './extrinsics';
import js from './js';
import parachains from './parachains';
import poll from './poll';
import rpc from './rpc';
import settings from './settings';
import signing from './signing';
import society from './society';
import staking from './staking';
import storage from './storage';
import sudo from './sudo';
import techcomm from './techcomm';
import transfer from './transfer';
import treasury from './treasury';
import createDid from './create-did';
import didTransfer from './did-transfer';
import funds from './did-funds';
import myDid from './my-did';
import adsManagement from './ads-management';
import adsPublish from './ads-publish';
import didTeam from './did-team';

export default function create (t: TFunction): Routes {
  return [
    accounts(t),
    addresses(t),
    explorer(t),
    claims(t),
    poll(t),
    transfer(t),
    staking(t),
    democracy(t),
    council(t),
    treasury(t),
    bounties(t),
    techcomm(t),
    parachains(t),
    society(t),
    calendar(t),
    contracts(t),
    storage(t),
    extrinsics(t),
    rpc(t),
    signing(t),
    sudo(t),
    js(t),
    createDid(t),
    myDid(t),
    didTransfer(t),
    funds(t),
    didTeam(t),
    adsManagement(t),
    adsPublish(t),
    settings(t),
  ];
}
