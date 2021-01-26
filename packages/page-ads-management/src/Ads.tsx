// Copyright 2017-2020 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// only here, needs to be available for the rest of the codebase
/* eslint-disable react/jsx-max-props-per-line */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import store from 'store';
import { useApi, useCall, didToHex } from '@polkadot/react-hooks';
import { Button, TxButton } from '@polkadot/react-components';
import { hexToString } from '@polkadot/util'
import { Owned, AdsMetadata } from './types';

interface Props {
  className?: string;
  accountId: string;
}

function AdsMan ({ className, accountId }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const [reload, setReload] = useState<boolean>(false);
  const [records, setRecords] = useState<AdsMetadata[] | []>([]);
  const did = didToHex(store.get('did'));
  const result = useCall<Owned>(api.query.ads.ownedAds, [did]);
  const _onSuccess = (): void => {
    setReload(!reload)
  };

  useEffect(
    (): void => {
      if (result && !result.isEmpty) {
        (async (): Promise<void> => {
          const record: number[] = result.toJSON() as number[];
          const records: any[] = []
          for (let num of record) {
            const data = await api.query.ads.adsRecords(num)
            if (data) {
              const tr: Object = data.toHuman();
              
              records.push({
                ...tr,
                id: num,
              })
            }
          }
          setRecords(records)
        })();
      }
    },
    [result, reload]
  );

  return (
    <div className={className}>
      <h3>我的广告</h3>
      <ul className='ads-list'>
        <li className='header'>
          <span>广告ID</span>
          <span>广告名称</span>
          <span>广告类型</span>
          <span>总投放费用</span>
          <span>已消耗费用</span>
          <span>单次点击费用</span>
          <span>操作</span>
        </li>
        {records.length > 0 && 
          (records as  AdsMetadata[]).map((item, index): React.ReactNode => (
            <li key={index} id={item.id}>
              <span>{ item.id }</span>
              <span>{ hexToString(item.advertiser) }</span>
              <span>{ hexToString(item.topic) }</span>
              <span>{ item.total_amount }</span>
              <span>{ item.spend_amount }</span>
              <span>{ item.single_click_fee }</span>
              <span>
                <Button.Group>
                  <TxButton
                    accountId={accountId}
                    isDisabled={!!item.active}
                    label='开始'
                    icon='play'
                    params={[item.id]}
                    tx='ads.active'
                    withSpinner
                    onSuccess={_onSuccess}
                  />
                  <TxButton
                    className='cancel'
                    isDisabled={!item.active}
                    accountId={accountId}
                    label='暂停'
                    icon='pause'
                    params={[item.id]}
                    tx='ads.pause'
                    withSpinner
                    onSuccess={_onSuccess}
                  />
                </Button.Group>
              </span>
            </li>
          ))}
      </ul>
      {records.length === 0 && <p className='empty'>您还没有发布广告</p>}
    </div>
  );
}

export default React.memo(styled(AdsMan)`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  ul {
    list-style-type: none;
    margin: 10px 0;
    padding: 0;
    overflow: hidden;
  }
  li {
    list-style-type: none;
  }
  .ads-list {
    text-align: center;
    li {
      height: 60px;
      line-height: 60px;
      border-top: 1px solid #eee;
      &.header {
        border: none;
        background: #eee;
      }
    }
    span {
      float: left;
      width:  12%;
      &:nth-of-type(1) {
        width: 5%;
      }
      &:nth-of-type(2) {
        width: 20%;
      }
      &:nth-of-type(7) {
        width: 27%;
      }
    }
    .ui--Button-Group {
      text-align: center;
    }
    .cancel {
      background: #666!important;
    }
  }
  p.empty {
    text-align: center;
    padding: 20px;
  }
`);
