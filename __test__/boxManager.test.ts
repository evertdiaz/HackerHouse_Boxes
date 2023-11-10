import { describe, test, expect, beforeAll, beforeEach } from '@jest/globals';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import * as algokit from '@algorandfoundation/algokit-utils';
import algosdk from 'algosdk';
import { BoxmanagerClient } from '../contracts/clients/BoxmanagerClient';

const fixture = algorandFixture();

let appClient: BoxmanagerClient;
let algod: algosdk.Algodv2;
let testAccount: algosdk.Account;
let data = 'Hola HackerHouse';
describe('Boxmanager', () => {
  beforeEach(fixture.beforeEach);

  beforeAll(async () => {
    await fixture.beforeEach();
    testAccount = fixture.context.testAccount;
    algod = fixture.context.algod;

    appClient = new BoxmanagerClient(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod
    );

    await appClient.create.createApplication({});
  });

  test('createBox', async () => {
    await appClient.appClient.fundAppAccount(algokit.microAlgos(100_000));

    const { appAddress } = await appClient.appClient.getAppReference();

    const MBRPayment = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: testAccount.addr,
      to: appAddress,
      amount: 22_500,
      suggestedParams: await algokit.getTransactionParams(undefined, algod),
    });
    try {
      await appClient.boxCreate({ MBRPayment, data }, { boxes: [algosdk.decodeAddress(testAccount.addr).publicKey] });
    } catch (e) {
      console.warn(e);
      throw e;
    }
  });
  test('getBoxData', async () => {
    const dataFromMethod = await appClient.getBoxData(
      {},
      { boxes: [algosdk.decodeAddress(testAccount.addr).publicKey] }
    );
    expect(dataFromMethod.return?.valueOf()).toBe(data);
  });

  test('updateBox', async () => {
    data = 'Hola HackerHouse 2';

    const { appAddress } = await appClient.appClient.getAppReference();

    const MBRPayment = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: testAccount.addr,
      to: appAddress,
      amount: 800,
      suggestedParams: await algokit.getTransactionParams(undefined, algod),
    });
    try {
      await appClient.boxUpdate({ MBRPayment, data }, { boxes: [algosdk.decodeAddress(testAccount.addr).publicKey] });
      const dataFromMethod = await appClient.getBoxData(
        {},
        { boxes: [algosdk.decodeAddress(testAccount.addr).publicKey] }
      );
      expect(dataFromMethod.return?.valueOf()).toBe(data);
    } catch (e) {
      console.warn(e);
      throw e;
    }
  });
});
