import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class Boxmanager extends Contract {
  myBox = BoxMap<Address, string>();

  createStringBox(MBRPayment: PayTxn, data: string): void {
    assert(!this.myBox(this.txn.sender).exists);

    const preBoxMBR = this.app.address.minBalance;
    this.myBox(this.txn.sender).value = data;

    verifyTxn(MBRPayment, {
      receiver: this.app.address,
      amount: this.app.address.minBalance - preBoxMBR,
    });
  }

  getStringBoxData(): string {
    return this.myBox(this.txn.sender).value;
  }

  updateStringBox(MBRPayment: PayTxn, data: string): void {
    assert(this.myBox(this.txn.sender).exists);
    const preBoxMBR = this.app.address.minBalance;
    this.myBox(this.txn.sender).value = data;
    const balanceDiff =
      this.app.address.minBalance - preBoxMBR < 0
        ? preBoxMBR - this.app.address.minBalance
        : this.app.address.minBalance - preBoxMBR;

    verifyTxn(MBRPayment, {
      receiver: this.app.address,
      amount: balanceDiff,
    });
  }
}
