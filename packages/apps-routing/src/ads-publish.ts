// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import Publish from '@polkadot/app-publish';

export default function create (t: (key: string, text: string, options: { ns: string }) => string): Route {
  return {
    Component: Publish,
    display: {
      isHidden: false,
      needsAccounts: true,
      needsApi: [
        'tx.ads.publish'
      ]
    },
    icon: 'plus',
    group: 'ads',
    name: 'publish',
    text: t('nav.publish', 'Publish', { ns: 'apps-routing' })
  };
}
