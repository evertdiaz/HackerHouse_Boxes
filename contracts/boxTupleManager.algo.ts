import { Contract } from '@algorandfoundation/tealscript';

type Contact = { name: string; company: string };

// eslint-disable-next-line no-unused-vars
class BoxTupleManager extends Contract {
  contacts = BoxMap<Address, Contact>();

  createTupleBox(MBRPayment: PayTxn, name: string, company: string): void {
    const contact: Contact = { name: name, company: company };
    this.contacts(this.txn.sender).value = contact;
  }

  updateTupleField(field: string, value: string): void {
    if (field === 'name') {
      this.contacts(this.txn.sender).value.name = value;
    } else if (field === 'company') {
      this.contacts(this.txn.sender).value.company = value;
    } else throw Error('Invalid field');
  }

  getTupleBoxData(): Contact {
    return this.contacts(this.txn.sender).value;
  }
}
