// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// only here, needs to be available for the rest of the codebase
/* eslint-disable react/jsx-max-props-per-line */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import store from 'store';
import { useApi, useCall } from '@polkadot/react-hooks';
import { Button, InputBalance, Input, TxButton } from '@polkadot/react-components';

interface Props {
  className?: string;
  accountId: string;
}

function Partner ({ className, accountId }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const userDoc = store.get('userDocs');
  
  return (
    <div className={className}>
      <div className="desc">
        <h3>我的抵押</h3>
        {userDoc?.locked_records ? userDoc.locked_records.locked_funds : '0.000 PRM'}
        <h3>成为共识合伙人，您将拥有以下特权</h3>
        <p className="desc">
          ·定制社群名称和logo，并在区块链上登记。<br/>
          ·绑定社群成员关系，为社群成员带去福利，同时获得成员福利分成。<br/>
          ·社群成员有人成为共识合伙人后，您将获得推荐奖励。<br/>
          ·如果您是区块链项目方，可以使用DID档案绑定自身主链地址，从而获取到用户的数字身份档案。
        </p>
        <p className="tips">
          注：成为共识合伙人需要至少抵押 10 PRM<br/>
        </p>
        <Button.Group>
            <TxButton
              accountId={accountId}
              icon='send'
              label='成为共识合伙人'
              params={[String(10*10**15), 30 * 3600 * 24 * 1000]}
              tx='did.lock'
              withSpinner
            />
          </Button.Group>
      </div>
    </div>
  );
}

export default React.memo(styled(Partner)`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  margin: 15px 0;
  .desc {
    line-height: 30px;
  }
`);
