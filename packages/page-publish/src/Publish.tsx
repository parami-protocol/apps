// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import React, { useState } from 'react';
import { Button, Dropdown, Input, InputBalance, TxButton } from '@polkadot/react-components';
import styled from 'styled-components';

interface Props {
  className?: string;
  accountId?: string | null;
}

enum DistributeType {
  ADVERTISER,
  AGENT
}

function Publish ({ className, accountId }: Props): React.ReactElement<Props> {
  const minDeposit = new BN(500).mul(new BN(10).pow(new BN(15)))
  const defaultClick = new BN(1).mul(new BN(10).pow(new BN(15)))
  const [name, setName] = useState<string | null>(null);
  const [topic, setTopic] = useState<string | null>(null);
  const [amount, setAmount] = useState<BN | undefined | null>(minDeposit);
  const [singleClick, setSingleClick] = useState<BN | undefined | null>(defaultClick);
  const [displayPage, setDisplayPage] = useState<string | null>(null);
  const [landingPage, setLandingPage] = useState<string | null>(null);
  const [adsType, setAdsType] = useState<DistributeType>(DistributeType.AGENT);
  const DISTRIBUTE_ENUM = [
    { text: 'ADVERTISER', value: DistributeType.ADVERTISER },
    { text: 'AGENT', value: DistributeType.AGENT },
  ];

  return (
    <section className={className}>
      <div className='ui--row'>
        <div className='large'>
        <h2>发布广告</h2>
          <Input
            maxLength={50}
            min={2}
            onChange={setName}
            label='Ads Name'
            placeholder='请输入广告名称'
          />
          <Input
            maxLength={50}
            min={2}
            onChange={setTopic}
            label='Ads Topic'
            placeholder='请输入广告所属行业'
          />
          <InputBalance
            label='Advertising expenses'
            onChange={setAmount}
            placeholder='请输入广告预期投放费用'
            value={amount}
          />
          <InputBalance
            label='Single Click Fee'
            onChange={setSingleClick}
            placeholder='请输入单次点击费用'
            value={singleClick}
          />
          <Input
            maxLength={350}
            min={2}
            onChange={setDisplayPage}
            label='Ads Image'
            placeholder='请输入广告展示图'
          />
          <Input
            min={1}
            onChange={setLandingPage}
            label='Ads Link'
            placeholder='请输入广告跳转链接'
          />
          <Dropdown
            label='广告类型'
            onChange={setAdsType}
            options={DISTRIBUTE_ENUM}
            value={adsType}
          />
          <Button.Group>
            <TxButton
              accountId={accountId}
              isDisabled={!name || !topic || !amount || !singleClick || !displayPage}
              icon='send'
              label='确认'
              params={[name, topic, amount, singleClick, displayPage, landingPage, adsType]}
              tx='ads.publish'
              withSpinner
            />
          </Button.Group>
        </div>
      </div>
    </section>
  );
}

export default React.memo(styled(Publish)`
  padding: 50px;
    background: #fff;
    width: 60%;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .ui--row {
      justify-content: center;
      h2 {
        padding-left: 2rem;
      }
      div.large {
        flex: 0 100%;
      }
    }
`);
