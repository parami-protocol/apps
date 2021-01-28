// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import AdsManagement from '@polkadot/app-ads-management';

export default function create (t: (key: string, text: string, options: { ns: string }) => string): Route {
  return {
    Component: AdsManagement,
    display: {
      isHidden: false,
      needsAccounts: true,
      needsApi: [
        'query.ads.adsRecords'
      ]
    },
    icon: 'audio-description',
    name: 'ads-management',
    group: 'ads',
    text: t('nav.ads-management', 'Ads Management', { ns: 'apps-routing' })
  };
}
